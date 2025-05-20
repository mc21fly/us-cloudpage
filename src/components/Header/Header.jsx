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
                    <span>Private wealth</span>
                    <h1>
                        For over 155 years, we've been helping <br className="mbl-hide hide-xl" />
                        clients reach their unique&nbsp;goals
                    </h1>
                </div>
            </div>
        </>
    );
}
