function initHeroRowSlider2() {
    let sectionHeroRow2 = document.querySelectorAll('.hero-row__slider');

    if (sectionHeroRow2.length) {
        sectionHeroRow2.forEach(section => {
            let sliderRow = section.querySelector('.splide');
            let sliderNav = section.querySelector('.hero__media-navigation .splide');
            let btnPrev = section.querySelector('.splide__arrow--prev');
            let btnNext = section.querySelector('.splide__arrow--next');
            let pagesBox = section.querySelector('.hero-row__pages');
            let progressBox = section.querySelector('.hero-row__progress');
            if (!sliderRow) return;

            var splideRow = new Splide(sliderRow, {
                updateOnMove: true,
                direction: checkDirectionSite,
                type: 'loop',
                perPage: 1,
                gap: '0.468vw',
                drag: true,
                speed: 600,
                pagination: false,
                arrows: false,
                focus: 0,
                trimSpace: false,
                autoWidth: true,
                breakpoints: {
                    768: {
                        gap: '2.29vw',
                        perPage: 2,
                    },
                },
            });

            splideRow.on('mounted', function () {
                let total = splideRow.length;
                if (pagesBox) {
                    pagesBox.innerHTML = `
                    <span class="total">${String(total).padStart(2, '0')}</span>/<span class="current">01</span>
                `;
                }
                if (progressBox) {
                    progressBox.innerHTML = '';
                    for (let i = 0; i < total; i++) {
                        const seg = document.createElement('div');
                        seg.type = 'button';
                        seg.className = 'hero-row__progress-item';
                        seg.dataset.index = i;

                        seg.addEventListener('click', () => {
                            splideRow.go(parseInt(seg.dataset.index, 10));
                        });

                        progressBox.appendChild(seg);
                    }
                }
                if (btnPrev) {
                    btnPrev.addEventListener('click', () => {
                        splideRow.go('<');
                    });
                }
                if (btnNext) {
                    btnNext.addEventListener('click', () => {
                        splideRow.go('>');
                    });
                }
                updateSliderState();
            });
            splideRow.on('move', updateSliderState);

            function updateSliderState() {
                let index = splideRow.index;
                let currentEl = pagesBox?.querySelector('.current');
                let segments = progressBox?.querySelectorAll('.hero-row__progress-item') || [];

                if (currentEl) {
                    currentEl.textContent = String(index + 1).padStart(2, '0');
                }

                segments.forEach((el, i) => {
                    el.classList.toggle('is-active', i === index);
                });
            }

            splideRow.mount();
        });
    }
}

function initMediaSlider() {
    let sectionMedia = document.querySelectorAll('.media-section');

    if (sectionMedia.length) {
        sectionMedia.forEach(section => {
            let slider = section.querySelector('.splide');

            var splideInfo = new Splide(slider, {
                updateOnMove: true,
                direction: checkDirectionSite,
                type: 'loop',
                perPage: 4,
                gap: '1.5600vw',
                perMove: 1,
                speed: 1000,
                arrows: true,
                pagination: true,
                breakpoints: {
                    991: {
                        gap: '3.8168vw',
                        perPage: 1,
                        perMove: 1,
                    },
                },
            });

            splideInfo.mount();
        });
    }

}

function initBlogSlider() {
    let sectionMedia = document.querySelectorAll('.articles__slider');

    if (sectionMedia.length) {
        sectionMedia.forEach(section => {
            let slider = section.querySelector('.splide');

            var splideInfo = new Splide(slider, {
                updateOnMove: true,
                direction: checkDirectionSite,
                type: 'loop',
                perPage: 4,
                gap: '2.08vw',
                perMove: 1,
                speed: 1000,
                arrows: true,
                pagination: true,
                breakpoints: {
                    991: {
                        gap: '2.54vw',
                        perPage: 2,
                        perMove: 1,
                    },
                },
            });

            splideInfo.mount();
        });
    }

}

function initTeamSectionSlider() {
    let sectionMedia = document.querySelectorAll('.team-slider');

    if (sectionMedia.length) {
        sectionMedia.forEach(section => {
            let slider = section.querySelector('.splide');

            var splideInfo = new Splide(slider, {
                updateOnMove: true,
                direction: checkDirectionSite,
                type: 'loop',
                perPage: 6,
                gap: '0.78vw',
                perMove: 1,
                speed: 1000,
                arrows: true,
                pagination: true,
                breakpoints: {
                    991: {
                        gap: '2.03vw',
                        perPage: 2,
                        perMove: 1,
                    },
                },
            });

            splideInfo.mount();
        });
    }

}

function createReviewLink() {

    let linkReviewsGoog = document.querySelector('.wp-google-wr a');
    if (linkReviewsGoog) {
        linkReviewsGoog.closest('.wp-gr').classList.remove('wpac');
        let aWrap = document.createElement('div');
        aWrap.innerHTML = document.querySelector('.reviews-section__btn-txt').innerText;
        let spanArr = document.createElement('span');
        spanArr.classList.add('is-icon-arrow');
        aWrap.appendChild(spanArr);
        aWrap.classList.add('default-button');
        aWrap.classList.add('is-icon');
        aWrap.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            linkReviewsGoog.click();
        })
        linkReviewsGoog.closest('.wp-google-place').appendChild(aWrap);
    }
}


function initServicesToggle() {

    const isMobile = window.innerWidth < 992;

    const $items = $('.services-section__item-wrap');
    const $blocks = $('.services-section__item-block');

    if ($items) {
        if (isMobile) {

        } else {

            $items.hover(
                function () {
                    $(this).find('.services-section__item-block')
                        .stop(true, true)
                        .slideDown(400);
                },
                function () {
                    $(this).find('.services-section__item-block')
                        .stop(true, true)
                        .slideUp(400);
                }
            );
        }
    }
}


// tabs

let ownerTabs = [...document.querySelectorAll('.tabs-owner')];

function controlTabs() {
    if (ownerTabs.length) {
        ownerTabs.forEach((tab) => {
            let tabOpen = [...tab.querySelectorAll('.tab-btn')];
            let singleTab = [...tab.querySelectorAll('.single-tab')];

            tabOpen.forEach((btn, k) => {
                btn.addEventListener('click', () => {
                    if (!btn.classList.contains('active')) {
                        tabOpen.forEach((btn2) => {
                            btn2.classList.remove('active');
                        });
                        singleTab.forEach((btn3) => {
                            btn3.classList.remove('active');
                        });
                        btn.classList.add('active');
                        singleTab[k].classList.add('active');
                    }
                })
            });
        })
    }
}


// tabs

if (document.body.classList.contains('wp-admin')) {
    window.addEventListener('load', initHeroRowSlider2);
    window.addEventListener('load', initMediaSlider);
    window.addEventListener('load', initBlogSlider);
    window.addEventListener('load', initTeamSectionSlider);
    window.addEventListener('load', initServicesToggle);
    window.addEventListener('load', createReviewLink);
    window.addEventListener('load', controlTabs);

} else {
    document.addEventListener('DOMContentLoaded', initHeroRowSlider2);
    document.addEventListener('DOMContentLoaded', initMediaSlider);
    document.addEventListener('DOMContentLoaded', initBlogSlider);
    document.addEventListener('DOMContentLoaded', initTeamSectionSlider);
    document.addEventListener('DOMContentLoaded', initServicesToggle);
    document.addEventListener('DOMContentLoaded', createReviewLink);
    document.addEventListener('DOMContentLoaded', controlTabs);
}


