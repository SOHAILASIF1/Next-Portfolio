import React from 'react'

const Experience = ({tittle,timePeriod,discription}) => {
  return (
    <div className='px-20 py-2 flex items-center justify-start gap-10'>

      <div className='w-1/4 text-white font-semibold text-3xl'>
      {tittle}

      </div>
      <div className='flex px-4 flex-col gap-2 w-3/4'>
        <div className='text-red-500 font-semibold'>{timePeriod}</div>
        <div className='ml-4 text-bold  text-gray-300'>{discription}</div>
      </div>
        
    </div>
  )
}

export default Experience