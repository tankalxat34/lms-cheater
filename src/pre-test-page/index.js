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
newDiv.innerHTML = 
`
<div class="card" id="cheater-stat-block">
    <div class="card-body">
        <div class="d-sm-flex align-items-center">
            <div class="mr-auto">
                <div class="page-context-header">
                    <div class="page-header-headings">
                        <h2>Сложность теста</h2>
                    </div>

                </div>

                <p>Эта статистика поможет вам определить сложность теста на основе результатов других пользователей расширения</p>

                <table id="cheater-table-stats" style="text-align: center">
                    <tbody>
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                        </tr>
                        <tr>
                            <td>Всего</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Прошли тест</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Не прошли тест</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="header-actions-container flex-shrink-0" data-region="header-actions-container"></div>
        </div>
    </div>
</div>
<br>
`

page.after(newDiv)
