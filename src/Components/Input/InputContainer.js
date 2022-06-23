import React from 'react'
import { InputTextWithRef, IconInputTextWithRef } from './Input'
import {FaEnvelope} from 'react-icons/fa'

const InputContainer = () => {

  return (
    <div className="border-dashed border-2 border-adp-red p-8 w-1/3 m-4">

              {/* Start of Primary Input Fields */}

            <h2 className='mb-4 text-xl font-bold'>Large Input Fields</h2>
            <div className="m-4 mb-8">
                <h3 className='mb-4'>Placeholder</h3>
                <InputTextWithRef
                  variant="primary"
                  size="large"
                  placeholder="Input Placeholder"
                  type="number"
                />
            </div>

            <div className="m-4 mb-8">
                <h3 className='mb-4'>Typing - In Focus</h3>
                <InputTextWithRef
                  variant="primary"
                  size='large'
                  placeholder="Input Placeholder"
                  value='typing...'
                  autoFocus
                />
            </div>

            <div className="m-4 mb-8">
                <h3 className='mb-4'>Saved Information</h3>
                <InputTextWithRef
                  variant="primary"
                  size='large'
                  value="Saved Information"
                />
            </div>

            <div className="m-4 mb-8">
                <h3 className='mb-4'>Read Only</h3>
                <InputTextWithRef
                  variant="primary"
                  size='large'
                  disabled
                  value="Read only Information"
                />
            </div>

            {/* Start of Small Input Fields */}

            <h2 className='mb-4 text-xl font-bold'>Small Input Fields</h2>
            <div className="m-4 mb-8">
                <h3 className='mb-4'>Primary Large Button</h3>
                <InputTextWithRef
                  variant="primary"
                  size="small"
                  placeholder="Input Placeholder"
                />
            </div>

            <div className="m-4 mb-8">
                <h3 className='mb-4'>Typing - In Focus</h3>
                <InputTextWithRef
                  variant="primary"
                  size='small'
                  placeholder="Input Placeholder"
                  value='typing...'
                />
            </div>

            <div className="m-4 mb-8">
                <h3 className='mb-4'>Saved Information</h3>
                <InputTextWithRef
                  variant="primary"
                  size='small'
                  value="Saved Information"
                />
            </div>

            <div className="m-4 mb-8">
                <h3 className='mb-4'>Read Only</h3>
                <InputTextWithRef
                  variant="primary"
                  size='small'
                  disabled
                  value="Read only Information"
                />
            </div>

            {/* Start of Login/Register Input Fields */}

            <h2 className='mb-4 text-xl font-bold'>Login/Register with Rounded Corners</h2>
            <div className="m-4 mb-8">
                <h3 className='mb-4'>Placeholder</h3>
                <IconInputTextWithRef
                  variant="login-rounded"
                  icon={<FaEnvelope />}
                />
            </div>

            <div className="m-4 mb-8">
                <h3 className='mb-4'>Login/Register without Rounded Corners</h3>
                <IconInputTextWithRef
                  variant="login"
                  icon={<FaEnvelope />}
                />
            </div>
    </div>
  )
}

export default InputContainer