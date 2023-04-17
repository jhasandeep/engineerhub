import React from 'react'


import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./index.css"



const Footer = () => {
    return (
        <div className='bg-footer'>
            <div className='footer-rows'>
                <div className='footer-row'>
                    <h3 className='textfooter'>About Us</h3>
                    <p className="footertextaboutus">engineerHUB is INDIA's largest community of engineers where students(alumni) from IITs, NITs, IIITs and state colleges join together to develop and nurture students skills coming from all over India.</p>

                </div>
                <div className='footer-row'>
                    <h3 className='textfooter'>Links</h3>
                    <div className='row footerinnertext'>
                        <p>Magazines</p>
                    </div>
                    <div className='row footerinnertext'>
                        <p>Courses</p>
                    </div>
                    <div className='row footerinnertext'>
                        <p>Events</p>
                    </div>

                </div>

               

                <div className='footer-row'>
                    <h3 className='textfooter'>Contact Us</h3>

                    <div className='row'>
                        <p className='footerinnertext'>info@engineerhub.in</p>



                    </div>

                    <div className='social-media-icons'>
                        <div className='footericon'>
                            <a href='http://google.com' rel="noreferrer" target='_blank'>

                                <InstagramIcon className='svg-icon' />
                            </a>
                        </div>

                        <div className='footericon'>
                            <a href='http://google.com' rel="noreferrer" target='_blank'>

                                <LinkedInIcon className='svg-icon' />
                            </a>
                        </div>

                        <div className='footericon'>
                            <a href='http://google.com' rel="noreferrer" target='_blank'>

                                <TwitterIcon className='svg-icon' />
                            </a>
                        </div>

                        <div className='footericon'>
                            <a href='http://google.com' rel="noreferrer" target='_blank'>

                                <InstagramIcon className='svg-icon' />
                            </a>
                        </div>

                        <div className='footericon'>
                            <a href='http://google.com' rel="noreferrer" target='_blank'>

                                <TelegramIcon className='svg-icon' />
                            </a>
                        </div>


                    </div>

                    <div className='row foot-btn'>

                        

                            <div className='footer-btn-con'>
                                <a href='#google.com'>

                                    <button className='footer-btn'>Log In</button>
                                </a>
                            </div>

                        


                        
                            <div className='footer-btn-con'>
                                <a href="#google.com">
                                    <button className='footer-btn'>Register</button>
                                </a>
                            </div>

                        

                    </div>


                </div>

                <hr />

                



            </div>

            <hr className='hr'/>

            <div className='row copyright sub-footer '>
                    <h6>Powered by</h6>
                    
                    <h3 className='sub-footer'>engineerHUB</h3>

                    
                    
                </div>

        </div>
    )
}

export default Footer