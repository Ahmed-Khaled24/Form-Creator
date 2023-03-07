import { RenderMode } from '../../../types/FormData.type';
import { FormSegmentData} from '../../../types/FormSegmentData.type';
import { SegmentDiv } from './FormSegment.styles';
import SegmentBody from './body/SegmentBody.component';
import SegmentHeading from './heading/SegmentHeading.component';
import SegmentFooter from './footer/SegmentFooter.component';

type Props = {
    mode: RenderMode,
    formSegmentData: FormSegmentData,
}

const FormSegment = ({
	mode, 
	formSegmentData, }: Props) => {
    const { question, id, required, type} = formSegmentData;
    return (
		<SegmentDiv mode={mode}>
			<SegmentHeading
				question={question}
				mode={mode}
				required={required}
				parentSegmentId={id}
				questionType={type}
			/>
			<SegmentBody
				formSegmentData={formSegmentData}
				mode={mode}
			/>
			{mode === RenderMode.edit && (
				<SegmentFooter
					required={required}
					parentSegmentId={id}
				/>
			)}
		</SegmentDiv>
	);
}

export default FormSegment;