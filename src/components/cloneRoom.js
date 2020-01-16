class CloneRoom {
    constructor(cloneRoomJSON) {
        this.id = cloneRoomJSON.id
        this.lightSource = cloneRoomJSON.lightSource
        this.nutrient = cloneRoomJSON.nutrient
        this.relativeHumidity = cloneRoomJSON.relativeHumidity
        this.temperature = cloneRoomJSON.temperature
        this.pH = cloneRoomJSON.pH
    }

    renderLi() {
      return `
      <li data-id=${this.id}</li>
      <li>Light Source: ${this.lightSource}</li>
      <li>Nutrient: ${this.nutrient}</li>
      <li>Relative Humidity: ${this.relativeHumidity}</li>
      <li>Temperature: ${this.temperature}</li>
      <li>pH: ${this.pH}</li><br>`  
    }
}