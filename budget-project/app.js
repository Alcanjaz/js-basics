
//BUDGET CONTROLLER
let budgetController = (function() {
    
})();

//UI CONTROLLER
let UIController = (function() {

    let DOMstrings = {
        inputType: '.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput() {
            return{
            type: document.querySelector(DOMstrings.inputType).value,//will be either inc o exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings() {
            return DOMstrings;
        }
    };

})();

//GLOBAL APP CONTROLLER
let controller = (function(budgetCtrl, UICtrl) {

    let DOM = UICtrl.getDOMstrings();

    let ctrlAddItem = function () {

        //1.Get the field input data
        let input = UICtrl.getInput();
        console.log(input);
        
        //2.Add the item to the budget controller

        //3.Add the item to the UI

        //4.Calculate the budget

        //5.Display the budget to the UI

         
        console.log('it works');
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });
    
})(budgetController, UIController);