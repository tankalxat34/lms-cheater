let menu = document.getElementById("action-menu-1-menu")

let extentionLink = document.createElement("a")
extentionLink.innerHTML = 
`
<div class="dropdown-divider" role="presentation"><span class="filler">&nbsp;</span></div>
<a href="https://github.com/tankalxat34/lms-cheater" class="dropdown-item menu-action" role="menuitem" tabindex="-1">
    <i class="icon fa fa-tachometer fa-fw " aria-hidden="true"></i>
    <span class="menu-action-text">LMS Cheater</span>
</a>
`

menu.append(extentionLink)