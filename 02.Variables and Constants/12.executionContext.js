/**
 * An inner context can access everything from all outer contexts through the scope chain, 
 * but the outer contexts cannot access anything within an inner context. 
 * The connection between the contexts is linear and ordered. 
 * Each context can search up the scope chain for variables and functions, 
 * but no context can search down the scope chain into another execution context.
 */



var color = "blue";             // global context

function changeColor(){         // local context of changeColor
    let annotherColor = "red";  // local context of changeColor
    function swapColors(){      // local context of changeColor
        let tempColor = annotherColor // local context of swapColors
        annotherColor = color;
        color = tempColor;
    }
    // color, anotherColor and tempColor are all accessible here
    swapColors();
}

// only color is accessible here
changeColor();