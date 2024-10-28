function setDestinyId(id) {
    sessionStorage.setItem('destiny_id', id)
}

async function getEcotourismPlaces() {
    try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/ecotourism`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function setEcotourismPlaces() {
    try {
		const ecotourismPlaces = await getEcotourismPlaces();
        
        let htmlContent = ``;

        for(let i = 0; i < ecotourismPlaces.length; i++) {
            htmlContent += `
            <div class="carousel-item" onclick="setDestinyId(${ecotourismPlaces[i].id})">
            <a href="destinos.html">
              <img style="width: 380px; height: 285px"
                src="${ecotourismPlaces[i].img_url}"
                alt="${ecotourismPlaces[i].name}"
              />
            </a>
            <div class="card-opaco">
              <p>${ecotourismPlaces[i].name}</p>
            </div>
          </div>
            `
        }

        document.querySelector('#carousel-items-container').innerHTML = htmlContent;

	} catch (error) {
		throw new Error(error);
	}
}
