
class GameManager {
    constructor(override_config = null){
        this.config = {...__config, ...override_config}
        console.log(this.config)
    }

    generateGrid(){
        const size = this.config.size.split("x")
        var grid = new Array(size[0])
        for(let i = 0; i < size[0]; i++){
            grid[i] = "0".repeat(size[1]).split("")
        }
        return grid;
    }
}