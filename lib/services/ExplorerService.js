const Reader = require('../../lib/utils/Reader')


class ExplorerService{
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer)=> explorer.mission === 'node')
    }

    static getAmountOfExplorersByMission(explorers,mission) {
        return explorers.filter((explorer)=> explorer.mission === 'node').length;
    }

    static getExplorersUsernameByMission(explorers,mission) {
        let UsernamesNode = this.filterByMission(explorers,mission)
        return UsernamesNode.map((explorer)=> explorer.githubUsername)        
    }
}

module.exports = ExplorerService;