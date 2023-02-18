import { RenderMode } from '../../types/FormData.type';
import { FormSegmentData, SegmentType } from '../../types/FormSegmentData.type';
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
	addNewChoice: (segmentId: number) => void,
	deleteChoice: (segmentId: number, choiceId: number) => void,
	updateChoice: (segmentId: number, choiceId: number, data: string) => void,
	updateSelect: (segmentId: number, selectId: number, data: string) => void,
	deleteSelect: (segmentId: number, selectId: number) => void,
	addNewSelect: (segmentId: number) => void,
	deleteSegment: (segmentId: number) => void,
	setRequired: (segmentId: number) => void,
	unsetRequired: (segmentId: number) => void
}

const FormSegment = ({
	mode, 
	formSegmentData, 
	changeSegmentType, 
	changeQuestionText,
	changeSegmentAnswer,
	addNewChoice,
	deleteChoice,
	updateChoice,
	addNewSelect,
	updateSelect,
	deleteSelect,
	deleteSegment,
	setRequired,
	unsetRequired}: Props) => {
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
				addNewChoice={addNewChoice}
				deleteChoice={deleteChoice}
				updateChoice={updateChoice}
				updateSelect={updateSelect}
				deleteSelect={deleteSelect}
				addNewSelect={addNewSelect}
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