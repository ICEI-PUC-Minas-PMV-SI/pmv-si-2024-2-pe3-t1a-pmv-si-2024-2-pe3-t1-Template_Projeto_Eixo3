function setActivitiesId(id) {
	sessionStorage.setItem("activities_id", id);
}

async function getEcotourismActivities() {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/activities`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function getEcotourismActivity(id) {
	try {
		const res = await fetch(`https://api-storage-baoba.vercel.app/activities/${id}`);
		const data = await res.json();
		return data;
	} catch (error) {
		throw new Error(error);
	}
}

async function setSingleActivityData() {
	try {
		const activitiesId = sessionStorage.getItem("activities_id");
		const data = await getEcotourismActivity(activitiesId);

		let htmlContent = ``;

		htmlContent += `
           
            <div class="card-flex">
      
              <img style="width: 380px; height: 285px"
                src="${data.img_url}"
                alt="${data.name}"
              />
          
              <div class="padding-2">
              <h4>${data.name}</h4>
              </br>
              <span>${data.about}</span>
              </div>
            </div>
          </div>
            `;

		document.querySelector("#activities-content").innerHTML = htmlContent;
	} catch (error) {
		throw new Error(error);
	}
}

async function setEcotourismActivities() {
    try {
        const data = await getEcotourismActivities();

        let htmlContent = ``;

        for(let i = 0; i < data.length; i++) {
            htmlContent += `
            <div class="carousel-item" onclick="setActivitiesId(${data[i].id})">
            <a href="atividades.html">
              <img style="width: 380px; height: 285px"
                src="${data[i].img_url}"
                alt="${data[i].name}"
              />
            </a>
            <div class="card-opaco">
              <p>${data[i].name}</p>
            </div>
          </div>
            `
        }

        document.querySelector("#carousel-activities-items-container").innerHTML = htmlContent;
    } catch (error) {
        throw new Error(error);
    }

}