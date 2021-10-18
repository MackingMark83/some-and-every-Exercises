//1)hasOddNumber
//Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

//did it on my own

function hasOddNumber(arr){
    return arr.some(function(val){
    return (val % 2 !== 0)
         
    });
    }
    
    
    //2)hasAZero
    //Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
    
    //Had to look at solution
    
    function hasAZero(num){
    return num.toString().split('').some(function(val){
        return val === '0';
    })
    }
    
    //3)hasOnlyOddNumbers
    //Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.
    
    //did it on my own
    
    function hasOnlyOddNumbers(arr){
        return arr.every(function(val){
            return val % 2 !== 0
        })
    }
    
    
    //4)hasNoDuplicates
    //Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
    
    //Had to look at the solution
    
    function hasNoDuplicates(arr){
        return arr.every(function(val){
            return arr.indexOf(val) === arr.lastIndexOf(val);
        })
    }
    
    
    
    //5)hasCertainKey
    //Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
    
    //Had to look at solution
    
    function hasCertainKey(arr, key){
        return arr.every(function(val){
          return key in val
        })
      }
    
    
    //6)hasCertainValue
    //Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
    
    //did it on my own
    
    function hasCertainValue(arr, key, value){
        return arr.every(function(val){
            return val[key] = value
        })
    } 
    
    