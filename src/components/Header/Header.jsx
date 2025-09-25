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
            <div className="container hero display-none">
                <div className="pad hero-copy-d">
                    <div className="hero-copy-d__text">
                        <span className="line-one">LIMITED-TIME OFFER</span>
                        <h1 className="line-two">Boost your business with a loan at Prime minus 2%*</h1>
                        <span className="line-three">Get a one-year term loan or revolving line of credit up to $100,000 with no origination fee</span>
                    </div>
                </div>
            </div>
            <img src="https://image.mail.us.cibc.com/lib/fe3d11717164057d751675/m/1/Splash_mobile_campaign.jpg" className="img mbl-img-show" />
            <div className="pad hero-copy-m">
                <div className="hero-copy-m__text">
                    <span className="line-one">LIMITED-TIME OFFER</span>
                    <h1 className="line-two">Boost your business with a loan at Prime minus 2%*</h1>
                    <span className="line-three">Get a one-year term loan or revolving line of credit up to $100,000 with no origination fee</span>
                </div>
            </div>
        </>
    );
}
