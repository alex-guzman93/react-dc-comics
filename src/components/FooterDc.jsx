import './FooterDc.css';
function FooterDC() {
    return (
        <footer>
            <div className="footer-top">

                <ul>
                    <li> <h4>DC COMICS</h4></li>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Tv</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>

                </ul>

                <ul>
                    <li><h4>SHOP</h4></li>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>

                </ul>

                <ul>
                    <li><h4>DC</h4></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Privacy policy(New)</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent Workshops</a></li>
                    <li><a href="#">CPSC Certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>

                <ul>
                    <li><h4>SITES</h4></li>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD Magazine</a></li>
                    <li><a href="#">DC Kids</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">DC Power Visa</a></li>

                </ul>


                <img src="./img/dc-logo-bg.png" alt="" />

            </div>

            <div className="footer-under">

                <button>SIGN-UP NOW!</button>

                <div className="social">
                    <span> FOLLOW US</span>
                    <a href="#"><img src="./img/footer-facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="./img/footer-twitter.png" alt="Twitter" /></a>
                    <a href="#"><img src="./img/footer-youtube.png" alt="Youtube" /></a>
                    <a href="#"><img src="./img/footer-pinterest.png" alt="Pinterest" /></a>
                    <a href="#"><img src="./img/footer-periscope.png" alt="Periscope" /></a>
                </div>
            </div>
        </footer>
    )
}

export default FooterDC