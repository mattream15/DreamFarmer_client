class GrowRoomsAdapter {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1/grow_rooms'
    }

    getGrowRooms() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createGrowRoom(lightSource, nutrient, relativeHumidity, temperature, pH) {
        const growRoom = {
            lightSource,
            nutrient,
            relativeHumidity,
            temperature,
            pH
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ growRoom }),
        }).then(res => res.json())
    }
}