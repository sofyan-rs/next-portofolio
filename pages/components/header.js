import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faCarBattery } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Header = () => {
    const [ mounted, setMounted ] = useState(false);
    const { theme, setTheme } = useTheme();
    useEffect(() => setMounted(true), []);
    if (!mounted) {
        return null;
    }

    return (
        <div>
            <header>
                <div className="container">
                    <div className="logo">
                        <h1><FontAwesomeIcon icon={faCarBattery} /></h1>
                    </div>
                    <input id="showmenu" type="checkbox" role="button"/><label className="showmenu" htmlFor="showmenu"><FontAwesomeIcon icon={faBars} /></label>
                    <div className="darkmode-toggle">
                        <input type="checkbox" name="darkmode" id="darkmode" onChange={() => {theme === 'dark' ? setTheme('light') : setTheme('dark')}} checked={theme === 'dark' ? "true" : ""} />
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