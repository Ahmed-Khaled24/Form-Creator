import { Fragment } from "react"
import { ChoiceData } from "../../../../../types/SelectableElementData"
import { RenderMode } from '../../../../../types/FormData.type';
import Choice from "./choice/Choice.component";
import { AddNewBtn } from '../SegmentBody.styles';
type Props = {
    mode: RenderMode,
    choices: ChoiceData[] | undefined,
    parentSegmentId: number,
    updateChoice: (segmentId: number, choiceId: number, data: string, type: string) => void,
    deleteChoice: (segmentId: number, choiceId: number, type: string) => void,
    changeSegmentAnswer: (segmentId: number, answer: string) => void,
    addNewChoice: (segmentId: number, type: string ) => void, 
}

const MultipleChoiceBody = ({
	mode,
	choices,
	parentSegmentId,
	updateChoice,
	deleteChoice,
	changeSegmentAnswer,
	addNewChoice,
}: Props) => {
	return (
		<Fragment>
			{choices?.map((choice) => (
				<Choice
					key={choice.id}
					mode={mode}
					choiceData={choice}
					parentSegmentId={parentSegmentId}
					updateChoice={updateChoice}
					deleteChoice={deleteChoice}
					changeSegmentAnswer={changeSegmentAnswer}
				/>
			))}
			{mode === RenderMode.edit && (
				<AddNewBtn onClick={() => addNewChoice(parentSegmentId, 'choice')}>
					Add
				</AddNewBtn>
			)}
		</Fragment>
	);
};

export default MultipleChoiceBody;