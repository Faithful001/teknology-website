const Portfolio = () => {
    return ( 
        <div className="portfolio" >

<section className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            

            <div className="portfolio__container container swiper-container">
                <div className="swiper-wrapper">
                            {/* PORTFOLIO 1 */}
                    <div className="portfolio__content grid swiper-slide">
                        <img src="assets/img/Mintyplex.PNG" alt="Timups" className="portfolio__img"/>

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Mintyplex Landing Page. </h3>

                            <p className="portfolio__description">I worked with the team collaboratively to create a fully Responsive landing page for Mintyplex. Paying attention to details as provided by the UI/UX designers.</p>

                            <a href="https://mintyplex.com" target="_blank" className="button button--flex button---small portfolio__button">
								Demo

								<i className="uil uil-arrow-right button__icon"></i>
							</a>
                        </div>
                    </div>

                            {/* PORTFOLIO 2 */}
                <div className="portfolio__content grid swiper-slide">
                    <img src="assets/img/Typai.PNG" alt="Elisha David portfolio" className="portfolio__img"/>

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">TypAI Landing Page</h3>

                        <p className="portfolio__description">A landing page I built for my Side <a href="https://typai.onrender.com">Project</a> at Buildspace.
                        TypAI is an AI writing tool that helps content writers, bloggers, and even digital marketers to generate contents automatically.</p>

                        <a href="https://typai.vercel.app" className="button button--flex button---small portfolio__button">
                            Demo

                            <i className="uil uil-arrow-right button__icon"></i>
                        </a>
                    </div>
                </div>

                            {/* PORTFOLIO 3 */}
                    <div className="portfolio__content grid swiper-slide">
                        <img src="assets/img/work6.png" alt="Elisha David portfolio" className="portfolio__img"/>

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Danger is NEAR</h3>

                            <p className="portfolio__description">Danger is near (play to earn game, gamefi) - user play as a fireknight who go to forest and kill monster. User can earn $DANGER token and score to compete with others user.</p>

                            <a href="https://danger-is-near.vercel.app" className="button button--flex button---small portfolio__button">
								Demo

								<i className="uil uil-arrow-right button__icon"></i>
							</a>
                        </div>
                    </div>
                </div>

                

                        {/* Portfolio Arrows */}
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>

                         {/* Swiper Pagination */}
                <div className="swiper-pagination"></div>
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