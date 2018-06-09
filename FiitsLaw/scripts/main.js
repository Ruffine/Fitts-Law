var roundNumber, taskId, errors, svgToLeft, svgToRight;
roundNumber = taskId = errors = svgToLeft = svgToRight = 0;
var leftAxisLimit = 45;
var rightAxisMarker = 90;
var taskTimer = new Timer({ precision: "seconds" });


$(document).on("click", function(event) {
  if (taskTimer.isRunning()) {
    // Only  register click events after the game has started
    if (event.target.id == "startButton") {
    } else if (event.target.id == "nextButton") {

    } else if (event.target.id != "circularSvg") {
      errors++;
    }
    playTask();
  }
});

function resetGame() {
  taskTimer.reset();
  taskTimer.stop();

  deleteSvg();
  taskId = errors = svgToLeft = svgToRight = 0;
}

function completeGame() {
  resetGame();
  showStartButton();
}

function startTask() {
  hideStartButton();
  hideGameRoundButton();
  taskTimer.start();
  taskTimer.addEventListener("secondsUpdated", function(e) {
    $("#timer").html(taskTimer.getTimeValues().toString());
  });
}

function playFullGameSet() {
  hideGameRoundButton();
  if (roundNumber < 10) {
    roundNumber++;
    taskTimer.reset();
    playTask();
  }
}

function svgPositionTracker(xAxisValue) {
  if (between(xAxisValue, 5, 45)) {
    svgToLeft++;
    return "Left";
  } else if (between(xAxisValue, 55, 90)) {
    svgToRight++;
    return "right";
  }
}

function playTask() {
  if (taskId < 12) {
    taskId++;
    // When maxed on left pick right side
    if (svgToLeft == 6) {
      addCircleSvg(
        setDistanceToMouse(2),
        setDistanceToMouse("yAxis"),
        getCircleRadius()
      );
      // When maxed on right pick left side
    } else if (svgToRight == 6) {
      addCircleSvg(
        setDistanceToMouse(1),
        setDistanceToMouse("yAxis"),
        getCircleRadius()
      );
    } else if (svgToLeft < 6 || svgToRight < 6) {
      // randomly picks a side
      addCircleSvg(
        setDistanceToMouse(getArbitrarySize(1, 3)),
        setDistanceToMouse("yAxis"),
        getCircleRadius()
      );
    }
  } else {
    resetGame();
    if (roundNumber < 10) {
      playNextRoundButton(roundNumber);
    } else {
      alert("Game Over");
      showStartButton();
    }
  }
}

function addCircleSvg(xAxisPostion, yAxisPostion, radius) {
  var position = svgPositionTracker(xAxisPostion);
  logTaskSummary(
    roundNumber,
    taskId,
    taskTimer.getTimeValues().toString(),
    position,
    xAxisPostion,
    radius,
    errors
  );

  var container = document.getElementById("svgs");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // create an svg element
  var xmlns = "http://www.w3.org/2000/svg";
  var svgElem = document.createElementNS(xmlns, "svg");
  svgElem.setAttributeNS(null, "width", radius * 2 + 5);
  svgElem.setAttributeNS(null, "height", radius * 2 + 5);
  svgElem.setAttribute("id", "");

  //creates a circle element for the new svg
  var circle = document.createElementNS(xmlns, "circle");
  circle.setAttributeNS(null, "cx", xAxisPostion);
  circle.setAttributeNS(null, "cy", yAxisPostion);
  circle.setAttributeNS(null, "r", radius);
  circle.setAttributeNS(null, "width", radius * 2 + 5);
  circle.setAttributeNS(null, "height", radius * 2 + 5);
  circle.style.strokeWidth = "0.15px";
  circle.style.stroke = "black";
  circle.style.fill = getRandomColor();
  circle.setAttribute("id", "circularSvg");
  //   svgElem.appendChild(circle);

  container.append(circle);
}
