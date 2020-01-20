class GrowRooms {
    constructor() {
        this.growRooms = []
        this.adapter = new GrowRoomsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadGrowRooms()
    }

    initBindingsAndEventListeners() {
        this.growRoomsContainer = document.getElementById('growRooms-container')
        this.lightSource = document.querySelector('lightSource')
        this.nutrient = document.querySelector('nutrient')
        this.relativeHumidity = document.querySelector('relativeHumidity')
        this.temperature = document.querySelector('temperature')
        this.pH = document.querySelector('pH')
    }

    fetchAndLoadGrowRooms() {
        this.adapter
        .getGrowRooms()
        .then(growRooms => {
            growRooms.sort((a, b) => a.id - b.id).forEach(growRoom => this.growRooms.push(new GrowRoom(growRoom)))
        })
        .then(() => {
            this.render() 
        })
    }

    render() {
        this.growRoomsContainer.innerHTML = this.growRooms.map(growRoom => growRoom.renderLi()).join('')
    }
}