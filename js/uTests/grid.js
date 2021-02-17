function runGridTests(vue_context) {
    grids.call(vue_context)
    domCells.call(vue_context)
}

function grids(){
    gameMg = new GameManager({"size": "3x3"})
    grid = gameMg.generateGrid()
    expect(grid.length).toBe(3)
    expect(grid[0].length).toBe(3)
}

function domCells() {
    gameMg = new GameManager({size: "3x3", qtde_blocos: 3})
    this.reset(gameMg)
}