
/**
* tag 代码
*/

function getColor() {
    var colorArr = ["#232f3e", "#f57d00", "#b2becd", "#07a15e", "#2674fa", "#ff1c72", "#0056f9b3", "#bf9b08e3"];
    var color = Math.floor(Math.random() * colorArr.length);

    return colorArr[color];
}

getColor();

var taglist = document.querySelectorAll(".article-tags a");
taglist.forEach((a) => {
    a.style.background = getColor();

    a.addEventListener("mouseover", ()=> {
        a.style.filter = `drop-shadow(0 0 10px ${a.style.background})`;
    });

    a.addEventListener("mouseout", ()=>{
        a.style.filter = "none";
    });
});

/**
 * 侧栏标签代码
 */
var sidebar_tag = document.querySelectorAll(".tags a");
sidebar_tag.forEach((a) => {
    a.style.background = getColor();

    a.addEventListener("mouseover", ()=> {
        a.style.filter = `drop-shadow(0 0 10px ${a.style.background})`;
    });

    a.addEventListener("mouseout", ()=>{
        a.style.filter = "none";
    });
});

/**
 * 隐藏侧栏代码
 */
var hide_sidebar = document.querySelector("#sidebar");

function hideSidebarFunction() {
    if (hide_sidebar.style.display != "none") {
        hide_sidebar.style.display = "none";
    } else {
        hide_sidebar.style.display = "block";
    }
}


/**
 * nav 代码
 */
var nav = document.querySelectorAll(".nav-ul li a");
nav.forEach((nav) => {
    console.log(nav.getAttribute("class"));
});


/**
 * 返回顶部
 */
// Get the button
var goTopBtn = document.querySelector("#go-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopBtn.style.display = "block";
    } else {
        goTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
