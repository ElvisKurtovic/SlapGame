/** NOTE
 * Attack function reduces health by argument amount
 * Health is dynamically displayed on page to reflect amount
 * 
 * Buttons onClick="attack( # )"
 * 
 * attack(damage)
 * health reduced by amount
 * get health element and update it's value
 */




let enemyHealth = 100;
let playerHealth = 100;

function spell(damage) {
    enemyHealth -= damage
    if(enemyHealth <= 0){
        win()
        enemyHealth = 0
    }
    document.getElementById("enemyHealth").innerText= ("Health: " + enemyHealth)
}
 function win() {
     document.getElementById("winResult").hidden= false
 }

 function hurtPlayer(damage) {
    playerHealth -= damage
    if(playerHealth <= 0){
        lose()
        playerHealth = 0
    }
    document.getElementById("playerHealth").innerText= ("Health: " + playerHealth)
} 
function lose() {
    document.getElementById("loseResult").hidden= false
}