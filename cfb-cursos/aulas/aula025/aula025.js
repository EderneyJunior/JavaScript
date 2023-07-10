//const soma = function(v1, v2){return v1 + v2}

const soma = (...valores) => {
    let res = 0
    
    for (i of valores) {
        res += i
    }
    return res
}

console.log(soma(5, 5))