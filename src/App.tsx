import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar.component';
import Form from './components/form/Form.component';

function App() {
	return (
		<Fragment>
			<Navbar
				brand={{ smallText: 'The Ultimate', largeText: 'Form Creator' }}
				navLinks={['Creator', 'Viewer']}
			/>
			<Form/>
		</Fragment>
	);
}

export default App;
