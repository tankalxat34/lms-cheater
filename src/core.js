// let div = document.createElement('div');
// div.className = "card-body p-3";
// div.innerHTML = '<h5 id="instance-727-header" class="card-title d-inline">LMS Cheeter готов к работе</h5>';
// document.aside.append(div);

// document.getElementById("instance-229-header").textContent = "Расширение подключено"

// загрузка стилей для оформления
function addCssToDom(url) {
    style = document.createElement('link');
    style.rel   = 'stylesheet';
    style.type  = 'text/css';
    style.href  = url;
    document.head.appendChild(style);
}

addCssToDom("https://raw.githubusercontent.com/tankalxat34/lms-cheeter/main/src/lms-styles.css")
console.log("Стили успешно загружены!")

// прочитать стили
let successAlertSection = document.getElementById("block-region-side-pre")
let alertDiv = document.createElement("section")
alertDiv.className = " block_online_users block  card mb-3"
alertDiv.innerHTML = 
    `
<div class="card-body p-3" id="cheeter-alert">
    <h5 class="card-title d-inline">Расширение LMS Cheeter загружено</h5>

    <div class="card-text content mt-3">
        <div class="info" style="text-align: justify">
            <p>Данное расширение позволит вам успешнее проходить онлайн-тесты, которые есть в СДО РАНХиГС. Оно подсвечивает вероятные ответы на каждый вопрос теста, если на конкретный вопрос уже были даны ответы другими пользователями расширения.</p>
            <ul>
                <li><a href="https://vk.com/tankalxat34">Автор расширения</a></li>
            </ul>
        </div>
        <div class="footer"></div>
    </div>
</div>
`
successAlertSection.append(alertDiv)

// вывод в консоль надписи об успешной загрузке расширения
console.log("LMS Cheeter успешно подключен!")