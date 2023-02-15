import { FormSegmentData } from "./FormSegmentData.type"

enum RenderMode {
    edit,
    view,
}

type FormData = {
    segments: FormSegmentData[],
    mode: RenderMode,
    title: string,
}

export type {FormData, RenderMode}