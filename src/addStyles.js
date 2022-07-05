/* 
LMS Cheater

ScriptUrl: https://lms.ranepa.ru/my/
Author: tankalxat34
GitHub: https://github.com/tankalxat34/lms-cheater
License: MIT

Скрипт для добавления стилей расширения в html документ

*/

function addLocalStyle(url) {

    const fullURL = chrome.extension.getURL(url)

    let headTag = document.head

    let linkWithCSS = document.createElement("link")
    linkWithCSS.rel = "stylesheet"
    linkWithCSS.type = "text/css"
    linkWithCSS.href = fullURL

    headTag.append(linkWithCSS)
    
    console.log("LMS Cheater: Добавлены стили " + url)
}

addLocalStyle("src/lms-styles.css")