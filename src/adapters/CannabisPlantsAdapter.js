class CannabisPlantsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/cannabis_plants'
    }

    getCannabisPlants() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createCannabisPlant(value1, value2, value3) {
        const cannabisPlant = {
            species: value1,
            varietyName: value2,
            numberOfSeeds: value3
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ cannabisPlant }),
        }).then(res => res.json())
    }
}