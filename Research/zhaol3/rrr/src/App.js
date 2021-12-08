import React from 'react';
import ProfilePage from './ProfilePage';
import profile from './profile.html';


function App() {
  // const [todos, setTodos] = useState([])
  return (
    <>
    <profile />
    <div>Ressy</div>
    <div>ID: 9032479823</div>
    <div>Username <input type="text" /></div>
    <div>Email <input type="text" /></div>
    <div>Phone <input type="text" /></div>
    <button>Edit</button>
    <button>Save</button>
 
    </>
  )
}

export default App;
