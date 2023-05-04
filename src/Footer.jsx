import Fade from 'react-reveal/Fade';

const Footer = () => {
    return ( 
        <div className="footer">
            <Fade bottom>
            <div className="footer-background">
            <p className="footer__title">Teknology</p>
            <div className="footer__social">
                <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p className="footer__copy">&#169; Teknology. All rights reserved</p>
            </div>
            </Fade>

        </div>
     );
}
 
export default Footer;