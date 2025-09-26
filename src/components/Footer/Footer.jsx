export default function Footer() {
    return (
        <div className="container grey">
            <footer>
                <p>
                    <sup style={{ lineHeight: 0 }}>&reg;</sup>The CIBC Logo is a registered trademark of CIBC, used under license.
                </p>
                <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </footer>
        </div>
    );
}
