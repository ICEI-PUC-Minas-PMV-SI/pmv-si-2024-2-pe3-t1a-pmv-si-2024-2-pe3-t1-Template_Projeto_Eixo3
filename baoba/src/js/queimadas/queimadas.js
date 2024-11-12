async function createFire() {
    try {
        console.log("createFire");
        const cep = document.querySelector("#fire-cep").value;
        const intensity = document.querySelector("#fire-intensity").value;
        const type = document.querySelector("#fire-type").value;
        const description = document.querySelector("#fire-description").value;

        const fireData = {
            cep,
            intensity,
            type,
            description,
        };

        const res = await fetch("http://localhost:3000/fires", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fireData),
        });

        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function deleteFire(id) {
    try {
        const res = await fetch(`http://localhost:3000/fires/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function updateFire(id) {
    try {
        const cep = document.querySelector("#edit-fire-cep").value;
        const intensity = document.querySelector("#edit-fire-intensity").value;
        const type = document.querySelector("#edit-fire-type").value;
        const description = document.querySelector("#edit-fire-description").value;

        const fireData = {
            cep,
            intensity,
            type,
            description,
        };

        const res = await fetch(`http://localhost:3000/fires/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(fireData),
        });

        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function getFires() {
    try {
        const res = await fetch("http://localhost:3000/fires");
        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}