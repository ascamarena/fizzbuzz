const Reader = require('../fizzbuzz/lib/utils/Reader')
const ExplorerService = require('../fizzbuzz/lib/services/ExplorerService')

const explorers = Reader.readJsonFile('explorers.json')

console.log(explorers)

console.log(`\n\n`, "Filters by mission:", `\n\n`, ExplorerService.filterByMission(explorers,"node"))
console.log(`\n\n`, "Amount of explorers:", `\n\n`, ExplorerService.getAmountOfExplorersByMission(explorers,"node"))
console.log(`\n\n`, "Explorers GH Usernames:", `\n\n`, ExplorerService.getExplorersUsernameByMission(explorers,"node"))