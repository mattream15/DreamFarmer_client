
    function selectSpecies() {        
        const species = document.getElementById("species")
        document.getElementById("selectedSpecies").value = species.value
    }

    function selectVarietyName() {
        const varietyName=document.getElementById("varietyName")
        document.getElementById("selectedVarietyName").value=varietyName.options[varietyName.selectedindex].text
    }

    function selectNumberOfSeeds() {
        const numberOfSeeds=document.getElementById("numberOfSeeds")
        document.getElementById("selectedNumberOfSeeds").value=numberOfSeeds.options[numberOfSeeds.selectedindex].text
    }

    function selectGrowRoomId() {
        const growRoomId=document.getElementById("growRoomId")
        document.getElementById("selectedGrowRoomId").value=growRoomId.options[growRoomId.selectedindex].text
    }
            
            