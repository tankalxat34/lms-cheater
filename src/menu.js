/* 
LMS Cheater

ScriptUrl: https://lms.ranepa.ru/my/
Author: tankalxat34
GitHub: https://github.com/tankalxat34/lms-cheater
License: MIT

Добавление новых функтов меню

*/

let menu = document.getElementById("action-menu-1-menu")

let extentionLink = document.createElement("a")
extentionLink.innerHTML = 
`
<div class="dropdown-divider" role="presentation"><span class="filler">&nbsp;</span></div>
<a href="${chrome.extension.getURL("pages/settings/index.html")}" class="dropdown-item menu-action" role="menuitem" tabindex="-1" target="_blank">
    <i class="icon fa fa-tachometer fa-fw " aria-hidden="true"></i>
    <span class="menu-action-text">Настройки</span>
</a>
<a href="https://tankalxat34.github.io" class="dropdown-item menu-action" role="menuitem" tabindex="-1" target="_blank">
    <i class="icon fa fa-home fa-fw " aria-hidden="true"></i>
    <span class="menu-action-text">Сайт разработчика</span>
</a>
`

menu.append(extentionLink)