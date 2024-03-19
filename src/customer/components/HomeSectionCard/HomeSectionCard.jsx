import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border border-black'>
      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top' src={product.imageUrl} alt="" />
      </div>
      <div>
        <div className='p-4'>
          <h3 className='text-lg fontmedium text-gray-900 pt-4'>{product.brand}</h3>
          <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>
      </div>

    </div>
  )
}

export default HomeSectionCard;
