// JavaScript Document

/* this is just a datepicker function */



$(function () {

                $('#datetimepicker1').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker2').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker3').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker4').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker5').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker6').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker7').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker8').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker9').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker10').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker11').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker12').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker13').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker14').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker15').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker16').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker17').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker18').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker19').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker20').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker21').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

				$('#datetimepicker22').datetimepicker({

                 format: 'DD/MM/YYYY'

           });

            });

			

/* this is just a simple reload; you can safely remove it; remember to remove it from the image too */

	function reloadCaptcha(){

		document.getElementById('captcha').src = document.getElementById('captcha').src+ '?' +new Date();

	}

	

/* to slide the window to top on scroll*/	

$(document).ready(function(){

 

 //Check to see if the window is top if not then display button

 $(window).scroll(function(){

  if ($(this).scrollTop() > 100) {

   $('.scrollToTop').fadeIn();

  } else {

   $('.scrollToTop').fadeOut();

  }

 });

 

 //Click event to scroll to top

 $('.scrollToTop').click(function(){

  $('html, body').animate({scrollTop : 0},800);

  return false;

 });

 

});




<!--Start of Zopim Live Chat Script-->
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="//v2.zopim.com/?49RaXtAFSayK1bmrfLApWDDLoauOOuqx";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
<!--End of Zopim Live Chat Script-->


jQuery(document).ready(function() {
	
  
    
    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form input[type="phone"], .registration-form input[type=select], .registration-form select, .registration-form input[type="email"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.registration-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"], input[type="email"], input[type="phone"], input[type=select] , select,  textarea').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.registration-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], input[type=select] , select, textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});

//from topmenu

/*
$('.responsive-tabs').responsiveTabs({
  accordionOn: ['xs', 'sm'] // xs, sm, md, lg 
});*/