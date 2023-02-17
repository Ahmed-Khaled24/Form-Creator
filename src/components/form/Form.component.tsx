import { useState } from 'react';
import { FormData, RenderMode } from '../../types/FormData.type';
import { SegmentType, FormSegmentData } from '../../types/FormSegmentData.type';
import fileDownload from 'js-file-download';
import { ChoiceData, SelectData } from '../../types/SelectableElementData';
import { FormBody } from './Form.styles';
import addIcon from '../../assets/plus.svg'
import saveIcon from '../../assets/save.svg'
import jsonIcon from '../../assets/json.png'
import htmlIcon from '../../assets/html.png'
import FormTitle from './title/FormTitle.comopnent';
import FromSegment from '../form-segment/FormSegment.component'
import FormButtons from './formButtons/formButtons.component';

function generateId(): number {
	return Math.trunc(Math.random() * 1e6);
}

const formInitialValues: FormData = {
	segments: [],
	mode: RenderMode.edit,
	title: 'Testing',
};

const Form = () => {
	const [formData, setFormData] = useState<FormData>(formInitialValues);

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
			choices: [],
			selects: [],
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
		fileDownload(JSON.stringify(formData), `${filename}.json`);
	}
	function loadJSONForm() {
		const filename = formData.title;
		fileDownload(JSON.stringify(formData), `${filename}.json`);
	}
	function deleteSegment(segmentId: number){
		setFormData({
			...formData,
			segments: formData.segments.filter(segment => segment.id !== segmentId)
		})
	}
	
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
	function addNewChoice(segmentId: number) {
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		const defaultChoice: ChoiceData = {
			id: generateId(),
			data: '',
			selected: false,
		};
		updatedSegments[targetIndex].choices?.push(defaultChoice);
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function deleteChoice(
		segmentId: number,
		choiceId: number
	) {	
		const updatedSegments = [...formData.segments];
		const targetSegmentIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		if (updatedSegments[targetSegmentIndex].choices) {
			updatedSegments[targetSegmentIndex].choices = updatedSegments[
				targetSegmentIndex
			].choices?.filter((choice) => choice.id !== choiceId);
			setFormData({
				...formData,
				segments: updatedSegments,
			});
		}
	}
	function updateChoice(
		segmentId: number,
		choiceId: number,
		data: string
	) {
		const updatedSegments = [...formData.segments];

		const targetSegmentIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);

		const targetChoiceIndex = updatedSegments[
			targetSegmentIndex
		].choices?.findIndex((choice) => choice.id === choiceId) as number;

		let choices = updatedSegments[targetSegmentIndex].choices as ChoiceData[]
		choices[targetChoiceIndex].data = data;

		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function addNewSelect(segmentId: number) {
		const updatedSegments = [...formData.segments];
		const targetIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		const defaultSelect: SelectData = {
			id: generateId(),
			data: '',
			selected: false,
		};
		updatedSegments[targetIndex].selects?.push(defaultSelect);
		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}
	function deleteSelect(segmentId: number, selectId: number) {	
		const updatedSegments = [...formData.segments];
		const targetSegmentIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);
		if (updatedSegments[targetSegmentIndex].selects) {
			updatedSegments[targetSegmentIndex].selects = updatedSegments[
				targetSegmentIndex
			].selects?.filter((select) => select.id !== selectId);
			setFormData({
				...formData,
				segments: updatedSegments,
			});
		}
	}
	function updateSelect(
		segmentId: number,
		selectId: number,
		data: string
	) {
		const updatedSegments = [...formData.segments];

		const targetSegmentIndex = updatedSegments.findIndex(
			(segment) => segment.id === segmentId
		);

		const targetSelectIndex = updatedSegments[
			targetSegmentIndex
		].selects?.findIndex((select) => select.id === selectId) as number;

		let selects = updatedSegments[targetSegmentIndex].selects as SelectData[]
		selects[targetSelectIndex].data = data;

		setFormData({
			...formData,
			segments: updatedSegments,
		});
	}

	const formButtons = {
		addNewSegment: {
			icon: addIcon,
			title: 'Add New Question',
			alt: 'add new question',
			onClickHandler: addNewSegment
		},
		saveAsJSON: {
			icon: jsonIcon,
			title: 'Export As Json',
			alt: 'export as json',
			onClickHandler: saveFromAsJSON
		},
		saveAsHTML: {
			icon: htmlIcon,
			title: 'Export As HTML',
			alt: 'export as html',
			onClickHandler: saveFromAsHTML,
		},
		loadFormAsJSON: {
			icon: jsonIcon,
			title: 'Load JSON Form',
			alt: 'load json form',
			onClickHandler: loadJSONForm,
		}
	}

	return (
		<FormBody>
			<FormTitle
				setTitle={changeFormTitle}
				title={formData.title}
				mode={formData.mode}
			/>
			{formData.segments.map((segment) => (
				<FromSegment
					mode={formData.mode}
					formSegmentData={segment}
					changeQuestionText={changeQuestionText}
					changeSegmentType={changeSegmentType}
					changeSegmentAnswer={changeSegmentAnswer}
					addNewChoice={addNewChoice}
					deleteChoice={deleteChoice}
					updateChoice={updateChoice}
					addNewSelect={addNewSelect}
					deleteSelect={deleteSelect}
					updateSelect={updateSelect}
					deleteSegment={deleteSegment}
					setRequired={setRequired}
					unsetRequired={unsetRequired}
				/>
			))}
			<FormButtons 
				mode={formData.mode}
				buttons = {formButtons}
			/>
		</FormBody>
	);
};

export default Form;
