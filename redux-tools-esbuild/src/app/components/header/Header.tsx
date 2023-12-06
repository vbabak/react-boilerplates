import React from 'react';
import { Link } from 'react-router-dom';
import { selectTheme, setThemeMode } from '../../state/slices/ui';
import { useDispatch, useSelector } from 'react-redux';
import { UiEntity } from '../../entities/UiEntity';

function Header() {
  const dispatch = useDispatch();
  const themeMode = useSelector(selectTheme);

  function onChange(e: React.FormEvent<HTMLInputElement>) {
    const theme = e.currentTarget.value as UiEntity['themeMode'];
    dispatch(setThemeMode(theme));
  }

  return (
    <div className='header'>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      <div>
        <form >
          <p>
            Theme:
            <br /><label>Light <input checked={themeMode === 'light' ? true : false} type='radio' value='light' name='theme_switch' onChange={onChange} /></label>
            <br /><label>Dark <input checked={themeMode === 'dark' ? true : false} type='radio' value='dark' name='theme_switch' onChange={onChange} /></label>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Header;
