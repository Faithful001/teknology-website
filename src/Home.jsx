const Home = () => {
    return ( 
        <div className="home" style={{margin: '20px'}}>

{/* <main className="l-main"> */}
<section className="home-home bd-grid" id="home">
                <div className="home__data">
                    <div className="webuild-wedeliver">
                        <h1 className="home-title">We build,<br/>We deliver</h1>
                    </div>
                    <p className="home-title-quote">Entrust us with your business today</p>

                    <button className="button-button"><a href="mailto: build.teknology@gmail.com" className="button">Hire Us</a></button>
                </div>

                <div className="home__social">
                    <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-twitter' ></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-whatsapp' ></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-facebook' ></i></a>
                </div>

            </section>

        </div>
     );
}
 
export default Home;