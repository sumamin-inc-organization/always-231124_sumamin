import LOGO_JP from "../images/navbar/logo.svg";
import LOGO_CN from "../images/navbar/logo-cn.svg";

const NAVLOGO = document.querySelector('[data-logo-change]');

export default function changeLogo(language){
    if(language === "jp"){
        NAVLOGO.src =LOGO_JP;
    }
    else if (language === "cn"){
        NAVLOGO.src =LOGO_CN;
    }
    
}