let time = 90
let timerId = null
const startBtn = document.getElementById("tajaBtn")

function timer(begin) {
  if (timerId) return
  timerId = setInterval(() => {
    if (time <= 0) {
      clearInterval(timerId)
      location.reload()
      return
    }

    time--
    document.getElementById("remainingTime").innerHTML = "Remaining Time: " + time
  }, 1000)
}

startBtn.addEventListener("click", timer)
