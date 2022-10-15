
async function loadAnimalInfo() {
    try {
        const res = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
        const data = await res.json();
        if(data && data['name']) {
            showAnimal(data);
        }
    } catch(e) {
        // console.log('Error Occured',e.message)
        // console.log(e);
    }
};

function showAnimal(animal) {
    const ANIMAL_INFO_CONTAINER = document.getElementById('animal_info_container');
    const TRIGGER_BUTTON = document.getElementById('trigger_button');
    ANIMAL_INFO_CONTAINER.innerHTML = "";
    // if (ANIMAL_INFO_CONTAINER.hasChildNodes()) {
        //     ANIMAL_INFO_CONTAINER.removeChild(ANIMAL_INFO_CONTAINER.childNodes[0]);
        // }
    ANIMAL_INFO_CONTAINER.innerHTML = getAnimalHTML(animal);
    TRIGGER_BUTTON.innerText = 'Show Another Animal';
}

function getAnimalHTML (animal) {
   return  `<div class="animal-info">
        <img id="image_link" src="${animal.image_link}" alt="">
        <div class="facts">
            <h3 class="animal_name">${animal.name}</h3>
            <div><b>Type</b> : <span class="detail">${animal.animal_type}</span></div>
            <div><b>Diet</b> : <span class="detail">${animal.diet}</span></div>
            <div><b>Lifespan</b> : <span class="detail">${animal.lifespan}</span></div>
            <div><b>Habitat</b> : <span class="detail">${animal.habitat}</span></div>
            <div><b>Length range</b> : <span class="detail">${animal.length_min} to ${animal.length_max} m</span></div>
            <div><b>Weight range</b> : <span class="detail">${animal.weight_min} to ${animal.weight_max} kg</span></div>
            <div><b>Geological Region</b> <span class="detail">${animal.geo_range}</span></div>
        </div>
    </div>`
}
