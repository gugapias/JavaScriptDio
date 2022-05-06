function getAdmins(map) {
    let admins = [];
    for([key,value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Pamela','Admin');
usuarios.set('Gustavo','Admin');
usuarios.set('Joao','User');
usuarios.set('Maria','User');
usuarios.set('Mario','User');
 

const meuArray = [30,30,40,5,223,2049,3034,5];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    
    return [...mySet];
}

console.log(getAdmins(usuarios));  
console.log(valoresUnicos(meuArray));


