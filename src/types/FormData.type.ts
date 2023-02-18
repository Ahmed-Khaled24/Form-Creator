import { FormSegmentData } from "./FormSegmentData.type"

export enum RenderMode {
    edit,
    view,
}

export type FormData = {
    segments: FormSegmentData[],
    title: string,
}