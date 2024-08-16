import Cookies from 'js-cookie';
import Homepage from './homepage';
import SignUp from './signup';
import './App.css';
import { useState } from 'react';

function App() {
  const { username, password } = Cookies.get();
  const [user, setUser] = useState({ username, password});

  return (
    <div className='App'>
      {user.username && user.password ? (
        <Homepage user={user} setUser={setUser} />
      ) : (
        <SignUp setUser={setUser} />
      )}
    </div>
  );
}

export default App;
