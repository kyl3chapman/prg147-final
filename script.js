//slideshow
(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 3000);
		},
		stopStart: function() {
			var self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();

//application 1
"use strict";
var $ = function(id){
    return document.getElementById(id);
};
var myError = document.getElementById("errorMsg");

function checkFirst(){
    var fname = $("first").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if(!testName.test(fname)){
        myError.innerHTML="Names should only include text characters and do spaces";
        $("first").value = "";
    }
    else{
        myError.innerHTML = "First name meets criteria";
    }
}

function checkLast(){
    var lname = $("last").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if(!testName.test(lname)){
        myError.innerHTML = "Names should only include text characters and do spaces";
        $("last").value = "";
    }else{
        myError.innerHTML = "Last name meets criteria";
    }

}
function checkEmail(){
    var myEmail = $("email").value;
    var testEmail = new RegExp(".+\@.+\..+");
    if(!testEmail.test(myEmail)){
        myError.innerHTML = "That is not a proper email, it needs an @ and a domain";
        $("email").value = "";
    }
    else{
        myError.innerHTML = "Email meets requirements";
    }
}


function checkPhone(){
    var phone = $("phone").value;
    var testPhone = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if(!testPhone.test(phone)){
        myError.innerHTML="Please use the format (555) 555-5555'";
        $("phone").value = "";
    }
    else{
        myError.innerHTML = "Phone number meets criteria";
    }

}

function checkZipcode(){
    var zipcode = $("zipcode").value;
    var testZipcode = new RegExp("^[0-9]{4}\s{0,1}[a-zA-Z]{2}$");
    if(!testZipcode.test(zipcode)){
        myError.innerHTML="Not a valid Zipcode";
        $("zipcode").value = "";
    }
    else{
        myError.innerHTML = "Zipcode meets criteria";
    }

}