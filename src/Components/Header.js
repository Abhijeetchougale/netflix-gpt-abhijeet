import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { removeUser } from '../utils/userSlice'
import { addUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { LOGO, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearchView } from "../utils/gptSlice"
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [])

  const handeleGptSearchClick = () => {
    //toggle GPT search
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img
        className='w-44  '
        src={LOGO} alt="Logo" />

      {user &&
        <div className='flex p-2'>
          {showGptSearch &&
            <select className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
              {
                SUPPORTED_LANGUAGE.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
              }

            </select>}
          <button className='py-2 px-4  mx-4 my-2 bg-purple-800 text-white rounded' onClick={handeleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"} </button>
          <img className='W-12 h-12'
            alt="userIcon"
            src={user.photoURL} />
          <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
