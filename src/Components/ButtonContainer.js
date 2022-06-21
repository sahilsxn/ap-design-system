import React from 'react';
import { Button, IconButton } from './Button';
import { FaBell, FaDownload } from 'react-icons/fa';

const ButtonContainer = () => {
  return (
    <div className="border-dashed border-2 border-adp-red p-4 w-1/3 m-4">

        {/* Start of Primary Buttons */}

        <h2 className='ml-3 mb-2 text-xl font-bold'>Primary Buttons</h2>
            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Primary Large Button</h3>
                <Button variant="primary" size="large">
                    Label Text
                </Button> <br/>
                <Button variant="primary" size="large" inactive>
                    Label Text Inactive
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Primary Large Icon Button (Both Sides)</h3>
                <Button variant="primary" size="large">            
                    <div className="flex">
                        Label Text
                        <span className="mt-1 ml-2">
                            <FaDownload/>
                        </span>
                    </div>
                </Button>
                <Button variant="primary" size="large" inactive>            
                    <div className="flex">
                        Label Text Inactive
                        <span className="mt-1 ml-2">
                            <FaDownload/>
                        </span>
                    </div>
                </Button> <br/>
                <Button variant="primary" size="large">            
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload/>
                        </span>
                        Label Text
                    </div>
                </Button>
                <Button variant="primary" size="large" inactive>            
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload/>
                        </span>
                            Label Text Inactive
                    </div>
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Primary Large Icon Only Button</h3>
                <IconButton variant="primary" size="large">
                    <FaBell/>
                </IconButton>
                <IconButton variant="primary" size="large" inactive>
                    <FaBell/>
                </IconButton>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Primary Small Button</h3>
                <Button variant="primary" size="small">
                    Label Text
                </Button> <br/>
                <Button variant="primary" size="small" inactive>
                    Label Text Inactive
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Primary Small Icon Button (Both Sides)</h3>
                <Button variant="primary" size="small">
                    <div className="flex">
                        Label Text
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button>
                <Button variant="primary" size="small" inactive>
                    <div className="flex">
                        Label Text Inactive
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button> <br/>
                <Button variant="primary" size="small">
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>    
                        Label Text
                    </div>
                </Button>
                <Button variant="primary" size="small" inactive>
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text Inactive
                    </div>
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Primary Small Icon Only Button</h3>
                <IconButton variant="primary" size="small">
                    <FaBell/>
                </IconButton>
                <IconButton variant="primary" size="small" inactive>
                    <FaBell/>
                </IconButton>
            </div>

            {/* Start of Secondary Buttons */}

            <h2 className='ml-3 mb-2 text-xl font-bold'>Secondary Buttons</h2>
            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Secondary Large Button</h3>
                <Button variant="secondary" size="large">
                    Label Text
                </Button> <br/>
                <Button variant="secondary" size="large" inactive>
                    Label Text Inactive
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Secondary Large Icon Button (Both Sides)</h3>
                <Button variant="secondary" size="large">
                    <div className="flex">
                        Label Text
                            <span className="mt-1 ml-2">
                                <FaDownload />
                            </span>
                    </div>
                </Button>
                <Button variant="secondary" size="large" inactive>
                    <div className="flex">
                        Label Text Inactive
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button> <br/>
                <Button variant="secondary" size="large">
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text
                    </div>
                </Button>
                <Button variant="secondary" size="large" inactive>
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text Inactive
                    </div>
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Secondary Large Icon Only Button</h3>
                <IconButton variant="secondary" size="large">
                    <FaBell/>
                </IconButton>
                <IconButton variant="secondary" size="large" inactive>
                    <FaBell/>
                </IconButton>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Secondary Small Button</h3>
                <Button variant="secondary" size="small">
                    Label Text
                </Button> <br/>
                <Button variant="secondary" size="small" inactive>
                    Label Text Inactive
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Secondary Small Icon Button (Both Sides)</h3>
                <Button variant="secondary" size="small">
                    <div className="flex">
                        Label Text
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button>
                <Button variant="secondary" size="small" inactive>
                    <div className="flex">
                        Label Text Inactive
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button> <br/>
                <Button variant="secondary" size="small">
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text
                    </div>
                </Button>
                <Button variant="secondary" size="small" inactive>
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text Inactive
                    </div>
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Secondary Small Icon Only Button</h3>
                <IconButton variant="secondary" size="small">
                    <FaBell/>
                </IconButton>
                <IconButton variant="secondary" size="small" inactive>
                    <FaBell/>
                </IconButton>
            </div>

            {/* Start of Tertiary Buttons */}

            <h2 className='ml-3 mb-2 text-xl font-bold'>Tertiary Buttons</h2>
            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Tertiary Large Button</h3>
                <Button variant="tertiary" size="large">
                    Label Text
                </Button> <br/>
                <Button variant="tertiary" size="large" inactive>
                    Label Text Inactive
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Tertiary Large Icon Button (Both Sides)</h3>
                <Button variant="tertiary" size="large">
                    <div className="flex">
                        Label Text
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button>
                <Button variant="tertiary" size="large" inactive>
                    <div className="flex">
                        Label Text Inactive
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button> <br/>
                <Button variant="tertiary" size="large">
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text
                    </div>
                </Button>
                <Button variant="tertiary" size="large" inactive>
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text Inactive
                    </div>
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Tertiary Large Icon Only Button</h3>
                <IconButton variant="tertiary" size="large">
                    <FaBell/>
                </IconButton>
                <IconButton variant="tertiary" size="large" inactive>
                    <FaBell/>
                </IconButton>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Tertiary Small Button</h3>
                <Button variant="tertiary" size="small">
                    Label Text
                </Button> <br/>
                <Button variant="tertiary" size="small" inactive>
                    Label Text Inactive
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Tertiary Small Icon Button (Both Sides)</h3>
                <Button variant="tertiary" size="small">
                    <div className="flex">
                        Label Text
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button>
                <Button variant="tertiary" size="small" inactive>
                    <div className="flex">
                        Label Text Inactive
                        <span className="mt-1 ml-2">
                            <FaDownload />
                        </span>
                    </div>
                </Button> <br/>
                <Button variant="tertiary" size="small">
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text
                    </div>
                </Button>
                <Button variant="tertiary" size="small" inactive>
                    <div className="flex">
                        <span className="mt-1 mr-2">
                            <FaDownload />
                        </span>
                        Label Text Inactive
                    </div>
                </Button>
            </div>

            <div className="m-4 mb-8">
                <h3 className='ml-3 mb-2'>Tertiary Small Icon Only Button</h3>
                <IconButton variant="tertiary" size="small">
                    <FaBell/>
                </IconButton>
                <IconButton variant="tertiary" size="small" inactive>
                    <FaBell/>
                </IconButton>
            </div>
    </div>
  )
}

export default ButtonContainer