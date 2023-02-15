import { ChoiceData, SelectData } from "./SelectableElementData";

export enum SegmentType {
    shortAnswer,
    paragraph,
    multipleChoice,
    multiSelect
}

export type FormSegmentData = {
    type: SegmentType,
    id: string,
    title: string,
    required: boolean,
    choices?: ChoiceData[],
    selects?: SelectData[],
    answer: string,
}
