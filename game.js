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




let health = 100;

function spell(damage) {
    health -= damage
   document.getElementById("enemyHealth").innerText= ("Health: " + health)
    if(health <= 0){
        win()
    }
}
 function win() {
     document.getElementById("gameResult")
 }