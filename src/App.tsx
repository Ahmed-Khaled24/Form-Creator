import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
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
			<a href='https://www.linkedin.com/in/ahmedkhaled24/' className='copyright' target='_blank' rel="noreferrer"> &copy; Ahmed Khaled</a>
		</Fragment>
	);
}

export default App;
