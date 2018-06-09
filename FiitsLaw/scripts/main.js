/*
Helpers
*/

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

function hideStartButton() {
  document.getElementById("startButton").style.display = "none";
}

function hideEndButton() {
  document.getElementById("endButton").style.display = "none";

}
function showEndButton() {
  document.getElementById("endButton").style.display = "inline";
}


function getCircleRadius() {
  // Returns a random size
  return getArbitrarySize(2, 5);
}

function setDistanceToMouse(range) {
  switch (range) {
    case "left":
      return getArbitrarySize(5, 45);
      break;

    case "right":
      return getArbitrarySize(55, 90);
      break;

    case "yAxis":
      return getArbitrarySize(5, 25);
      break;
  }
}

/*
Main pieces
*/
var leftTasks, rightTasks;
leftTasks = rightTasks = 0;
var leftAxisLimit = 45;
var rightAxisMarker = 90;
var totalUserPerformedTasks = new Array(120);
var userPerformedTasks = {
  time: null,
  position: null,
  distance: null,
  circleRadius: null
};

// hideEndButton();
var taskTimer =  new Timer({ precision: "seconds" });

function startTask() {
  hideStartButton();
  taskTimer.start();
  taskTimer.addEventListener("secondsUpdated", function(e) {
    $("#timer").html(taskTimer.getTimeValues().toString());
  });
  playGame();
}

function completeTask() {
  taskTimer.stop();
}

function playGame() {
  if (leftTasks < 60) {
    addCircleSvg(
      setDistanceToMouse("left"),
      setDistanceToMouse("yAxis"),
      getCircleRadius()
    );
    leftTasks++;
    console.log("right " + leftTasks);
  } else if (rightTasks < 60) {
    addCircleSvg(
      setDistanceToMouse("right"),
      setDistanceToMouse("yAxis"),
      getCircleRadius()
    );
    rightTasks++;
    console.log("left" + rightTasks);
  } else {
          deleteSvg();

    showEndButton();
  }
}
var wrongClick = 0; 
    function WrongClick(clickevent) {
        e = e || window.event;
        var src = e.target || e.srcElement;

        if (($('#start').length)) {
            if (event.target.id == "start" || $(event.target).parents('#start').length) 
            {
                choice = 1;
            }
        }else if (($('#starttoto').length)) {
            if (event.target.id == "starttoto" || $(event.target).parents('#starttoto').length) {
                Adddata(list[choice].amp, list[choice].width, "22", "Yes");
            } else {
                Adddata(list[choice].amp, list[choice].width, "21", "No");
            }
            createStart();
        }
    }


function deleteSvg(){
    var container = document.getElementById("svgs");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
}
function addCircleSvg(xAxisPostion, yAxisPostion, radius) {
    var container = document.getElementById("svgs");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  // create an svg element
  var xmlns = "http://www.w3.org/2000/svg";
  var svgElem = document.createElementNS(xmlns, "svg");
  svgElem.setAttributeNS(null, "width", radius * 2 + 5);
  svgElem.setAttributeNS(null, "height", radius * 2 + 5);
  svgElem.setAttribute("id", "starttoto");

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
  console.log("added smthg");
}

function Adddata(amplitude, width, time, click) {
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
