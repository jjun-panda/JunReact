import styles from "./css/index.css";

function Header() {
    return (
    <>
        <div className="navHeader">
        <div className="container">
        <div className="navContainer">
            <a href="/" className="logoForm">
            <img className="logoImg" src="http://jjuns-c.com//components/jjun_logo_f.svg" alt="jjun_logo" />
            <div className="logoName" />
            </a>
            <ul className="navMenu">
            <a className href="/">
                <li>게시판</li>
            </a>
            <a className href="/" onclick="return confirm('준비중입니다')">
                <li>쇼핑몰</li>
            </a>
            <a className href="http://www.jjuns-c.com/">
                <li>개인사이트</li>
            </a>
            <a className href="http://www.jjuns-c.com/designsystem">
                <li>디자인시스템</li>
            </a>
            </ul>
        </div>
        </div>
    </div>
    </>
    );
}

export default Header;