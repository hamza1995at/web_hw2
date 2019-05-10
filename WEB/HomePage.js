window.addEventListener("load", function () {
    document.querySelector(".kaka").innerHTML = randomString();
    document.querySelector(".button").addEventListener("click", function () {

        console.log(document.querySelector(".input").value);
        var trueString = document.querySelector(".kaka").innerHTML;
        var inputString = document.querySelector(".input").value;
        if (htspna(inputString, trueString)) {
           location.replace("Calculator.html");
        }
    })

})


function htspna(stringA, stringB) {
    if (stringA.length != stringB.length)
        return false;

    var index;
    var numbers = "0123456789";
    var lowers = "abcdefghijklmnopqrstuvwxyz";
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (index = 0; index < stringB.length; index++) {
        var c = stringB[index];
        if (!(c == "." || c == "," || c == "0" || c == "5")) {
            if (numbers.includes(c)) {
                var temp = "";


                var a = stringB.split("");
                a[index] = Math.abs(10 - c);
                for (var i = 0; i < a.length; i++)
                    temp += a[i];

                stringB = temp;



            }
            else
                if (lowers.includes(c)) {
                    if ("xyz".includes(c)) {

                        var temp = "";


                        var a = stringB.split("");
                        a[index] = String.fromCharCode((c.charCodeAt() + 3) % 122 + 96);
                        for (var i = 0; i < a.length; i++)
                            temp += a[i];

                        stringB = temp;
                    }
                    else {
                        var temp = "";


                        var a = stringB.split("");
                        a[index] = String.fromCharCode((c.charCodeAt() + 3));

                        for (var i = 0; i < a.length; i++)
                            temp += a[i];

                        stringB = temp;
                    }
                }



                else
                    if (uppers.includes(c))
                        if ("XYZ".includes(c)) {





                            var temp = "";


                            var a = stringB.split("");
                            a[index] = String.fromCharCode((c.charCodeAt() + 3) % 90 + 64);
                            for (var i = 0; i < a.length; i++)
                                temp += a[i];

                            stringB = temp;
                        }
                        else {
                            var temp = "";


                            var a = stringB.split("");
                            a[index] = String.fromCharCode((c.charCodeAt() + 3));

                            for (var i = 0; i < a.length; i++)
                                temp += a[i];

                            stringB = temp;
                        }



        }

    }
    var stringC = stringB;
    for (index = 0; index < stringB.length; index++) {
        var c = stringB[index];
        var temp = "";
        if (c == "." || c == ",") {
            if (!((stringB.length % 2 != 0) && (index == stringB.length / 2))) {
                if (!(".,".includes(stringB[stringB.length - index - 1]))) {
                    var a = stringC.split("");
                    var tp = a[index];

                    a[index] = a[stringB.length - index - 1];
                    a[stringB.length - index - 1] = tp;
                    for (var i = 0; i < a.length; i++)
                        temp += a[i];

                    stringC = temp;
                }

                else

                    if (index < stringB.length / 2) {
                        var a = stringC.split("");
                        var tp = a[index];
                        a[index] = a[stringB.length - index - 1];
                        a[stringB.length - index - 1] = tp;
                        for (var i = 0; i < a.length; i++)
                            temp += a[i];

                        stringC = temp;

                    }


            }

        }


    }
    stringB = stringC;

    if (stringA == stringB)
        return true;
    return false;

}


function randomString() {
    var chars = ".,0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var stringLength = Math.floor((Math.random() * 16) + 5);
    var index;
    var result = "";
    var i;
    for (i = 0; i < stringLength; i++) {
        index = Math.floor(Math.random() * chars.length);
        result += chars.substring(index, index + 1);


    }

    return result;
}