
//BUDGET CONTROLLER
const budgetController = (function() {
    const Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const calculateTotal = (type) => {
        let sum = 0;
        data.allItems[type].forEach(current => sum += current.value);
        data.totals[type] = sum;
    };

    const data = {
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

        calculateBudget(){

            //calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');

            //calculate the budget: income  - expenses

            //calculate the percentage of income that we spent

        },
    
        testing(){
            console.log(data);
        }
    }
})();

//UI CONTROLLER
const UIController = (() => {
    const DOMstrings = {
        inputType: '.add__type',
        inputDescription:'.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list'
    };

    
    return {
        getInput() {
            return{
                type: document.querySelector(DOMstrings.inputType).value,//will be either inc o exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        addListItem(obj, type){
            let html;
            let element;
            //Create HTML string with placeholder text
            
            if (type ==='inc'){
                element = DOMstrings.incomeContainer;
                html = `<div class="item clearfix" id="income-${obj.id}">
                <div class="item__description">${obj.description}</div>
                <div class="right clearfix">
                <div class="item__value">${obj.value}</div>
                <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                </div>
                </div>
                </div>`;
                
            } else if (type==='exp'){
                element = DOMstrings.expenseContainer;
                html = `
                <div class="item clearfix" id="expense-${obj.id}">
                            <div class="item__description">${obj.description}</div>
                            <div class="right clearfix">
                            <div class="item__value">${obj.value}</div>
                                <div class="item__percentage">21%</div>
                                <div class="item__delete">
                                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>`;
                    }
                    
            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', html);
            
        },
        
        clearFields(){
            const fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            fields.forEach(field => {
                field.value="";
            });
            
        },

        getDOMstrings() {
            return DOMstrings;
        }
    };

})();

//GLOBAL APP CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {

    const setupEventListeners = () => {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', (e) => {
        if (e.keyCode === 13 || e.which === 13){
            ctrlAddItem();
        }
    });

    }

    const DOM = UICtrl.getDOMstrings();

    const updateBudget = () => {
        //1. Calculate the budget

        //2. Return the budget

        //3. Display the budget on the UI

    }

    const ctrlAddItem = () => {
        
        //1.Get the field input data
        const input = UICtrl.getInput();
        
        //2.Add the item to the budget controller 
        if (input.description!=='' && input.value!=='' && input.value > 0) { // check we have correct values
            const newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3.Add the item to the UI
            if(newItem){
                UICtrl.addListItem(newItem, input.type);
            }
    
            //4. Clear the fields
            UICtrl.clearFields();
    
            //5.Calculate and update the budget
            updateBudget();
    
            //6.Display the budget to the UI
    
             
            console.log('it works');
        }

    };

    return{
        init() {
            console.log('Application has started.');
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();