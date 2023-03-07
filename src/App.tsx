import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment, useContext } from 'react';
import Navbar from './components/navbar/Navbar.component';
import Form from './components/form/Form.component';
import {FormContext } from './components/contexts/form.context';


function App() {
	const {mode, changeRenderMode} = useContext(FormContext);
	return (
		<Fragment>
			<Navbar
				brand={{ smallText: 'The Ultimate', largeText: 'Form Creator' }}
				navLinks={['Creator', 'Viewer']}
				changeMode = {changeRenderMode}
			/>
			<Form mode={mode} />
			<a href='https://www.linkedin.com/in/ahmedkhaled24/' className='copyright' target='_blank' rel="noreferrer"> &copy; Ahmed Khaled</a>
		</Fragment>
	);
}

export default App;
