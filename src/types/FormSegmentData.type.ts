import { ChoiceData, SelectData } from "./SelectableElementData";

enum SegmentType {
    shortAnswer,
    paragraph,
    multipleChoice,
    multiSelect
}

type FormSegmentData = {
    type: SegmentType,
    id: string,
    title: string,
    required: boolean,
    choices?: ChoiceData[],
    selects?: SelectData[],
    answer: string,
}

export type {FormSegmentData, SegmentType};