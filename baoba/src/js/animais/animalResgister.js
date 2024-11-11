async function onPageLoad() {
    const animals = await getAnimals();
    await setAnimals(animals);
}

async function setAnimals(animals) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    animals.forEach(animal => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="${animal.img_url}" alt="Imagem de ${animal.name}" style="width: 100px; height: 100px; text-align: center;"></td>
            <td style="text-align: center;">${animal.name}</td>
            <td style="text-align: center;">${animal.biome}</td>
            <td style="text-align: center;" class="sobre">${animal.about}</td>
            <td class="acao"><button onclick="openModal(${JSON.stringify(animal).replace(/"/g, '&quot;')})">Editar</button></td>
            <td class="acao"><button onclick="deleteAnimal('${animal.id}')">Excluir</button></td>
        `;
        tbody.appendChild(tr);
    });
}

async function getAnimals() {
    try {
        const res = await fetch("http://localhost:3000/animals/");
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}

async function onSubmit(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    console.log("Formulário enviado. Tentando adicionar animal..."); // Log de depuração
    await addAnimal();
    closeModal(); // Fecha o modal após adicionar
    const animals = await getAnimals(); // Obtém a lista atualizada de animais
    await setAnimals(animals); // Atualiza a tabela com os animais
}

async function addAnimal() {
    const name = document.querySelector("#m-name").value;
    const biome = document.querySelector("#m-biome").value;
    const about = document.querySelector("#m-about").value;
    const img_url = document.querySelector("#m-imag_url").value;

    if (name.length === 0 || biome.length === 0 || about.length === 0 || img_url.length === 0) {
        alert("Preencha todos os campos corretamente");
        return;
    }

    const animal = {
        name,
        biome,
        about,
        img_url,
    };

    try {
        const res = await fetch("http://localhost:3000/animals/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(animal),
        });
        if (res.ok) {
            console.log("Animal adicionado com sucesso"); // Log de depuração
            const data = await res.json();
            return data;
        } else {
            throw new Error("Erro ao adicionar animal. Código de resposta: " + res.status);
        }
    } catch (error) {
        alert("Erro ao adicionar animal: " + error.message);
        console.error(error);
    }
}

async function deleteAnimal(id) {

    try {
        const res = await fetch(`http://localhost:3000/animals/${id}`, {
            method: "DELETE",
        }
        );
        
        if (res.ok) {
            alert("Animal excluído com sucesso!");
            const animals = await getAnimals();
            setAnimals(animals);
        }
    } catch (error) {
        alert("Erro ao excluir animal");
        console.error(error);
    }
}

async function updateAnimal(id) {
    const name = document.querySelector("#m-name").value;
    const biome = document.querySelector("#m-biome").value;
    const about = document.querySelector("#m-about").value;
    const img_url = document.querySelector("#m-imag_url").value;

    if (name === "" || biome === "" || about === "" || img_url === "") {
        alert("Preencha todos os campos antes de salvar.");
        return;
    }

    const animalData = {
        name,
        biome,
        about,
        img_url,
    };

    try {
        const res = await fetch(`http://localhost:3000/animals/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(animalData),
        });
    } catch (error) {
        alert("Erro ao atualizar animal: " + error.message);
        console.error(error);
    }
}

function openModal(animal = null) {
    const modal = document.querySelector(".modal-container");
    modal.style.display = 'block';

    const btnSave = document.querySelector("#btnSalvar");

    if (animal) {
        document.querySelector("#m-name").value = animal.name;
        document.querySelector("#m-biome").value = animal.biome;
        document.querySelector("#m-about").value = animal.about;
        document.querySelector("#m-imag_url").value = animal.img_url;
        btnSave.onclick = (event) => {
            event.preventDefault(); // Previne o comportamento padrão do formulário
            updateAnimal(animal.id);
            onPageLoad()
        };
    } else {
        document.querySelector("#m-name").value = '';
        document.querySelector("#m-biome").value = '';
        document.querySelector("#m-about").value = '';
        document.querySelector("#m-imag_url").value = '';
        btnSave.onclick = onSubmit; // Atualiza o botão para chamar onSubmit ao adicionar
    }
}

function closeModal() {
    const modal = document.querySelector(".modal-container");
    modal.style.display = 'none';
    onPageLoad()
}

function mostrarTextoCompleto(elemento) {
    elemento.classList.remove("truncado");
    elemento.classList.add("expandido");
  }
  
  function truncarTexto(elemento) {
    elemento.classList.remove("expandido");
    elemento.classList.add("truncado");
  }
  