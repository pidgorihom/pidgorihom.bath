
$(function () {
    // add scrollify plugin
    $.scrollify({
        section: "section",
        sectionName: "section-name",
        setHeights: false,

        // circle pagination right
        scrollbars: false,
        before: function (i, panels) {

            var ref = panels[i].attr("data-section-name");

            $(".pagination .active").removeClass("active");

            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
        },
        afterRender: function () {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function (i) {
                activeClass = "";
                if (i === $.scrollify.currentIndex()) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".home").append(pagination);
            /*
      
            Tip: The two click events below are the same:
      
            $(".pagination a").on("click",function() {
              $.scrollify.move($(this).attr("href"));
            });
      
            */
            $(".pagination a").on("click", $.scrollify.move);
        }
    });

    // scroll to exact section
    $('.js-scrollify-to').click(function (e) {
        e.preventDefault();
        //console.log("!!!");
        //var ggg = $.section--home[data-section - name="' + $(this).data('scrollify-to-name')+ '"]'
        //console.log($(this).data('scrollify-to-name'));
        $.scrollify.move("#" + $(this).data('scrollify-to-name'));
    });

    // scroll to next section
    $('.js-scrollify-to-next').click(function () {
        $.scrollify.next();
    });

});



// menu circles animation
$(function () {
    $('.menu_circle_item').hover(function () {
        var $this = $(this);
        if (!$this.is('.is-animated')) {
            var $rippleThingy = $('<div/>', {
                'class': 'ripple-thingy'
            }).appendTo($this);
            setTimeout(function () {
                $rippleThingy.remove();
                if ($this.is('.is-animated')) {
                    if ($('.ripple-thingy', $this).length == 0) {
                        $this.addClass('is-bordered');
                    }
                }
            }, 1500);
        }
        $this.addClass('is-animated');
    }, function () {
        var $this = $(this);
        $this.removeClass('is-animated');
        $this.removeClass('is-bordered');
    });
});



// enable slick carousel
$(document).ready(function () {
    $('#big-hall_carousel .carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,

        prevArrow: '#big-hall_carousel button.carousel_prev',
        nextArrow: '#big-hall_carousel button.carousel_next',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 490,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });
    $('#small-hall_carousel .carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,

        prevArrow: '#small-hall_carousel button.carousel_prev',
        nextArrow: '#small-hall_carousel button.carousel_next',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 490,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });
    $('#house_carousel .carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,

        prevArrow: '#house_carousel button.carousel_prev',
        nextArrow: '#house_carousel button.carousel_next',
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 490,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]
    });
});



// enable fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});



// !!! need to be changed or removed
// sticky header
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };
// Get the header
var header = document.getElementById("myHeader");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}



/* side menu */
var $siteOverlay = $('.site-overlay');
var openNav = function () {
    $(window).trigger('open-nav');
    $('body').addClass('nav-open');
    $('.summary-footer--fixed').addClass('is-moved');
    if (window.innerWidth >= 768) {
        $('.site-top, .section-bg-hld--fixed').css({
            top: $(document).scrollTop()
        });
    } else {
        $('.section-bg-hld--fixed').css({
            top: $(document).scrollTop()
        });
    }
    $siteOverlay.addClass('active');
}
var closeNav = function () {
    $(window).trigger('close-nav');
    $('body').removeClass('nav-open');
    setTimeout(function () {
        // all of this happens after site 'moves', in styles set to 300ms
        $('.summary-footer--fixed').removeClass('is-moved');
        $('.site-top, .section-bg-hld--fixed').css({
            top: 0
        });
    }, 300);
    $siteOverlay.addClass('hide');
    setTimeout(function () {
        $siteOverlay.removeClass('hide active');
        $('.nav-primary [data-show-nav]').each(function () {
            var $this = $(this);
            if ($this.find('.subnav-toggle-icon.active').length) {
                $this.trigger('click');
            }
        });
    }, 300);
}
var toggleNav = function () {
    if (!$('body').is('.nav-open')) {
        openNav();
    } else {
        closeNav();
    }
}
$(function () {
    $('.js-mobile-trigger, .js-toggle-nav').on('click', function () {
        toggleNav();
    });
});
