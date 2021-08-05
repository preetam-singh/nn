import React, { useRef, useState } from 'react';
import classes from './headerDesktop.module.css'
import useDetectOutsideClick from './useDetectOutsideClick';

const HeaderDesktop = () => {

    const itemsRef: any = useRef<Array<HTMLDivElement | null>>([]);
    const [isMenuOneActive, setIsMenuOneActive] = useDetectOutsideClick(itemsRef[0], false);
    const [isMenuTwoActive, setIsMenuTwoActive] = useDetectOutsideClick(itemsRef[1], false);
    const [isMenuThreeActive, setIsMenuThreeActive] = useDetectOutsideClick(itemsRef[2], false);
    const [isMenuFourActive, setIsMenuFourActive] = useDetectOutsideClick(itemsRef[3], false);

    return (
            <nav className={`container-fluid py-3 d-none d-sm-flex justify-content-between`}>

            <a className={classes['navbar-brand']} href="/">
                <img src="https://images.netcomlearning.com/logo/netcom-logo-black.webp" alt="NetCom Logo" />
            </a>

            <div className={`${classes['navbar-nav']} d-flex flex-row align-items-end justify-content-between ml-3`}>
                 <span className="position-static">
                    <span className={classes.toggler} onClick={() => {setIsMenuOneActive(!isMenuOneActive)}}>
                        Training
                        <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                    </span>

                    <div ref={itemsRef[0]} className={`${classes['training-menu']} ${isMenuOneActive ? classes.active : classes.inactive}`}>
                        <div className='row h-100'>
                            <div className="col-3">
                                <div className={`${classes['left-nav']} ${classes['grey-bg']} d-flex flex-column h-100`}>
                                <h5 className={classes['sub-heading']}>FIND YOUR TRAINING</h5>
                                <a>Courses By Vendor</a>
                                <a>Content Pages</a>
                                <ul className="list-unstyled">
                                    <li><a>e-Learning Library</a></li>
                                    <li><a >Delivery Format</a></li>
                                    <li><a> Group Training</a></li>
                                    <li><a >Learning Plan</a></li>
                                    <li><a >Testimonials</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-9  ${classes['right-nav']}`}>
                            <div className='row mr-0 h-100'>
                                <div className={`col-2 d-flex flex-column justify-content-between`}>
                                    <div>
                                        <h5 className={classes['sub-heading']}>VENDORS</h5>
                                        <ul className="list-unstyled list-group">
                                            <li><a >Microsoft</a></li>
                                            <li><a >Cisco</a></li>
                                            <li><a >Adobe</a></li>
                                            <li><a >AWS</a></li>
                                            <li><a >CompTIA</a></li>
                                            <li><a >PMI</a></li>
                                            <li><a >Autodesk</a></li>
                                            <li><a >ITIL</a></li>
                                            <li><a >EC-Council</a></li>
                                        </ul>
                                    </div>
                                    <button className={`${classes['right-nav-btn']} btn btn-primary`}>All Vendors</button>
                                </div>
                                <div className="col-6 d-flex flex-column">
                                    <h5 className={classes['sub-heading']}>PRODUCTS</h5>
                                        <div className="d-flex flex-column h-100">
                                            <div className="d-flex h-100">
                                                <ul className="list-unstyled">
                                                    <li><a href='/products/microsoft-azure-training.phtml'>Microsoft Azure</a></li>
                                                    <li><a>Microsoft Dynamics 365</a></li>
                                                    <li><a>Microsoft Office</a></li>
                                                    <li><a>Cisco Cloud Track</a></li>
                                                    <li><a>Cisco Collaboration Track</a></li>
                                                    <li><a>Cisco Routing &amp; Switching Track</a></li>
                                                    <li><a>Cisco Security Track</a></li>
                                                    <li><a>CompTIA A+</a></li>
                                                </ul>

                                                <ul className="list-unstyled">
                                                    <li><a>CompTIA Security+</a></li>
                                                    <li><a>ITIL<sup>®</sup> 4</a></li>
                                                    <li><a>Citrix (NetScaler) ADC</a></li>
                                                    <li><a>Project Management Professional (PMP)<sup>®</sup></a></li>
                                                    <li><a>Agile Project Management<sup>®</sup></a></li>
                                                    <li><a>Autodesk AutoCAD</a></li>
                                                    <li><a>Autodesk Revit</a></li>
                                                    <li><a>Citrix Hypervisor</a></li>
                                                </ul>
                                                
                                            </div>
                                            <button className={`${classes['right-nav-btn']} btn btn-primary`}>All Products</button>
                                        <div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 pl-0 d-flex flex-column">
                                    <h5 className={classes['sub-heading']}>CERTIFICATIONS</h5>
                                    <ul className="list-unstyled h-100">
                                        <li><a>Microsoft Certified Azure Fundamentals</a></li>
                                        <li><a>Cisco Certified Network Associate (CCNA)</a></li>
                                        <li><a>Cisco Certified DevNet Associate</a></li>
                                        <li><a>Citrix Certified Professional - Virtualization (CCP-V)</a></li>
                                        <li><a>Project Management Professional (PMP)<sup>®</sup></a></li>
                                        <li><a>PMI Agile Certified Practitioner (PMI-ACP)<sup>®</sup></a></li>
                                    </ul>
                                    <button className={`${classes['right-nav-btn']} btn btn-primary`}>All Certifications</button>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 ${classes['menu-footer-col']}`}>
                            <div className="row px-3">
                                <div className="col-4 text-center">
                                    <a >
                                        <img className="img-thumbnail" src="https://images.netcomlearning.com/cms/home-page_header-menu-image-0d80.webp" alt="FREE OFFICIAL AWS DIGITAL TRAINING COURSES" />
                                    </a>
                                </div>
                                <div className="col-4 text-center">
                                    <a>
                                        <img className="img-thumbnail" src="https://images.netcomlearning.com/cms/home-page_header-menu-image-2-2533.webp" alt="Free Microsoft Master Class: AZ 104" />
                                    </a>
                                </div>
                                <div className="col-4 text-center">
                                    <a >
                                        <img className="img-thumbnail" src="https://images.netcomlearning.com/cms/home-page_header-menu-image-2-2533.webp" alt="Learning Passes" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </span>

            <span>
                <span className={classes.toggler}  onClick={() => {setIsMenuTwoActive(!isMenuTwoActive)}}>
                    Solutions
                    <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                </span>
                <div ref={itemsRef[1]} className={`${classes['simple-menu']} ${isMenuTwoActive ? classes.active : classes.inactive}`} >
                    <a>Managed Learning Services</a>
                    <a >Business Solutions</a>
                    <a >Department of Defense (DoD)</a>
                    <a>Army Credentialing Assistance (Army CA)</a>
                    <a >NetCom Skilling Initiative (SI)</a>
                    <a >Learning Passes</a>
                    <a >Microsoft CIE</a>
                    <a>Microsoft SATVs</a>
                    <a >Microsoft Partner Training</a>
                    <a >AWS Learning Needs Analysis (LNA)</a>
                    <a>Cisco Learning Credits (CLCs)</a>
                    <a >Citrix Training Pass (CTP)</a>
                    <a >CompTIA Continuing Education (CE)</a>
                </div>
            </span>

            <span >
                <span className={classes.toggler}  onClick={() => {setIsMenuThreeActive(!isMenuThreeActive)}}>
                    Resources
                    <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                </span>
                <div ref={itemsRef[2]} className={`${classes['simple-menu']} ${isMenuThreeActive ? classes.active : classes.inactive}`}>
                    <a>Webinars</a>
                    <a >Blogs</a>
                    <a >Assessments</a>
                    <a >Case Studies</a>
                    <a >Media</a>
                    <a>Course Catalog</a>
                    <a >Instructors</a>
                </div>
            </span>

            <span>
                <span  className={classes.toggler}>
                    Promotions
                </span>
            </span>

            <span>
                <span className={classes.toggler}>
                    Schedules
                </span>
            </span>
            
            <span  className="mr-3" >
                <span  className={classes.toggler} onClick={() => {setIsMenuFourActive(!isMenuFourActive)}}>
                    About Us
                    <img className="px-2" src="https://netcomlearning.s3.amazonaws.com/website-img/icon/download-arrow.svg" alt="" />
                </span>
                <div ref={itemsRef[3]} className={`${classes['simple-menu']} ${isMenuFourActive ? classes.active : classes.inactive}`} >
                    <a >About Us</a>
                    <a >Leadership</a>
                    <a >Awards</a>
                    <a >Instructors</a>
                    <a >Learning Movement</a>
                </div>
            </span>

            <span>
                <span className={classes.toggler}>
                    NetCom365
                </span>
            </span>						     
        </div>

        <div className={`${classes['navbar-nav']} d-flex flex-row align-items-end`}>
            <span className="mr-3">
                <img src="https://netcomlearning.s3.amazonaws.com/website-img/icon/header-search-icon.svg" alt="" className="nav-extra-icons" />
            </span>
            <span className="mr-3">
                <img src="https://netcomlearning.s3.amazonaws.com/website-img/icon/cart-black.png" alt="" className="nav-extra-icons" />
            </span>
            <span className="mr-3">
                <img src="https://netcomlearning.s3.amazonaws.com/website-img/icon/phone-black.png" alt="" className="nav-extra-icons" />
            </span>
        </div>
    </nav>

    );
};

export default HeaderDesktop;

