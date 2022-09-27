const tiles = document.querySelectorAll(".tile");

let gridArray = [
    {clickCounter: 0}, {clickCounter: 0}, {clickCounter: 0}, {clickCounter: 0}, {clickCounter: 0}, {clickCounter: 0}, {clickCounter: 0}, {clickCounter: 0}, {clickCounter: 0}]

tiles.forEach(
  (tileDivElement, i) =>
  tileDivElement.addEventListener("click", (function(e) {
    crossOrCircle(i)                                                                    //Function that tracks how many times a div has been clicked
    change_symbol(i)                                                                    //Function that changes the symbol picture 
    }))
  );

function crossOrCircle(grid) {                                                          //Keeps track of which "state" the div field should be in, cycling through 0,1,2
    gridArray[grid].clickCounter++                                                      //Each click increases the counter by one.
    if (gridArray[grid].clickCounter == 3) { gridArray[grid].clickCounter = 0}          //Once the counter hits 3 it's reset back to 0.
}

function change_symbol(n) {                                                             //Picks which image to show depending on the state of clickCounter. 
    console.log(gridArray[n].clickCounter)                                              //Sends url, dimensions and div element clicked to the change_image function
    if (gridArray[n].clickCounter == 1) {                                               //1 is a circle
          change_image("https://i.imgur.com/s6Xe4Dd.png", 100,100, "O", n)
    } else if (gridArray[n].clickCounter == 2) {                                        //2 is a cross
        change_image("https://i.imgur.com/0oWthiX.png", 100,100, "X", n)
    } else if (gridArray[n].clickCounter == 0) {                                        //0 is an empty field
      change_image("https://i.imgur.com/i0Yw9Yp.png", 100,100, "empty", n)
    }
}

function change_image(source, width, height, alt, index) {                              //Uses DOM to change the correct image object 
    document.images[index].src = source
    document.images[index].width = width;
    document.images[index].height = height;
    document.images[index].alt = alt;
}