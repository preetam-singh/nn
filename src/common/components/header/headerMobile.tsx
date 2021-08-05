import { useState } from 'react';
import classes from './headerMobile.module.css';

const HeaderMobile = () => {

    const [isActive, setIsActive] = useState(false);

    const onClick = () => {
        console.log('hi')
    };

    return (
        <ul className={`${classes['nav-mobile']} d-sm-none`}>
            <li className={classes['logo']}>
                <a href="/"><img src="https://images.netcomlearning.com/cms/netcom-learning-logo-9e59.webp" alt="NetCom Learning" /></a>
            </li>  
                  
            <li className={classes['menu-container']}> 
                <input id="menu-toggle" className={classes['menu-toggle']} type="checkbox" />
                <label htmlFor="menu-toggle" className={classes['menu-button']}>  
                    <svg className={classes['icon-open']} viewBox="0 0 24 24"> <path xmlns="http://www.w3.org/2000/svg" className={classes['a']} d="M0,3.78a1.955,1.955,0,0,1,2-1.9H22.75a1.955,1.955,0,0,1,2,1.9,1.955,1.955,0,0,1-2,1.9H2A1.955,1.955,0,0,1,0,3.78ZM22.75,9.97H2a1.907,1.907,0,1,0,0,3.81H22.75a1.907,1.907,0,1,0,0-3.81Zm0,8.1H2a1.907,1.907,0,1,0,0,3.81H22.75a1.907,1.907,0,1,0,0-3.81Z"></path></svg>
                    <svg className={classes['icon-close']} viewBox="0 0 100 100">
                        <path d="M83.288 88.13c-2.114 2.112-5.575 2.112-7.69 0L53.66 66.188c-2.113-2.112-5.572-2.112-7.686 0l-21.72 21.72c-2.114 2.113-5.572 2.113-7.687 0l-4.693-4.692c-2.114-2.114-2.114-5.573 0-7.688l21.72-21.72c2.112-2.115 2.112-5.574 0-7.687L11.87 24.4c-2.114-2.113-2.114-5.57 0-7.686l4.842-4.842c2.113-2.114 5.57-2.114 7.686 0l21.72 21.72c2.114 2.113 5.572 2.113 7.688 0l21.72-21.72c2.115-2.114 5.574-2.114 7.688 0l4.695 4.695c2.112 2.113 2.112 5.57-.002 7.686l-21.72 21.72c-2.112 2.114-2.112 5.573 0 7.686L88.13 75.6c2.112 2.11 2.112 5.572 0 7.687l-4.842 4.84z"></path>
                    </svg> 
                </label>  
                <ul className={classes['menu-sidebar']}>
                    <li><a href="/">Home</a></li>      
                    <li>
                        <input type="checkbox" id="sub-two" className={classes['submenu-toggle']} />        
                        <label className={classes['submenu-label']} htmlFor="sub-two">Training</label>
                        <div className={`${classes['arrow']} ${classes['right']}`}>›</div>          
                        <ul className={classes['menu-sub']}>
                            <li className={classes['menu-sub-title']}>
                                <label className={classes['submenu-label']} htmlFor="sub-two">Back to Main Menu</label>
                                <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                            </li> 
                            <li><label><strong>Training</strong></label></li>
                            <li><a >Content Pages</a></li>
                            <li><a href="">Promotions</a></li>                    
                            <li><a href="/vendors/">Vendors</a></li>  
                            <li><a href="/products/">Products</a></li> 
                            <li><a href="/certifications/">Certifications</a></li> 
                            <li>
                                <input type="checkbox" id="sub-one" className={classes['submenu-toggle']} />        
                                <label className={classes['submenu-label']} htmlFor="sub-one">Practice Area</label>
                                <div className={`${classes['arrow']} ${classes['right']}`}>›</div>  
                                <ul className={classes['menu-sub']}>
                                    <li className={classes['menu-sub-title']}>
                                        <label className={classes['submenu-label']} htmlFor="sub-one">Back to Training</label>
                                        <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                                    </li> 
                                    <li>
                                        <label><strong>Practice Area</strong></label>      
                                    </li>
                                    <li>
                                        <a href="/practice-area/2/design-multimedia.html/">Design and Multimedia</a>
                                    </li>
                                    <li><a href="/practice-area/3/application-development.html/">Application Development</a></li>
                                    <li><a href="/practice-area/4/cloud.html/">Cloud</a></li><li><a href="/practice-area/5/business-process.html/">Business Process</a></li>
                                    <li><a href="/practice-area/6/business-leadership.html/">Business and Leadership</a></li>
                                    <li><a href="/practice-area/7/security.html/">Security</a></li>
                                    <li><a href="/practice-area/8/networking.html/">Networking</a></li>
                                    <li><a href="/practice-area/9/business-applications.html/">Business Applications</a></li>
                                    <li><a href="/practice-area/10/data-ai.html/">Data and AI</a></li>
                                </ul>                              
                            </li> 
                           
                            <li>
                                <input type="checkbox" id="sub-five" className={classes['submenu-toggle']} />        
                                <label className={classes['submenu-label']} htmlFor="sub-five">Resources</label>
                                <div className={`${classes['arrow']} ${classes['right']}`}>›</div>           
                                <ul className={classes['menu-sub']}>
                                    <li className={classes['menu-sub-title']}>
                                        <label className={classes['submenu-label']} htmlFor="sub-five">Back to Main Menu</label>
                                        <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                                    </li>
                                    <li>
                                        <label><strong>Resources</strong></label>      
                                    </li>
                                    <li><a href="/webinars/">Webinars On-demand</a></li>
                                    <li><a href="/blogs/">Blogs</a></li>
                                    <li><a href="/case-studies/">Case Studies</a></li>
                                    <li><a href="/assessment/quiz-sign-up.phtml">Assessments Quiz</a></li>
                                    <li><a href="https://netcomlearning.s3.amazonaws.com/pdf/NetCom_Corporate_Catalog.pdf">Download Catalog</a></li>
                                </ul>
                            </li>  
                            <li><a href="/digital-learning-library/">e-Learning Library</a></li>
                        </ul>
                    </li>
                    <li>
                        <input type="checkbox" id="sub-three" className={classes['submenu-toggle']} />        
                        <label className={classes['submenu-label']} htmlFor="sub-three">Solutions</label>
                        <div className={`${classes['arrow']} ${classes['right']}`}>›</div>           
                        <ul className={classes['menu-sub']}>
                            <li className={classes['menu-sub-title']}>
                                <label className={classes['submenu-label']} htmlFor="sub-three">Back to Main Menu</label>
                                <div className={`${classes['arrow']} ${classes['left']}`}>‹</div>              
                            </li>
                            <li>
                                <label><strong>Solutions</strong></label>      
                            </li>      
                                            
                            <li><a href="/services/">Managed Learning Services</a></li>
                            <li><a href="/education/business-solutions.phtml">Business Solutions</a></li>
                            <li><a href="/education/dod8140.phtml">Department of Defense (DoD)</a></li>
                            <li><a href="/lp/ca-program.phtml">Army Credentialing Assistance (Army CA)</a></li>
                            <li><a href="/promotions/netcomsi.phtml">NetCom Skilling Initiative (SI)</a></li>
                            <li><a href="/promotions/learning-passes.phtml">Learning Passes</a></li>
                            <li><a href="/lp/microsoft-cie.phtml">Microsoft CIE</a></li>
                            <li><a href="/education/microsoft_software_assurance.phtml">Microsoft SATVs</a></li>
                            <li><a href="/education/microsoft-partner-training.phtml">Microsoft Partner Training</a></li>
                            <li><a href="/lp/aws-learning-needs-analysis.phtml">AWS Learning Needs Analysis (LNA)</a></li>
                            <li><a href="/vendors/cisco-learning-credits.phtml">Cisco Learning Credits (CLCs)</a></li>
                            <li><a href="/vendors/citrix-training-pass.phtml">Citrix Training Pass (CTP)</a></li>
                            <li><a href="/vendors/comptia/comptia-continuing-education-program.phtml">CompTIA Continuing Education (CE)</a></li>
                        </ul>
                    </li>  

                    <li><a href="/training/schedules.phtml">Schedules</a></li>  
                    <li><a href="/education/specials.phtml">Promotions</a></li>  
                    <li><a href="/about-us/about-us.html">About Us</a></li>                 
                    <li><a className={classes.normalLink}>Employee Profile</a></li>
                    <li><a className={classes.normalLink}>Change Password</a></li>
                                
                </ul> 
            </li>
        </ul>
    );
};

export default HeaderMobile;