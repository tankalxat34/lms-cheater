/* 
LMS Cheater

ScriptUrl: https://lms.ranepa.ru/my/
Author: tankalxat34
GitHub: https://github.com/tankalxat34/lms-cheater
License: MIT

Добавление новых функтов меню

<button type="submit" class="btn btn-primary" id="single_button62c348cc3adc314" title="">Продолжить последнюю попытку</button>
*/

let menu = document.getElementById("action-menu-1-menu")

let extentionLink = document.createElement("a")
extentionLink.innerHTML = 
`
<div class="dropdown-divider" role="presentation"><span class="filler">&nbsp;</span></div>
<a href="https://github.com/tankalxat34/lms-cheater" class="dropdown-item menu-action" role="menuitem" tabindex="-1" target="_blank">
    <i class="icon fa fa-tachometer fa-fw " aria-hidden="true"></i>
    <span class="menu-action-text">LMS Cheater</span>
</a>
<a href="https://tankalxat34.github.io" class="dropdown-item menu-action" role="menuitem" tabindex="-1" target="_blank">
    <i class="icon fa fa-home fa-fw " aria-hidden="true"></i>
    <span class="menu-action-text">Сайт разработчика</span>
</a>
`

menu.append(extentionLink)