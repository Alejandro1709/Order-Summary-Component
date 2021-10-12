import React from 'react';
import HeroImage from '../images/illustration-hero.svg';
import MusicIcon from '../images/icon-music.svg';

function Card() {
  return (
    <div className='w-3/4 md:w-1/3 mr-8 bg-white rounded-lg overflow-hidden shadow-lg'>
      <div className=''>
        <img className='w-full' src={HeroImage} alt='hero' />
      </div>
      <div className='flex flex-col justify-center items-center text-center p-8'>
        <h2 className='text-2xl font-bold mb-4'>Order Summary</h2>
        <p className='text-gray-400'>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like~
        </p>
      </div>
      <div className='flex justify-center items-center pb-2'>
        <div className='flex justify-between items-center mx-4 bg-gray-50 w-full p-4 mb-4 rounded-lg'>
          <img src={MusicIcon} alt='musci-logo' />
          <div className=''>
            <h3 className='font-bold'>Annual Plan</h3>
            <p className='text-gray-400'>$59.99/year</p>
          </div>
          <a href='#!' className='text-purple-800 underline'>
            Change
          </a>
        </div>
      </div>
      <div className='bg-blue-700 mx-4 mb-4 rounded-xl text-center'>
        <button className='p-4 font-bold text-white'>Proceed to Payment</button>
      </div>
      <div className='mx-4 mb-4 rounded-xl text-center'>
        <button className='p-4 font-semibold text-gray-500'>
          Cancel Order
        </button>
      </div>
    </div>
  );
}

export default Card;
