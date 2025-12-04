const ordersList = document.getElementById("ordersList");

async function loadOrders() {
  ordersList.innerHTML = "Carregando...";

  const { data, error } = await fetchPedidos(50);

  if (error) {
    ordersList.innerHTML = "Erro ao carregar pedidos.";
    console.error(error);
    return;
  }

  if (!data.length) {
    ordersList.innerHTML = "<p>Nenhum pedido recente.</p>";
    return;
  }

  ordersList.innerHTML = data
    .map(p => {
      const items = JSON.parse(p.items);

      const rows = items
        .map(i => `<div>${i.qty}x ${i.name} — R$ ${(i.price * i.qty).toFixed(2)}</div>`)
        .join("");

      return `
        <div class="pedido-card">
          <strong>ID:</strong> ${p.id}<br>
          <strong>Cliente:</strong> ${p.nome_cliente}<br>
          <strong>Telefone:</strong> ${p.telefone}<br>
          <strong>Endereço:</strong> ${p.endereco}<br>
          <strong>Total:</strong> R$ ${p.total.toFixed(2)}<br>
          <strong>Status:</strong> ${p.status}<br>

          <div class="pedido-items">${rows}</div>

          <button class="btn" data-id="${p.id}" data-status="em_preparo">Em preparo</button>
          <button class="btn" data-id="${p.id}" data-status="pronto">Pronto</button>
        </div>
      `;
    })
    .join("");

  document.querySelectorAll("button[data-id]").forEach(btn => {
    btn.addEventListener("click", async () => {
      await updatePedidoStatus(btn.dataset.id, btn.dataset.status);
      loadOrders();
    });
  });
}

loadOrders();
