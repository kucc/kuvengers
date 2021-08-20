// json 배열
var jsonSource= [
    /* {"name": "apple", "url": "fruits/apple.jpeg"},
    {"name": "banana", "url": "fruits/banana.png"},
    {"name": "cherry", "url": "fruits/cherry.png"},
    {"name": "grapes", "url": "fruits/grapes.png"},
    {"name": "kmelon", "url": "fruits/kmelon.png"},
    {"name": "orange", "url": "fruits/orange.png"},
    {"name": "pear", "url": "fruits/pear.png"},
    {"name": "strawberry", "url": "fruits/strawberry.png"},
    {"name": "watermelon", "url": "fruits/watermelon.png"}, */
    {"name": "강동원", "url": "images/강동원.jpg"},
    {"name": "공유", "url": "images/공유.jpg"},
    {"name": "김연경", "url": "images/김연경.jpg"},
    {"name": "김연아", "url": "images/김연아.jpg"},
    {"name": "김우빈", "url": "images/김우빈.jpg"},
    {"name": "김태리", "url": "images/김태리.jpg"},
    {"name": "남주혁", "url": "images/남주혁.jpg"},
    {"name": "류준열", "url": "images/류준열.jpeg"},
    {"name": "마동석", "url": "images/마동석.jpg"},
    {"name": "바이든", "url": "images/바이든.jpg"},
    {"name": "박보영", "url": "images/박보영.jpg"},
    {"name": "박서준", "url": "images/박서준.jpg"},
    {"name": "방시혁", "url": "images/방시혁.jpeg"},
    {"name": "백석", "url": "images/백석.jpg"},
    {"name": "백종원", "url": "images/백종원.jpg"},
    {"name": "베컴", "url": "images/베컴.jpg"},
    {"name": "봉준호", "url": "images/봉준호.jpeg"},
    {"name": "비와이", "url": "images/비와이.jpeg"},
    {"name": "뽀로로", "url": "images/뽀로로.jpg"},
    {"name": "사나", "url": "images/사나.jpg"},
    {"name": "서현진", "url": "images/서현진.jpg"},
    {"name": "세종", "url": "images/세종.jpg"},
    {"name": "손예진", "url": "images/손예진.jpg"},
    {"name": "손흥민", "url": "images/손흥민.jpg"},
    {"name": "송가인", "url": "images/송가인.jpg"},
    {"name": "송강", "url": "images/송강.jpg"},
    {"name": "수지", "url": "images/수지.jpg"},
    {"name": "신민아", "url": "images/신민아.jpg"},
    {"name": "아이린", "url": "images/아이린.jpg"},
    {"name": "아이유", "url": "images/아이유.jpg"},
    {"name": "엘사", "url": "images/엘사.jpg"},
    {"name": "윈터", "url": "images/윈터.jpg"},
    {"name": "윤동주", "url": "images/윤동주.jpg"},
    {"name": "이광수", "url": "images/이광수.jpg"},
    {"name": "이동욱", "url": "images/이동욱.jpeg"},
    {"name": "이서진", "url": "images/이서진.jpg"},
    {"name": "이석훈", "url": "images/이석훈.jpg"},
    {"name": "이수근", "url": "images/이수근.jpeg"},
    {"name": "이승기", "url": "images/이승기.jpg"},
    {"name": "이재용", "url": "images/이재용.jpeg"},
    {"name": "이정재", "url": "images/이정재.jpg"},
    {"name": "임시완", "url": "images/임시완.jpg"},
    {"name": "전지현", "url": "images/전지현.jpg"},
    {"name": "제니", "url": "images/제니.jpg"},
    {"name": "조정석", "url": "images/조정석.jpg"},
    {"name": "조진웅", "url": "images/조진웅.jpg"},
    {"name": "주지훈", "url": "images/주지훈.jpg"},
    {"name": "주호민", "url": "images/주호민.jpeg"},
    {"name": "지수", "url": "images/지수.jpg"},
    {"name": "차은우", "url": "images/차은우.jpg"},
    {"name": "천우희", "url": "images/천우희.jpg"},
    {"name": "한가인", "url": "images/한가인.jpg"},
    {"name": "한소희", "url": "images/한소희.jpg"},
]

const total = jsonSource.length
for (let j = 0; j < total; j++) {
  jsonSource[j + total] = jsonSource[j]
  jsonSource[j + total * 2] = jsonSource[j]
}


var jsonObjName = [];
var jsonObjUrl = [];

for (var i=0; i<jsonSource.length; i++) {
    jsonObjName.push(jsonSource[i][Object.keys(jsonSource[i])[0]]);
    jsonObjUrl.push(jsonSource[i][Object.keys(jsonSource[i])[1]]);
}
// console.log(jsonObjName); // ["apple", "banana", "cherry", "grapes", "kmelon", "orange", "peach", "pear", "strawberry", "watermelon"]
// console.log(jsonObjUrl); // ["fruits/apple.jpeg", "fruits/banana.png", "fruits/cherry.png", "fruits/grapes.png", "fruits/kmelon.png", "fruits/orange.png", "fruits/peach.png", "fruits/pear.png", "fruits/strawberry.png", "fruits/watermelon.png"]

