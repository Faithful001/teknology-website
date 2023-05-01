const Portfolio = () => {
    return ( 
        <div className="portfolio" >

<section className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            

            <div className="portfolio__container container swiper-container">
                <div className="swiper-wrapper">
                            {/* PORTFOLIO 1 */}
                    <div className="portfolio__content grid swiper-slide">
                        <img src="" alt="" className="portfolio__img"/>

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Lorem ipsum dolor sit amet</h3>

                            <p className="portfolio__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi repudiandae saepe neque veniam error accusamus porro nostrum alias eligendi nemo tempore itaque praesentium adipisci sapiente ad, quos unde? Atque, eveniet.</p>

                            <a href="https://mintyplex.com" target="_blank" className="button button--flex button---small portfolio__button">
								Demo

								<i className="uil uil-arrow-right button__icon"></i>
							</a>
                        </div>
                    </div>

                            {/* PORTFOLIO 2 */}
                <div className="portfolio__content grid swiper-slide">
                    <img src="" alt="" className="portfolio__img"/>

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Lorem ipsum dolor sit amet</h3>

                        <p className="portfolio__description"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi repudiandae saepe neque veniam error accusamus porro nostrum alias eligendi nemo tempore itaque praesentium adipisci sapiente ad, quos unde? Atque, eveniet.</p>

                        <a href="https://typai.vercel.app" className="button button--flex button---small portfolio__button">
                            Demo

                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                            {/* PORTFOLIO 3 */}
                    <div className="portfolio__content grid swiper-slide">
                        <img src="" alt="" className="portfolio__img"/>

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Lorem ipsum dolor sit amet</h3>

                            <p className="portfolio__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi repudiandae saepe neque veniam error accusamus porro nostrum alias eligendi nemo tempore itaque praesentium adipisci sapiente ad, quos unde? Atque, eveniet.</p>

                            <a href="https://danger-is-near.vercel.app" className="button button--flex button---small portfolio__button">
								Demo

								<i className="uil uil-arrow-right button__icon"></i>
							</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>


                        {/* PROJECTS IN MIND */}
        <section className="project section">

                    <div className="project__data">
                        <h2 className="project__title">Got A New Project?</h2>
                        <p className="project__description">Congratulations. You're getting a 30% discount for hiring us through our portfolio.<br/>Want to get started?</p>
                        <br/>
                        <button className="project-button-button"><a href="https://wa.me/+2349083738709" className="project-button ">
                            Contact Us
                        </a></button>
                    </div><br/>
        </section>

        </div>
     );
}
 
export default Portfolio;