$(document).ready(function() {


    function inc1() {
        let num1 = $("#countOne").text();
        if (num1 < 1000) {
            num1++;
            clearInterval(inc1)
        }
        $("#countOne").text(num1)


    }

    function inc2() {
        let num2 = $("#countTwo").text();
        if (num2 < 1000) {
            num2++;
            clearInterval(inc2)
        }
        $("#countTwo").text(num2)


    }

    function inc3() {
        let num3 = $("#countThree").text();
        if (num3 < 1000) {
            num3++;
            clearInterval(inc3)
        }
        $("#countThree").text(num3)


    }

    function inc4() {
        let num4 = $("#countFour").text();
        if (num4 < 1000) {
            num4++;
            clearInterval(inc4)
        }
        $("#countFour").text(num4)


    }
    setInterval(inc3, 20);
    setInterval(inc2, 20);
    setInterval(inc1, 20);
    setInterval(inc4, 20);
});