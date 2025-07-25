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
                    <span>Limited-time offer</span>
                    <h1>
                        Get a term loan or revolving line of credit, <br className="mbl-hide hide-xl" />
                        currently at Prime minus 2%*
                    </h1>
                    <ul>
                        <li>Loan up to $100,000</li>
                        <li>Loan term up to 1 year</li>
                        <li>No loan origination fees</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
