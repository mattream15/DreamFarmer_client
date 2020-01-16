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
        this.newGrowRoomLightSource = document.getElementById('new-growRoom-lightSource')
        this.newGrowRoomNutrient = document.getElementById('new-growRoom-nutrient')
        this.newGrowRoomRelativeHumidity = document.getElementById('new-growRoom-relativeHumidity')
        this.newGrowRoomTemperature = document.getElementById('new-growRoom-temperature')
        this.newGrowRoomPH = document.getElementById('new-growRoom-pH')
        this.growRoomForm = document.getElementById('new-growRoom-form')
        this.growRoomForm.addEventListener('submit', this.createGrowRoom.bind(this))
        this.growRoomsContainer.addEventListener('dblclick', this.handleGrowRoomClick.bind
        (this))
        this.growRoomsContainer.addEventListener('blur', this.updateGrowRoom.bind(this), true)
    }

    createGrowRoom(e) {
        e.preventDefault()
        const value1 = this.newGrowRoomLightSource.value
        const value2 = this.newGrowRoomNutrient.value
        const value3 = this.newGrowRoomRelativeHumidity.value
        const value4 = this.newGrowRoomTemperature.value
        const value5 = this.newGrowRoomPH.value

        this.adapter.createGrowRoom(value1, value2, value3, value4, value5).then(growRoom => {
            this.growRooms.push(new GrowRoom(growRoom))
            this.newGrowRoomLightSource.value = ''
            this.newGrowRoomNutrient.value = ''
            this.newGrowRoomRelativeHumidity.value = ''
            this.newGrowRoomTemperature.value = ''
            this.newGrowRoomPH.value = ''
            this.render()
        })
    }

    handleGrowRoomClick(e) {
        this.toggleGrowRoom(e)
    }

    toggleGrowRoom(e) {
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('editable')
    }

    updateGrowRoom(e) {
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML
        const id = li.dataset.id
        this.adapter.updateGrowRoom(newValue, id)
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