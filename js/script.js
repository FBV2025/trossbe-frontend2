// CARRINHO — TROSSBE

let cart = {};

const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const cartList = document.getElementById("cartList");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartCount = document.getElementById("cartCount");
const cartCountTop = document.getElementById("cartCountTop");

// ADICIONAR AO CARRINHO
function addToCart(item) {
  if (!cart[item.id]) cart[item.id] = { ...item, qty: 0 };
  cart[item.id].qty++;
  updateCartUI();
}

// ATUALIZAR CARRINHO
function updateCartUI() {
  const items = Object.values(cart);
  cartList.innerHTML = "";

  let total = 0;

  items.forEach(i => {
    total += i.qty * i.price;

    cartList.innerHTML += `
      <div class="cart-row">
        <span>${i.name} x${i.qty}</span>
        <span>R$ ${(i.qty * i.price).toFixed(2)}</span>
      </div>
    `;
  });

  cartTotal.textContent = total.toFixed(2);

  const count = items.reduce((s, x) => s + x.qty, 0);
  cartCount.textContent = count;
  cartCountTop.textContent = count;
}

// ABRIR / FECHAR
cartBtn?.addEventListener("click", () => cartModal.classList.add("show"));
document.getElementById("openCart")?.addEventListener("click", () => cartModal.classList.add("show"));
document.getElementById("closeModal")?.addEventListener("click", () => cartModal.classList.remove("show"));

// ENVIAR PEDIDO
checkoutBtn?.addEventListener("click", async () => {
  const items = Object.values(cart);
  if (items.length === 0) return alert("Carrinho vazio!");

  // CAMPOS DO CLIENTE
  const nome = document.getElementById("nomeCliente").value.trim();
  const telefone = document.getElementById("telefoneCliente").value.trim();
  const endereco = document.getElementById("enderecoCliente").value.trim();

  if (!nome || !telefone || !endereco) {
    alert("Preencha todos os dados!");
    return;
  }

  const totalValue = items.reduce((s, i) => s + i.price * i.qty, 0);

  const payload = {
    nome_cliente: nome,
    telefone,
    endereco,
    items: JSON.stringify(items),
    total: totalValue,
    status: "novo",
    created_at: new Date().toISOString()
  };

  const { error } = await insertPedido(payload);

  if (error) {
    console.error(error);
    alert("Erro ao enviar pedido.");
    return;
  }

  alert("Pedido enviado com sucesso!");

  cart = {};
  updateCartUI();
  cartModal.classList.remove("show");
});

updateCartUI();
