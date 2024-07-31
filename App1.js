let a=1, b=4, c=5, d=6, e=7, f=77
let suma

suma = a+b
console.log(suma)

suma = c+d
console.log(suma)

suma = e+f
console.log(suma)

function Calcular(n1, n2, f=0, action='sumar'){
    if (action == 'sumar'){
        if (f == 0){
            let total = n1 + n2;
            console.log(total);
            return total;
        }
        elif (f == 1);{
            let result = console.log('Esto es:' + (parseInt(n1) + parseInt(n2)));
            return result;
        }
    }
    if (action == 'restar'){
        if (f == 0){
            let total = n1 - n2;
            console.log(total);
            return total;
        }
        elif (f == 1);{
            let result = console.log('Esto es:' + (parseInt(n1) - parseInt(n2)));
            return result;
        }
    }
    if (action == 'multiplicar'){
        if (f == 0){
            let total = n1 * n2;
            console.log(total);
            return total;
        }
        elif (f == 1);{
            let result = console.log('Esto es:' + (parseInt(n1) * parseInt(n2)));
            return result;
        }
    }
    if (action == 'dividir'){
        if (f == 0){
            let total = n1 / n2;
            console.log(total);
            return total;
        }
        elif (f == 1);{
            let result = console.log('Esto es:' + (parseInt(n1) / parseInt(n2)));
            return result;
        }
    }
}

// Calcular(a, b)
// Calcular(c, d)
// Calcular(e, f)
// Calcular(666, 777, f=1)

let sumar = function(a, b){
    return a+b;
}

let result = sumar(2, 5)
console.log(result)

const MULTI = (n1, n2) => {
    const RESULT = n1 * n2;
    return RESULT;
}

console.log(MULTI(100, 1010001010))