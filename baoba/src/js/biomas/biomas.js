function setBiomesId(id) {
    console.log(id);
    sessionStorage.setItem("biomes_id", id);
}

async function getAllBiomesData() {
    try {
        const res = await fetch("https://api-storage-baoba.vercel.app/biomes");
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function setAllBiomesData() {
    try {
        const biomesData = await getAllBiomesData();
        
        let htmlContent = "";

        for (let i = 0; i < biomesData.length; i++) {
            htmlContent += `
            <div class="bioma-geral" onclick="setBiomesId(${biomesData[i].id})">
            <a href="conteudo-biomas.html">
              <img style="width: 380px; height: 285px"
                src="${biomesData[i].img_url}"
                alt="${biomesData[i].name}"
              />
            </a>
            <div class="card-opaco-biomas">
              <p>${biomesData[i].name}</p>
            </div>
          </div>
            `
        }

        console.log(htmlContent)

        document.querySelector("#container-items-biomes").innerHTML = htmlContent;

    } catch (error) {
        throw new Error(error);
    }
}

async function getBiomesData(id) {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/biomes/${id}`);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error("Error fetching biome data:", error);
		throw new Error(error);
	}
}
async function setBiomesData() {
	try {
		const biomesId = sessionStorage.getItem("biomes_id");

		const biomesData = await getBiomesData(biomesId);
        console.log(biomesData);

		let htmlContent = `
        <div class="text-and-image-conteudo-biomas">
          <div class="text-conteudo-biomas">
            <h1>${biomesData.name}</h1>
            <p>
              ${biomesData.about}
            </p>
          </div>
          
        </div>
      <div class="caixa-texto-dest">
        ${biomesData.preservation}
      </div>
      <div>
      </div>
      <div class="image-conteudo-biomas">
            <img
              src="${biomesData.img_url}"
              alt="${biomesData.name}"
            />
          </div>
        </div>
        `;

		const biomesContentElement = document.querySelector("#biomes-content");

		biomesContentElement.innerHTML = htmlContent;
	} catch (error) {
		console.error("Error in setBiomesData:", error);
	}
}
