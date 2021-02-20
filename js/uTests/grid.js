async function runGridTests(vue_context) {
    grids.call(vue_context)
    await domHas2ManyRows.call(vue_context)
    await domHasTilesAndSpaces.call(vue_context)
    await domTilesAreAboveSpaces.call(vue_context)
    //await domAreResponsive.call(vue_context)
    //await clickedTileDisappears.call(vue_context)    
}

function grids(){
    gridMg = new GridManager({"size": "3x3"})
    grid = gridMg.generateGrid()
    expect(grid.length).toBe(3)
    expect(grid[0].length).toBe(3)
}

async function domHas2ManyRows() {
    gridMg = new GridManager({size: "3x3", qtde_blocos: 3})
    await this.reset(gridMg)
    rows = this.$refs.row
    expect(rows.length).toBe(6)
}

async function domHasTilesAndSpaces() {
    gridMg = new GridManager({size: "3x3", qtde_blocos: 1})
    await this.reset(gridMg)
    spaces = this.$refs.space
    tiles = this.$refs.tile 
    
    expect(spaces.length).toBe(9)
    expect(tiles.length).toBe(9)

    expect(Array.from(spaces[0].classList)).toContain("space")
    expect(Array.from(tiles[0].classList)).toContain("tile")
    //expect(Array.from(tiles[0].classList)).toContain("tile-0-0")
}

async function domTilesAreAboveSpaces(params) {
    gridMg = new GridManager({size: "3x3", qtde_blocos: 1})
    await this.reset(gridMg)
    
    spaces = this.$refs.space
    tiles = this.$refs.tile 

    const utils = new Utils();
    for (let i = 0; i < spaces.length; i++) {
        const d = utils.getDistanceBetweenElements(spaces[i], tiles[i])
        expect(d).toBe(0)
    }
}

async function clickedTileDisappears() {
    //clicked tile triggers its index on action manager on main which stacks and exposes "over-0" "ed-0" "up-0"
    //dynamic manager devolve a grid com o index em 0
    gridMg = new GridManager({size: "3x3"})
    await this.reset(gridMg)
    tiles = this.$refs.tile 
    tiles[0].click()

    expect(this.grid[0][0]).toBe(0)
    expect(Array.from(tiles[0].classList)).toContain("tile-0")
    
}