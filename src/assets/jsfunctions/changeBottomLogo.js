import LOGO_JP from "../images/navbar/logo.svg";
import LOGO_CN from "../images/navbar/logo-cn.svg";
import LOGO_BOTTOM_CN from "../images/navbar/logo-chinese-w.svg";
import LOGO_BOTTOM_WHITE from "../images/navbar/bottomLogo.png";
const BOTTOM_LOGO = document.querySelector("[data-bottom-logo]")

export default function setBottomLogo(lang,page){
    if(page === "index"){
        if(lang === "jp"){
            BOTTOM_LOGO.src = LOGO_BOTTOM_WHITE;
        }
        else if(lang === "cn"){
            BOTTOM_LOGO.src = LOGO_BOTTOM_CN;
        }
    }
    else{
        if(lang === "jp"){
            BOTTOM_LOGO.src = LOGO_JP;
        }
        else if(lang === "cn"){
            BOTTOM_LOGO.src = LOGO_CN;
        }
    }

}