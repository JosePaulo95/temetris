
class GameManager {
    constructor(override_config = null){
        this.config = {...__config, ...override_config}
        this.triggers = []
        this.grid = []
        console.log(this.config)
    }
    generateGrid(){
        const size = this.config.size.split("x")
        this.grid = new Array(size[0])
        for(let i = 0; i < size[0]; i++){
            this.grid[i] = "0".repeat(size[1]).split("")
        }
        return this.grid;
    }
    assignTrigger(event_name, callback){
        this.triggers[event_name] = callback
    }
    clearGrid(){
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j] = 0;
            }
        }
    }
    triggerEvent(event_name, xy){
        if(this.grid[xy.x][xy.y] == 0 && event_name=="onClick") {
            return this.triggers["click-empty-cell"]()
        }
    }
}