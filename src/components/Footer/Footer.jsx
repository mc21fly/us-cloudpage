export default function Footer() {
    return (
        <div className="container grey">
            <footer>
                <p>
                    * All loans subject to credit approval. Minimum credit score required. Offer is subject to change, and may be withdrawn, at any time without notice. This offer
                    is valid for businesses with annual revenues less than $1,000,000 that are approved for a new Term Loan or Revolving Line of Credit by October 31, 2025. Lines
                    of credit available up to $100,000 with a maximum loan term of one year when you also have an existing or open a new deposit account. Rates for revolving lines
                    of credit are variable based on the WSJ prime rate and subject to change. Rate floor for this offer is 5%. Term loans available up to $100,000 with a maximum
                    loan term of one year. EasyPath lines of credit available up to $30,000 with a maximum loan term of one year when you also have an existing or open a new
                    deposit account. EasyPath term loans available up to $30,000 with a maximum loan term of one year. Entrepreneur lines of credit available up to $10,000 with a
                    maximum loan term of one year when you also have an existing or open a new deposit account. Entrepreneur term loans available up to $10,000 with a maximum loan
                    term of one year. Personal guarantee required for all business loans and lines of credit. Offer requires a new or existing deposit relationship with CIBC Bank
                    USA. Geographic restrictions apply and are subject to change at any time without notice. Clients with existing CIBC small business loans are not eligible for
                    this&nbsp;offer.
                </p>
                <p>Products and services are offered by CIBC Bank USA.</p>
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
