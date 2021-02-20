
function runFillingTests(vue_context) {
    filling.call(vue_context)
}

function filling(){
    gridMg = new GridManager({"size": "3x3", "qtde_blocos": "3"})
    grid = gridMg.generateGrid()
    expect(grid[0]).toContain(1)
    expect(grid[0]).toContain(2)
    expect(grid[0]).toContain(3)
}
