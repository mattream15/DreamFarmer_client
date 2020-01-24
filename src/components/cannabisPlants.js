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
        this.newCannabisPlantNumberOfSeeds = document.getElementById('numberOfSeeds')
        this.newCannabisPlantGrowRoomId = document.getElementById('growRoomId')
        this.cannabisPlantForm = document.getElementById('new-cannabisPlant-form')
        this.cannabisPlantForm.addEventListener('submit', this.createCannabisPlant.bind(this))
        this.cannabisPlantsContainer.addEventListener('click', this.deleteCannabisPlant.bind(this))
        // this.cannabisPlantsContainer.addEventListener('dblclick', this.handleCannabisPlantClick.bind
        // (this))
        // this.cannabisPlantsContainer.addEventListener('blur', this.updateCannabisPlant.bind(this), true)
    }

    deleteCannabisPlant(e) {
        if (e.target.tagName == "BUTTON") {
            const id = e.target.dataset.id
            this.adapter.deleteCannabisPlant(id)
            .then(job => {
                const newCannabisPlants = this.cannabisPlants.filter(cannabisPlant => {
                    return cannabisPlant.id != job.cannabisPlantId
                })
                this.cannabisPlants = newCannabisPlants
                this.render()
            })
        }
    }

    handleSpeciesChange(e) {        
        if (e.target.value === 'Sativa') {
            const sativaOptions = ['Ghost Train Haze', 'Sour Diesel', 'Casey Jones', 'Blue Dream', 'Maui Wowie']
            const newOptions = sativaOptions.map(option => `<option>${option}</option>`)
            this.newCannabisPlantVarietyName.innerHTML = newOptions.join('')
        } else if (e.target.value === 'Indica') {
            const indicaOptions = ['Strawberry Banana', 'Dark Star', 'Kosher Kush', 'Sunset Sherbert', 'Northern Lights']
            const newOptions = indicaOptions.map(option => `<option>${option}</option>`)
            this.newCannabisPlantVarietyName.innerHTML = newOptions.join('')
        } else {
            const hybridOptions = ['Cannatonic', 'Three Blue Kings', 'Larry Bird Kush', 'White Widow', 'Pineapple Express']
            const newOptions = hybridOptions.map(option => `<option>${option}</option>`)
            this.newCannabisPlantVarietyName.innerHTML = newOptions.join('')
        }
    }

    createCannabisPlant(e) {
        e.preventDefault()
        console.log(this)
        const species = this.newCannabisPlantSpecies.value
        const varietyName = this.newCannabisPlantVarietyName.value
        const numberofSeeds = this.newCannabisPlantNumberOfSeeds.value
        const growRoomId = this.newCannabisPlantGrowRoomId.value

        this.adapter.createCannabisPlant(value1, value2, value3, value4).then(cannabisPlant => {
            this.cannabisPlants.push(new CannabisPlant(cannabisPlant))
            this.newCannabisPlantSpecies.value = ''
            this.newCannabisPlantVarietyName.value = ''
            this.newCannabisPlantNumberOfSeeds.value = ''
            this.newCannabisPlantGrowRoomId.value = ''
            this.render()
        })
    }

    // handleCannabisPlantClick(e) {
    //     this.toggleCannabisPlant(e)
    // }

    // toggleCannabisPlant(e) {
    //     const li = e.target
    //     li.contentEditable = true
    //     li.focus()
    //     li.classList.add('editable')
    // }

    // updateCannabisPlant(e) {
    //     const li = e.target
    //     li.contentEditable = false
    //     li.classList.remove('editable')
    //     const newValue = li.innerHTML
    //     const id = li.dataset.id
    //     this.adapter.updateCannabisPlant(newValue, id)
    // }

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