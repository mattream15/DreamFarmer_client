class CannabisPlantsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/cannabis_plants'
    }

    getCannabisPlants() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}