async function getDestinyData(id) {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/ecotourism/${id}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function setDestinyData() {
	try {
		const destinyId = sessionStorage.getItem("destiny_id");
		const destinyData = await getDestinyData(destinyId);

		let htmlContent = `
		<br/>
        <div class="text-and-image-destino">
          <div class="text-destino">
            <h1>${destinyData.name}</h1>
            <p>
              ${destinyData.about}
            </p>
			<br/>
          </div>
          
        </div>
		<div>
		</div>
		<div class="image-destino">
			  <img
				src="${destinyData.img_url}"
				alt="${destinyData.name}"
			  />
			</div>
		  </div>
      <div class="caixa-texto-dest">
        ${destinyData.text}
      </div>

        `;

		sessionStorage.setItem("lat", destinyData.lat);
		sessionStorage.setItem("lon", destinyData.lon);

		document.querySelector("#destiny-content").innerHTML = htmlContent;
		await setWheatherData(destinyData.name);
        await setMap(destinyData.lon, destinyData.lat);
	} catch (error) {
		throw new Error(error);
	}
}

async function getWheatherData() {
	try {
		const lat = sessionStorage.getItem("lat");
		const lon = sessionStorage.getItem("lon");
		const api_key = "1ab81d8a84eeb81fede78f63c9376740";
		const data = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric&lang=pt_br`
		);
		const weatherData = await data.json();

		console.log(weatherData);
		return weatherData;
	} catch (error) {
		throw new Error(error);
	}
}

class WheatherData {
	constructor(temp, feels_like, pressure, humidity, description) {
		this.temp = temp;
		this.feels_like = feels_like;
		this.pressure = pressure;
		this.humidity = humidity;
		this.description = description;
	}
}

async function treatsWheatherData() {
	try {
		const weatherData = await getWheatherData();
		const wheather = new WheatherData(
			weatherData.main.temp,
			weatherData.main.feels_like,
			weatherData.main.pressure,
			weatherData.main.humidity,
			weatherData.weather[0].description
		);

		return wheather;
	} catch (error) {
		throw new Error(error);
	}
}

async function setWheatherData(location) {
	try {
		const wheather = await treatsWheatherData();
		const htmlContent = `
        <h4>Previsão do Tempo para ${location}</h4>
        <div class="wheather-data">
            <div class="wheather-data-item">
                <h4>Temperatura</h4>
                <p>${wheather.temp}°C</p>
            </div>
            <div class="wheather-data-item">
                <h4>Sensação Térmica</h4>
                <p>${wheather.feels_like}°C</p>
            </div>
            <div class="wheather-data-item">
                <h4>Pressão</h4>
                <p>${wheather.pressure} hPa</p>
            </div>
            <div class="wheather-data-item">
                <h4>Umidade</h4>
                <p>${wheather.humidity}%</p>
            </div>
            <div class="wheather-data-item">
                <h4>Descrição</h4>
                <p>${wheather.description}</p>
            </div>
        </div>
        `;

		document.querySelector("#wheather-container").innerHTML = htmlContent;
	} catch (error) {
		throw new Error(error);
	}
}

async function setMap(lon, lat) {
	const map = new ol.Map({ target: "map" });
	const basemapId = "arcgis/streets";

	map.setView(
		new ol.View({
			center: ol.proj.fromLonLat([lon, lat]),
			zoom: 8,
		})
	);

	const basemapURL = `https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2/styles/${basemapId}?token=AAPK87a8a8cc73464aa0a531a52324a471c5NsY34aPbTabfurVcAfKWHLVgjtNHb5z9OOIbjzKupy827Yjy65WYj5VKusTrWmLs`;

	olms.apply(map, basemapURL);
}
