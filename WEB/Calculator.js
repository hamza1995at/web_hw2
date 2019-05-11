window.addEventListener("load", function () {
    var initial_base = 10;
    var change_base = 10;
    var number = NaN;

    document.querySelector(".selector").addEventListener("change", function () {
        initial_base = change_base;
        change_base = document.querySelector(".selector").value;
        if(!isNaN(number))
        {
            number = parseInt(number+'',initial_base).toString(change_base);
            document.querySelector(".input2").value =  number;
        }

    })

    document.querySelector(".input2").addEventListener("change", function () {
        number = document.querySelector(".input2").value;
        if(!isLegal(change_base, number.toString()))
        {
            window.alert("number doesn't match the base");
        }
    })
})

function isLegal(base, str) {
    for (var i = 0; i < str.length; i++) {
        if(isNaN(str[i]))
            return false;
        else if (Number(str[i]) >= base)
            return false;
    }
    return true;
}
