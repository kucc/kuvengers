const list = document.getElementById("ranking")
const rank = document.createElement("li")
const body = document.querySelector("body")
const score = document.getElementById("score").innerHTML
const username = document.getElementById("username").value

const users = [{ name: jieun, score: 100 }]

console.log(username)
console.log(score)
function addRank() {
  rank.innerHTML = `${username}:${score}` // 새로 받은 점수
  list.appendChild("li")
}
body.addEventListener("onload", addRank)
