/* 
LMS Cheater

ScriptUrl: https://lms.ranepa.ru/my/
Author: tankalxat34
GitHub: https://github.com/tankalxat34/lms-cheater
License: MIT

Скрипт для страницы с просмотром попыток

*/


let page = document.getElementById("page-header")

let newDiv = document.createElement("div")
// newDiv.innerHTML = 
// `
// <div class="row pb-3 d-print-block">
//     <div class="col-12">
//         <section aria-label="Содержимое">

//             <span class="notifications" ></span>
//             <div role="main">
//                 <span></span>
//                 <h2>Итоговый тест по курсу</h2>
//             </div>
//         </selection>
//     </div>
// </div>
// `
newDiv.innerHTML = 
`
<div class="card" id="cheater-stat-block">
    <div class="card-body">
        <div class="d-sm-flex align-items-center">
            <div class="mr-auto">
                <div class="page-context-header">
                    <div class="page-header-headings">
                        <h2>Статистика прохождения теста</h2>
                    </div>

                </div>

                <p>Эта статистика поможет вам определить сложность теста на основе результатов других пользователей расширения</p>
            </div>

            <div class="header-actions-container flex-shrink-0" data-region="header-actions-container"></div>
        </div>
    </div>
</div>
<br>
`

page.after(newDiv)

console.log("hello world 1234")