export default function setHtmlAttribute(language){
    if(language === "jp"){
        document.documentElement.lang = 'ja';
    }
    else if (language === "cn"){
        document.documentElement.lang = 'zh';
    }
}