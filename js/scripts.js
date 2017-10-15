var link = document.querySelector(".content-price__btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback__close");
var form = popup.querySelector(".feedback__form");
var username = popup.querySelector("[name=username]");
var phone = popup.querySelector("[name=phone]");
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback__open");
  username.focus();
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback__open");
  popup.classList.remove(".feedback__error");
});
form.addEventListener("submit", function(event) {
  if (!username.value || !phone.value) {
    event.preventDefault();
    popup.classList.remove(".feedback__error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Нужно ввести имя и телефон");
    popup.classList.add(".feedback__error");
  }
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback__open")) {
      popup.classList.remove("feedback__open");
      popup.classList.remove(".feedback__error");
    }
  }
});

var isIframe = function() {
		var a = !1;
		try {
			self.location.href != top.location.href && ( a = !0 )
		} catch ( b ) {
			a = !0
		}
		return a
	};
	var myPlayer;
	jQuery( function() {
		if ( !isIframe() ) {
			var logo = $( "<a href='http://pupunzi.com/#mb.components/components.html' style='top:0'><img id='logo' border='0' src='http://pupunzi.com/images/logo.png' alt='mb.ideas.repository'></a>" );
			$( "#wrapper" ).prepend( logo ), $( "#logo" ).fadeIn()
		}
		myPlayer = jQuery( "#bgndVideo" ).vimeo_player( {
			mobileFallbackImage: "https://i.ytimg.com/vi/YgmIibSnZs0/maxresdefault.jpg"
		} );
	} );
