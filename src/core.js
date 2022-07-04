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

addCssToDom("lms-styles.css")

let successAlertSection = document.getElementById("block-region-side-pre")
let alertDiv = document.createElement("section")
alertDiv.className = "block card mb-3 success-cheeter-alert"
alertDiv.innerHTML = "<h5 class='card-title d-inline'>LMS Cheeter успешно подключен</h5>"
successAlertSection.append(alertDiv)

console.log("LMS Cheeter успешно подключен!")