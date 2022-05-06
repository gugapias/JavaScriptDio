function ArrayTamanho(arr, num){
    try{

    if(!arr && !num)throw new ReferenceError("Envie os parametros");

    if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");

    if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo object");
    
    if(arr.length !== num) throw new RangeError("Tamanho invalido");

    return arr;
    }
    catch(e){
        if(e instanceof ReferenceError ){
            console.log("Este erro e um ReferenceError");
            // console.log(e.name);
            // console.log(e.stack);
            console.log(e.message);
        }
        else if(e instanceof TypeError ){
            console.log("Este erro e um TypeError");
            // console.log(e.name);
            // console.log(e.stack);
            console.log(e.message);
        }
        else if(e instanceof RangeError ){
            console.log("Este erro e um RangeError");
           // console.log(e.name);
           // console.log(e.stack);
            console.log(e.message);
        }
        else {
            console.log("Erro nao esperado "+e);
        }
    }
    }
    
console.log(ArrayTamanho([5,1],2));