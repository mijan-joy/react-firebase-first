import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth } from 'firebase/auth';
import { Button, Form } from 'react-bootstrap';
import './App.css';
import app from './firebase.init';

const auth = getAuth(app);
function App() {
  const handleEmailBlur = (event) => {
    console.log(event.target.value);
  }
  const handlePasswordBlur = (event) => {  
    console.log(event.target.value);
  }
  const handleFormSubmit = (event) => { 
    console.log('Form submited');
    console.log(event.target.email.value);
    event.preventDefault();
  } 
  return (
    <div>
    <div className="registration mx-auto w-50 mt-5">
      <h2 className="text-center text-primary">Registration !!</h2>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </div>
    </div>
  );
}

export default App;
