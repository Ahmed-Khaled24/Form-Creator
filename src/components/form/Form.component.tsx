import { Fragment, useState, useContext } from 'react';
import { FormData, RenderMode } from '../../types/FormData.type';
import { SegmentType, FormSegmentData } from '../../types/FormSegmentData.type';
import fileDownload from 'js-file-download';
import { ChoiceData, SelectData } from '../../types/SelectableElementData';
import { EmptyFromPlaceHolder, FormBody } from './Form.styles';
import FormTitle from './title/FormTitle.component';
import FromSegment from './formSegment/FormSegment.component'
import FormButtons from './formButtons/formButtons.component';
import SavePopup from './savePopup/savePopup.component';
import createHTMLForm from '../../utils/createHTMLForm';
import { FormContext } from '../contexts/form.context';

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
	const {formData, changeFormTitle, addNewSegment} = useContext(FormContext);
	const [showPopup, setShowPopup] = useState<boolean>(false);

	// Form related
	function saveFromAsJSON() {
		const filename = formData.title;
		fileDownload(JSON.stringify(formData), `${filename}.json`);
	}
	function saveFromAsHTML(targetLink: string) {
		const filename = formData.title;
		fileDownload(createHTMLForm(formData, targetLink), `${filename}.html`);
	}
	function loadJSONForm() {
		const fileInput = document.getElementById('fileInput');
		fileInput?.click();
	}
	function popupShow(show: boolean){	
		setShowPopup(show)
	}

	// Handle upload file
	// const fileInput = document.getElementById('fileInput') as HTMLInputElement;
	// fileInput.addEventListener('change', (e) => {
	// 	const files = fileInput.files as FileList; 
	// 	const uploadedFile = files[0];
	// 	const reader = new FileReader()
	// 	reader.onload = (evt: ProgressEvent<FileReader>) => {
	// 		const text = evt.target?.result;
	// 		const loadedFormData = JSON.parse(text as string) as FormData;
	// 		setFormData(loadedFormData);
	// 	};
	// 	reader.readAsText(uploadedFile);
	// });


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
