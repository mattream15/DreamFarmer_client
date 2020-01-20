class CannabisPlantsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/cannabis_plants'
    }

    getCannabisPlants() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createCannabisPlant(value1, value2, value3, value4) {
        const cannabisPlant = {
            species: value1,
            variety_name: value2,
            number_of_seeds: value3,
            grow_room_id: value4
        }
        
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ cannabisPlant })
        })
        .then(res => res.json())
    }

    // updateCannabisPlant(value1, value2, value3, value4, id) {
    //     const cannabisPlant = {
    //         species: value1,
    //         variety_name: value2,
    //         number_of_seeds: value3,
    //         grow_room_id: value4
    //     }
    //     return fetch(`${this.baseUrl}/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify({ cannabisPlant }),
    //     }).then(res => res.json())
    // }
}