const userid = document.getElementById("username")
const startBtn = document.getElementById("username")

startBtn.addEventListener("click", (event) => {
  if (userid.value === null) {
    event.preventDefault()
    alert("write a valid id")
  }
})
if (userid.value === null) {
  alert("write a valid id")
}
