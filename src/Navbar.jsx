import { useState } from "react";
const Navbar = () => {
    const [click, setClick] = useState(false);

    const toggleMenu = ()=>{
        setClick(!click);
    }

    const closeMenu = ()=>{
        setClick(false);
    }
    return ( 
        <div className="navbar">

        <header className="l-header">
            <nav className="nav bd-grid">
                
                    <a href="#" className="nav__logo">Teknology</a>
                
                <div className="nav__toggle" onClick={()=>toggleMenu()}>
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
                </div>

                <div className={click ? 'nav__menu active' : 'nav__menu'}>
                
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link" onClick={closeMenu}>Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link" onClick={closeMenu}>About</a></li>
                        <li className="nav__item"><a href="#portfolio" className="nav__link" onClick={closeMenu}>Portfolio</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>

               
            </nav>
        </header>

        </div> 
        
    );
}
 
export default Navbar;