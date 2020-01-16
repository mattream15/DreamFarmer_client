class CannabisPlant {
    constructor(cannabisPlantJSON) {
        this.id = cannabisPlantJSON.id
        this.species = cannabisPlantJSON.species
        this.varietyName = cannabisPlantJSON.varietyName
        this.numberOfSeeds = cannabisPlantJSON.numberOfSeeds
    }

    renderLi() {
      return `
      <li data-id=${this.id}</li>
      <li>Type: ${this.species}</li>
      <li>Variety Name: ${this.varietyName}</li>
      <li>Number of Seeds: ${this.numberOfSeeds}</li><br>`  
    }
}