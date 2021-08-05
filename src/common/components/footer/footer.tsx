import classes from './footer.module.css';
import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <section className="py-6">
                <div className={classes['home-headings']}>Training Locations</div>

                <div className={`${classes['stripe']} container-fluid`}>
                    <h6 className="py-2 mb-0">United States</h6>
                </div>

                <div className={`${classes['locations-container']} container-fluid py-5`}>
       
                    <div className={classes['trainingColumns']}>
                        <div className={classes.locationList}>
                            <h5>Alabama</h5>
                            <a href="/training-locations/405/huntsville-al" target="_blank">Huntsville</a>    
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Arizona</h5>
                            <a href="/training-locations/421/mesa-az" target="_blank">Mesa</a>
                            <a href="/training-locations/232/phoenix-az" target="_blank">Phoenix</a>                            
                        </div>

                        <div className={classes['locationList']}>
                            <h5>California</h5>        
                            <a href="/training-locations/398/fremont-ca" target="_blank">Fremont</a>
                            <a href="/training-locations/399/fresno-ca" target="_blank">Fresno</a>
                            <a href="/training-locations/407/irvine-ca" target="_blank">Irvine</a>
                            <a href="/training-locations/416/long-beach-ca" target="_blank">Long Beach</a>
                            <a href="/training-locations/230/los-angeles-ca" target="_blank">Los Angeles</a>
                            <a href="/training-locations/426/mountain-view-ca" target="_blank">Mountain View</a>                   
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Colorado</h5>                           
                            <a href="/training-locations/383/colorado-springs-co" target="_blank">Colorado Springs</a>
                            <a href="/training-locations/235/denver-co" target="_blank">Denver</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Florida</h5>                           
                            <a href="/training-locations/228/jacksonville-fl" target="_blank">Jacksonville</a>
                            <a href="/training-locations/422/miami-fl" target="_blank">Miami</a>
                            <a href="/training-locations/33/orlando-fl" target="_blank">Orlando</a>                            
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Georgia</h5>                    
                            <a href="/training-locations/364/atlanta-ga" target="_blank">Atlanta</a>                
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Hawaii</h5>
                            <a href="/training-locations/219/honolulu-hi" target="_blank">Honolulu</a>           
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Idaho</h5>
                            <a href="/training-locations/372/boise-id" target="_blank">Boise</a>         
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Illinois</h5>
                            <a href="/training-locations/229/chicago-il" target="_blank">Chicago</a>  
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Indiana</h5>
                            <a href="/training-locations/406/indianapolis-in" target="_blank">Indianapolis</a>       
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Kentucky</h5>
                            <a href="/training-locations/418/louisville-ky" target="_blank">Louisville</a>
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Maryland</h5>
                            <a href="/training-locations/366/baltimore-md" target="_blank">Baltimore</a>
                            
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Massachusetts</h5>
                            <a href="/training-locations/234/boston-ma" target="_blank">Boston</a>
                            <a href="/training-locations/198/lexington-ma" target="_blank">Lexington</a>         
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Michigan</h5>                      
                            <a href="/training-locations/390/detroit-mi" target="_blank">Detroit</a>                       
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Minnesota</h5>                     
                            <a href="/training-locations/425/minneapolis-mn" target="_blank">Minneapolis</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Missouri</h5>
                            <a href="/training-locations/411/kansas-city-mo" target="_blank">Kansas City</a>
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Nevada</h5>
                            <a href="/training-locations/42/las-vegas-nv" target="_blank">Las Vegas</a>
                        </div>

                        <div className={classes['locationList']}>
                            <h5>New Jersey</h5>
                            <a href="/training-locations/410/jersey-city-nj" target="_blank">Jersey City</a>
                        </div>

                        <div className={classes['locationList']}>
                            <h5>New Mexico</h5>
                            <a href="/training-locations/360/albuquerque-nm" target="_blank">Albuquerque</a>
                        </div>

                        <div className={classes['locationList']}>
                            <h5>New York</h5>
                            <a href="/training-locations/2/new-york-ny" target="_blank">New York</a>
                        </div>

                        <div className={classes['locationList']}>
                            <h5>North Carolina</h5>
                            <a href="/training-locations/233/charlotte-nc" target="_blank">Charlotte</a>
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Ohio</h5>                            
                            <a href="/training-locations/382/cincinnati-oh" target="_blank">Cincinnati</a>
                            <a href="/training-locations/385/columbus-oh" target="_blank">Columbus</a>                            
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Oklahoma</h5>                        
                            <a href="/training-locations/59/oklahoma-city-ok" target="_blank">Oklahoma City</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Pennsylvania</h5>                        
                            <a href="/training-locations/227/philadelphia-pa" target="_blank">Philadelphia</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Tennessee</h5>                        
                            <a href="/training-locations/420/memphis-tn" target="_blank">Memphis</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Texas</h5>
                            <a href="/training-locations/362/arlington-tx" target="_blank">Arlington</a>
                            <a href="/training-locations/365/austin-tx" target="_blank">Austin</a>
                            <a href="/training-locations/387/dallas-tx" target="_blank">Dallas</a>
                            <a href="/training-locations/392/el-paso-tx" target="_blank">El Paso</a>
                            <a href="/training-locations/396/fort-worth-tx" target="_blank">Fort Worth</a>
                            <a href="/training-locations/400/frisco-tx" target="_blank">Frisco</a>
                            <a href="/training-locations/231/houston-tx" target="_blank">Houston</a>
                            <a href="/training-locations/408/irving-tx" target="_blank">Irving</a>
                            <a href="/training-locations/221/san-antonio-tx" target="_blank">San Antonio</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Virginia</h5>                        
                            <a href="/training-locations/363/arlington-va" target="_blank">Arlington</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Washington</h5>                        
                            <a href="/training-locations/368/bellevue-wa" target="_blank">Bellevue</a>
                            <a href="/training-locations/236/seattle-wa" target="_blank">Seattle</a>                        
                        </div>

                        <div className={classes['locationList']}>
                            <h5>Wisconsin</h5>                        
                            <a href="/training-locations/424/milwaukee-wi" target="_blank">Milwaukee</a>                        
                        </div>
                    </div>                
                </div>
            </section>

            <div className={`${classes['footer-dark']} container-fluid`}>
                <div className="row">
                    <div className="col-md-8 col-lg-8 col-xl-8 order-2 order-md-1">
                        <ul className={`${classes['footer-dark-left']} list-unstyled m-0 pl-0 d-flex flex-wrap`}>
                            <li className={`${classes['year-text']} d-none d-sm-inline-block`}>
                                &copy;1998 - CurrYear NetCom Learning
                            </li>
                            <li><a>Jobs</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a >Press Releases</a></li>
                            <li><a >Refund Policy</a></li>
                            <li><a>Contact Us </a></li>
                        </ul>
                        <div className={`${classes['year-text']} d-sm-none d-inline-block text-center w-100 text-white`}>
                            &copy;1998 - CurrYear NetCom Learning
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 order-1 order-md-2 d-flex">
                        <ul className={`${classes['footer-dark-right']} list-unstyled d-flex justify-content-between m-0 py-3 w-100`}>
                            <li >
                                <a href="https://www.facebook.com/netcomlearningusa">
                                    <i className={`${classes['icon-facebook']} icon-moon`}></i>
                                </a>
                            </li>                                   
                            <li >
                                <a href="https://www.linkedin.com/company/45031">
                                    <i className={`${classes['icon-linkedin2']} icon-moon`}></i>
                                </a>
                            </li>
                            <li >
                                <a href="https://twitter.com/NetComLearning">
                                    <i className={`${classes['icon-twitter']} icon-moon`}></i>
                                </a>
                            </li>
                                <li >
                                <a href="https://www.instagram.com/netcom_learning/">
                                    <i className={`${classes['icon-instagram']} icon-moon`}></i>
                                </a>
                            </li>
                            <li >
                                <a href="https://www.youtube.com/user/NetcomInfoTech">
                                    <i className={`${classes['icon-youtube']} icon-moon`}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`${classes['bottom-footer']} py-3 container-fluid`}>
                <p className={classes['bottom-footer-heading']}>ACKNOWLEDGEMENT STATEMENTS:</p>
                <ol className="pl-3 m-0">
                    <li className={classes['des']}>PMI<sup>®</sup>, PMBOK<sup>®</sup>, CAPM<sup>®</sup>, PMP<sup>®</sup>, PMI-ACP<sup>®</sup>, PMI-PBA®are registered marks of the Project Management Institute<sup>®</sup>, Inc. The PMI<sup>®</sup>; Authorized Training Partner logo is a registered mark of the Project Management Institute<sup>®</sup>, Inc.</li>
                    <li className={classes['des']}>ITIL<sup>®</sup> is a registered trademark of AXELOS Limited, used under permission of AXELOS Limited. The Swirl logo<sup>™</sup> is a trademark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                </ol>
            </div>
        </React.Fragment>
       
    );
};


export default Footer;
