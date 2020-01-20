class GrowRoom {
    constructor(growRoomJSON) {
        this.id = growRoomJSON.id
        this.lightSource = growRoomJSON.light_source
        this.nutrient = growRoomJSON.nutrient
        this.relativeHumidity = growRoomJSON.relative_humidity
        this.temperature = growRoomJSON.temperature
        this.pH = growRoomJSON.pH
    }

    renderLi() {
      return `
      <center><h3>Welcome to our ${this.lightSource} Grow Room!</h3></center>
      <center><h4>Here, you are able to grow a variety of cannabis plants ranging from sativa, indica, and hybrid strains</h4></center>
      <center><h4>Our expert growers will carefully nurture your plants throughout their growth cycle with ${this.nutrient} nutrients and a pH range of ${this.pH}</h4></center>
      <center><h4>With controlled variations in relative humidity from ${this.relativeHumidity} and temperature from ${this.temperature}, we guarantee our farmer's with a high quality and quantity harvest!</h4></center>
      `  
    }
}