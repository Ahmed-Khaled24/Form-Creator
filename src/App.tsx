import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar.component';
import Form from './components/form/Form.component';
import { useState } from 'react';
import { RenderMode } from './types/FormData.type';


function App() {
	const [mode, setMode] = useState<RenderMode>(RenderMode.edit);
	function changeRenderMode(mode: RenderMode){
		setMode(mode);
	}
	return (
		<Fragment>
			<Navbar
				brand={{ smallText: 'The Ultimate', largeText: 'Form Creator' }}
				navLinks={['Creator', 'Viewer']}
				changeMode = {changeRenderMode}
			/>
			<Form mode={mode} />
		</Fragment>
	);
}

export default App;
