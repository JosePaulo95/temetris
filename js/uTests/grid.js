async function runGridTests(vue_context) {
    grids.call(vue_context)
    await domCells.call(vue_context)
}

function grids(){
    gameMg = new GameManager({"size": "3x3"})
    grid = gameMg.generateGrid()
    expect(grid.length).toBe(3)
    expect(grid[0].length).toBe(3)
}

async function domCells() {
    gameMg = new GameManager({size: "3x3", qtde_blocos: 3})
    await this.reset(gameMg)
    rows = document.getElementsByClassName("row")
    console.log(JSON.stringify(rows))

    console.log(rows.length)
    console.log(rows.length+",")
    expect(rows.length).toBe(3)
}