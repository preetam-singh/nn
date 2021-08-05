import React from 'react'
import Footer from '../../../common/components/footer/footer';
import HeaderDesktop from '../../../common/components/header/headerDesktop';
import HeaderMobile from '../../../common/components/header/headerMobile';
import classes from './homePage.module.css';

const HomePage = () =>  {
        return (
                <section className={classes['home-banner']}>

                        <div className={classes['home-banner-content']}>
                                <h1>BE A LIFELONG LEARNER</h1>
                                <div className={`${classes['home-banner-search']} d-flex`}>
                                        <input type="text" className="form-control" placeholder="Search from 3000+ Technology or Business courses"/>
                                        <button className={`${classes['search-btn']} btn`}>
                                                <img src="https://netcomlearning.s3.amazonaws.com/website-img/logo/search.svg" alt="" />
                                        </button>

                                </div>
                                <div className={classes['home-banner-vendors']}>
                                        <span>Microsoft,</span>
                                        <span>AWS,</span>
                                        <span>Cisco,</span>
                                        <span>CompTIA,</span>
                                        <span>EC-Council,</span>
                                        <span>Citrix,</span>
                                        <span>PMI,</span>
                                        <span>ITIL,</span>
                                        <span> Autodesk,</span>
                                        <span>Tableau,</span>
                                        <span>Red Hat</span>
                                </div>
                        </div>
                        <div className={`${classes['home-banner-overlay']} container-fluid`}>
                                <h4 className="text-center">AUTHORIZED TRAINING</h4>
                                <div className="pt-4 w-75 m-auto d-flex justify-content-center flex-wrap">
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span><span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                        <span className="text-center px-5 py-1">
                                                Adobe
                                        </span>
                                       
                                </div>
                                <div className="text-center mt-4">
                                        <button className={`${classes['home-view-btn']} btn border-0 text-white`}>
                                                View All
                                        </button>
                                </div>
                        </div>
                </section>
        );
}

export default HomePage;
