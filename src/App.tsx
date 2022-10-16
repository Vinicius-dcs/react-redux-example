import React from 'react';
import { useAppSelector } from './redux/hooks/useAppSelector';
import { setName, setAge } from './redux/reducers/userReducer'
import { useDispatch } from 'react-redux';

function App() {
  const user = useAppSelector(state => state.user);
  const dispatch = useDispatch();

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  }
  const handleAgeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(event.target.value));
  }

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.

      <br />

      Tema: ...

      <hr />
      <input type="text" value={user.name} onChange={handleNameInput}/>
      <input type="text" value={user.age} onChange={handleAgeInput}/>

      <hr />
      <button>Switch Theme</button>
    </div>
  );
}

export default App;
