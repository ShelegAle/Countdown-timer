// document.addEventListener('DOMContentLoaded', () => {

let newDate = document.querySelector('#btnNewDate'),
newYear = document.querySelector('#year'),
newMonth = document.querySelector('#month'),
newDay = document.querySelector('#day')
expired = document.querySelector(".Expired"),
timerItems = document.querySelector(".timer__items"),
timerId = null

const $days = document.querySelector('.timer__days'),
    $hours = document.querySelector('.timer__hours'),
    $minutes = document.querySelector('.timer__minutes'),
    $seconds = document.querySelector('.timer__seconds')

newDate.addEventListener( "click" , () => {
    clearInterval(timerId)
    let deadLine = new Date(newYear.value,newMonth.value - 1,newDay.value)   

    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]]
    }

    function countDownTimer() {
        let diff = deadLine - new Date()
        expired.innerHTML = ""
        timerItems.style.display = 'flex'
        let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0,
        hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0,
        minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0,
        seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0

        $days.textContent = days < 10 ? '0' + days : days
        $hours.textContent = hours < 10 ? '0' + hours : hours
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds

        $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней'])
        $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

        if (diff <= 0) {
            clearInterval(timerId)
            expired.innerHTML = "EXPIRED"
            timerItems.style.display = 'none'
            }
    }
    countDownTimer()
    timerId = setInterval(countDownTimer, 1000)
})


