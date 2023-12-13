import React from 'react';
import './ContactUs.css';
import Footer from '../../Components/Footer/Footer';
const ContactUs = () => {
  return (
    <div className=''>
      <div className='bg-imageContact flex justify-center items-center'>
        <div className=''>
          <h1 className='text-center font-bold text-5xl lg:text-7xl  text-white'>
            Contact Us
          </h1>
        </div>
      </div>
      <div className='text-center my-16'>
        <h1 className='lg:text-md text-lg text-black font-bold '>
          Have any queries?
        </h1>
        <h1 className='lg:text-5xl text-3xl text-black'>
          We're here to help.​
        </h1>
        <div className=' lg:mb-10 mb-5 lg:mt-5 mt-6 m-auto border-[1px] w-20 border-b-slate-800 '></div>
      </div>
      <div className='lg:mx-24 my-10'>
        <div className='block lg:flex text-black text-center lg:my-20 my-6'>
          <div className='lg:my-0 my-20 mx-3 hover:shadow-xl'>
            <h1 className='font-bold py-3 text-3xl'>Sales</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <p className='text-blue-500 font-bold text-lg my-2'>
              1800 123 4567
            </p>
          </div>
          <div className='lg:my-0 mb-20 mx-3 hover:shadow-xl'>
            <h1 className='font-bold py-4 text-3xl'>Complaints</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <p className='text-blue-500 font-bold text-lg my-2'>
              1900 223 8899
            </p>
          </div>
          <div className='lg:my-0 mb-20 mx-3 hover:shadow-xl'>
            <h1 className='font-bold py-4 text-3xl'>Returns</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <p className='text-blue-500 font-bold text-lg my-2'>
              returns@mail.com
            </p>
          </div>
          <div className='lg:my-0 mb-20 mx-3 hover:shadow-xl'>
            <h1 className='font-bold py-4 text-3xl'>Marketing</h1>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
            <p className='text-blue-500 font-bold text-lg my-2'>
              1700 444 5578
            </p>
          </div>
        </div>
      </div>
      {/* You tell us. We listen part */}
      <div className='lg:mx-28 lg:mt-32'>
        <div className=''>
          <div className='flex flex-col lg:flex-row text-black'>
            <div className='text-center lg:text-left lg:w-1/2 w-full mt-10'>
              <p className=' text-md font-bold'>Don't be a stranger!</p>
              <h1 className='text-5xl  font-bold'>You tell us. We listen.</h1>
              <p className='mt-7'>
                Cras elementum finibus lacus nec lacinia. Quisque non convallis
                nisl, eu condimentum sem. Proin dignissim libero lacus, ut
                eleifend magna <br /> vehicula et. Nam mattis est sed tellus.
              </p>
            </div>
            <div className='card shrink-0  lg:w-1/2 w-full  '>
              <form className='card-body'>
                <div className='form-control'>
                  <input
                    type='text'
                    placeholder='NAME'
                    className='input border rounded-none border-gray-300 bg-white p-2 '
                    required
                  />
                </div>
                <div className='form-control'>
                  <input
                    type='text'
                    placeholder='SUBJECT'
                    className='input border rounded-none border-gray-300 bg-white p-2 '
                    required
                  />
                </div>
                <div className='form-control'>
                  <input
                    type='email'
                    placeholder='EMAIL'
                    className='input border rounded-none border-gray-300 bg-white p-2 '
                    required
                  />
                </div>
                <div className='form-control'>
                  <textarea
                    placeholder='MESSAGE'
                    className='input border rounded-none border-gray-300 bg-white p-2 h-[170px]'
                    required
                  />
                </div>
                <div className='mt-6'>
                  <button className='lg:py-3 lg:px-4 mb-1 hover:text-white font-medium py-2 px-3 text-white bg-blue-500 hover:bg-blue-600 block'>
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
