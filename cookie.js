//lets
let cookieEl = document.getElementById('cookie')
let ScoreEl = document.getElementById('score')
let cookieCount = 0
let doubleButton = document.getElementById('double')
let clickChange = 1
let clickerButton = document.getElementById('clicker')
let autoClicker = 0
let celebration = 0

//every time Cookie is clicked
function cookieClicked() {
    cookieCount = cookieCount + clickChange
    ScoreEl.innerHTML = cookieCount

    //doubleButton show
    if (cookieCount >= 10) {

        if (clickChange === 1) {
        doubleButton.classList.remove('remove')
        }
    }
    //clickerButton show
    if (cookieCount >= 20) {

        if (autoClicker === 0) {
        clickerButton.classList.remove('remove')
        }
    }
    //Celebrations
    if (cookieCount % 10 == 0) {

        //celebration code
    }

    else {

        if ((cookieCount - 1) % 10 == 0) {

        //celebration code
        }
    }
}




cookieEl.addEventListener('click', cookieClicked)

function doubleClicked() {
    console.log('Double button clicked')

    cookieCount = cookieCount - 10
    ScoreEl.innerHTML = cookieCount

    clickChange = 2

    doubleButton.classList.add('remove')
    
    if (cookieCount < 20) {
        clickerButton.classList.add('remove')
    }
}

function autoClicked() {
    console.log('Auto clicker button clicked')

    cookieCount = cookieCount - 20
    ScoreEl.innerHTML = cookieCount

    autoClicker = 1
    setInterval(cookieClicked, 1000)
    clickerButton.classList.add('remove')

    if (cookieCount < 10) {
        doubleButton.classList.add('remove')
    }
}

clickerButton.addEventListener('click', autoClicked)
doubleButton.addEventListener('click', doubleClicked)

function shrink() {
    cookieEl.classList.add('shrink')
}

function grow() {
    cookieEl.classList.remove('shrink')
}

cookieEl.addEventListener('mousedown', shrink)
cookieEl.addEventListener('mouseup', grow)

let showButton = document.getElementById('show')
let removeButton = document.getElementById('remove')

function showCookie() {
    cookieEl.classList.remove('hide')

    removeButton.classList.remove('remove')
    showButton.classList.add('remove')
}
function removeCookie() {
    cookieEl.classList.add('hide')

    removeButton.classList.add('remove')
    showButton.classList.remove('remove')
}

showButton.addEventListener('click', showCookie)
removeButton.addEventListener('click', removeCookie)

showButton.classList.add('remove')


