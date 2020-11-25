$(document).ready(function() {

    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.defaultFontFamily = 'Cairo';
    Chart.defaults.global.defaultFontFamily = "'Cairo'"

    var ctx = document.getElementById('chart').getContext('2d');
    var ctx = new Chart(ctx, {
        type: 'horizontalBar',

        data: {
            labels: ["نعم", "#السعودية", "#المملكة_العربية", "#اليوم_الوطني", "#الله", "#الرياض", "#نعم", "#الله", "#الوطن_الأعظم"],

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
        options: {
            responsive: true,

            legend: {
                position: "top",
                align: "center",

            },
            scales: {
                xAxes: [{
                    stacked: true,

                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    var ctx2 = document.getElementById('chart2').getContext('2d');
    var ctx2 = new Chart(ctx2, {
        type: 'horizontalBar',

        data: {
            labels: ["نعم", "#السعودية", "#المملكة_العربية", "#اليوم_الوطني", "#الله", "#الرياض", "#نعم", "#الله", "#الوطن_الأعظم"],

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
        options: {
            responsive: true,

            legend: {
                position: "top",
                align: "center"
            },
            scales: {
                xAxes: [{
                    stacked: true,

                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
    var ctx3 = document.getElementById('chart3').getContext('2d');
    var ctx3 = new Chart(ctx3, {
        type: 'horizontalBar',

        data: {
            labels: ["نعم", "#السعودية", "#المملكة_العربية", "#اليوم_الوطني", "#الله", "#الرياض", "لاكثر من عدة قرون    ", "لاكث  في المملكة", "#الوطن_الأعظم"],

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
        options: {
            responsive: true,

            legend: {
                position: "top",
                align: "center",

            },
            scales: {
                xAxes: [{
                    stacked: true,

                }],
                yAxes: [{
                    stacked: true,

                }]
            }
        }
    });



});