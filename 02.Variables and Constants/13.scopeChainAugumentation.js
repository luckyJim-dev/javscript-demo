/**
 * Two primary types of execution context, global and function
 * Two ways to augument the scope chain, then later removed after code execution
 * catch block in try-catch statement
 * with statement
 */

function buildUrl(location){
    let gs = "?debug=true";
    with(location){            // location itself is added to the front of the scope chain
        let url = href + gs;   // actually referring to location.href
        return url;
    }
}

let crurrent_location = new Object();
crurrent_location.href = "www.think.com";

let result = buildUrl(crurrent_location);

console.log(result)             // www.think.com?debug=true
