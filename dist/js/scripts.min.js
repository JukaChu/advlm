

function initHeroRowSlider2() {
    let sectionHeroRow2 = document.querySelectorAll('.hero-row__slider');

    if (sectionHeroRow2.length) {
        sectionHeroRow2.forEach(section => {
            let sliderRow = section.querySelector('.splide');
            let sliderNav = section.querySelector('.hero__media-navigation .splide');
            let btnPrev = section.querySelector('.splide__arrow--prev');
            let btnNext = section.querySelector('.splide__arrow--next');
            let pagesBox     = section.querySelector('.hero-row__pages');
            let progressBox  = section.querySelector('.hero-row__progress');
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
                let segments  = progressBox?.querySelectorAll('.hero-row__progress-item') || [];

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
                        perPage: 2,
                        perMove: 1,
                    },
                },
            });

            splideInfo.mount();
        });
    }

}
if (document.body.classList.contains('wp-admin')) {
    window.addEventListener('load', initHeroRowSlider2);
    window.addEventListener('load', initMediaSlider);

} else {
    document.addEventListener('DOMContentLoaded', initHeroRowSlider2);
    document.addEventListener('DOMContentLoaded', initMediaSlider);
}


