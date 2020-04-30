  // Write a function that takes the base and height of a triangle and return its area.

  function area (base, height){
    return (base*height)/2;
  }

  //Create a function that takes height and width and finds the perimeter of a rectangle.

  function findPerimeter(height, width) {
    return height * 2 + width * 2;
  }

  //Create a function that takes an array and returns the first element.

  function getFirstValue(arr) {
    return arr[0];
  }

  //Create a function that takes minutes and converts it into seconds

  function convert(minutes) {
    return minutes * 60;
  }

  // The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

  function animals(chickens, cows, pigs) {
    const $chickens = chickens*2;
    const $cows = cows*4;
    const $pigs = pigs*4;

    return $chickens+$cows+$pigs;
  }