var taja = jsonObjName;
var tajaUrl = jsonObjUrl;

// 밑에 선언한 tajaContents 안에 Div를 넣기
var tajaContents = document.getElementById("tajaContents");

// tajaDiv를 다루기 위한 배열
var newObj = [];

// taja의 각 글자마다 top을 주기위한 배열 초기화 (글자를 내려오게 하기 위해 style 의 top을 이용할 것입니다
var plusTop = new Array(jsonSource.length);
for (let i = 0; i < plusTop.length; i++) {
plusTop[i] = 0;
}

// 글자의 div 크기를 고정으로 주기 위한 변수입니다.
const TAJAWIDTH = 150;
const TAJAHEIGHT = 200;

// 그려지는 것 보다 내려오는게 간격이 더 짧게 함( setInterval의 시간 변수)
const DRAWTIME = 2500;
const DOWNTIME = 500;

// 점수 변수
var score = 0;
var scoreDiv = document.getElementById("score");
scoreDiv.innerHTML = "SCORE : " + score;

// taja배열의 index 값에 대한 변수
var idx = 0;

// 화면에 글자를 뿌려주기 위한 메서드
function drawTaja() {
var randomPick = 0;
var temp = null;

// 랜덤으로 taja배열을 섞어주기 위한 for문
for (let i = 0; i < jsonSource.length; i++) {
randomPick = Math.round(Math.random() * (jsonSource.length - 1));
temp = tajaUrl[randomPick];
tajaUrl[randomPick] = tajaUrl[i];
tajaUrl[i] = temp;

temp2 = taja[randomPick];
taja[randomPick] = taja[i];
taja[i] = temp2;
}

console.log(taja);

// 일정한 간격으로 화면에 단어를 하나씩 뿌려주기 위한 setInteval 메서드 입니다.
var drawInterval = setInterval(function () {
    var leftWidth = Math.round(Math.random() * 1200);
    var tajaDiv = document.createElement("div");

    const newIdx = idx++;
    tajaDiv.setAttribute('data-taja', taja[newIdx]);
    tajaDiv.innerHTML = '<img src="' + tajaUrl[newIdx] + '" width="150" />';
    tajaContents.appendChild(tajaDiv);

    // css
    tajaDiv.style.position = "absolute";
    tajaDiv.style.justifyContent = "center";

    // leftWidth 변수가 0 < leftWidth < 1200 으로 설정되어있기 때문에
    // 글자의 width값 까지 더하게 되면 tajaContents의 범위를 넘어갈 수 있습니다.
    // 그래서 그 범위를 넘어가게 되면 안넘어가게 하기 위한 재설정해주는 부분입니다.
    if (leftWidth + TAJAWIDTH >= tajaContents.offsetWidth) {
    tajaDiv.style.left = (leftWidth - TAJAWIDTH) + "px";
    } else {
    tajaDiv.style.left = leftWidth + "px";
    }

    // 각각의 tajaDiv를 다루기 위해 newObj 배열에 담는다.
    newObj.push(tajaDiv);

    // 화면에 글자가 다 뿌려지면 더 이상 글자를 뿌려주기 위한
    // setInterval() 을 중지시킨다. ( 그렇지 않으면 글자가 다 뿌려진 이후에도 계속 동작하게 됩니다.)
    if (newObj.length === jsonSource.length) {
    clearInterval(drawInterval);
    }
    }, DRAWTIME);
}

// 글자를 내려주기 위한 메서드
function downTaja() {
    setInterval(function () {
        for (let i = 0; i < jsonSource.length; i++) {
            if (i < newObj.length) {
                newObj[i].style.top = plusTop[i] + "px";
                // 글자의 범위가 경계(바닥) 바깥으로 나갔을 경우 제거
                if (plusTop[i] + TAJAHEIGHT >= tajaContents.offsetHeight) {
                    if (tajaContents.contains(newObj[i])) {
                        tajaContents.removeChild(newObj[i]);
                    }
                }
                plusTop[i] += 30;
            }
        }
    }, DOWNTIME);
}


var tajaText = document.getElementById("tajaText");
tajaText.addEventListener("keydown", function (e) {
    // enter 눌렀을 때
    if (e.keyCode === 13) {
        for (let i = 0; i < newObj.length; i++) {
            // 타자 친 단어와 화면의 단어가 일치했을 때
            if (tajaText.value === newObj[i].dataset.taja) {
                tajaContents.removeChild(newObj[i]);
                score += 100;
                scoreDiv.innerHTML = "SCORE : " + score;
            }
        }
        // enter 눌렀을 때 input 창 초기화
        tajaText.value = "";
    }
});

// 

// 클릭 횟수에 대한 변수
var count = 0;

// 시작하기
var tajaBtn = document.getElementById("tajaBtn");
tajaBtn.addEventListener("click", function () {
// 버튼을 눌렀을 때마다 메서드가 실행되므로 최초 1회만 실행되도록 count변수로 막아주었습니다.
if (count === 0) {
drawTaja();
downTaja();
}
count++;
});
