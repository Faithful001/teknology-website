import Fade from 'react-reveal/Fade';


const Services = () => {

    const ourServices = {
        first: "Web Design and Development",
        second: "Mobile App Development", 
        third: "Game Development", 
        fourth: "UI/UX Design",
        fifth: "Graphic/Product Design",
        sixth: "Cyber Security/Ethical Hacking" 
    }

    return ( 
        <div className="services">
            <section className="services-services" id="services">
            <h2 className="section-title">Services</h2>

            <Fade top>    
            <p className="section__text">Together with our group of developers and designers who are intellectually prowessed in their various fields, we offer the following services:</p>
           
            <div className="services-wrapper">
                    <div className="services-wrapper1">
                        <div className="services-card">
                            <img src="" alt="" className="services-card-icon" />
                            <p className="services-card-text">
                                {ourServices.first}
                            </p>
                        </div>
                        <div className="services-card">
                            <img src="" alt="" className="services-card-icon" />
                            <p className="services-card-text">
                                {ourServices.second}
                            </p>
                        </div>
                        <div className="services-card">
                            <img src="" alt="" className="services-card-icon" />
                            <p className="services-card-text">
                                {ourServices.third}
                            </p>
                        </div>
                        </div>
                    <div className="services-wrapper2">
                        <div className="services-card">
                            <img src="" alt="" className="services-card-icon" />
                            <p className="services-card-text">
                                {ourServices.fourth}
                            </p>
                        </div>
                        <div className="services-card">
                            <img src="" alt="" className="services-card-icon" />
                            <p className="services-card-text">
                                {ourServices.fifth}
                            </p>
                        </div>
                        <div className="services-card">
                            <img src="" alt="" className="services-card-icon" />
                            <p className="services-card-text">
                                {ourServices.sixth}
                            </p>
                        </div>

                </div>
            </div>
            </Fade>

            </section>
        </div>
     );
}
 
export default Services;
<div className="services">

</div>