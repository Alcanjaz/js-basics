let budgetController = (function() {
    let x = 23;

    let add = function(a){
        return x + a;
    }

    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})();

let UIController = (function() {

})();

let controller = (function(budgetCtrl, UICtrl) {

    let test = budgetCtrl.publicTest(5);

    return{
        anotherPublic: function(){
            console.log(test);
        }
    }

})(budgetController, UIController);