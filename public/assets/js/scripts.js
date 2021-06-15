
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		var offset = $(element_class).offset();
		scroll_to = $(element_class).offset().top;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		console.log('scroll to ',this);
		e.preventDefault();
		scroll_to($(this), $('.top-content').outerHeight());
	});
	/*
		Scroll to the form and select the course by default
	*/
	$('a.scroll-link-and-select').on('click', function(e) {
		console.log('scroll to and select',this);
		e.preventDefault();
		$('#course-selected').first().val(this.id);
		scroll_to($(this), $('.top-content').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content .text').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.call-to-action-container').backstretch("assets/img/backgrounds/2.jpg");
    $('.testimonials-container').backstretch("assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$('.top-content').backstretch("resize");
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
    
    /*
        Wow
    */
    new WOW().init();

	// Form submit handler
	$( ".register-info" ).submit(function( event ) {
		//alert( "Handler for .submit() called." );
		event.preventDefault();
		let fullName = $('#full-name').val();
		let emailId = $('#email-id').val();
		let phoneNo = $('#phone-number').val();
		let course = $('#course-selected').val();
		console.log(fullName,' , ',emailId,' , ',phoneNo,' , ',course);
		let message = 'Your ' + phoneNo + ' order of ' + course + ' has shipped and should be delivered on ' + emailId + '. Details : ' + fullName;
		sendWhatsappMsg(message);
	});
	
});


jQuery(window).load(function() {
	
	/*
		Hidden images
	*/
	$(".testimonial-image img").attr("style", "width: auto !important; height: auto !important;");
	
});

