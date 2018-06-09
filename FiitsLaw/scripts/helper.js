var allUserPerformedTasks = new Array();

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getArbitrarySize(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function between(x, min, max) {
    return x >= min && x <= max;
  }

function playNextRoundButton(roundNumber){
  console.log(" Previous round Results");
  console.log(getallUserPerformedTasks());

  var roundAlias = "";
  if (roundNumber == 10){
    roundAlias = "Final"
  }else{
    roundAlias = "Next"
  }
  document.getElementById("nextButton").innerHTML = roundAlias + " Round";
  showGameRoundButton();
}

function hideStartButton() {
  document.getElementById("startButton").style.display = "none";
}

function showStartButton() {
  document.getElementById("startButton").style.display = "inline";
}


function hideEndButton() {
  document.getElementById("endButton").style.display = "none";
}

function showEndButton() {
  document.getElementById("endButton").style.display = "inline";
}

function hideGameRoundButton() {
  document.getElementById("nextButton").style.display = "none";
}

function showGameRoundButton() {
  document.getElementById("nextButton").style.display = "inline";
}

function deleteSvg() {
    var container = document.getElementById("svgs");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }



function getCircleRadius() {
  // Returns a random size for the circle small, medium , large
  var radius = getArbitrarySize(1, 4);
  switch (radius) {
    case 1:
      return 5;
      break;

    case 2:
      return 10;
      break;

    case 3:
      return 15;
      break;
  }
}

function setDistanceToMouse(range) {
  switch (range) {
    case  1: //left
      return getArbitrarySize(5, 45);
      break;

    case 2: //right
      return getArbitrarySize(55, 90);
      break;

    case "yAxis":
      return getArbitrarySize(10, 50);
      break;
  }
}

function AddData(amplitude, width, time, click) {
    $("#results tr:last").after(
      "<tr><td>" +
        amplitude +
        "</td><td>" +
        width +
        " </td><td>" +
        time +
        " </td><td>" +
        click +
        " </td></tr>"
    );
  }

function logTaskSummary(roundNumber, taskNumber, time, position, distance, radius, errors){
    allUserPerformedTasks.push( {
    roundNumber: roundNumber,
    taskNumber: taskNumber,
    timeSinceRoundStart: time,
    position: position,
    distance: distance,
    circleRadius: radius,
    errorsOnTask: errors
  });
}

function getallUserPerformedTasks(){
    return allUserPerformedTasks;
}