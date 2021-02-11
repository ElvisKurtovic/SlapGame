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

function spell() {
   health--
   alert("Health: " + health)
}