const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let justCalculated = false;
let Error = false;

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        const value = buttons[i].textContent;

        if (value === "C") {
            display.textContent = "";
            justCalculated = false;
            Error = false;
        }

        else if (value === "=") {
            try {
                const expression = display.textContent.replace("^", "**");
                let result = eval(expression);
                display.textContent = result;
                justCalculated = true;
            } catch {
                display.textContent = "Error";
                Error = true;
            }
        }

        else {
            if ((justCalculated === true && (value >= "0" && value <= "9")) || (Error == true)) {
                display.textContent = value;
            }

            else {
                display.textContent += value;
            }

            justCalculated = false;
            Error = false;

        }
    });
}