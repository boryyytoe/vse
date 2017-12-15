

var j$ = jQuery.noConflict();

j$(document).ready(function(){
	
	var screenWidth = j$(window).width();
	  // if window width is smaller than 800 remove the autoplay attribute
	  // from the video
	  if (screenWidth < 800){
			j$('#videoBackground').removeAttr('autoplay');
	  } else {
		j$('#videoBackground').attr('autoplay');
	  }
	
	var submitIcon = j$('.searchbox-icon');
	var inputBox = j$('.searchbox-input');
	var searchBox = j$('.searchbox');
	var isOpen = false;
	submitIcon.click(function(){
		if(isOpen == false){
			searchBox.addClass('searchbox-open');
			inputBox.focus();
			isOpen = true;
		} else {
			searchBox.removeClass('searchbox-open');
			inputBox.focusout();
			isOpen = false;
		}
	});  
	 submitIcon.mouseup(function(){
			return false;
		});
	searchBox.mouseup(function(){
			return false;
		});
	j$(document).mouseup(function(){
			if(isOpen == true){
				j$('.searchbox-icon').css('display','block');
				submitIcon.click();
			}
		});

	j$(".servicesBox").click(function(){
		j$(this).toggleClass("overlay").find("p").toggle("fast", "linear").css("cursor", "default");		
	});
	
	if (j$(window).width() < 1024) {

	j$(".execBios").click(function(){
		j$(this).find(".bioBlurb").toggle("fast", "linear");
		j$(this).mouseleave(function(){ 
			j$(".bioBlurb").hide("slow");
		});
	});
}
	
	
	
	
	/*
	j$("#bizDevLink").click(function(){
		j$("#bizDev").toggle("fast", "linear");
		j$("#location").hide();
	});
	j$("#hrLink").click(function(){
		j$("#humanResources").toggle("fast", "linear");
		j$("#location").hide();
	});
	j$("#csoLink").click(function(){
		j$("#corpSupportOffice").toggle("fast", "linear");
		j$("#location").hide();
	});
	*/
	
	//When ever the modal is shown the below code will execute.
	j$(".modal").on("shown.bs.modal", function()  {
		var urlReplace = "#" + j$(this).attr('id'); 
		history.pushState(null, null, urlReplace); 
	  });

	  // This code gets executed when the back button is clicked, hide any/open modals.
	  j$(window).on('popstate', function() { 
		j$(".modal").modal('hide');
	  });
		
	
	
/*
	j$("#hrLink").click(function (e){
		j$("#mySidenav").css("width", "380px"); 
		j$("body").after( "<div class='modal-backdrop fade side in'></div>" );
		j$("html").addClass("modall");
		
	});
	
	j$("#mySidenav .close").click(function (){
		j$(this).parent().css("width", "0"); 
		j$(".modal-backdrop").remove();		
	});
	
	j$(".modall").click(function(e){
		alert("fooadf");
	});
	
*/	

/*
	 j$(".smoothScroll").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  j$('html, body').animate({
			scrollTop: j$(hash).offset().top - 205
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
	  });
*/

j$('.smoothScroll').click(function(event) {
    var target;
    var navOffset;

    // Store hash (#)
    target = this.hash;

    // Store navbar height (if the navbar position is fixed)
    // You must add these attributes to the <body> tag : data-spy="scroll" data-target="#navbar" data-offset="50" 
    navOffset = 205;

    // Prevent default anchor click behavior
    event.preventDefault();

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
    return j$('html, body').animate({
        scrollTop: j$(this.hash).offset().top - navOffset
    }, 800, function() {
        return window.history.pushState(null, null, target);
    });
});


	
});
	function buttonUp(){
		var inputVal = j$('.searchbox-input').val();
		inputVal = j$.trim(inputVal).length;
		if( inputVal !== 0){
			j$('.searchbox-icon').css('display','none');
		} else {
			j$('.searchbox-input').val('');
			j$('.searchbox-icon').css('display','block');
		}
	}

	/*

function openNav() {
    document.getElementById("mySidenav").style.width = "380px";
    //document.getElementById("main").style.marginLeft = "250px";
	
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
	
}
*/
	

	
		j$("#bizDevLink").click(function (e){
			j$("#BizDevWrapper").toggle('slide', {direction: 'right'}, 500);
			j$("body").addClass("modall").after( "<div class='modal-backdrop fade side in'></div>" );
			e.stopPropagation();			
		});	
		
		j$(document).click(function(){
			j$("#BizDevWrapper").hide('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();	
		});
		
		j$("#BizDevWrapper").click(function(e){
			e.stopPropagation();
		});
		
		j$("#BizDevWrapper .close").click(function (){
			//j$(this).parent().css("width", "0"); 
			//j$(this).parent().slideToggle();
			j$(this).parent().toggle('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();		
		});
		
		j$("#hrLink").click(function (e){
			j$("#HRWrapper").toggle('slide', {direction: 'right'}, 500);
			j$("body").addClass("modall").after( "<div class='modal-backdrop fade side in'></div>" );
			e.stopPropagation();			
		});	
		
		j$(document).click(function(){
			j$("#HRWrapper").hide('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();	
		});
		
		j$("#HRWrapper").click(function(e){
			e.stopPropagation();
		});
		
		j$("#HRWrapper .close").click(function (){
			//j$(this).parent().css("width", "0"); 
			//j$(this).parent().slideToggle();
			j$(this).parent().toggle('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();		
		});
		
		j$("#csoLink").click(function (e){
			j$("#CSOWrapper").toggle('slide', {direction: 'right'}, 500);
			j$("body").addClass("modall").after( "<div class='modal-backdrop fade side in'></div>" );
			e.stopPropagation();			
		});	
		
		j$(document).click(function(){
			j$("#CSOWrapper").hide('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();	
		});
		
		j$("#CSOWrapper").click(function(e){
			e.stopPropagation();
		});
		
		j$("#CSOWrapper .close").click(function (){
			//j$(this).parent().css("width", "0"); 
			//j$(this).parent().slideToggle();
			j$(this).parent().toggle('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();		
		});
		
		j$("#locationsLink").click(function (e){
			j$("#LocationsWrapper").toggle('slide', {direction: 'right'}, 500);
			j$("body").addClass("modall").after( "<div class='modal-backdrop fade side in'></div>" );
			e.stopPropagation();			
		});	
		
		j$(document).click(function(){
			j$("#LocationsWrapper").hide('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();	
		});
		
		j$("#LocationsWrapper").click(function(e){
			e.stopPropagation();
		});
		
		j$("#LocationsWrapper .close").click(function (){
			//j$(this).parent().css("width", "0"); 
			//j$(this).parent().slideToggle();
			j$(this).parent().toggle('slide', {direction: 'right'}, 500);
			j$(".modal-backdrop.side").remove();		
		});
		
		
	j$(".execBios").hover(function(){
		j$(".btnLearnMore").css("visibility", "hidden");
	}, function(){
		j$(".btnLearnMore").css("visibility", "visible");
	});
	
	