async function runGridTests(vue_context) {
    grids.call(vue_context)
    await domTiles.call(vue_context)
    await domHasTilesAndTiles.call(vue_context)
}

function grids(){
    gameMg = new GameManager({"size": "3x3"})
    grid = gameMg.generateGrid()
    expect(grid.length).toBe(3)
    expect(grid[0].length).toBe(3)
}

async function domTiles() {
    gameMg = new GameManager({size: "3x3", qtde_blocos: 3})
    await this.reset(gameMg)
    rows = this.$refs.row
    expect(rows.length).toBe(3)
}

async function domHasTilesAndTiles() {
    gameMg = new GameManager({size: "3x3", qtde_blocos: 1})
    await this.reset(gameMg)
    spaces = this.$refs.space
    blocos = this.$refs.bloco 
    
    expect(spaces.length).toBe(9)
    expect(blocos.length).toBe(9)

    expect(spaces[0].classList).toEqual(expect.arrayContaining(["space"]));
    expect(blocos[0].classList).toEqual(expect.arrayContaining(["bloco", "bloco-0"]));
}