function setDistanceToMouse(distance, position) {
    //Position is a STRING  and is either left or right
    // Distance is a STRING  and is either long or short
    var newDistance;
    if (distance === 'short') {
        newDistance = Math.floor(Math.random() * 5);
    } else if (distance === 'long') {
        newDistance = Math.floor(Math.random() * 10);
    }

    if (position === 'left') {
        // Will return a negative number
        return -Math.abs(newDistance)
    } else {
        return Math.abs(newDistance)
    }
}

function getCircleRadius(sizeLevel) {
    // There are 3 levels of circle sizes
    // size 1 = small
    // size 2 = medium
    // size 3 = large
    // sizeLevel is an integer

    switch (sizeLevel) {
        case 1:
            return 20;
            break;
        case 2:
            return 40;
            break;
        case 3:
            return 65;
            break;

    }
}

function taskTimerInstance(){
    //  Use easy timer library to create a timer
    var timerInstance = new Timer({precision: 'seconds'});
    return timerInstance;
}

function startTask(){

    var leftTasks, rightTasks;
    leftTasks = rightTasks = 0;

    var userPerformedtTasks = {
        time:null,
        position: null,
        distance: null,
        circleRadius: null
    }

}


    var list = [
        { amplitude: 20, width: 20, count: 0 },
        { amplitude: 40, width: 60 },
        { amplitude: 60, width: 40 }
    ]

    var choice = 0;
    function runner(e) {
        e = e || window.event;
        var src = e.target || e.srcElement;

        if (($('#start').length)) {
            if (event.target.id == "start" || $(event.target).parents('#start').length) {
                choice = 1;

                if (list[choice].count < 10) {

                } else {

                }

                createCircle(list[choice].amplitude, list[choice].width);
            }
        } else if (($('#starttoto').length)) {
            if (event.target.id == "starttoto" || $(event.target).parents('#starttoto').length) {
                Adddata(list[choice].amplitude, list[choice].width, "22", "Yes");
            } else {
                Adddata(list[choice].amplitude, list[choice].width, "21", "No");
            }
            createStart();
        }
    }
    //if (($('#start').length)) {
    //    $('#circles').click(function (e) {
    //        e.preventDefault();
    //        e.stopPropagation();
    //        if (e.target.id == "start" || $(e.target).parents('#start').length) {
    //            createCircle(20, 20);
    //            e.stopPropagation();
    //        }
    //        e.stopPropagation();
    //    });
    //} else if (($('.testLooo').length)) {
    //    e.preventDefault();
    //    $('#circles').click(function (e) {
    //        e.stopPropagation();
    //            if (e.target.id == "circle" || $(e.target).parents('#circle').length) {
    //                //alert("Inside div");
    //                Adddata();
    //                e.stopPropagation();
    //            } else {
    //                //alert("Outside div");
    //                Adddata();
    //                e.stopPropagation();
    //            }
    //            e.stopPropagation();
    //        });
    //    createStart();

    //}

    function createStart() {
        var container = document.getElementById('svgs');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        var svgns = "http://www.w3.org/2000/svg";
        var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'cx', 500);
        circle.setAttributeNS(null, 'cy', 90);
        circle.setAttributeNS(null, 'r', 20);
        circle.setAttributeNS(null, 'style', 'fill: green; stroke: black; stroke-width: 3px;');
        circle.setAttribute('id', 'start');
        container.appendChild(circle);
    }

    function createCircle(height, radius) {
        var container = document.getElementById('svgs');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        var svgns = "http://www.w3.org/2000/svg";
        var circle = document.createElementNS(svgns, 'circle');
        circle.setAttributeNS(null, 'cx', height);
        circle.setAttributeNS(null, 'cy', 90);
        circle.setAttributeNS(null, 'r', radius);
        circle.setAttributeNS(null, 'style', 'fill: blue; stroke: black; stroke-width: 3px;');
        circle.setAttribute('id', 'starttoto');
        container.appendChild(circle);
    }

    function Adddata(amplitude, width, time, click) {
        $('#results tr:last').after('<tr><td>' + amplitude + '</td><td>' + width + ' </td><td>' + time + ' </td><td>' + click + ' </td></tr>');
    }