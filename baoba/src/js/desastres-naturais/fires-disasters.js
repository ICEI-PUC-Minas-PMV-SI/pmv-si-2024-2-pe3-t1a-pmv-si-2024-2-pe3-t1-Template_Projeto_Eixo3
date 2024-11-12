async function getItems() {
  try {
    const resFire = await fetch("http://localhost:3000/fires");
    const dataFires = await resFire.json();

    const resDisaster = await fetch("http://localhost:3000/disasters");
    const dataDisaster = await resDisaster.json();

    const items = [...dataFires, ...dataDisaster];

    return items;
  } catch (error) {
    throw new Error(error);
  }
}

async function loadItems() {
  try {
    const items = await getItems();

    const itemsList = document.querySelector("#list-items");

    itemsList.innerHTML = "";

    items.forEach((item) => {
      const itemElement = document.createElement("li");

      itemElement.innerHTML = `
                <div  >
                <div class="list-item-disaster">
                <p>${item.cep}</p>
                <p>${item.intensity}</p>
                <p>${item.description}</p>
                <p>${item.type}</p>
                <button onclick="deleteItem('${item.id}', '${item.type}')">excluir</button>
                <button onclick="editItem('${item.id}')">editar</button>
                </div>
                <div >
                <div class="d-none edit-disasters-container" id="a${item.id}" >
                <form >
                <label for="edit-disaster-cep">CEP:</label>
                <input class="edit-disasters-input" type="text" id="edit-disaster-cep" />
                <label for="edit-disaster-intensity">Intensity:</label>
                <input class="edit-disasters-input" type="text" id="edit-disaster-intensity" />
                <label for="edit-disaster-description">Description:</label>
                <input class="edit-disasters-input" type="text" id="edit-disaster-description" />

                <button onclick="updateItem('${item.id}', '${item.type}')">salvar</button>   
                </form>
                </div>
                </div>
            `;

      itemsList.appendChild(itemElement);
    });
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteItem(id, type) {
  try {
    let param = "";
    if (type === "queimada") {
      param = "fires";
    }

    if (type === "desastre natural") {
      param = "disasters";
    }
    const res = await fetch(`http://localhost:3000/${param}/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

function editItem(id) {
  document.querySelector(`#a${id}`).classList.remove("d-none");
}

async function updateItem(id, types) {
  try {
    let param = "";
    if (types === "queimada") {
      param = "fires";
    }

    if (types === "desastre natural") {
      param = "disasters";
    }

    console.log(types)

    const cep = document.querySelector("#edit-disaster-cep").value;
    const intensity = document.querySelector("#edit-disaster-intensity").value;
    const description = document.querySelector("#edit-disaster-description").value;
    const type = types === 'queimada' ? 'queimada' : 'desastre natural';

    const disasterData = {
      cep,
      intensity,
      description,
      type
    };

    const res = await fetch(`http://localhost:3000/${param}/${id}`, {
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
