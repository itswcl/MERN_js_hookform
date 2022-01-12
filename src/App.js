import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import UserForm from './components/UserForm';

function App() {
  return (
    <fieldset>
      <div className='App'>
        <legend>App</legend>
        <div className="container">
          <UserForm />
        </div>
      </div>
    </fieldset>
  );
}

export default App;
