var prompt = require('prompt-sync')();

function view (counter) {return (`\ncounter: ${counter}\n (+)  (-)\n(q) to quit`)}

function update(msg,counter){
    if (msg==="+"){return counter+1;}

    else if(msg==="-"){return counter-1;}

    else if(msg ==="q"){return counter;}

    else{return counter;}
}

function app(counter){
    while(true){
        console.clear();
        console.log(view(counter));
        var input = prompt('What would you do?');
        if(input==="q"){break;}
        counter=update(input,counter);     
    }
    
}

app(0)