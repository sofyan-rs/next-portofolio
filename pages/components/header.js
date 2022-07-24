import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';

const Header = ({ dark, darkMode }) => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <h1><FontAwesomeIcon icon={faCarBattery} /></h1>
                    </div>
                    <input id="showmenu" type="checkbox" role="button"/><label className="showmenu" htmlFor="showmenu"><FontAwesomeIcon icon={faBars} /></label>
                    <div className="darkmode-toggle">
                        <input type="checkbox" name="darkmode" id="darkmode" onChange={darkMode} checked={dark === true ? "true" : ""} />
                        <label htmlFor="darkmode" className="mode">
                            <FontAwesomeIcon icon={faMoon} />
                            <FontAwesomeIcon icon={faSun} />
                            <div className="toggle"></div>
                        </label>
                    </div>
                    <div className="nav" id="navigation">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#about">About Me</Link></li>
                            <li><Link href="#project">Project</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;