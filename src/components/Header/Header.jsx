import "./Header.scss";

export default function Header() {
    return (
        <>
            <div className="container">
                <header className="pad">
                    <a href="https://www.cibc.com/en/personal-banking.html" target="_blank">
                        <img src="https://www.cibc.com/content/dam/global-assets/logos/cibc-logos/no-tagline/cibc-logo-colour-142x36.svg" alt="CIBC Logo" />
                    </a>
                </header>
            </div>
            <div className="container hero display-none">
                <div className="pad hero-copy-d">
                    <div className="hero-copy-d__text">
                        <span className="line-one">LOREM IPSUM</span>
                        <h1 className="line-two">Lorem ipsum dolor sit amet consectetur.</h1>
                        <span className="line-three">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam dignissimos quis.</span>
                    </div>
                </div>
            </div>
            <img src="https://image.mail.us.cibc.com/lib/fe3d11717164057d751675/m/1/Splash_mobile_campaign.jpg" className="img mbl-img-show" />
            <div className="pad hero-copy-m">
                <div className="hero-copy-m__text">
                    <span className="line-one">LOREM IPSUM</span>
                    <h1 className="line-two">Lorem ipsum dolor sit amet consectetur.</h1>
                    <span className="line-three">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam dignissimos quis.</span>
                </div>
            </div>
        </>
    );
}
