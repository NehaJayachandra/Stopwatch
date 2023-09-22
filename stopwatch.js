
let startTime = 0
let interval
let hours = 0
let minutes = 0
let seconds = 0

function updateDisplay() {
  seconds++

  if (seconds >= 60) {
    seconds = 0
    minutes++
  }

  if (minutes >= 60) {
    minutes = 0
    hours++
  }

  const formattedTime =
    String(hours).padStart(2, '0') +
    ':' +
    String(minutes).padStart(2, '0') +
    ':' +
    String(seconds).padStart(2, '0')

  document.getElementById('display').innerText = formattedTime
}

function startStopStopwatch() {
  if (!interval) {
startTime = interval ? startTime : new Date().getTime()
interval = setInterval(updateDisplay, 1000)
} else {
clearInterval(interval)
interval = null
startTime = 0
hours = 0
minutes = 0
seconds = 0
document.getElementById('display').innerText = '00:00:00'
}
}

function pauseStopwatch() {
  clearInterval(interval)
  interval = null
}
