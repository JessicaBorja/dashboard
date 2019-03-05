var currentTime = 5;
var x_axis = [0, 1, 2, 3, 4, 5];
var y_axis = [22, 21.5, 21, 21.3, 21];

window.onload = function () {
    createChart();
    setInterval(updateChart, 1000);
    setInterval(updateDate, 1000);
};

function updateDate() {
    var date = new Date().toLocaleString();
    document.querySelector("#date-container").innerHTML = date;
}

function createChart() {
    var graphDiv = document.getElementById('chartCard')

    var data = [{
        x: x_axis,
        y: y_axis,
        type: 'line'
    }];

    var layout = {
        title: 'Temperature',
        yaxis: {
            title: 'Temperature °C',
            showgrid: false,
            range: [15, 30],
        },
        xaxis: {
            title: 'Time (minutes)',
            showline: false,
            zeroline: false
        }
    };
    Plotly.newPlot(graphDiv, data, layout);
}

function updateChart() {
    var graphDiv = document.getElementById('chartCard')

    currentTime++;
    x_axis.push(currentTime);
    const new_y = (Math.random() * 5 + 20 + y_axis[currentTime - 3] + y_axis[currentTime - 2]) / 3;
    y_axis.push(new_y);

    var data = [{
        x: x_axis,
        y: y_axis
    }];

    Plotly.redraw(graphDiv, data);
}