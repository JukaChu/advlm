'use strict';
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, GSDevTools);
let checkDirectionSite = document.querySelector('html').getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';


(function ($) {
    $('.header__menu').on('click', function () {
        $('.header__menu, .header__block').toggleClass('is-open');
        $('body').toggleClass('no-scroll');
    });

    $('.header__block a').on('click', function () {
        $('.header__menu, .header__block').removeClass('is-open');
        $('body').removeClass('no-scroll');
    });

    function initHeroSlider() {
        let sectionHero = document.querySelectorAll('.hero');

        if (sectionHero.length) {
            sectionHero.forEach(section => {
                let sliderMain = section.querySelector('.hero__media-main .splide');
                let sliderNav = section.querySelector('.hero__media-navigation .splide');

                if (!sliderMain || !sliderNav) return;

                var splideMain = new Splide(sliderMain, {
                    type: 'fade',
                    rewind: true,
                    arrows: false,
                    pagination: false,
                    speed: 800,
                    autoplay: false,
                });

                var splideNav = new Splide(sliderNav, {
                    direction: checkDirectionSite,
                    type: 'loop',
                    perPage: 3,
                    // drag: 'free',
                    gap: '1.1458vw',
                    pagination: true,
                    isNavigation: true,
                    speed: 1000,
                    perMove: 1,

                    breakpoints: {
                        768: {
                            gap: '3.8168vw',
                            perPage: 2,
                        },
                    },
                });

                splideMain.sync(splideNav);
                splideMain.mount();
                splideNav.mount();
            });
        }
    }


    function initVideos() {
        let sectionVideos = document.querySelectorAll('.video');

        if (sectionVideos) {
            sectionVideos.forEach(section => {
                let slider = section.querySelector('.splide');

                var splideLogos = new Splide(slider, {
                    direction: checkDirectionSite,
                    type: 'loop',
                    perPage: 5,
                    drag: 'free',
                    gap: '1.0417vw',
                    perMove: 1,
                    speed: 1000,
                    focus: 'center',
                    pagination: true,
                    // breakpoints: {
                    //   991: {
                    //     gap: '7.6336vw',
                    //     perMove: 1,
                    //   },
                    // },
                });
                splideLogos.mount();
            });
        }
    }

    function initBranches() {
        let sectionBranches = document.querySelectorAll('.branches');

        if (sectionBranches.length) {
            sectionBranches.forEach(section => {
                let branchesItems = section.querySelectorAll('.branches__list .item');
                let slider = section.querySelector('.splide');

                $(branchesItems).each(function () {
                    let item = $(this);
                    let header = item.find('.item-header');
                    let content = item.find('.item-content');

                    header.on('click', function () {
                        if (!item.hasClass('is-open')) {
                            item.addClass('is-open');
                            content.stop().slideDown(400, function () {
                                item.next().addClass('is-next');
                            });
                        } else {
                            item.removeClass('is-open');
                            content.stop().slideUp(400, function () {
                                item.next().removeClass('is-next');
                            });
                        }
                    });
                });

                var splideGallery = new Splide(slider, {
                    direction: checkDirectionSite,
                    type: 'loop',
                    perPage: 1,
                    drag: 'free',
                    gap: '1.0417vw',
                    perMove: 1,
                    speed: 1000,
                    focus: 'center',
                    pagination: true,
                });
                splideGallery.mount();
            });
        }
    }

    function initTimeline() {
        let sectionTimeline = document.querySelectorAll('.timeline');

        if (sectionTimeline.length) {
            sectionTimeline.forEach(section => {
                let slider = section.querySelector('.splide');

                var splideTimeline = new Splide(slider, {
                    updateOnMove: true,
                    direction: checkDirectionSite,
                    type: 'loop',
                    perPage: 1,
                    gap: '10.1464vw',
                    perMove: 1,
                    speed: 1000,
                    arrows: true,
                    pagination: true,
                    breakpoints: {
                        991: {
                            gap: '7.6336vw',
                        },
                    },
                });
                splideTimeline.mount();
            });
        }
    }

    function initStory() {
        let sectionStory = document.querySelectorAll('.story');

        if (sectionStory.length) {
            sectionStory.forEach(section => {
                let sectionList = section.querySelector('.story__list');
                let sectionItems = section.querySelectorAll('.story__list .item');

                if (!sectionList || !sectionItems.length) return;

                const observer = new IntersectionObserver((entries) => {

                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-active');
                        } else {
                            entry.target.classList.remove('is-active');
                        }
                    });
                }, {
                    root: sectionList,
                    threshold: window.innerWidth > 992 ? 1.0 : 0.1
                });

                sectionItems.forEach(item => observer.observe(item));
            });
        }

    }

    function initInfo() {
        let sectionInfo = document.querySelectorAll('.info');

        if (sectionInfo.length) {
            sectionInfo.forEach(section => {
                let slider = section.querySelector('.splide');

                var splideInfo = new Splide(slider, {
                    updateOnMove: true,
                    direction: checkDirectionSite,
                    type: 'loop',
                    perPage: 4,
                    gap: '1.2500vw',
                    perMove: 4,
                    speed: 1000,
                    arrows: true,
                    pagination: true,
                    breakpoints: {
                        991: {
                            gap: '3.8168vw',
                            perPage: 2,
                            perMove: 2,
                        },
                    },
                });

                splideInfo.mount();
            });
        }

    }

    $('.team__navigation button').on('click', function () {
        let navAttr = $(this).data('position');

        $('.team__navigation button').removeClass('is-current');
        $(this).addClass('is-current');

        if (navAttr === 'all') {
            $('.team__list .item').show();
            return;
        }

        $('.team__list .item').each(function () {
            let cardPosition = $(this).data('position');

            if (cardPosition === navAttr) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    $('.lang-code + input[type=tel]').attr('placeholder', '').val('');
    $('.lang-code').each(function (index, block) {
        let placeholderCode = $(block).find('.placeholder-code');
        let placeholderText = $(block).find('.placeholder-text input');
        let placeholderButton = $(block).find('.placeholder-image');
        let placeholderImage = $(block).find('.placeholder-image img');
        let langItems = $(block).find('.lang-code-item');

        $(placeholderButton).on('click', function () {
            $(block).toggleClass('is-open');
        });

        $(placeholderText).on('click', function () {
            this.setSelectionRange(0, 0);
        });

        let startMask = $(langItems).eq(0).attr('data-mask');
        let startPlaceholder = $(langItems).eq(0).attr('data-placeholder');
        $(placeholderText).attr('placeholder', startPlaceholder);

        $(placeholderText).mask(startMask);

        $(placeholderImage).attr('src', $(langItems).eq(0).find('.lang-code-item-image img').attr('src'));
        $(placeholderCode).text($(langItems).eq(0).find('.lang-code-item-code').text().trim());

        $(langItems).each(function (i, item) {
            let code = $(item).find('.lang-code-item-code').text().trim();
            let image = $(item).find('.lang-code-item-image img').attr('src');
            let placeholder = $(item).attr('data-placeholder');

            $(item).on('click', function () {
                $(placeholderImage).attr('src', '');
                $(placeholderImage).attr('src', image);

                $(placeholderCode).text('');
                $(placeholderCode).text(code);

                $(placeholderText).attr('');
                $(placeholderText).attr('placeholder', placeholder);

                $(block).removeClass('is-open');
            });
        });
    });


    $('.text').each(function (index, item) {
        $(item).find('table').each(function (i, table) {
            $(table).wrapAll('<div class="table-block"></div>')
        });
    });

    // my code
    function initHeroRowSlider() {
        let sectionHeroRow = document.querySelectorAll('.hero-row');

        if (sectionHeroRow.length) {
            sectionHeroRow.forEach(section => {
                let sliderRow = section.querySelector('.hero-row__splide .splide');
                let sliderNav = section.querySelector('.hero__media-navigation .splide');

                if (!sliderRow) return;

                var splideRow = new Splide(sliderRow, {
                    direction: checkDirectionSite,
                    type: 'slide',
                    perPage: 1,
                    gap: '0.468vw',
                    drag: false,
                    speed: 600,
                    pagination: false,
                    arrows: true,
                    focus: 0,
                    trimSpace: false,
                });

                splideRow.mount();
            });
        }
    }

    // my code
    if (document.body.classList.contains('wp-admin')) {
        window.addEventListener('load', initHeroSlider);
        window.addEventListener('load', initVideos);
        window.addEventListener('load', initBranches);
        window.addEventListener('load', initTimeline);
        window.addEventListener('load', initStory);
        window.addEventListener('load', initInfo);
        // window.addEventListener('load', initHeroRowSlider);
    } else {
        document.addEventListener('DOMContentLoaded', initHeroSlider);
        document.addEventListener('DOMContentLoaded', initVideos);
        document.addEventListener('DOMContentLoaded', initBranches);
        document.addEventListener('DOMContentLoaded', initTimeline);
        document.addEventListener('DOMContentLoaded', initStory);
        document.addEventListener('DOMContentLoaded', initInfo);
        // document.addEventListener('DOMContentLoaded', initHeroRowSlider);
    }

    //Default pop-up | pop-up for video
    $(document).ready(function () {
        $(".modal").css("display", "block");

        $(".modal-content").click((e) => e.stopPropagation());

        $('.modal-content').each(function (i, modal) {
            let heightContent = $(modal)[0].scrollHeight;
            if (heightContent > window.innerHeight) {
                $(modal).parent().addClass('content');
            }
        });

        $(".modal").click(function (e) {
            hideModal($(this));

            $(".video-modal .modal-video").html('<div id="modal-video-iframe"></div>');
        });

        $(".modal-close, .js-modal-close").click(function (e) {
            e.preventDefault();

            hideModal($(this).closest(".modal"));

            $(".video-modal .modal-video").html('<div id="modal-video-iframe"></div>');
        });

        $("[data-modal]").click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            hideModal(".modal");

            if ($(this).data("modal-tab") != undefined) {
                goToTab($(this).data("modal-tab"));
            }

            showModal($(this).data("modal"));
        });

        $("[data-video-modal]").click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            let videoId = $(this).data("video-modal");
            let videoType = $(this).data("video-type");

            if (videoType == "youtube") {
                $("#modal-video-iframe")
                    .removeClass("vimeo youtube")
                    .addClass("youtube")
                    .append('<div class="video-iframe" id="' + videoId + '"></div>');
                createVideo(videoId, videoId);
            } else if (videoType == "vimeo") {
                $("#modal-video-iframe")
                    .removeClass("vimeo youtube")
                    .addClass("vimeo")
                    .html(
                        '<iframe class="video-iframe" allow="autoplay" src="https://player.vimeo.com/video/' +
                        videoId +
                        '?playsinline=1&autoplay=1&transparent=1&app_id=122963">'
                    );
            } else if (videoType == "mp4" || videoType == "drive") {
                $("#modal-video-iframe")
                    .removeClass("vimeo youtube")
                    .addClass("video")
                    .html(`
                      <video controls autoplay playisline>
                          <source src="${videoId}">
                      </video>   
                  `);
            }


            hideModal(".modal");

            showModal("#video-modal");
        });

        var player;

        function createVideo(videoBlockId, videoId) {
            player = new YT.Player(videoBlockId, {
                videoId: videoId,
                playerVars: {
                    autohide: 1,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                    playsinline: 1,
                    fs: 1,
                    allowsInlineMediaPlayback: true,
                },
                events: {
                    onReady: function (e) {
                        setTimeout(function () {
                            e.target.playVideo();
                        }, 200);
                    },
                },
            });
        }
    });


    let bodyScrolled = 0;
    let paddingModal = window.innerWidth - $('#wrapper').width();

    function showModal(modal) {
        $(modal).addClass("visible");
        bodyScrolled = $(window).scrollTop();
        $("body")
            .scrollTop(bodyScrolled)
            .addClass("no-scroll")
            .css("padding-right", paddingModal);

        $('.lock-padding').each(function () {
            $(this).css("padding-right", paddingModal);
        });

    }

    function hideModal(modal) {
        $(modal).removeClass("visible");
        bodyScrolled = $(window).scrollTop();
        $("body")
            .removeClass("no-scroll")
            .scrollTop(bodyScrolled)
            .css("padding-right", 0);


        $('.lock-padding').each(function () {
            $(this).css("padding-right", 0);
        });
    }


    $(window).on('load', function () {
        ScrollTrigger.refresh();
    });

})(jQuery);


