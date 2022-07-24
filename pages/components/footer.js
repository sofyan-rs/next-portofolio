import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer-section">
                        <div className="footer-widget">
                            <h3 id="contact">Contact Me</h3>
                            <div className="content">
                                <p><FontAwesomeIcon icon={faEnvelope} fixedWidth /> sofyan423@gmail.com</p>
                                <p><FontAwesomeIcon icon={faWhatsapp} fixedWidth /> 089513190059</p>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <h3>Alamat</h3>
                            <div className="content">
                                <p>Jl. Ciwaruga, Gang Mama Yaman, RT.02/RW.04, No.17, Kec. Parongpong, Kab. Bandung Barat, 40559</p>
                            </div>
                        </div>
                        <div className="footer-widget">
                            <h3>Links</h3>
                            <div className="content">
                                <div className="social-media">
                                    <a className="ln" href="https://www.linkedin.com/in/sofyan-rudiana-syamsi/"><FontAwesomeIcon icon={faLinkedin} fixedWidth /></a>
                                    <a className="ig" href="https://www.instagram.com/sofyan_zr/"><FontAwesomeIcon icon={faInstagram} fixedWidth /></a>
                                    <a className="git" href="https://github.com/sofyan-rs"><FontAwesomeIcon icon={faGithub} fixedWidth /></a>
                                    <a className="yt" href="https://www.youtube.com/channel/UCofhHvEtD_x4cvW4YYPUDWA"><FontAwesomeIcon icon={faYoutube} fixedWidth /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>Copyright &copy; 2022 - Created with <FontAwesomeIcon icon={faHeart} /> by Me</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;