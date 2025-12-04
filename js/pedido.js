async function loadMenu() {
  const { data, error } = await fetchProdutosDB();
  const grid = document.getElementById("menuGrid");

  if (error) {
    console.error(error);
    grid.innerHTML = "<p>Erro ao carregar menu.</p>";
    return;
  }

  window.allProducts = data;

  grid.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <h4>${item.nome}</h4>
      <p>${item.descricao}</p>
      <p><b>R$ ${item.preco.toFixed(2)}</b></p>

      <button class="btn add" data-id="${item.id}">
        Adicionar
      </button>
    `;

    grid.appendChild(card);
  });

  document.querySelectorAll(".add").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = window.allProducts.find(x => x.id == btn.dataset.id);

      addToCart({
        id: p.id,
        name: p.nome,
        price: p.preco
      });
    });
  });
}

loadMenu();
