// Scroll to anchors
(function () {
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.null').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

//toggle dark-mode / light-mode


const btn = document.querySelector(".switch");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "dark") {
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
        ? "dark"
        : "light";
    } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
        ? "light"
        : "dark";
    }
    localStorage.setItem("theme", theme);
});


// When scrolling, we run the function
let addbtn = document.querySelector('.fixed-btn')
function magic() {
    if (window.pageYOffset > 20) {
    addbtn.style.opacity = '1'
    } else { addbtn.style.opacity = '0' }
}
addbtn.onclick = function () {
	window.scrollTo(0,0)
}
window.onscroll = magic


$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#back-top').show();
		} else {
			$('#back-top').hide();
		}
	});

	$('#back-top').click(function(){
		$('html, body').animate({scrollTop: 0}, 800);
		return false;
	});
});


// localStorage for switcher
const toggle = document.querySelector('.switch');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

toggle.addEventListener('change', function() {
localStorage.setItem('toggleState', toggle.checked);
});

