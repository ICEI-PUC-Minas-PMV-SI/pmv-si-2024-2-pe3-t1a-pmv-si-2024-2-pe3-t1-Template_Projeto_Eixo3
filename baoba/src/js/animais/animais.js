async function getAnimals() {
	try {
		const res = await fetch("https://api-storage-baoba.vercel.app/animals");
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function getAnimalsByBiome(bioma) {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/animals?biome=${bioma}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function setAnimals(biome, elementId) {
	try {
		const animals = await getAnimalsByBiome(biome);

		let htmlContent = ``;

		for (let i = 0; i < animals.length; i++) {
			htmlContent += `
        <a href="conteudo-animais.html?biome=${biome}&animal=${animals[i].id}" class="animais-extincao-tundra">
            <img
              width="382"
              height="240"
              src="${animals[i].img_url}"
              alt="${animals[i].name}"
            />
            <div class="card-opaco-tundra">
              <p>${animals[i].name}</p>
            </div>
          </a>
        `;
		}

		document.querySelector(`#${elementId}`).innerHTML = htmlContent;
	} catch (error) {
		throw new Error(error);
	}
}

async function getAnimalContext() {
	const urlParams = new URLSearchParams(window.location.search);
	const animal = urlParams.get('animal');
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/animals/${animal}`);
		const data = await res.json();
		console.log(data);
		document.querySelector(`#nome-animal`).textContent = data.name;
		document.querySelector(`#imagem-animal`).src = data.img_url;
		document.querySelector(`#imagem-animal`).alt = data.name;
		document.querySelector(`#descricao-animal`).textContent = data.about;
	} catch (error) {
		throw new Error(error);
	}
}

async function setOthersAnimals() {
	try {
		const urlParams = new URLSearchParams(window.location.search);
		const biome = urlParams.get('biome');
		const animals = await getAnimalsByBiome(biome);
		const animal = urlParams.get('animal');

		let htmlContent = ``;

		for (let i = 0; i < animals.length; i++) {
			if (animal == animals[i].id) {
				continue;
			}
			htmlContent += `
        <a href="conteudo-animais.html?biome=${biome}&animal=${animals[i].id}" class="animais-extincao-tundra">
            <img
              width="382"
              height="240"
              src="${animals[i].img_url}"
              alt="${animals[i].name}"
            />
            <div class="card-opaco-tundra">
              <p>${animals[i].name}</p>
            </div>
          </a>
        `;
		}

		document.querySelector(`#container-outros-animais`).innerHTML = htmlContent;
	} catch (error) {
		throw new Error(error);
	}
}
