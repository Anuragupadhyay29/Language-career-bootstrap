/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.arderofficial = {
    attach: function (context, settings) {

    }
  };

  $('form input[type="submit"]').on('click', function () {
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = "" +
			"select:invalid," +
			"input:invalid,\n" +
			"input:out-of-range {\n" +
			"border-color:hsl(0, 50%, 50%);\n" +
			"background:hsl(0, 50%, 90%);\n" +
			"}";
		document.body.appendChild(css);
	});

	$(document).on('click', 'li.view_all_courses a', function (e) {
		$(this).parent().parent().find('li').show();
		$(this).hide();
	});

	if ($('div[role="contentinfo"]').length > 0) {
		$('html, body').animate({
			scrollTop: ($('div[role="contentinfo"]').offset().top - 80)
		});
	}

	if ($('select[name="bl_study_pref_1"]').length > 0) {
        $('select[name="bl_study_pref_1"]').on('change', function (e) {
            var study_pref_1 = $(this).val();
            $('select[name="bl_study_pref_2"] option').show();
            $('select[name="bl_study_pref_2"] option[value="' + study_pref_1 + '"]').hide();
            if (study_pref_1 == $('select[name="bl_study_pref_2"]').val()) {
                $('select[name="bl_study_pref_2"]').val('');
            }
        });

        $('select[name="bl_study_pref_2"]').on('change', function (e) {
            var study_pref_2 = $(this).val();
            $('select[name="bl_study_pref_1"] option').show();
            $('select[name="bl_study_pref_1"] option[value="' + study_pref_2 + '"]').hide();
            if (study_pref_2 == $('select[name="bl_study_pref_1"]').val()) {
                $('select[name="bl_study_pref_1"]').val('');
            }
        });
    }

	$(document).on('click', '.showhide', function (e) {
    var div = $(this).data('div');

		if ($('div[id="'+div+'"], section[id="'+div+'"]').is(':visible')) {
			$('div[id="'+div+'"], section[id="'+div+'"]').hide();
			//return;
        }
		else {
			$('div[id="'+div+'"], section[id="'+div+'"]').show();
			if (div == 'search_catalog') {
        $('.search_panel ul.nav li a').removeClass('is-active');
			  $(this).addClass('is-active');
        //$('div[id="'+div+'"], section[id="'+div+'"]').hide();
        $('div[id="search_website"]').hide();
      }
			else if (div == 'search_website') {
        $('.search_panel ul.nav li a').removeClass('is-active');
        $(this).addClass('is-active');
        $('div[id="search_catalog"]').hide();
      }
			//return;
		}

		return false;

  });

  $(document).ready(function () {

    $(document).on('mouseover',"a.open_popup",function(e){
      e.preventDefault();
      $(".popup_body").removeClass("popup_body_show");
      $(this).parent(".popup_main").children(".popup_body").addClass("popup_body_show");
    });

    $(document).on('mouseover',"a.open_popup",function(e){
      e.preventDefault();
      $(".popup_close").on('click',function() {
        $(".popup_body").removeClass("popup_body_show");
      });
    });

    $(".popup_back").on('mouseover',function() {
      $(".popup_body").removeClass("popup_body_show");
    });

    $(".field--name-field-blog-categories a").html('Read more blogs from this category...');

  });
  
  
 //var mySelection = new Option("/z-list-databases-0", "/z-list-databases-0");
 //  $(mySelection).html("ALL");
  // $("#edit-field-a-to-z-school-target-id").append(mySelection);



})(jQuery, Drupal);
