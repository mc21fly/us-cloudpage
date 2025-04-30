export default function Footer() {
    return (
        <div className="container grey">
            <footer>
                <p>
                    Consumer and commercial banking products and services are offered through CIBC Bank USA. Member FDIC and Equal Housing Lender. All loans are subject to credit
                    approval. Trust services and investment products are offered by CIBC Private Wealth Management. CIBC Private Wealth Management includes CIBC National Trust
                    Company, CIBC Delaware Trust Company and CIBC Private Wealth Advisors, Inc. (a registered investment adviser) all of which are wholly owned subsidiaries of CIBC
                    Private Wealth Group, LLC — and the private banking division of CIBC Bank USA. Trust services and investment products are not FDIC insured, not deposits or
                    obligations of, or guaranteed by, CIBC Bank USA or CIBC National Trust Company, and are subject to investment risk, including loss of principal.
                </p>
                <p>Commercial real estate products and services offered by CIBC Bank USA and CIBC Inc.</p>
                <p>
                    CIBC Capital Markets is a trademark brand name under which CIBC and some of its subsidiaries, including CIBC World Markets Inc., CIBC World Markets Corp. and
                    CIBC Bank USA, provide different products and services. Capital Markets products are not FDIC insured; not deposits or obligations of, or guaranteed by, CIBC
                    Bank USA; and are subject to investment risk, including loss of principal.
                </p>
                <p>This website is not intended for use by residents of the European Union (EU).</p>
                <p>
                    California residents, learn about the{" "}
                    <a href="https://us.cibc.com/en/legal/california-consumer-privacy-act.html" target="_blank">
                        California Privacy Policy
                    </a>
                </p>
                <p>The CIBC Logo is a registered trademark of CIBC, used under license. ©{new Date().getFullYear()} CIBC Bank USA.</p>
                <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
                <p>
                    <img
                        src="https://image.s12.sfmc-content.com/lib/fe36117371640479771576/m/1/55b86060-6930-4dc6-addf-a0ebe9a8097e.png"
                        alt="Equal housing lender | Member FDIC"
                        style={{ height: "38px", maxWidth: "451px", width: "451px" }}
                    />
                </p>
            </footer>
        </div>
    );
}
