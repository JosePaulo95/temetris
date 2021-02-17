
gameMg = new GameManager({"size": "3x3"})
grid = gameMg.generateGrid()
expect(grid.length).toBe(3)
expect(grid[0].length).toBe(3)
