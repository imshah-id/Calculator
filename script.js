console.log("hello i have been conneted");
const result = document.getElementById("result");
let data = "";
const container = document.querySelector("#nums")
const operator = document.querySelector("#operators")
container.addEventListener("click",function(e){
    e.stopPropagation()
    let pressed = e.target.textContent;
    if(pressed == "C"){
        result.textContent = '0'
        data =""
        return
    }
    else if(pressed == "="){
        if(data == ''){
            result.textContent =='0'
            return
        }
        result.textContent = eval(data);
        data = result.textContent
        return
    }
    data+= pressed;
    result.textContent= data;
    console.log(pressed)    
})
operator.addEventListener("click",function(e){
    let ele =data[data.length-1];
    let btn = e.target.textContent;
    if(btn == "CE"){
        if(data.length === 1){
            data = ''
           result.textContent = "0";
           return; 
        }
         if (data == "" ) {

           result.textContent = "0";
           return;
         }
        data =data.slice(0,-1);
        result.textContent=data;
        return
    }
    if(ele =="+" || ele== '-'|| ele=="*"||ele=="/"){
        return;
    }
    if(data == ""){
        if(btn== "+"|| btn== "-"){
            data += btn;
            result.textContent = data;
            return
        }
        return
    }
    data += btn
    result.textContent = data
})
document.addEventListener("keydown", function (e) {
  let pressed = e.key;

  if ((pressed >= "0" && pressed <= "9") || pressed === ".") {
    data += pressed;
    result.textContent = data;
  }

  if (
    pressed === "+" ||
    pressed === "-" ||
    pressed === "*" ||
    pressed === "/"
  ) {
    let lastChar = data[data.length - 1];
    if (
      lastChar !== "+" &&
      lastChar !== "-" &&
      lastChar !== "*" &&
      lastChar !== "/"
    ) {
      data += pressed;
      result.textContent = data;
    }
  }

  if (pressed === "c" || pressed === "C") {
    result.textContent = "0";
    data = "";
  }

  if (pressed === "Backspace") {
    if (data.length === 1) {
      data = "";
      result.textContent = "0";
    } else {
      data = data.slice(0, -1);
      result.textContent = data;
    }
  }

  if (pressed === "Enter" || pressed === "=") {
    if (data === "") {
      result.textContent = "0";
      return;
    }
    result.textContent = eval(data);
    data = result.textContent;
  }
});