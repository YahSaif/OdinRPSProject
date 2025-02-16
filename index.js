let score = {
    Wins:0,
    Losses:0,
    Ties:0
}
function compMove() {
    let compMove = Math.random()
    let move = ''
    if (compMove >= 0 && compMove < 1 / 3) {
        move = 'Rock'
    } else if (compMove >= 1 / 3 && compMove < 2 / 3) {
        move = 'Paper'
    } else {
        move = 'Scissor'
    }
    return move
}

function rock(){
    let move = compMove()
    document.querySelector('.rs').innerHTML = `Computers move: ${move}, Players move: Rock`
    scoreRock(move)
    if(move === 'Rock'){
        console.log(`Computer chose ${move} and you chose Rock. Its a tie!`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Rock`
        result = 'Tied'
        document.querySelector('.rs').innerHTML=`${result}`
    } else if(move === 'Scissor'){
        console.log(`Computer chose ${move} and you chose Rock. You win!`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Rock`
        result = 'Win!'
        document.querySelector('.rs').innerHTML=`${result}`
    } else if(move === 'Paper'){
        console.log(`Computer chose ${move} and you chose Rock. You lost`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Rock`
        result = 'Lost'
        document.querySelector('.rs').innerHTML=`${result}`
    }
   
}
function paper(){
    let move = compMove()
    document.querySelector('.rs').innerHTML = `Computers move: ${move}, Players move: Paper `
    scorePaper(move)
    if(move === 'Rock'){
        console.log(`Computer chose ${move} and you chose Paper. You lost`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Paper`
        result = 'Lost'
        document.querySelector('.rs').innerHTML=`${result}`
    } else if(move === 'Scissor'){
        console.log(`Computer chose ${move} and you chose Paper. You win!`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Paper`
        result = 'Win!'
        document.querySelector('.rs').innerHTML=`${result}`
    } else if(move === 'Paper'){
        console.log(`Computer chose ${move} and you chose Paper. Its a Tie!`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Paper`
        result = 'Tied'
        document.querySelector('.rs').innerHTML=`${result}`
    }

}
function scissor(){
    let move = compMove()
    document.querySelector('.rs').innerHTML = `Computers move: ${move}, Players move: Scissor`
    scoreScissor(move)
    if(move === 'Rock'){
        console.log(`Computer chose ${move} and you chose Scissor. You lost`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Scissor`
        result = 'Lost'
        document.querySelector('.rs').innerHTML=`${result}`
    } else if(move === 'Scissor'){
        console.log(`Computer chose ${move} and you chose Scissor. Its a Tie!`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Scissor`
        result = 'Tied'
        document.querySelector('.rs').innerHTML=`${result}`
    } else if(move === 'Paper'){
        console.log(`Computer chose ${move} and you chose Scissor. You win!`)
        document.querySelector('.rt').innerHTML=`Computer chose ${move} and you chose Scissor`
        result = 'Win!'
        document.querySelector('.rs').innerHTML=`${result}`
    }

}
function scoreRock(move){
    if(move === 'Rock'){
        score.Ties+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    } else if(move === 'Scissor'){
        score.Wins+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    } else if(move === 'Paper'){
        score.Losses+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    }
    document.querySelector('.sc')
    .innerHTML = `Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`
}
function scorePaper(move){
    if(move === 'Rock'){
        score.Wins+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    } else if(move === 'Scissor'){
        score.Losses+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    } else if(move === 'Paper'){
        score.Ties+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    }
    document.querySelector('.sc')
    .innerHTML = `Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`
}
function scoreScissor(move){
    if(move === 'Rock'){
        score.Losses+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    } else if(move === 'Scissor'){
        score.Ties+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    } else if(move === 'Paper'){
        score.Wins+=1
        console.log(`Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`)
    }
    document.querySelector('.sc')
    .innerHTML = `Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`
}
function rsc(){
    console.log('The scores have been reset')
    score = {
        Wins:0,
        Losses:0,
        Ties:0
    }
    document.querySelector('.sc')
    .innerHTML = `Wins:0, Losses:0, Ties:0`
    document.querySelector('.rt').innerHTML=``
}
