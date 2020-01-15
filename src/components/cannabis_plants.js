class CannabisPlants {
    constructor() {
        this.cannabis_plants = []
        this.adapter = new CannabisPlantsAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadCannabisPlants()
    }

    fetchAndLoadCannabisPlants() {
        this.adapter
        .getCannabisPlants()
        .then(cannabis_plants => {
            cannabis_plants.forEach(cannabis_plant => this.cannabis_plants.push(cannabis_plant))
        })
        .then(() => {
            this.render() 
        })
    }

    render() {
        const cannabis_plantsContainer = document.getElementById('cannabis_plants-container')
    cannabis_plantsContainer.innerHTML = 'My Cannabis Plants Here'
    console.log('My Cannabis Plants are', this.cannabis_plants)
    }
}