window.addEventListener('load', function () {
    try {
        const statusSite = document.querySelector('meta[name="robots"]');

        if (statusSite.getAttribute('content').match(/noindex/)) {
            document.body.insertAdjacentHTML('afterbegin', `
            <div class="notification show">
              <div class="notification-icon">
                  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.5H12L19 15.5H0.5L8 1.5Z" fill="#F7A41D" />
                      <path
                          d="M9.82891 2C10.3899 2 10.9479 2.354 11.3729 3.062L17.2849 12.916C18.1359 14.331 17.4789 15.489 15.8289 15.489H3.82891C2.17891 15.489 1.52191 14.33 2.37291 12.916L8.28491 3.062C8.70991 2.354 9.26791 2 9.82891 2ZM9.82891 0C8.53291 0 7.34691 0.74 6.56991 2.031L0.657909 11.887C-0.128091 13.196 -0.214091 14.592 0.422909 15.717C1.05991 16.842 2.30191 17.489 3.82891 17.489H15.8289C17.3559 17.489 18.5989 16.843 19.2349 15.718C19.8709 14.593 19.7859 13.197 18.9999 11.888L13.0879 2.034C12.3109 0.74 11.1249 0 9.82891 0Z"
                          fill="#F7A41D" />
                      <path
                          d="M9.82734 13.7875C10.5453 13.7875 11.1273 13.2055 11.1273 12.4875C11.1273 11.7695 10.5453 11.1875 9.82734 11.1875C9.10937 11.1875 8.52734 11.7695 8.52734 12.4875C8.52734 13.2055 9.10937 13.7875 9.82734 13.7875Z"
                          fill="white" />
                      <path
                          d="M11.3288 6.48828C11.3288 5.65828 10.6578 4.98828 9.82882 4.98828C9.58331 4.98832 9.34156 5.04867 9.12482 5.16402C8.90809 5.27937 8.723 5.44619 8.58584 5.64981C8.44867 5.85344 8.36362 6.08764 8.33816 6.33184C8.3127 6.57603 8.34761 6.82274 8.43982 7.05028C8.99382 8.42628 9.82882 10.4883 9.82882 10.4883L11.2198 7.05028C11.2878 6.87728 11.3288 6.68728 11.3288 6.48828Z"
                          fill="white" />
                  </svg>
              </div>
              <div class="notification-text">
                  We are sorry, the site is temporarily not indexed
              </div>
              <div class="notification-button">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" preserveAspectRatio="none">
                      <path fill="#000"
                          d="m10.41 9 6.3-6.29a1.004 1.004 0 1 0-1.42-1.42L9 7.59l-6.29-6.3a1.004 1.004 0 0 0-1.42 1.42L7.59 9l-6.3 6.29a1 1 0 0 0 0 1.42.998.998 0 0 0 1.42 0L9 10.41l6.29 6.3a.998.998 0 0 0 1.42 0 .997.997 0 0 0 .219-1.095.998.998 0 0 0-.22-.325L10.41 9Z" />
                  </svg>
              </div>
          </div>
      `);

            setTimeout(function () {
                document.querySelector('.notification').classList.add('show');
            }, 3000)

            document.querySelector('.notification-button').addEventListener('click', function () {
                document.querySelector('.notification').classList.remove('show');
            });

            setTimeout(function () {
                document.querySelector('.notification').classList.remove('show');
            }, 10000)
        }

    } catch (error) {
        console.log(error)
    }
});