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

function addRawSctipt(stringScript) {
    let headTag = document.head

    let linkWithScript = document.createElement("script")
    linkWithScript.innerText = stringScript

    headTag.append(linkWithScript)
    
    console.log("LMS Cheater: Добавлен скрипт")
}


addLocalStyle("src/lms-styles.css")

// addRawSctipt(`const MANIFEST = chrome.runtime.getManifest()function getData(url, resolve) {fetch(url).then(response => response.json()).then(json => resolve(json)).catch(error => console.error(error))}function checkNewReleases(json) {if (json[0].tag_name !== MANIFEST.version) {alert("Доступная новая версия " + json[0].tag_name)} else {alert("Новых версий не обнаружено")}}`)