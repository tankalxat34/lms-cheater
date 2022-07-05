/* 
LMS Cheater

ScriptUrl: https://lms.ranepa.ru/my/
Author: tankalxat34
GitHub: https://github.com/tankalxat34/lms-cheater
License: MIT

Скрипт для титульной страницы

*/


let successAlertSection = document.getElementById("block-region-side-pre")
let alertDiv = document.createElement("section")
alertDiv.className = " block_online_users block  card mb-3"
alertDiv.innerHTML = 
    `
<div class="card-body p-3">
    <h5 class="card-title d-inline">LMS cheater</h5>
    
    <p style="color: green;">Расширение успешно загружено</p>

    <div class="card-text content mt-3">
        <div class="info" style="text-align: justify">
            <p>Данное расширение позволит вам успешнее проходить онлайн-тесты, которые есть в СДО РАНХиГС. Оно подсвечивает вероятные ответы на каждый вопрос теста, если на конкретный вопрос уже были даны ответы другими пользователями расширения.</p>
            <ul class="cheater-alert">
                <li><a href="https://vk.com/tankalxat34" target="_blank">ВКонтакте</a></li>
                <li><a href="https://t.me/tankalxat34" target="_blank">Telegram</a></li>
                <li><a href="https://tankalxat34.github.io/" target="_blank">Сайт разработчика</a></li>
            </ul>
            <p>Перед запуском прокторинга убедитесь, что расширение отключено!</p>
        </div>
        <div class="footer"></div>
    </div>
</div>
`
successAlertSection.before(alertDiv)

// вывод в консоль надписи об успешной загрузке расширения
console.log("LMS cheater успешно подключен!")