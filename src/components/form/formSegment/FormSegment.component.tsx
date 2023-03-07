import { RenderMode } from '../../../types/FormData.type';
import { FormSegmentData} from '../../../types/FormSegmentData.type';
import { SegmentDiv } from './FormSegment.styles';
import SegmentBody from './body/SegmentBody.component';
import SegmentHeading from './heading/SegmentHeading.component';
import SegmentFooter from './footer/SegmentFooter.component';
import { FormContext } from '../../contexts/form.context';
import { useContext } from 'react';

type Props = {
    formSegmentData: FormSegmentData,
}

const FormSegment = ({formSegmentData}: Props) => {
    const { question, id, required, type} = formSegmentData;
	const {mode} = useContext(FormContext);
    return (
		<SegmentDiv mode={mode}>
			<SegmentHeading
				question={question}
				required={required}
				parentSegmentId={id}
				questionType={type}
			/>
			<SegmentBody
				formSegmentData={formSegmentData}
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