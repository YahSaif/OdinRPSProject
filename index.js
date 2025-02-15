const score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};
document.addEventListener("DOMContentLoaded", function() {
  

    function updateScore() {
        document.querySelector('.js').innerHTML = `Wins: ${score.Wins} Losses: ${score.Losses} Ties: ${score.Ties}`;
    }

    updateScore(); 
});
