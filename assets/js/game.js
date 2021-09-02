const playerName = window.prompt('What is your robot\'s name?');
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
let enemyHealth = 50;
let enemyAttack = 12;

const fight = (enemyName) => {
    while (playerHealth > 0 && enemyHealth > 0) {
        //ask player if they'd like to fight or run 
        let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.');

        // if player picks skip confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            let confirmSkip = window.confirm('Are you sure you want to quit?');

        //if true, leave fight
            if(confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                playerMoney -= 10;
                console.log('player money', playerMoney);
                break;
            }
        }

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney += 20;
            break;
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}

for (let i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert(`Welcome to Robot Gladiators! Round ${i+1}`);
        let pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert('You have lost your robot in battle! Game Over!');
        break;
    }
}

// fight();