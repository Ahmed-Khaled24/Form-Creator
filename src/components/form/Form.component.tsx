import { Fragment, useState, useContext } from 'react';
import { RenderMode } from '../../types/FormData.type';
import { EmptyFromPlaceHolder, FormBody } from './Form.styles';
import FormTitle from './title/FormTitle.component';
import FromSegment from './formSegment/FormSegment.component'
import FormButtons from './formButtons/formButtons.component';
import SavePopup from './savePopup/savePopup.component';
import { FormContext } from '../contexts/form.context';

const Form = () => {
	const {formData, mode, addNewSegment, loadJSONForm} = useContext(FormContext);
	const [showPopup, setShowPopup] = useState<boolean>(false);

	// Form related
	function popupShow(show: boolean){	
		setShowPopup(show)
	}

	const formButtons = {
		addNewSegment: {
			icon: 'add',
			title: 'Add new question',
			alt: 'add new question',
			onClickHandler: addNewSegment
		},
		export: {
			icon: 'save',
			title: 'Export form',
			alt: 'export form',
			onClickHandler: () => popupShow(true),
		},
		loadFormAsJSON: {
			icon: 'file_open',
			title: 'Load JSON Form',
			alt: 'Open form',
			onClickHandler: loadJSONForm,
		}
	}

	return (
		<Fragment>
			<FormBody>
				<FormTitle/>
				{formData.segments.map((segment) => (
					<FromSegment
						key={segment.id}
						formSegmentData={segment}
					/>
				))}
				{formData.segments.length === 0 && 
					<EmptyFromPlaceHolder>
						<p>
							{mode === RenderMode.edit
								? 'Empty form, use the plus button to add questions to the form.'
								: 'Empty form, go to creator mode to add questions or load a form using the buttons.'
							}
						</p>
					</EmptyFromPlaceHolder> 
				}
				<SavePopup
					show={showPopup}
					popupShow={popupShow}
				/>
			</FormBody>
			<FormButtons mode={mode} buttons={formButtons} popupShow={popupShow} />
		</Fragment>
	);
};

export default Form;
