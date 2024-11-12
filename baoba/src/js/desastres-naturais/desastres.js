async function createDisaster() {
    try {
        const cep = document.querySelector("#disaster-cep").value;
        const intensity = document.querySelector("#disaster-intensity").value;
        const description = document.querySelector("#disaster-description").value; 
        const type = document.querySelector("#disaster-type").value;

        const disasterData = {
            cep,
            intensity,
            description,
            type,
        };

        const res = await fetch("http://localhost:3000/disasters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(disasterData),
        });

        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function deleteDisaster(id) {
    try {
        const res = await fetch(`http://localhost:3000/disasters/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function updateDisaster(id) {
    try {
        const cep = document.querySelector("#edit-disaster-cep").value;
        const intensity = document.querySelector("#edit-disaster-intensity").value;
        const description = document.querySelector("#edit-disaster-description").value;
        const type = document.querySelector("#edit-disaster-type").value;

        const disasterData = {
            cep,
            intensity,
            description,
            type,
        };

        const res = await fetch(`http://localhost:3000/disasters/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(disasterData),
        });

        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function getDisasters() {
    try {
        const res = await fetch("http://localhost:3000/disasters");
        const data = await res.json();

        return data;
    } catch (error) {
        throw new Error(error);
    }
}