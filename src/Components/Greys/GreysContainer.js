import React from 'react'

const GreysContainer = () => {
  return (
    <div className="border-dashed border-2 border-adp-red p-4 w-1/3 m-4 flex flex-col">
        <div className="border-dashed border-2 border-black-90 flex flex-col items-start mb-4">
            <div className='m-4 flex items-center'>
                <div className='bg-black-90 w-20 h-20'></div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-2xl ml-8'>Primary Grey</p>
                        <p className='font-semibold ml-8'>90% Opaque - #1A1A1A</p>
                </div>
            </div>
        </div>
        <div className="border-dashed border-2 border-black-90 flex flex-col items-start mb-4">
            <div className='m-4 flex items-center'>
                <div className='bg-black-60 w-20 h-20'></div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-2xl ml-8'>Secondary Grey</p>
                        <p className='font-semibold ml-8'>60% Opaque - #666666</p>
                </div>
            </div>
        </div>
        <div className="border-dashed border-2 border-black-90 flex flex-col items-start mb-4">
            <div className='m-4 flex items-center'>
                <div className='bg-black-40 w-20 h-20'></div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-2xl ml-8'>Disabled Grey</p>
                        <p className='font-semibold ml-8'>40% Opaque - #999999</p>
                </div>
            </div>
        </div>
        <div className="border-dashed border-2 border-black-90 flex flex-col items-start mb-4">
            <div className='m-4 flex items-center'>
                <div className='bg-black-10 w-20 h-20'></div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-2xl ml-8'>BG Grey 1</p>
                        <p className='font-semibold ml-8'>10% Opaque - #E6E6E6</p>
                </div>
            </div>
        </div>
        <div className="border-dashed border-2 border-black-90 flex flex-col items-start mb-4">
            <div className='m-4 flex items-center'>
                <div className='bg-black-4 w-20 h-20'></div>
                    <div className='flex flex-col'>
                        <p className='font-bold text-2xl ml-8'>BG Grey 2</p>
                        <p className='font-semibold ml-8'>4% Opaque - #F5F5F5</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GreysContainer