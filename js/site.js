//get the values from the page
//starts our controller function
function getValues(){
    //get the values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse to int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //we call the generateNumbers
        numbers = generateNumbers(startValue, endValue);
        //we call the displayNumbers
        displayNumbers(numbers);
    }else{
        alert("All input must be numbers.")
    }

}

//generate numbers from startValue to the endValue
//logic function(s)
function generateNumbers(startValue, endValue){
    
    let numbers = [];

    //we want to get all numbers from start to end
    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }
    
    return numbers;
}

//display the numbers and mark even numbers bold
//diplay or view functions
function displayNumbers(numbers){
    
    let templateRows = "";
    
    for (let i = 0; i < numbers.length; i++) {
        let className = "even"
        let number = numbers[i];

        if(number % 2 == 0){
            className = "even"
        }else{
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></td>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}