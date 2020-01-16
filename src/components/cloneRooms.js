class CannabisPlants {
    constructor() {
        this.cloneRooms = []
        this.adapter = new CloneRoomsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadCannabisPlants()
    }

    initBindingsAndEventListeners() {
        this.cloneRoomsContainer = document.getElementById('cloneRooms-container')
        this.lightSource = document.querySelector('lightSource')
        this.nutrient = document.querySelector('nutrient')
        this.relativeHumidity = document.querySelector('relativeHumidity')
        this.temperature = document.querySelector('temperature')
        this.pH = document.querySelector('pH')
        //this.newCannabisPlantSpecies = document.getElementById('new-cannabisPlant-species')
        //this.newCannabisPlantVarietyName = document.getElementById('new-cannabisPlant-varietyName')
        //this.newCannabisPlantNumberOfSeeds = document.getElementById('new-cannabisPlant-numberOfSeeds')
    }

    fetchAndLoadCloneRooms() {
        this.adapter
        .getCloneRooms()
        .then(cloneRooms => {
            cloneRooms.forEach(cloneRoom => this.cloneRooms.push(new CloneRoom(cloneRoom)))
        })
        .then(() => {
            this.render() 
        })
    }

    render() {
        this.cloneRoomsContainer.innerHTML = this.cloneRooms.map(cloneRoom => cloneRoom.renderLi()).join('')
    }
}