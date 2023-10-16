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

function previousSlide() {

}
function nextSlide() {

}

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
    let arrowPrev = document.querySelector('.slider__prev')
    let arrowNext = document.querySelector('.slider__next')
    arrowPrev.onclick = () => {
        if(count == 0) {
            count = slideImagesLink.length - 1
        } else {
            count = count - 1
        }
        slideForm(count)
    }
    arrowNext.onclick = () => {
        if(count == slideImagesLink.length - 1) {
            count = 0
        } else {
            count = count + 1
        }
        let slideShow = document.querySelector(".slider__container")
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