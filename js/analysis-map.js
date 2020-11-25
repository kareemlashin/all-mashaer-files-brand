$(document).ready(function() {
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontFamily = 'Cairo';
    Chart.defaults.global.defaultFontFamily = "'Cairo'"

    var pieChart = document.getElementById("pieChart");


    var data = {
        labels: [
            "سلبي",
            "محايد",
            "ايجابي",
        ],
        datasets: [{
            data: [133.3, 86.2, 52.2],
            backgroundColor: [
                "#E74F5B",
                "#FFA70B",
                "#27AA74",
            ]
        }]
    };

    var pieChart = new Chart(pieChart, {
        type: 'pie',
        data: data
    });
    //chart-tweet

    //chart-num-user
    //chart-num-country
    //chart-num-tweet-zone

    $("#big-bar").click(function(e) {

        let w = $("#zone").width();
    });

    var ctx = document.getElementById("chart-num-tweet-zone").getContext('2d');


    var myChart = new Chart(ctx, {
        type: 'line',
        options: {
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Cairo'",
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontSize: 8
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 8
                    }
                }],
            }
        },

        data: {
            labels: ["1", "2", "2 ", "3", "4", "6 ", "7", "8", "9", "10"],
            datasets: [{
                label: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], // Specify the data values array
                fill: false,
                borderColor: '#2196f3', // Add custom color border (Line)
                backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
                borderWidth: 3 // Specify bar border width
            }]
        },
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Cairo'",

            legend: {
                display: false,

            },
        }
    });


    var ctx = document.getElementById("barChart").getContext('2d');

    var barChart = new Chart(ctx, {
        type: 'bar',
        options: {
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Cairo'",

            legend: {
                display: false,
            },
        },
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun", "Thu", "Fri", "Sst", "Sun"],
            datasets: [{
                label: false,
                data: [30, 29, 5, 5, 20, 3, 10, 5, 20, 3, 10],
                backgroundColor: "#0373BF"
            }]
        }
    });

    var ctx2 = document.getElementById("barChart2").getContext('2d');

    var barChart2 = new Chart(ctx2, {
        type: 'bar',
        options: {
            defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Cairo'",

            legend: {
                display: false,
            },
        },
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun", "Thu", "Fri", "Sst", "Sun"],
            datasets: [{
                label: false,
                data: [1, 2, 3, 7, 5, 6, 7, 5, 6, 7, 10],
                backgroundColor: "#0373BF"
            }]
        }
    });

    var ctx3 = document.getElementById("barChart3").getContext('2d');

    var barChart3 = new Chart(ctx3, {
        type: 'bar',
        options: {
            legend: {
                display: false,
            },
        },
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun", "Thu", "Fri", "Sst", "Sun"],
            datasets: [{
                label: false,
                data: [30, 29, 5, 5, 20, 3, 10, 5, 20, 3, 10],
                backgroundColor: "#0373BF"
            }]
        }
    });

    var barOptions_stacked = {
        defaultFontFamily: Chart.defaults.global.defaultFontFamily = "'Cairo'",

        tooltips: {

            enabled: false
        },
        hover: {
            animationDuration: 0
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11
                },
                scaleLabel: {
                    display: false
                },
                gridLines: {},
                stacked: true
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11
                },
                stacked: true
            }]
        },
        legend: {
            display: true,
            position: "top",
            align: "center",

        },

        animation: {
            onComplete: function() {
                var chartInstance = this.chart;
                var ctx = chartInstance.ctx;
                ctx.textAlign = "center";
                ctx.font = "9px Open Sans";
                ctx.fillStyle = "#fff";

                Chart.helpers.each(this.data.datasets.forEach(function(dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    Chart.helpers.each(meta.data.forEach(function(bar, index) {
                        data = dataset.data[index];
                        if (i == 0) {
                            ctx.fillText(data, 50, bar._model.y + 4);
                        } else {
                            ctx.fillText(data, bar._model.x - 25, bar._model.y + 4);
                        }
                    }), this)
                }), this);
            }
        },
        pointLabelFontFamily: "Quadon Extra Bold",
        scaleFontFamily: "Quadon Extra Bold",
    };

    var ctxTime = document.getElementById("horizontalBarChartCanvas");
    var ctxTime = new Chart(ctxTime, {
        type: 'horizontalBar',
        legend: {
            position: "top",
            align: "center",

        },
        data: {
            labels: ["نعم", "#السعودية", "#المملكة_العربية", "#اليوم_الوطني", "#الله", "#الرياض", "  عدة قرون ونحن هنا في ", "لاكث  في المملكة", "#الوطن_الأعظم"],

            datasets: [{
                label: "سلبي",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "#E74F5B"
            }, {
                label: "محايد",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "#FFA70B"
            }, {
                label: "ايجابي",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],

                backgroundColor: "#27AA74"
            }]
        },

        options: barOptions_stacked,
    });
    var ctxTime2 = document.getElementById("horizontalBarChartCanvas2");
    var ctxTime3 = new Chart(ctxTime2, {
        type: 'horizontalBar',
        legend: {
            position: "top",
            align: "center",

        },

        data: {
            labels: ["نعم", "#السعودية", "#المملكة_العربية", "#اليوم_الوطني", "#الله", "#الرياض", " من عدة  ونحن هنا في ", "لاكث  في المملكة", "#الوطن_الأعظم"],

            datasets: [{
                label: "سلبي",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "#E74F5B"
            }, {
                label: "محايد",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "#FFA70B"
            }, {
                label: "ايجابي",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],

                backgroundColor: "#27AA74"
            }]
        },

        options: barOptions_stacked,
    });
    var ctxTime3 = document.getElementById("horizontalBarChartCanvas3");
    var ctxTime3 = new Chart(ctxTime3, {
        type: 'horizontalBar',
        legend: {
            position: "top",
            align: "center",

        },
        data: {
            labels: ["نعم", "#السعودية", "#المملكة_العربية", "#اليوم_الوطني", "#الله", "#الرياض", "لاكثر من   ونحن هنا  المملكة", "لاكث  في المملكة", "#الوطن_الأعظم"],

            datasets: [{
                label: "سلبي",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "#E74F5B"
            }, {
                label: "محايد",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],
                backgroundColor: "#FFA70B"
            }, {
                label: "ايجابي",
                data: [100, 200, 300, 100, 200, 300, 100, 200, 300],

                backgroundColor: "#27AA74"
            }]
        },

        options: barOptions_stacked,
    });

});