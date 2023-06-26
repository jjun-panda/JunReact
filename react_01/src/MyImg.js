import styles from "./css/index.css";
import logo from "./assets/logo.png";

function MyImg() {
    return (
    <>
        <div className="bodyImg">
            <img src={logo} alt="mylogo"/> 
        </div>
    </>
    );
}

export default MyImg;