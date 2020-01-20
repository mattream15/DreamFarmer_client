class CannabisPlant {
    constructor(cannabisPlantJSON) {
        this.id = cannabisPlantJSON.id
        this.species = cannabisPlantJSON.species
        this.varietyName = cannabisPlantJSON.variety_name
        this.numberOfSeeds = cannabisPlantJSON.number_of_seeds
        this.growRoomId = cannabisPlantJSON.grow_room_id
    }

    renderLi() {
      return `
      <li>Cannabis Plant: ${this.id}</li>
      <li>Type: ${this.species}</li>
      <li>Variety Name: ${this.varietyName}</li>
      <li>Number of Seeds: ${this.numberOfSeeds}</li>
      <br>`  
    }
}