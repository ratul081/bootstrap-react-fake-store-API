import React from 'react';
import { Button } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className='bg-info d-flex justify-content-evenly rounded my-4 mx-5'>
      <div className='m-5'>
      <h1>Grab discount over 50% on</h1>
      <h2>Selected Headphones</h2>
      <Button className='mt-2'>Buy now</Button>
      </div>
      <img className='' src="https://i.postimg.cc/85gPhVq5/banner.png" />
    </div>
  );
};

export default Banner;