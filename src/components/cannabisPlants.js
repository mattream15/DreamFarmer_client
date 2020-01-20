class CannabisPlants {
    constructor() {
        this.cannabisPlants = []
        this.adapter = new CannabisPlantsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCannabisPlants()
    }

    initBindingsAndEventListeners() {
        this.cannabisPlantsContainer = document.getElementById('cannabisPlants-container')
        this.species = document.querySelector('species')
        this.varietyName = document.querySelector('varietyName')
        this.numberOfSeeds = document.querySelector('numberOfSeeds')
        this.growRoomId = document.querySelector('growRoomId')
        this.newCannabisPlantSpecies = document.getElementById('species')
        this.newCannabisPlantSpecies.addEventListener('change', this.handleSpeciesChange.bind(this))
        this.newCannabisPlantVarietyName = document.getElementById('varietyName')
        this.newCannabisPlantNumberOfSeeds = document.getElementById('new-cannabisPlant-numberOfSeeds')
        this.newCannabisPlantGrowRoomId = document.getElementById('new-cannabisPlant-growRoomId')
        this.cannabisPlantForm = document.getElementById('new-cannabisPlant-form')
        this.cannabisPlantForm.addEventListener('submit', this.createCannabisPlant.bind(this))
        this.cannabisPlantsContainer.addEventListener('dblclick', this.handleCannabisPlantClick.bind
        (this))
        this.cannabisPlantsContainer.addEventListener('blur', this.updateCannabisPlant.bind(this), true)
    }

    handleSpeciesChange(e) {        
        if (e.target.value === 'Sativa') {
            const sativaOptions = ['Sour Diesel', 'Casey Jones', 'Blue Dream']
            const newOptions = sativaOptions.map(option => `<option>${option}</option>`)
            this.newCannabisPlantVarietyName.innerHTML = newOptions.join('')
        }
    }


    createCannabisPlant(e) {
        e.preventDefault()
        const value1 = this.newCannabisPlantSpecies.value
        const value2 = this.newCannabisPlantVarietyName.value
        const value3 = this.newCannabisPlantNumberOfSeeds.value
        const value4 = this.newCannabisPlantGrowRoomId.value

        this.adapter.createCannabisPlant(value1, value2, value3, value4).then(cannabisPlant => {
            this.cannabisPlants.push(new CannabisPlant(cannabisPlant))
            this.newCannabisPlantSpecies.value = ''
            this.newCannabisPlantVarietyName.value = ''
            this.newCannabisPlantNumberOfSeeds.value = ''
            this.newCannabisPlantGrowRoomId.value = ''
            this.render()
        })
    }

    handleCannabisPlantClick(e) {
        this.toggleCannabisPlant(e)
    }

    toggleCannabisPlant(e) {
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('editable')
    }

    updateCannabisPlant(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        this.adapter.updateCannabisPlant(newValue, id)
    }

    fetchAndLoadCannabisPlants() {
        this.adapter
        .getCannabisPlants()
        .then(cannabisPlants => {
            cannabisPlants.sort((a, b) => a.id - b.id).forEach(cannabisPlant => this.cannabisPlants.push(new CannabisPlant(cannabisPlant)))
        })
        .then(() => {
            this.render() 
        })
    }

    render() {
        this.cannabisPlantsContainer.innerHTML = this.cannabisPlants.map(cannabisPlant => cannabisPlant.renderLi()).join('')
    }
}