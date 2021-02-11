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
let inventory = [
    {name: 'Health Potion', modifier: 15, use: "heal"},
    {name: 'Fireball Scroll', modifier: 20, use: "damage"},
    {name: 'Throwing Knife', modifier: 1, use: "damage"},
]



function damage(damage) {
    enemyHealth -= damage
    if(enemyHealth <= 0){
        win()
        enemyHealth = 0
    }
    drawHealth()
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
drawHealth()
} 
function lose() {
    document.getElementById("loseResult").hidden= false
}

function drawItems() {
    let button = ""
    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i]
       button +=  /* HTML */ `<button type="button" class="btn btn-primary" onclick="${item.use+"("+item.modifier+")"}">${item.name}</button>`

        
    }
    document.getElementById("inventory").innerHTML= button
}

function heal(amount) {
    playerHealth += amount
    drawHealth()
}

function drawHealth(){
    document.getElementById("playerHealth").innerText= ("Health: " + playerHealth)
    document.getElementById("enemyHealth").innerText= ("Health: " + enemyHealth)


}


drawItems()

