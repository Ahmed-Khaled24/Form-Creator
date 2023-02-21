import { Fragment, useState } from 'react';
import { FormData, RenderMode } from '../../types/FormData.type';
import { SegmentType, FormSegmentData } from '../../types/FormSegmentData.type';
import fileDownload from 'js-file-download';
import { ChoiceData, SelectData } from '../../types/SelectableElementData';
import { EmptyFromPlaceHolder, FormBody } from './Form.styles';
import FormTitle from './title/FormTitle.component';
import FromSegment from './formSegment/FormSegment.component'
import FormButtons from './formButtons/formButtons.component';
import SavePopup from './savePopup/savePopup.component';

type Props = {
	mode: RenderMode,
}

function generateId(): number {
	return Math.trunc(Math.random() * 1e6);
}

const formInitialValues: FormData = {
	segments: [],
	title: 'Untitled form',
};

const Form = ({mode}: Props) => {
	const [formData, setFormData] = useState<FormData>(formInitialValues);
	const [showPopup, setShowPopup] = useState<boolean>(false);

	// Form related
	function changeFormTitle(title: string) {
		setFormData({
			...formData,
			title,
		});
	}
	function addNewSegment() {
		const defaultSegment: FormSegmentData = {
			type: SegmentType.shortAnswer,
			id: generateId(),
			question: '',
			required: false,
			answer: '',
		};
		setFormData({
			...formData,
			segments: [...formData.segments, defaultSegment],
		});
	}
	function saveFromAsJSON() {
		const filename = formData.title;
		fileDownload(JSON.stringify(formData), `${filename}.json`);
	}
	function saveFromAsHTML() {
		const filename = formData.title;
		fileDownload(document.documentElement.innerHTML, `${filename}.html`);
	}
	function loadJSONForm() {
		const fileInput = document.getElementById('fileInput');
		fileInput?.click();
	}
	function deleteSegment(segmentId: number){
		setFormData({
			...formData,
			segments: formData.segments.filter(segment => segment.id !== segmentId)
		})
	}
	function popupShow(show: boolean){	
		setShowPopup(show)
	}

	// Handle upload file
	const fileInput = document.getElementById('fileInput') as HTMLInputElement;
	fileInput.addEventListener('change', (e) => {
		const files = fileInput.files as FileList; 
		const uploadedFile = files[0];
		const reader = new FileReader()
		reader.onload = (evt: ProgressEvent<FileReader>) => {
			const text = evt.target?.result;
			const loadedFormData = JSON.parse(text as string) as FormData;
			setFormData(loadedFormData);
		};
		reader.readAsText(uploadedFile);
	});

	
	// Segment related
	function changeQuestionText(
		segmentId: number,
		question: string
	) {
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		updatedSegments[targetIndex].question = question;
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function changeSegmentType(
		segmentId: number,
		type: SegmentType
	) {
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		updatedSegments[targetIndex].type = type;
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function setRequired(segmentId: number){
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		updatedSegments[targetIndex].required = true;
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function unsetRequired(segmentId: number) {
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		updatedSegments[targetIndex].required = false;
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}

	// Segment body related
	function addNewSelectableElement(segmentId: number, type: string) {
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex((segment) => segment.id === segmentId);
		const defaultElement = {
			id: generateId(),
			data: '',
			selected: false,
		};

		if (type === 'choice') {
			updatedSegments[targetIndex].choices
				? updatedSegments[targetIndex].choices?.push(defaultElement)
				: (updatedSegments[targetIndex].choices = [defaultElement]);
		} else if (type === 'select') {
			updatedSegments[targetIndex].selects
				? updatedSegments[targetIndex].selects?.push(defaultElement)
				: (updatedSegments[targetIndex].selects = [defaultElement]);
		}

		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function deleteSelectableElement(segmentId: number, elementId: number, type: string){
		const updatedSegments = [...formData.segments];
		const targetSegmentIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);

		if(type === 'choice'){
			updatedSegments[targetSegmentIndex].choices = 
			updatedSegments[targetSegmentIndex].choices?.filter(
				(choice) => choice.id !== elementId
			);
		} else if( type === 'select') {
			updatedSegments[targetSegmentIndex].selects = 
			updatedSegments[targetSegmentIndex].selects?.filter(
				(select) => select.id !== elementId
			);
		}
		
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function updateSelectableElement(segmentId: number, elementId: number, data: string, type: string) {
		const updatedSegments = [...formData.segments];
		const targetSegmentIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);

		let targetElementIndex = 0;
		if (type === 'choice') {
			targetElementIndex = updatedSegments[targetSegmentIndex].choices?.findIndex(
				(choice) => choice.id === elementId
			) as number;
			let choices = updatedSegments[targetSegmentIndex].choices as ChoiceData[];
			choices[targetElementIndex].data = data;
		} else if (type === 'select') {
			targetElementIndex = updatedSegments[targetSegmentIndex].selects?.findIndex(
				(select) => select.id === elementId
			) as number;
			let selects = updatedSegments[targetSegmentIndex].selects as SelectData[];
			selects[targetElementIndex].data = data;
		}
		
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function changeSegmentAnswer(
		segmentId: number,
		answer: string
	) {
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		updatedSegments[targetIndex].answer = answer;
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	const formButtons = {
		addNewSegment: {
			icon: 'add',
			title: 'Add new question',
			alt: 'add new question',
			onClickHandler: addNewSegment
		},
		export: {
			icon: 'save',
			title: 'Export form',
			alt: 'export form',
			onClickHandler: () => popupShow(true),
		},
		loadFormAsJSON: {
			icon: 'file_open',
			title: 'Load JSON Form',
			alt: 'Open form',
			onClickHandler: loadJSONForm,
		}
	}

	return (
		<Fragment>
			<FormBody>
				<FormTitle setTitle={changeFormTitle} title={formData.title} mode={mode} />
				{formData.segments.map((segment) => (
					<FromSegment
						key={segment.id}
						mode={mode}
						formSegmentData={segment}
						changeQuestionText={changeQuestionText}
						changeSegmentType={changeSegmentType}
						changeSegmentAnswer={changeSegmentAnswer}
						deleteSegment={deleteSegment}
						setRequired={setRequired}
						unsetRequired={unsetRequired}
						addNewSelectableElement={addNewSelectableElement}
						deleteSelectableElement={deleteSelectableElement}
						updateSelectableElement={updateSelectableElement}
					/>
				))}
				{formData.segments.length === 0 && 
					<EmptyFromPlaceHolder>
						<p>
							{mode === RenderMode.edit
								? 'Empty form, use the plus button to add questions to the form.'
								: 'Empty form, go to creator mode to add questions or load a form using the buttons.'
							}
						</p>
					</EmptyFromPlaceHolder> 
				}
				<SavePopup
					show={showPopup}
					saveAsHTML={saveFromAsHTML}
					saveAsJson={saveFromAsJSON}
					popupShow={popupShow}
				/>
			</FormBody>
			<FormButtons mode={mode} buttons={formButtons} popupShow={popupShow} />
		</Fragment>
	);
};

export default Form;
