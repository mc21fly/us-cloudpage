import "./Header.scss";

export default function Header() {
    return (
        <>
            <div className="container burgundy">
                <div className="container pad ribbon">
                    <a href="https://us.cibc.com/en/about-us/locations.html" target="_blank">
                        CIBC US Locations
                    </a>
                    <a href="https://us.cibc.com/en/contact-us.html" target="_blank">
                        Contact Us
                    </a>
                    <a href="https://us.cibc.com/en/about-us.html" target="_blank">
                        About Us
                    </a>
                </div>
            </div>
            <div className="container">
                <header className="pad">
                    <a href="https://us.cibc.com/en/personal.html" target="_blank">
                        <img src="https://www.cibc.com/content/dam/global-assets/logos/cibc-logos/no-tagline/cibc-logo-colour-142x36.svg" alt="CIBC Logo" />
                    </a>
                </header>
            </div>
            <div className="container burg">
                <div className="container hero pad">
                    <h1>Limited-time offer</h1>
                    <span>Boost your small business with a loan at Prime minus 2%*</span>
                </div>
            </div>
        </>
    );
}
