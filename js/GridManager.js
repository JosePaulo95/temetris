
class GridManager {
    constructor(override_config = null){
        this.config = {...__config, ...override_config}
        this.triggers = []
        this.grid = []
        console.log(this.config)
    }
    fillTypes(qtde_tipos){
        var a = []
        for (let index = 1; index <= qtde_tipos; index++) {
            a.push(index)
        }
        return a
    }
    generateGrid(){
        const size = this.config.size.split("x")
        const qtde_tipos = this.config.qtde_blocos?this.config.qtde_blocos:0
        var types_stack = this.fillTypes(qtde_tipos)

        this.grid = new Array(size[0])
        for(let i = 0; i < size[0]; i++){
            this.grid[i] = []
            for (let j = 0; j < size[1]; j++) {
                if(types_stack.length <= 0){
                    types_stack = this.fillTypes(qtde_tipos)
                }
                this.grid[i].push(types_stack.pop());
            }
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
            return this.triggers["click-empty-tile"]()
        }
    }
    translateToIJ(index){
        if(this.grid.length <= 0){
            console.warn("Vc precisa inicializar a grid antes de tentar traduzir chaves.")
            return
        }
        let i = 0;
        let j = 0;
        let counter = index;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if(counter <= 0){
                    return {i, j}
                }
                if(this.grid[i][j] > 0){
                    counter--;
                }
            }
        }
    }
}