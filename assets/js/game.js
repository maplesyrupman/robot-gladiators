const playerName = window.prompt('What is your robot\'s name?');
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

const enemyName = 'Roborto';
let enemyHealth = 50;
let enemyAttack = 12;

const fight = () => {
    window.alert('Welcome to Robot Gladiators!');

    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter \'FIGHT\' or \'SKIP\' to choose.');
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
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
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        let confirmSkip = window.confirm('Are you sure you want to quit?');
        if(confirmSkip) {
            window.alert(playerName + ' has decided to skip this fight. Goodbye!');
            playerMoney -= 2;
        }
        else {
            fight();
        }

    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

fight();