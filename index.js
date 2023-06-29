function receivesAFunction(spy) { 
    console.log(spy());
}

receivesAFunction(function () {return spy})

function returnsANamedFunction () {
    function named() {

    }
    return named
}

function returnsAnAnonymousFunction() {
    return (function () {
        
    })
}