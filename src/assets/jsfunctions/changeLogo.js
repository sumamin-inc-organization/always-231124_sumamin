import LOGO_JP from "../images/navbar/logo.svg";
import LOGO_CN from "../images/navbar/logo-chinese.png";

const NAVLOGO = document.querySelector('[data-logo-change]');

export default function changeLogo(){
    NAVLOGO.src =LOGO_CN;
}