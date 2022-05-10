const ExplorerService = require('../../lib/services/ExplorerService')

describe("Test para ExplorerService",()=>{
    test('Requerimiento 1: Calcular explorers en node',()=>{
        const explorers = [{mission: "node"}]
        const explorersInNode = ExplorerService.filterByMission(explorers,"node")

        expect(explorersInNode.length).toBe(1)
    })
})