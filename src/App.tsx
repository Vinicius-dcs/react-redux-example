import React from 'react';
import { useAppSelector } from './redux/hooks/useAppSelector';
import { setName, setAge } from './redux/reducers/userReducer'
import { useDispatch } from 'react-redux';
import { setThemeStatus } from './redux/reducers/themeReducer';

function App() {
  const user = useAppSelector(state => state.user);
  const theme = useAppSelector(state => state.theme);
  const dispatch = useDispatch();

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(event.target.value));
  }

  const handleAgeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAge(event.target.value));
  }

  const handleSwitchTheme = () => {
    dispatch(setThemeStatus(theme.status === 'light' ? 'dark' : 'light'));
  }

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.

      <br />

      Tema: {theme.status}

      <hr />
      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="text" value={user.age} onChange={handleAgeInput} />

      <hr />
      <button onClick={handleSwitchTheme}>Switch Theme</button>
    </div>
  );
}

export default App;
