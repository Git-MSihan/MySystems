let result = document.getElementById("outputs");
let show = document.getElementById("just");

function dis(num1) {
  result.value += num1;
}

function di(num) {
  if (result.value.length != 0) {
    let inputValue = result.value;
    if (
      inputValue.includes("+") ||
      inputValue.includes("-") ||
      inputValue.includes("÷") ||
      inputValue.includes("×")
    ) {
      equal();
      result.value += " " + num + " ";
    } else {
      result.value += " " + num + " ";
    }
  }
}

function percen(pre) {
  if (result.value.length != 0) {
    const a = result.value;
    if (a.indexOf(pre) === -1) {
      console.log(a.indexOf(pre));
      result.value += pre;
    }
  }
}

function neg(ne) {
  const n = result.value;
  if (n.includes("-")) {
    let inde = n.lastIndexOf("-");
    let lengths = result.value.length - 1;
    if (n[lengths] == " ") {
      let lengthsss = result.value.length - 2;
      let mm = n.slice(0, -2);
      if (n[lengthsss] == "-") {
        result.value = mm + "+ ";
      } else {
        result.value += ne;
      }
    }
  } else {
    result.value += ne;
  }
}

function dot(dott) {
  let re = result.value;
  if (re.includes(".")) {
    let ind = re.lastIndexOf(".");
    let length = result.value.length - 1;
    if (length != ind) {
      result.value += dott;
    }
  } else if (result.value.length === 0) {
    result.value = "0.";
  } else {
    result.value += dott;
  }
}

function equal() {
  let inputValue = result.value;
  if (
    inputValue.includes("+") ||
    inputValue.includes("-") ||
    inputValue.includes("÷") ||
    inputValue.includes("×")
  ) {
    show.value = result.value;
    if (inputValue.includes("÷") || inputValue.includes("×")) {
      inputValue = inputValue.replace("×", "*").replace("÷", "/");
      if (inputValue.includes("%") && inputValue.includes("*")) {
        inputValue = inputValue.replace("%", "/100");
        result.value = eval(inputValue);
      } else if (inputValue.includes("%") && inputValue.includes("/")) {
        inputValue = inputValue.replace("÷", "/").replace("%", "* 100");
        result.value = eval(inputValue);
      }
      result.value = eval(inputValue);
    } else {
      result.value = eval(result.value);
    }
  }
}

function Clear1() {
  result.value = "";
  show.value = "";
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
