import { RenderMode } from '../../../types/FormData.type';
import { FormSegmentData, SegmentType } from '../../../types/FormSegmentData.type';
import { SegmentDiv } from './FormSegment.styles';
import SegmentBody from './body/SegmentBody.component';
import SegmentHeading from './heading/SegmentHeading.component';
import SegmentFooter from './footer/SegmentFooter.component';

type Props = {
    mode: RenderMode,
    formSegmentData: FormSegmentData,
    changeSegmentType: (segmentId: number, type: SegmentType) => void,
    changeQuestionText: (segmentId: number, type: string) => void,
	changeSegmentAnswer: (segmentId: number, answer: string) => void,
	updateChoice: (segmentId: number, choiceId: number, data: string) => void,
	updateSelect: (segmentId: number, selectId: number, data: string) => void,
	deleteSegment: (segmentId: number) => void,
	setRequired: (segmentId: number) => void,
	unsetRequired: (segmentId: number) => void,
	addNewSelectableElement: (segmentId: number, type: string) => void,
	deleteSelectableElement: (segmentId: number, elementId: number, type: string) => void,
}

const FormSegment = ({
	mode, 
	formSegmentData, 
	changeSegmentType, 
	changeQuestionText,
	changeSegmentAnswer,
	updateChoice,
	updateSelect,
	deleteSegment,
	setRequired,
	unsetRequired,
	addNewSelectableElement,
	deleteSelectableElement}: Props) => {
    const { question, id, required, type} = formSegmentData;
    return (
		<SegmentDiv className={mode === RenderMode.view ? 'no-footer' : ''}>
			<SegmentHeading
				question={question}
				mode={mode}
				required={required}
				parentSegmentId={id}
				questionType={type}
				changeQuestionText={changeQuestionText}
				changeSegmentType={changeSegmentType}
			/>
			<SegmentBody
				formSegmentData={formSegmentData}
				mode={mode}
				changeSegmentAnswer={changeSegmentAnswer}
				updateChoice={updateChoice}
				updateSelect={updateSelect}
				addNewSelectableElement={addNewSelectableElement}
				deleteSelectableElement={deleteSelectableElement}
			/>
			{mode === RenderMode.edit ? (
				<SegmentFooter
					deleteSegment={deleteSegment}
					setRequired={setRequired}
					unsetRequired={unsetRequired}
					required={required}
					parentSegmentId={id}
				/>
			) : (
				''
			)}
		</SegmentDiv>
	);
}


export default FormSegment;