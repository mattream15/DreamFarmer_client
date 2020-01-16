class CloneRoomsAdapter {
    constructor() {
        this.baseUrl = 'http:localhost:3000/api/v1/clone_rooms'
    }

    getCloneRooms() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }

    createCloneRoom(value1, value2, value3, value4, value5) {
        const cloneRoom = {
            lightSource: value1,
            nutrient: value2,
            relativeHumidity: value3
            temperature: value4
            pH: value5
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ cloneRoom }),
        }).then(res => res.json())
    }
}