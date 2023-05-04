import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const Portfolio = () => {
    return ( 
        <div className="portfolio" >

<section className="portfolio section" id="portfolio">
            <h2 className="section-title">Portfolio</h2>
            
            <Zoom>
            <div className="portfolio__container container swiper-container">

                            {/* PORTFOLIO 1 */}
                    <div className="portfolio__content grid swiper-slide">
                    
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Lorem ipsum dolor sit amet</h3>

                            <p className="portfolio__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi repudiandae saepe neque veniam error accusamus porro nostrum alias eligendi nemo tempore itaque praesentium adipisci sapiente ad, quos unde? Atque, eveniet.</p>

                            <a href="#" target="_blank" className="button button--flex button---small portfolio__button">
								Demo

							</a>
                        </div>
                    </div>

                            {/* PORTFOLIO 2 */}
                <div className="portfolio__content grid swiper-slide">

                    <div className="portfolio__data">
                        <h3 className="portfolio__title">Lorem ipsum dolor sit amet</h3>

                        <p className="portfolio__description"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi repudiandae saepe neque veniam error accusamus porro nostrum alias eligendi nemo tempore itaque praesentium adipisci sapiente ad, quos unde? Atque, eveniet.</p>

                        <a href="#" className="button button--flex button---small portfolio__button">
                            Demo

                        </a>
                    </div>
                </div>

                            {/* PORTFOLIO 3 */}
                    <div className="portfolio__content grid swiper-slide">

                        <div className="portfolio__data">
                            <h3 className="portfolio__title">Lorem ipsum dolor sit amet</h3>

                            <p className="portfolio__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi repudiandae saepe neque veniam error accusamus porro nostrum alias eligendi nemo tempore itaque praesentium adipisci sapiente ad, quos unde? Atque, eveniet.</p>

                            <a href="#" className="button button--flex button---small portfolio__button">
								Demo

							</a>
                        </div>
                    </div>
            </div>
            </Zoom>
        </section>


                        {/* PROJECTS IN MIND */}
        <Bounce right>
        <section className="project section">
      
                
                    <div className="project__data">
                        <h2 className="project__title">Got A New Project?</h2>
                        <p className="project__description">Congratulations. You're getting a 30% discount for hiring us through our portfolio.<br/>Want to get started?</p>
                        <br/>
                        <button className="project-button-button"><a href="https://wa.me/+2349083738709" className="project-button ">
                            Contact Us
                        </a></button>
                    </div>
        </section>
        </Bounce>

        </div>
     );
}
 
export default Portfolio;