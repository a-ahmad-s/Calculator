var input = document.querySelector(".display");
var buttons = document.querySelectorAll(".button");
var string = "";
var arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", function (e) {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.innerHTML = string;
        }

        else if (e.target.innerHTML == "AC") {
            string = "0";
            input.innerHTML = string;

        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.innerHTML = string;
        }
        else {
            string += e.target.innerHTML;
            input.innerHTML = string;
        }
    })
})
