import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignIn = () => {
  const [staffId, setId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const updateId = (event) => setId(event.target.value);
  const updatePassword = (event) => setPassword(event.target.value);
  const updateName = (event) => setName(event.target.value);
  const updateEmail = (event) => setEmail(event.target.value);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url('src/assets/Barber+Tools.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{ display: 'flex', justifyContent: 'lg:space-around', width: '-100%'  }}>
        <motion.form
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 1 }}
          style={{ margin: '0 1rem' }}
          onSubmit={''}
          action=""
        >
          <h2 style={{ color: 'white' }}>SignIn</h2>
          <div className='bg-black py-8 px-6 flex flex-col items-center rounded-[50rem] h-[25rem]'>
            <fieldset style={{ margin: '1.5rem 0', width: '80%' }}>
              <input
                className='rounded p-2 w-full text-black'
                onChange={updateId}
                type="number"
                placeholder='Enter staffId'
              />
            </fieldset>
            <fieldset style={{ margin: '1.5rem 0', width: '80%' }}>
              <input
                className='rounded p-2 w-full mt-[2rem] text-black'
                onChange={updatePassword}
                type="password"
                placeholder='Password'
              />
            </fieldset>
            <button
              className='border p-2 rounded-xl cursor-pointer text-orange-800 text-sm flex item-center mt-[2rem]'
              onClick={() => login}
            >
              Submit
            </button>
          </div>
        </motion.form>

        <motion.form
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0%' }}
          transition={{ duration: 1, delay: 1 }}
          style={{ margin: '0 1rem' }}
          onSubmit={''}
          action=""
        >
          <h2 style={{ color: 'white' }}>SignUp</h2>
          <div className='bg-black py-8 px-6 flex flex-col items-center rounded-[50rem] h-[25rem]'>
            <fieldset style={{ margin: '1.5rem 0', width: '80%' }}>
              <input
                className='rounded p-2 w-full text-black'
                onChange={updateEmail}
                type="email"
                placeholder='Enter Email'
              />
            </fieldset>
            <fieldset style={{ margin: '1.5rem 0', width: '80%' }}>
              <input
                className='rounded p-2 w-full text-black'
                onChange={updateName}
                type="text"
                placeholder='Enter name'
              />
            </fieldset>
            <fieldset style={{ margin: '1.5rem 0', width: '80%' }}>
              <input
                className='rounded p-2 w-full text-black'
                onChange={updateId}
                type="number"
                placeholder='Create staffId'
              />
            </fieldset>
            <fieldset style={{ margin: '1.5rem 0', width: '80%' }}>
              <input
                className='rounded p-2 w-full mt-[2rem] text-black'
                onChange={updatePassword}
                type="password"
                placeholder='Create Password'
              />
            </fieldset>
            <button
              className='border p-2 rounded-xl cursor-pointer text-orange-800 text-sm flex item-center mt-[2rem]'
              onClick={() => login}
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default SignIn;

