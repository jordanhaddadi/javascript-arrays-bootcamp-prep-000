var chocolateBars = [
  "snicker",
  "hundred grand",
  "skittles"];
  
  function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}
  
  function destructivelyAddElementToBeginningOfArray(array,element){
    array.unshift(element);
    return array;
  }
  
  function addElementToEndOfArray(array, element) {
    return [...array, element];
  }

 function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
  }
  
  var cookies = [
    "Chocolate Chip",
    "Oatmeal",
    "Peanut Butter"]
  
  function accessElementInArray(array, index) {
    return array[index]
  }
  
  
    
    
  }
  
  