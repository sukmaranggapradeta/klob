let clothes1 = [['JakartaJS'], ['AWSome Day', 'Elixir'], ['GoJakarta', 'Elixir']]
let clothes2 = [['JakartaJS', 'Elixir'], ['Elixir'], ['JakartaJS', 'Elixir']]

function uniklo(value) {
    let combination = []
    for (let i = 0 ; i < value.length ; i++){
        for (let j = 0 ; j < value[i].length ; j++){
            if (combination.indexOf(value[i][j]) === -1) {
                combination.push(value[i][j])
            }
        }
    }
    if (combination.length < value.length) console.log(false) 
    else console.log('true. Example of possible combination:', combination)
}

uniklo(clothes1)
uniklo(clothes2)