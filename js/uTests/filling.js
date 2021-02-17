

gameMg = new GameManager({"size": "3x3", "qtde_blocos": "3"})
grid = gameMg.generateGrid()
expect(grid[0]).toContain(1)
expect(grid[0]).toContain(2)
expect(grid[0]).toContain(3)

