/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function(){
    var memory = 0;
    var total = 0;
    function validate(x){
        if(typeof x !== 'number'){
            throw error;
        }
    }
    var calculator = {

        load: function(number){
            validate(number);
            total = number;
            return total;
        },

        getTotal: function(){
            return total;
        },
    
        add: function(number){
            validate(number);
            total += number;
            return total;
        },
        subtract: function(number){
            validate(number);
            total -= number;
            return total;
        },
        multiply: function(number){
            validate(number);
            total *= number;
            return total;
        },
        divide: function(number){
            validate(number);
            total /= number;
            return total;
        },
        recallMemory: function(){
            return memory;
        },
        saveMemory: function(){
            memory = total;
        },
        clearMemory: function(){
            memory = 0;
        }

  /**
   * Validation
   */

};
  return calculator;
}