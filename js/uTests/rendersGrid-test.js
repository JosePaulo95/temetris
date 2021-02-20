
gridMg = new GridManager({"size": "3x3"})
grid = gridMg.generateGrid()
expect(grid.length).toBe(3)
expect(grid[0].length).toBe(3)