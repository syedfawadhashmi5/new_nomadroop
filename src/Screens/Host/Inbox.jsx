
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';

import Icon from '../../images/avt.webp'; 
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';


function Inbox(props){


    return(
        <>
      
            <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
                <h1><strong> Inbox </strong></h1>
            </div>
         
            <div className='inbox-box'>

                <div className='row zero-mrg inbox-unread'>
                    <div className='bottom-border'>

                        <div className='row'>
                            <div className='col-md-2 text-center'>
                                <div className='img-center'>
                                    <img src={Icon} className="img-fluid full-round inbox-image"/>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='inbox-1a'> User A</div>
                                <div className='inbox-1b color-b'> Resversation </div>
                                <div className='inbox-1c color-a'> Octobor 12, 2024 </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='inbox-1a'> My First Property Name </div>
                                <div className='inbox-1b color-a'> Aug 12, 2020 - Aug 12, 2024 </div>
                                <div className='inbox-1c color-b'> Owner Reject and Cancel Booking Request.  </div>
                            </div>

                            <div className='col-md-2 text-center'>
                                <div className='inbox-btncenter'>
                                    <div className='inbox-tbn'>
                                       <ClearIcon />
                                    </div>

                                    <div className='inbox-tbn'>
                                        <KeyboardReturnIcon />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='row zero-mrg inbox-read'>
                    <div className='bottom-border'>

                        <div className='row'>
                            <div className='col-md-2 text-center'>
                                <div className='img-center'>
                                    <img src={Icon} className="img-fluid full-round inbox-image"/>
                                </div>
                            </div>

                            <div className='col-md-2'>
                                <div className='inbox-1a'> User A</div>
                                <div className='inbox-1b color-b'> Resversation </div>
                                <div className='inbox-1c color-a'> Octobor 12, 2024 </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='inbox-1a'> My First Property Name </div>
                                <div className='inbox-1b color-a'> Aug 12, 2020 - Aug 12, 2024 </div>
                                <div className='inbox-1c color-b'> Owner Reject and Cancel Booking Request.  </div>
                            </div>

                            <div className='col-md-2 text-center'>
                                <div className='inbox-btncenter'>
                                    <div className='inbox-tbnb'>
                                       <ClearIcon />
                                    </div>

                                    <div className='inbox-tbnb'>
                                        <KeyboardReturnIcon />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
         
        </>
    )
}


export default Inbox;