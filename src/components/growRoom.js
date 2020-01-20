class GrowRoom {
    constructor(growRoomJSON) {
        this.id = growRoomJSON.id
        this.lightSource = growRoomJSON.lightSource
        this.nutrient = growRoomJSON.nutrient
        this.relativeHumidity = growRoomJSON.relativeHumidity
        this.temperature = growRoomJSON.temperature
        this.pH = growRoomJSON.pH
    }

    renderLi() {
      return `
      <li>Grow Room: ${this.id}</li>
      <li>Light Source: ${this.lightSource}</li>
      <li>Nutrient: ${this.nutrient}</li>
      <li>Relative Humidity: ${this.relativeHumidity}</li>
      <li>Temperature: ${this.temperature}</li>
      <li>pH: ${this.pH}</li><br>`  
    }
}