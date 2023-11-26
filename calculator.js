let calculation= '';

    function updateCalculation(takeInput){
      calculation += takeInput;
      console.log(calculation);
      localStorage.setItem('calculation',calculation);
    }

    function saveCalculation(){
      localStorage.setItem('calculation',calculation);
    }

    function displayCalculation(){
      document.querySelector('.display-calculation').innerHTML = ` ${calculation}`;
    }