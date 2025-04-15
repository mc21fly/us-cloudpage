import "./Header.scss";

export default function Header() {
    return (
        <>
            <div className="container">
                <header className="pad">
                    <a href="https://us.cibc.com/en/personal.html" target="_blank">
                        <img src="https://www.cibc.com/content/dam/global-assets/logos/cibc-logos/no-tagline/cibc-logo-colour-142x36.svg" alt="CIBC Logo" />
                    </a>
                </header>
            </div>
            <div className="container burg">
                <div className="container hero pad">
                    <span>Commercial banking</span>
                    <h1>
                        For over 155 years, we've been helping <br className="mbl-hide" />
                        clients reach their unique goals
                    </h1>
                </div>
            </div>
        </>
    );
}
