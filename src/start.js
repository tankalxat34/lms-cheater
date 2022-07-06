/* 
LMS Cheater

ScriptUrl: https://lms.ranepa.ru/my/
Author: tankalxat34
GitHub: https://github.com/tankalxat34/lms-cheater
License: MIT

Скрипт для титульной страницы

*/

const MANIFEST = chrome.runtime.getManifest()

function getData(url, resolve) {
    
    fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => console.error(error))

}


function checkNewReleases(json) {
    console.log("Проверка новых версий расширения")
    let divForButton = document.getElementById("button-update-extension")
    if (json[0].tag_name !== MANIFEST.version) {
        divForButton.innerHTML = `<button type="submit" class="btn btn-primary" title="" onclick="window.open('https://github.com/tankalxat34/lms-cheater/releases/tag/${json[0].tag_name}')">Обновить расширение</button><br>
        <span style='color: green;'>Актуальная версия: ${json[0].tag_name}</span>`
    } else {
        divForButton.innerHTML = "<span style='color: green;'>Обновление не требуется</span>"
    }
}


let successAlertSection = document.getElementById("block-region-side-pre")
let alertDiv = document.createElement("section")
alertDiv.className = " block_online_users block  card mb-3"
alertDiv.innerHTML = 
    `
<div class="card-body p-3">
    <h5 class="card-title d-inline">${MANIFEST.name}</h5>
    
    <p style="color: green;">Расширение успешно загружено</p>

    <div class="card-text content mt-3">
        <div class="info" style="text-align: justify">
            <p>Данное расширение позволит вам успешнее проходить онлайн-тесты, которые есть в СДО РАНХиГС. Оно подсвечивает вероятные ответы на каждый вопрос теста, если на конкретный вопрос уже были даны ответы другими пользователями расширения.</p>
            <p>У расширения есть и дополнительный функционал: быстрый поиск в интернете, статистика других пользователей по тестам и вопросам в них, и многое другое.</p>
            <p>Перед запуском прокторинга убедитесь, что расширение отключено!</p>
            <div id="button-update-extension"></div>
        </div>
        <span>Версия: </span><span style="color: grey;">${MANIFEST.version}</span><br>
        <span>Автор: </span><span style="color: grey;">${MANIFEST.author}</span><br>

        <a href="https://vk.com/tankalxat34" target="_blank"><img src="https://www.svgrepo.com/show/303449/vk-1-logo.svg" width=25px></a>
        <a href="https://t.me/tankalxat34" target="_blank"><img src="https://www.svgrepo.com/show/354443/telegram.svg" width=25px></a>
        <a href="https://tankalxat34.github.io/" target="_blank" style="text-decoration: none"><span style="color: cyan; font-size: 25px;"> t </span></a>
        <div class="footer"></div>
    </div>
</div>
`
successAlertSection.before(alertDiv)

// проверка обновлений
getData('https://api.github.com/repos/tankalxat34/lms-cheater/releases', checkNewReleases)

// вывод в консоль надписи об успешной загрузке расширения
console.log("LMS cheater успешно подключен!")