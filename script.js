// Added const names for the instructions//
const names = ['you will not ues any think accept the thinks in the page remember that ']
// Connected the const names to a paragraph tag in index.html called "instructions", so that it can be displayed as text on the website//
for (let i = 0; i < names.length; i++) {
  document.getElementById('instructions').innerHTML = (names)
}

function setCookie (cname, cvalue, exdays) {
let d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires'+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}





// Makes all the riddles dissapear (except for riddle 1) when you run the page//
function startbuttondisapear () {
  document.getElementById('second-riddle').style.display = 'none'
  document.getElementById('third-riddle').style.display = 'none'
  document.getElementById('fourth-riddle').style.display = 'none'
  document.getElementById('fifth-riddle').style.display = 'none'
  document.getElementById('sixth-riddle').style.display = 'none'
  document.getElementById('seventh-riddle').style.display = 'none'
  document.getElementById('eighth-riddle').style.display = 'none'
  document.getElementById('dont-click-me').style.display = 'none'
};

document.getElementById('starting').addEventListener('load', startbuttondisapear)
document.getElementById('button-1').addEventListener('click', function1)
document.getElementById('button-2').addEventListener('click', function2)
document.getElementById('button-3').addEventListener('click', function3)
document.getElementById('button-4').addEventListener('click', function4)
document.getElementById('button-5').addEventListener('click', function5)
document.getElementById('button-6').addEventListener('click', function6)
document.getElementById('button-7').addEventListener('click', function7)
document.getElementById('button-8').addEventListener('click', function8)
document.getElementById('disapearbutton-1').addEventListener('click', disapearbutton1)
document.getElementById('disapearbutton-2').addEventListener('click', disapearbutton2)
document.getElementById('disapearbutton-3').addEventListener('click', disapearbutton3)
document.getElementById('disapearbutton-4').addEventListener('click', disapearbutton4)
document.getElementById('disapearbutton-5').addEventListener('click', disapearbutton5)
document.getElementById('disapearbutton-6').addEventListener('click', disapearbutton6)
document.getElementById('disapearbutton-7').addEventListener('click', disapearbutton7)
document.getElementById('disapearbutton-8').addEventListener('click', disapearbutton8)
document.getElementById('button9').addEventListener('click', donotclickme)
// The variables demonstrated bellow connect to the input boxes for each riddle//
let riddle1 = 0
let riddle2 = 0
let riddle3 = 0
let riddle4 = 0
let riddle5 = 0
let riddle6 = 0
let riddle7 = 0
let riddle8 = 0

// Using a function, an if statement and an or we were able to set the button for the answers to be as displayed bellow (after you enter your answer). This is repeated 8 times (one for each "Enter" button)//
function function1 () {
  riddle1 = document.getElementById('answer-1').value
  if (riddle1 === '127' ) {
    document.getElementById('paragraph').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph').innerHTML = 'Incorrect'
  }
}
function function2 () {
  riddle2 = document.getElementById('answer-2').value
  if (riddle2 === 'y=3' || riddle2 === '3') {
    document.getElementById('paragraph-2').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-2').innerHTML = 'Incorrect'
  }
}
function function3 () {
  riddle3 = document.getElementById('answer-3').value
  if (riddle3 === 'A Brahmagupta' || riddle3 === 'a brahmagupta' || riddle3 === 'Brahmagupta' || riddle3 === 'brahmagupta') {
    document.getElementById('paragraph-3').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-3').innerHTML = 'Incorrect'
  }
}
function function4 () {
  riddle4 = document.getElementById('answer-4').value
  if (riddle4 === 'inverted “T”' || riddle4 === 'inverted “t”' || riddle4 === 'Inverted “t”' || riddle4 === ' “T”') {
    document.getElementById('paragraph-4').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-4').innerHTML = 'Incorrect'
  }
}
function function5 () {
  riddle5 = document.getElementById('answer-5').value
  if (riddle5 === 'March 14' || riddle5 === 'march 14') {
    document.getElementById('paragraph-5').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-5').innerHTML = 'Incorrect'
  }
}
function function6 () {
  riddle6 = document.getElementById('answer-6').value
if (riddle6 === 'Octagon' || riddle6 === 'octagon') {
    document.getElementById('paragraph-6').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-6').innerHTML = 'Incorrect'
  }
}
function function7 () {
  riddle7 = document.getElementById('answer-7').value
  if (riddle7 === 'The 16th century' || riddle7 === 'the 16th century' || riddle7 === ' 16th ' || riddle7 === ' 16th century' || riddle7 === ' 16th Century') {
    document.getElementById('paragraph-7').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-7').innerHTML = 'Incorrect'
  }
}
function function8 () {
  riddle8 = document.getElementById('answer-8').value
  if (riddle8 === '500') {
    document.getElementById('paragraph-8').innerHTML = 'Correct'
  } else {
    document.getElementById('paragraph-8').innerHTML = 'Incorrect'
  }
}

// When clciking the "next question button", it makes the whole section dissapear (by using div tags in HTML) and makes a new section appear, this is repeated 8 times (one for each "Next question" button)//
function disapearbutton1 () {
  document.getElementById('first-riddle').style.display = 'none'
  document.getElementById('second-riddle').style.display = 'block'
}

function disapearbutton2 () {
  document.getElementById('second-riddle').style.display = 'none'
  document.getElementById('third-riddle').style.display = 'block'
}

function disapearbutton3 () {
  document.getElementById('third-riddle').style.display = 'none'
  document.getElementById('fourth-riddle').style.display = 'block'
}

function disapearbutton4 () {
  document.getElementById('fourth-riddle').style.display = 'none'
  document.getElementById('fifth-riddle').style.display = 'block'
}

function disapearbutton5 () {
  document.getElementById('fifth-riddle').style.display = 'none'
  document.getElementById('sixth-riddle').style.display = 'block'
}

function disapearbutton6 () {
  document.getElementById('sixth-riddle').style.display = 'none'
  document.getElementById('seventh-riddle').style.display = 'block'
}

function disapearbutton7 () {
  document.getElementById('seventh-riddle').style.display = 'none'
  document.getElementById('eighth-riddle').style.display = 'block'
}

function disapearbutton8 () {
  document.getElementById('eighth-riddle').style.display = 'none'
  document.getElementById('dont-click-me').style.display = 'block'
}

// Last riddle, "wooow thanks for take this qustion and the qution is when should the person start to porgram ?"//
const myAge = 7
let answer = 0

function donotclickme () {
  while (myAge !== answer) {
    answer = prompt('wooow thanks for take this qustion and the qution is when should the person start to porgram ?')
    if (answer === myAge) {
      alert('yes 7 years old most of the people says that and 7 years old will set evryone good future ')
    } else if (answer < myAge) {
      alert('You guessed to small, please try again')
    } else if (answer > myAge) {
      alert('you guessed to big, pease try again')
    } else {
      alert('invalid answer, please try again')
    }
  }
}
