const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.outputs');
const signs = document.querySelectorAll('#orange');
const equal = document.querySelectorAll('.equal');
const negative = document.querySelector('.neg');
const clear = document.querySelector('.clear');
const percent = document.querySelector('.persent');

let firstvalue = "";
let isfirstvalue = false;
let secondvalue = "";
let issecondvalue = false;
let sign = "";
let resultvalue = 0;

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',(e) => {
        let atr = e.target.getAttribute('value');
        if (isfirstvalue === false) {
            getFirstValue(atr);
        } else {
            getSecondValue(atr);
        }
    });
}

function getFirstValue(el){
    result.innerHTML = "";
    firstvalue += el;
    result.innerHTML = firstvalue;
    firstvalue = +firstvalue;
}


function getSecondValue(el){
    if (firstvalue != "" && sign !=""){
        secondvalue += el;
        result.innerHTML = secondvalue;
        secondvalue = +secondvalue;
    }
}

function getsign(){
    for(let i = 0; i< signs.length; i++){
        signs[i].addEventListener('click',(e) =>{
            sign = e.target.getAttribute('value');
            isfirstvalue = true;
        })
    }
}
getsign();

equal.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+"){
        resultvalue = firstvalue + secondvalue;
    } else if(sign === "-"){
        resultvalue = firstvalue - secondvalue;
    }else if(sign === "×"){
        resultvalue = firstvalue * secondvalue;
    }else if(sign === "÷"){
        resultvalue = firstvalue / secondvalue;
    }
    result.innerHTML = resultvalue;
    firstvalue = resultvalue;
    secondvalue = "";
})

function checkresultlength(){
    resultvalue = JSON.stringify(resultvalue);

    if(resultvalue.length >= 8){
        resultvalue = JSON.parse(resultvalue);
        result.innerHTML = resultvalue.toFixed(5);
    }
}

negative.addEventListener('click', () =>{
    result.innerHTML  = "";
    if(firstvalue != ""){
        resultvalue = -firstvalue;
        firstvalue = resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != ""){
        resultvalue = -resultvalue;
    }

    result.innerHTML = resultvalue;
})

percent.addEventListener('click', () =>{
    result.innerHTML  = "";
    if(firstvalue != ""){
        resultvalue = -firstvalue/100;
        firstvalue = resultvalue;
    }
    if(firstvalue != "" && secondvalue != "" && sign != ""){
        resultvalue = -resultvalue /100;
    }

    result.innerHTML = resultvalue;
})

clear.addEventListener('click', () =>{
    result.innerHTML = 0;
    let firstvalue = "";
    let isfirstvalue = false;
    let secondvalue = "";
    let issecondvalue = false;
    let sign = "";
    let resultvalue = 0;

})