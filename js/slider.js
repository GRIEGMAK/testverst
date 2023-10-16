let slideImagesLink = [
    'http://placehold.it/350x100?text=1',
    'http://placehold.it/350x100?text=2',
    'http://placehold.it/350x100?text=3',
    'http://placehold.it/350x100?text=4',
    'http://placehold.it/350x100?text=5',
    'http://placehold.it/350x100?text=6',
    'http://placehold.it/350x100?text=7',
    'http://placehold.it/350x100?text=8',
    'http://placehold.it/350x100?text=9',
    'http://placehold.it/350x100?text=10',
]

let count = 0

function slideForm (count) {
    let slideContainer = document.querySelector('.slider .slider__container')
    let slideItem = ''
    if (count == 0) {
        let prevCount = slideImagesLink.length - 1
        let nextCount = 1
        slideItem = '<div><img src=' + slideImagesLink[prevCount] + '></div>'
        slideItem += '<div><img src=' + slideImagesLink[count] + '></div>'
        slideItem += '<div><img src=' + slideImagesLink[nextCount] + '></div>'
    } else if (count == slideImagesLink.length - 1) {
        let prevCount = count - 1
        let nextCount = 0
        slideItem = '<div><img src=' + slideImagesLink[prevCount] + '></div>'
        slideItem += '<div><img src=' + slideImagesLink[count] + '></div>'
        slideItem += '<div><img src=' + slideImagesLink[nextCount] + '></div>'
    } else {
        slideItem = ''
        for (let i = -1; i < 2; i++) {
            slideItem += '<div><img src=' + slideImagesLink[count + i] + '></div>'
        }
    }
    slideContainer.innerHTML = slideItem
}

window.addEventListener('load', function ()  {
    slideForm(count)
    let dots = ''
    for(let j = 0; j < slideImagesLink.length; j++) {
        dots += '<div class="slider__dot" id="dot_' + j + '"><div class="slider__dotcontent"></div></div>'
    }
    let slideDots = document.querySelector(".slider__dots")
    slideDots.innerHTML = dots
    slideDots = document.querySelectorAll(".slider__dot")
    slideInitDot = document.querySelector("#dot_" + String(count)).classList.add('active_slide')
    slideDots.forEach((dot) => {
        dot.onclick = () => {
            slideDots.forEach((dot_for_unactive) => {
                dot_for_unactive.classList.remove('active_slide')
            })
            count = Number(dot.id.slice(4))
            slideForm(count)
            dot.classList.add('active_slide')
        }
    })
    let dotButtons
    let slideShow
    let arrowPrev = document.querySelector('.slider__prev')
    let arrowNext = document.querySelector('.slider__next')
    arrowPrev.onclick = () => {
        if(count == 0) {
            count = slideImagesLink.length - 1
        } else {
            count = count - 1
        }
        document.querySelector('.active_slide').classList.remove('active_slide')
        dotButtons = document.querySelector('.slider__dots')
        dotButtons.querySelector('#dot_' + count).classList.add('active_slide')
        slideShow = document.querySelector(".slider__container")
        setTimeout(function() {
            slideShow.style.marginLeft = '0px'
        }, 200)
        setTimeout(function () {
            slideShow.style.transitionDuration = "0s";
            slideForm(count)
            slideShow.style.marginLeft = '-380px'
        }, 1000)
        setTimeout(function () {
            slideShow.style.transitionDuration = "1s";
        }, 1100)
    }
    arrowNext.onclick = () => {
        if(count == slideImagesLink.length - 1) {
            count = 0
        } else {
            count = count + 1
        }
        document.querySelector('.active_slide').classList.remove('active_slide')
        dotButtons = document.querySelector('.slider__dots')
        dotButtons.querySelector('#dot_' + count).classList.add('active_slide')
        slideShow = document.querySelector(".slider__container")
        setTimeout(function() {
            slideShow.style.marginLeft = '-760px'
        }, 200)
        setTimeout(function () {
            slideShow.style.transitionDuration = "0s";
            slideForm(count)
            slideShow.style.marginLeft = '-380px'
        }, 1000)
        setTimeout(function () {
            slideShow.style.transitionDuration = "1s";
        }, 1100)

    }
})