let time = 50
let timerId = null
let width = 1170

const startBtn = document.getElementById("tajaBtn")
const timerBar = document.getElementById("remainingTime")

function timer(begin) {
  if (timerId) return
  timerId = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerId)
      alert("총 " + score + "점을 획득하였습니다.")
      location.reload()
      return
    }

    time--
    width -= 23.4
    // timerBar.innerHTML = "Remaining Time: " + time
    if (time <= 10) {
      timerBar.style.backgroundColor = "red"
    }
    timerBar.style.width = width + "px"
  }, 1000)
}

startBtn.addEventListener("click", timer)
