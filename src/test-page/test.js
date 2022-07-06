/* 
LMS Cheater

ScriptUrl: https://lms.ranepa.ru/my/
Author: tankalxat34
GitHub: https://github.com/tankalxat34/lms-cheater
License: MIT

Скрипт для страницы с тестом

*/

const INTERNET_PATTERNS = {
    yandex: {
        url: "https://yandex.ru/search/?text=",
        replacedSpace: "+",
        name: "Яндекс"
    },
    google: {
        url: "https://www.google.ru/search?ie=UTF-8&q=",
        replacedSpace: " ",
        name: "Google"
    },
    mailru: {
        url: "https://go.mail.ru/search?mailru=1&q=",
        replacedSpace: " ",
        name: "Mail.ru"
    },
    brave: {
        url: "https://search.brave.com/search?q=",
        replacedSpace: "+",
        name: "Brave"
    },
    bing: {
        url: "https://www.bing.com/search?q=",
        replacedSpace: "+",
        name: "Bing"
    }
}

let questionsArray = document.getElementsByClassName("formulation clearfix")
let answersBlocksArray = document.getElementsByClassName("answer")
let questionsIdArray = document.getElementById("responseform")

questionsIdArray = questionsIdArray.childNodes[0].childNodes
let clearedIdArray = [];
let iterator = 0;

let hrefSearchArray = []

// заполнем массив с текстами вопросов
for (let q of questionsArray) {
    hrefSearchArray.push(q.childNodes[2].innerText)
}

// заполняем массив с id вопросов
for (let question of questionsIdArray) {
    clearedIdArray.push(question.id)
}


// пробежка по вариантам ответа к каждому вопросу
// добавление блоков к каждому вопросу
for (let answer of answersBlocksArray) {
    let divStat = document.createElement("div")
    divStat.className = "cheater-test"
    divStat.innerHTML = 
`

<div>
    <h4>Быстрый поиск в интернете</h4>
    <div style="display: inline-block; padding: 5px 10px;">
        <a target="_blank" href="${INTERNET_PATTERNS.yandex.url +   hrefSearchArray[iterator].replaceAll(" ", INTERNET_PATTERNS.yandex.replacedSpace)}">${INTERNET_PATTERNS.yandex.name}</a>
        <a target="_blank" href="${INTERNET_PATTERNS.google.url +   hrefSearchArray[iterator].replaceAll(" ", INTERNET_PATTERNS.google.replacedSpace)}">${INTERNET_PATTERNS.google.name}</a>
        <a target="_blank" href="${INTERNET_PATTERNS.mailru.url +   hrefSearchArray[iterator].replaceAll(" ", INTERNET_PATTERNS.mailru.replacedSpace)}">${INTERNET_PATTERNS.mailru.name}</a>
        <a target="_blank" href="${INTERNET_PATTERNS.brave.url +    hrefSearchArray[iterator].replaceAll(" ", INTERNET_PATTERNS.brave.replacedSpace)}">${INTERNET_PATTERNS.brave.name}</a>
        <a target="_blank" href="${INTERNET_PATTERNS.bing.url +     hrefSearchArray[iterator].replaceAll(" ", INTERNET_PATTERNS.bing.replacedSpace)}">${INTERNET_PATTERNS.bing.name}</a>
    </div>
</div>

<details>
    <summary><b>Информация о вопросе</b></summary>
    <table class="cheater-test">
        <tbody>
            <tr>
                <td><b>id вопроса:</b></td>
                <td>${clearedIdArray[iterator]}</td>
            </tr>
        </tbody>
    </table>
</details>
`
    answer.append(divStat)
    iterator++
}


iterator = 0

// пробежка по вариантам ответов
// получение данных
let allAnswersArray = document.getElementsByClassName("flex-fill ml-1")
// let allAnswersArray = document.getElementsByClassName("answer")
for (let element of allAnswersArray) {
    let percent = Math.random()
    console.log(element.parentElement.id)

    // добавление стилей к правильному ответу
    element.parentElement.classList.add("right-answer");
    element.parentElement.style.backgroundColor = `rgba(0, 100, 0, ${percent})`;
    if (percent * 100 >= 80) {
        element.parentElement.style.color = `rgba(255, 255, 255, .99)`;
    } else if (percent * 100 >= 50) {
        element.parentElement.style.color = `rgba(220, 220, 220, .99)`;
    } else {
        element.parentElement.style.color = `black`;
    }

    // добавление процентов людей, которые ответили на этот вопрос
    element.innerHTML += `<span><b> (${String(percent * 100).split(".")[0]}%)</b></span>`
    iterator++
}





console.log("Расширение подключено к тесту: " + document.URL)

