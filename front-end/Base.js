class Base {
    constructor(playerName = "Player", troops = "") {
        this.height = 100;
        this.width = 100;
        this.playerName = playerName;
        this.health = 100;
        this.money = 1000;
        this.troops = [troops];
        this.alive = true;
    }
    
    // Methods
    calcHealth(damage = 0) {
        return this.health - damage;
    }

    purchase(cost = 0) {
        return this.money - cost;
    }

    drawBase(img) {
        //drawing base based off img
        ctx.drawImage(img, this.width, this.height);
    }
}