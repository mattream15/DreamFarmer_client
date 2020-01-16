class CannabisPlants {
    constructor() {
        this.cannabisPlants = []
        this.adapter = new CannabisPlantsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCannabisPlants()
    }

    initBindingsAndEventListeners() {
        this.cannabisPlantsContainer = document.getElementById('cannabisPlants-container')
        this.newCannabisPlantSpecies = document.getElementById('new-cannabisPlant-species')
        this.newCannabisPlantVarietyName = document.getElementById('new-cannabisPlant-varietyName')
        this.newCannabisPlantNumberOfSeeds = document.getElementById('new-cannabisPlant-numberOfSeeds')
        this.cannabisPlantForm = document.getElementById('new-cannabisPlant-form')
        this.cannabisPlantForm.addEventListener('submit', this.createCannabisPlant.bind(this))
    }

    createCannabisPlant(e) {
        e.preventDefault()
        const value1 = this.newCannabisPlantSpecies.value
        const value2 = this.newCannabisPlantVarietyName.value
        const value3 = this.newCannabisPlantNumberOfSeeds.value

        this.adapter.createCannabisPlant(value1, value2, value3).then(cannabisPlant => {
            this.cannabisPlants.push(new CannabisPlant(cannabisPlant))
            this.newCannabisPlantSpecies.value = ''
            this.newCannabisPlantVarietyName.value = ''
            this.newCannabisPlantNumberOfSeeds.value = ''
            this.render()
        })
    }

    fetchAndLoadCannabisPlants() {
        this.adapter
        .getCannabisPlants()
        .then(cannabisPlants => {
            cannabisPlants.forEach(cannabisPlant => this.cannabisPlants.push(new CannabisPlant(cannabisPlant)))
        })
        .then(() => {
            this.render() 
        })
    }

    render() {
        this.cannabisPlantsContainer.innerHTML = this.cannabisPlants.map(cannabisPlant => cannabisPlant.renderLi()).join('')
    }
}