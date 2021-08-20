let time = 90
let timerId = null
let width = 1170

const startBtn = document.getElementById("tajaBtn")
const timerBar = document.getElementById("remainingTime")

function timer(begin) {
  if (timerId) return
  timerId = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerId)
      location.reload()
      return
    }

    time--
    width -= 13
    // timerBar.innerHTML = "Remaining Time: " + time
    if (time <= 5) {
      timerBar.style.backgroundColor = "red"
    }
    timerBar.style.width = width + "px"
  }, 1000)
}

startBtn.addEventListener("click", timer)
