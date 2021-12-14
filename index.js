// console.log("hello");
// var randomNumber = Math.random();

const randomNumber = Math.floor(Math.random() * 6 + 1);
const randomNumber2 = Math.floor(Math.random() * 6 + 1);

function dice1() {
  console.log(randomNumber);
  if (randomNumber == 1) {
    document.getElementById("one").style.visibility = "visible";
  } else if (randomNumber == 2) {
    document.getElementById("two").style.visibility = "visible";
  } else if (randomNumber == 3) {
    document.getElementById("three").style.visibility = "visible";
  } else if (randomNumber == 4) {
    document.getElementById("four").style.visibility = "visible";
  } else if (randomNumber == 5) {
    document.getElementById("five").style.visibility = "visible";
  } else {
    document.getElementById("six").style.visibility = "visible";
  }
}

function dice2() {
  console.log(randomNumber2);
  if (randomNumber2 == 1) {
    document.getElementById("one1").style.visibility = "visible";
  } else if (randomNumber2 == 2) {
    document.getElementById("two1").style.visibility = "visible";
  } else if (randomNumber2 == 3) {
    document.getElementById("three1").style.visibility = "visible";
  } else if (randomNumber2 == 4) {
    document.getElementById("four1").style.visibility = "visible";
  } else if (randomNumber2 == 5) {
    document.getElementById("five1").style.visibility = "visible";
  } else {
    document.getElementById("six1").style.visibility = "visible";
  }
}

if (randomNumber == randomNumber2) {
  console.log("Tie");
  document.getElementById("msg").innerHTML = "Tie";
} else if (randomNumber > randomNumber2) {
  document.getElementById("msg").innerHTML = "Player One Wins";
} else {
  document.getElementById("msg").innerHTML = "Player Two Wins";
}
dice1();
dice2();
