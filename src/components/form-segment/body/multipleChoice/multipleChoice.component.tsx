import { Fragment } from "react"
import { ChoiceData } from "../../../../types/SelectableElementData"
import { RenderMode } from '../../../../types/FormData.type';
import Choice from "./choice/Choice.component";
type Props = {
    mode: RenderMode,
    choices: ChoiceData[] | undefined,
    parentSegmentId: number,
    updateChoice: (segmentId: number, choiceId: number, data: string) => void,
    deleteChoice: (segmentId: number, choiceId: number) => void,
    changeSegmentAnswer: (segmentId: number, answer: string) => void,
    addNewChoice: (segmentId: number ) => void, 
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
					mode={mode}
					choiceData={choice}
					parentSegmentId={parentSegmentId}
					updateChoice={updateChoice}
					deleteChoice={deleteChoice}
					changeSegmentAnswer={changeSegmentAnswer}
				/>
			))}
			<button onClick={() => addNewChoice(parentSegmentId)}>Add</button>
		</Fragment>
	);
};

export default MultipleChoiceBody;