import styles from './BurgerMenu.module.css';
import burguerPic from '../../../assets/menu.svg';
import Button from '../Button.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const BurgerMenu = ({ onLogout }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => setCheck(!check);

  const offCheck = () => setCheck(false);

  return (
    <nav className={styles.burger__menu__wrapper}>
      <label htmlFor='menu' className={styles.burger__menu__label} >
        <img src={burguerPic} className={styles.burger__menu__img} alt='Menu' />
      </label>
      <input
        onChange={handleCheck}
        checked={check}
        type='checkbox'
        id='menu'
        className={styles.burger__menu__input}
      />
      <div className={styles.burger__menu__list} onClick={offCheck}>
        <Button
          as={Link}
          to='/'
          type='button'
          variant='primary'
          className='loginForm-submit'
        >
          Home
        </Button>
        <Button
          as={Link}
          to='/ads/new'
          type='submit'
          variant='primary'
          className='loginForm-submit'
        >
          Create Ad
        </Button>

        <Button
          type='submit'
          variant='primary'
          className='loginForm-submit'
          onClick={onLogout}
        >
          Log out
        </Button>
      </div>
    </nav>
  );
};

export default BurgerMenu;