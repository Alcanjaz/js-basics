
//BUDGET CONTROLLER
var budgetController = (function() {
    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp:0,
            inc:0
        }
    };

    return {
        addItem(type, des, val){
            let newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //Create new item based on 'inc' or 'exp' type
            if(type==='exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;

        },
        testing(){
            console.log(data);
        }
    }
})();

//UI CONTROLLER
var UIController = (() => {

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
var controller = ((budgetCtrl, UICtrl) => {

    let setupEventListeners = () => {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });

    }

    let DOM = UICtrl.getDOMstrings();

    let ctrlAddItem = () => {
        let input, newItem;

        //1.Get the field input data
        input = UICtrl.getInput();
        
        //2.Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3.Add the item to the UI

        //4.Calculate the budget

        //5.Display the budget to the UI

         
        console.log('it works');
    };

    return{
        init() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();