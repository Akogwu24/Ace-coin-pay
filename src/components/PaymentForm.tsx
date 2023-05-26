import { GiSwipeCard } from 'react-icons/gi';
import { FormLabel } from './FormLabel';
import { MdEdit } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { ChangeEvent, Fragment, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { TbGridDots } from 'react-icons/tb';
import { InputArray, inputArray } from './extras';

type InputValuesType = {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
};

export const PaymentForm = () => {
  const [inputValues, setInputValues] = useState({ input1: '', input2: '', input3: '', input4: '' });
  const inputRefs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)]; // Add more
  const numberOfInputs = 4;
  const [remainingSeconds, setRemainingSeconds] = useState(5 * 60);
  const [everyCardInputCompleted, setEveryCardInputCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = () => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return { formattedMinutes, formattedSeconds };
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number, inp: InputArray): void => {
    setInputValues((prev: InputValuesType) => ({ ...prev, [e.target.name]: e.target.value }));

    if (inputValues[inp.name]?.length >= 3) {
      inputRefs[index + 1]?.current?.focus();
    }
    setEveryCardInputCompleted(Object.values(inputValues).every((val) => val.length === 4));
  };

  return (
    <section>
      <header className='logo-timer'>
        <div className='logo-wrapper'>
          <div className='logo-icon-wrapper'>
            <GiSwipeCard size={25} color='white' />
          </div>
          <p>
            <span>AceCoin</span>Pay
          </p>
        </div>
        <div className='timer' data-id='timer'>
          <span>{formatTime()?.formattedMinutes?.charAt(0)}</span>
          <span>{formatTime()?.formattedMinutes?.charAt(1)}</span>
          <em>:</em>
          <span>{formatTime()?.formattedSeconds?.charAt(0)}</span>
          <span>{formatTime()?.formattedSeconds?.charAt(1)}</span>
        </div>
      </header>
      <form>
        <div>
          <div className='flex card-number-wrapper'>
            <FormLabel htmlFor='card-number' label='Card Number' subLabel='Enter the 16digit card number on the card' />
            <div className='flex edit'>
              <MdEdit size={18} />
              <small>Edit</small>
            </div>
          </div>
          {/* card number input */}
          <div className='flex card-number-input-wrapper'>
            <div className='flex' style={{ alignItems: 'center' }}>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='24px' height='24px'>
                <path fill='#ff9800' d='M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z' />
                <path fill='#d50000' d='M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z' />
                <path fill='#ff3d00' d='M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z' />
              </svg>

              <div className='flex card-number-inputs-container' style={{ gap: '6px', marginLeft: '1.5rem', alignItems: 'center' }}>
                {inputArray.map((inp, i) => (
                  <Fragment key={i}>
                    <input
                      onChange={(e) => handleInputChange(e, i, inp)}
                      autoFocus={i === 0 ? true : false}
                      ref={inputRefs[i]}
                      placeholder={inp.placeholder}
                      name={inp.name}
                    />
                    {i < numberOfInputs - 1 ? <span>-</span> : null}
                  </Fragment>
                ))}
              </div>
            </div>
            <BsFillPatchCheckFill color={everyCardInputCompleted ? 'teal' : 'blue'} />
          </div>
        </div>

        {/* cvv input */}
        <div>
          <div className='flex cvv-number'>
            <FormLabel htmlFor='cvv' label='CVV Number' subLabel='Enter the 3 or 4 digit card number on the card' />
            <div className='cvv-input-icon-wrapper'>
              <input placeholder='345' />
              <span className='cvv-icon'>
                <TbGridDots color={'#bbb'} size={20} />
              </span>
            </div>
          </div>
        </div>

        {/* expiry date */}
        <div>
          <div className='flex expiry-date'>
            <FormLabel htmlFor='expiry-date' label='Expiry Date' subLabel='Enter the expiry date of the card' />
            <div className='flex expiry-date-inputs-wrapper'>
              <input placeholder='05' />
              <span style={{ margin: '0 10px' }}>/</span>
              <input placeholder='2023' />
            </div>
          </div>
        </div>

        {/* password */}
        <div>
          <div className='flex cvv-number'>
            <FormLabel htmlFor='password' label='Password' subLabel='Enter your Dynamic password' />
            <div className='cvv-input-icon-wrapper'>
              <input type='password' placeholder='******' />
              <span className='cvv-icon'>
                <TbGridDots color={'#bbb'} size={20} />
              </span>
            </div>
          </div>
        </div>

        <button className='css-button-sliding-to-top'>Pay Now</button>
      </form>
    </section>
  );
};
