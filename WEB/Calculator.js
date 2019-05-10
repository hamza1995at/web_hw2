window.addEventListener("load", function () {
    var initial_base = 10;
    var change_base = 10;
    var flag = false;
    var number = NaN;

    document.querySelector(".selector").addEventListener("change", function () {
        initial_base = change_base;
        change_base = document.querySelector(".selector").value;
        console.log(initial_base + "   " + change_base + "  " + number);
        if(!isNaN(number))
        {
            number = parseInt(number+'',initial_base).toString(change_base);
            document.querySelector(".input2").value =  number;
        }

    })

    document.querySelector(".input2").addEventListener("change", function () {
        number = document.querySelector(".input2").value;
        console.log(initial_base + "   " + change_base + "  " + number);
        if(!isLegal(change_base, number.toString()))
        {
            window.alert("number doesn't match the base");
        }
    })
})

function isLegal(base, str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i] + "  " + base);
        if (Number(str[i]) >= base)
            return false;
    }
    return true;
}