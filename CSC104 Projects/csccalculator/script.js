
function calculateSimpleInterest() {;
    const principal = document.getElementById('simplePrincipal').value;
    const rate = document.getElementById('simpleRate').value;
    const time = document.getElementById('simpleTime').value;

    const result = (principal*rate*time)/100;
    document.getElementById('output').innerText = `Simple Interest is ${result}`;
}

function calculateCompoundInterest() {
    const principal = document.getElementById('compoundPrincipal').value;
    const rate = document.getElementById('compoundRate').value;
    const time = document.getElementById('compoundTime').value;

    const result = principal * (Math.pow((1 + rate / 100), time)) - principal;
    document.getElementById('compoundOutput').innerText = `Compound Interest is ${result.toFixed(2)}`;

}

function convertToNaira() {
    const usdAmount = document.getElementById('usdAmount').value;
    const exchangeRate = 410; 
    
    if (!isNaN(usdAmount) && usdAmount > 0) {
        const nairaAmount = usdAmount * exchangeRate;
        document.getElementById('result').innerText = `${usdAmount} USD is ${nairaAmount.toFixed(2)} NGN`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid amount';
    }
}



function convertToFahrenheit() {
    var fahrenheit = document.getElementById("fahrenheitInput").value;
    if (isNaN(fahrenheit)) {
      alert("Please enter a valid number.");
      return;
    }
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").innerHTML = fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.";
  }


function calculateGPA(grades) 

    let totalCreditPoints = 0;
    var totalQualityPoints = 0;
    var totalCreditHours = 0;
    
    function calculateGPA() 
      var grade = parseFloat(document.getElementById("grade").value);
      var creditHours = parseFloat(document.getElementById("credit").value)
      if (isNaN(grade) || isNaN(creditHours)) {
        alert("Please enter valid numbers.");
        return;
}
var qualityPoints = grade * creditHours;
  totalQualityPoints += qualityPoints;
  totalCreditHours += creditHours;
  var gpa = totalQualityPoints / totalCreditHours;
  document.getElementById("result").innerHTML = "Your GPA is: " + gpa.toFixed(2);
}