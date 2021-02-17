function runEventsTests(vue_context) {
    events.call(vue_context)
}

function events(){
    touchReturn = () => { return "toque!" }
    gameMg = new GameManager()
    gameMg.assignTrigger("click-empty-cell", touchReturn)
    grid = gameMg.generateGrid()
    gameMg.clearGrid()

    expect(
        gameMg.triggerEvent("onClick", {x:0, y:0})
    ).toBe("toque!")
}
