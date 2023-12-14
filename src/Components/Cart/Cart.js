import React from 'react';
import Footer from '../Footer/Footer';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Cart = () => {
  return (
    <div>
      <div>
        <h1 className='text-center text-gray-500 text-6xl font-bold lg:mt-24 lg:mb-16'>
          Cart
        </h1>
        {/* cart table part here  */}

        <div class='relative overflow-x-auto lg:mx-28 sm:rounded-lg'>
          <table class='w-full text-sm text-left rtl:text-right text-gray-500 border'>
            <thead class='text-xs text-gray-700 uppercase bg-white  '>
              <tr class='bg-white border-b '>
                <th scope='col' class='px-6 py-3'>
                  <span class='sr-only'></span>
                </th>
                <th scope='col' class='px-16 py-3'>
                  <span class='sr-only'></span>
                </th>
                <th scope='col' class='px-6 py-3'>
                  Product
                </th>
                <th scope='col' class='px-6 py-3'>
                  Price
                </th>
                <th scope='col' class='px-6 py-3'>
                  Quantity
                </th>
                <th scope='col' class='px-6 py-3'>
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class='bg-white border-b '>
                <td class='ps-10 py-4'>
                  <button class=' ms-4'>
                    <IoCloseCircleOutline className='text-black text-2xl text-center' />
                  </button>
                </td>
                <td class='p-4'>
                  <img
                    src='/docs/images/products/apple-watch.png'
                    class='w-16 md:w-32 max-w-full max-h-full'
                    alt='Dark Brown Jeans'
                  />
                </td>
                <td class='px-6 py-4 font-semibold text-black'>
                  Dark Brown Jeans
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 '>$599</td>
                <td class='px-6 py-4'>
                  <div class='flex items-center'>
                    <div className='text-black'>
                      <input
                        type='number'
                        id='first_product'
                        class='placeholder-black bg-white w-14 border border-gray-300 text-black text-sm   block  py-1 px-2  '
                        placeholder='1'
                        required
                      />
                    </div>
                  </div>
                </td>
                <td class='px-6 py-4 font-semibold text-gray-900 '>$599.00</td>
              </tr>
              <tr>
                <div class='flex items-center'>
                  <div className='text-black'>
                    <input
                      type='number'
                      id='first_product'
                      class='placeholder-black bg-white w-44 border border-gray-300 text-black text-sm m-4 mr-3 block  py-2 px-2  '
                      placeholder='Coupon Code'
                      required
                    />
                  </div>
                  <div className=''>
                    <button className='lg:py-3 lg:px-4 mb-1  hover:text-white font-medium py-2 px-3 text-white bg-blue-500 hover:bg-blue-600 block'>
                      APPLY COUPON
                    </button>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
        <div className=''>
        <div class='relative overflow-x-auto lg:mx-28 sm:rounded-lg flex flex-col'>
          <table class='w-1/2 text-sm text-left rtl:text-right text-gray-500  float-right mt-10'>
            <thead class='text-xs text-gray-700 uppercase bg-white  '>
              <tr class='bg-white border-b '>
                <th scope='col' class='px-6 py-3'>
                  Cart totals
                </th>
                <th scope='col' class='px-6 py-3'>
                  <span class='sr-only'></span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b '>
                <td class='px-6 py-4 font-semibold text-black'>Subtotal</td>
                <td class='px-6 py-4 font-semibold text-black'>$599.00</td>
              </tr>
              <tr className='bg-white border-b'>
                <td class='px-6 py-4 font-semibold text-black'>Total</td>
                <td class='px-6 py-4 font-semibold text-black'>$599.00</td>
              </tr>
              <tr className='bg-white border-b'></tr>
            </tbody>
          </table>
          <div className='m-3 '>
            <button className='lg:py-3 lg:px-4 mb-1 w-1/2 hover:text-white font-medium py-2 px-3 text-white bg-blue-500 hover:bg-blue-600 block'>
              CHECKOUT
            </button>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
