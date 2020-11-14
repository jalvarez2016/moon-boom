class BasicTroop {
    constructor(dir){
        this.name = "Basic Astronaut";
        this.health = 10;
        this.attack = 5;
        this.defense = 8;
        this.cost = 50;
        this.attacking = false;
        this.speed = 30;
        this.dir = dir; //pass in the right 1 or -1 for the direction
        this.enemyBase;
        this.position = {
            x: 0,
            y: 0
        }
    }

    setPosition(placeMent){
        //placement should be an object containing the players mouse x and y coordinates
        this.position = placeMent;
    }

    setEnemyBase(enemyBase) {
        this.enemyBase = enemyBase;
    }

    attackMode(){
        //Move based on direction until it 
        //reaches the base or another troop
        //When it dies, delete from bases troop array      
        if(this.position.x <= 450){
            //Moving to enemy base
            this.position = {
                x: this.position.x + this.speed * this.dir,
                y: this.position.y,
            }
        } else {
            //Commence attacking
            this.enemyBase.calHealth(this.attack);
        }
    }

    price(){
        return this.cost;
    }
}