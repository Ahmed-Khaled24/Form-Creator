import { FormData, RenderMode } from "../../types/FormData.type";
import { FormSegmentData, SegmentType } from "../../types/FormSegmentData.type";
import { ChoiceData, SelectData } from "../../types/SelectableElementData";
import fileDownload from "js-file-download";
import createHTMLForm from "../../utils/createHTMLForm";
import { createContext, useState } from "react";

type ProviderValueType = {
    mode: RenderMode ,
    changeRenderMode: ((mode: RenderMode) => void) ,
    changeFormTitle: ((title: string) => void) ,
    addNewSegment: (() => void) ,
    saveFromAsJSON: (() => void) ,
    saveFromAsHTML: ((targetLink: string) => void) ,
    loadJSONForm: (() => void) ,
    deleteSegment: ((segmentId: number) => void) ,
    changeQuestionText: ((segmentId: number, question: string) => void) ,
    changeSegmentType: ((segmentId: number, type: SegmentType) => void) ,
    toggleRequired: ((segmentId: number) => void) ,
    addNewSelectableElement: ((segmentId: number, type: string) => void) ,
    deleteSelectableElement: ((segmentId: number, elementId: number, type: string) => void) ,
    updateSelectableElement: ((segmentId: number, elementId: number, data: string, type: string) => void) ,
    changeSegmentAnswer: ((segmentId: number, answer: string) => void) ,
}

const formInitialValues: FormData = {
	segments: [],
	title: 'Untitled form',
};

const formContextInitialValues: ProviderValueType = {
    mode: RenderMode.edit,
    changeRenderMode: () => {},
    changeFormTitle: () => {},
    addNewSegment: () => {},
    saveFromAsJSON: () => {},
    saveFromAsHTML: () => {},
    loadJSONForm: () => {},
    deleteSegment: () => {},
    changeQuestionText: () => {},
    changeSegmentType: () => {},
    toggleRequired: () => {},
    addNewSelectableElement: () => {},
    deleteSelectableElement: () => {},
    updateSelectableElement: () => {},
    changeSegmentAnswer: () => {},
}

function generateId(): number {
	return Math.trunc(Math.random() * 1e6);
}

export const FormContext = createContext(formContextInitialValues);

export const FormProvider = ({children}: {children: JSX.Element}) => {
    const [formData, setFormData] = useState<FormData>(formInitialValues);
    const [mode, setMode] = useState<RenderMode>(RenderMode.edit);
 
    // Form related
    function changeRenderMode(mode: RenderMode){
		setMode(mode);
	}
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
		setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
	}
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
    function toggleRequired(segmentId: number) {
        const updatedSegments = [...formData.segments];
        const targetIndex = updatedSegments.findIndex((segment) => segment.id === segmentId);
        updatedSegments[targetIndex].required = !updatedSegments[targetIndex].required;
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

    const providerValue: ProviderValueType = {
		changeFormTitle,
		addNewSegment,
		saveFromAsJSON,
		saveFromAsHTML,
		loadJSONForm,
		deleteSegment,
		changeQuestionText,
		changeSegmentType,
		toggleRequired,
		addNewSelectableElement,
		deleteSelectableElement,
		updateSelectableElement,
		changeSegmentAnswer,
        changeRenderMode,
        mode,
	};

    return (
        <FormContext.Provider value={providerValue}>
            {children}
        </FormContext.Provider>
    );
}