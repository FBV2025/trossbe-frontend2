const DB_URL = "https://uixwzwbhmagjmxastivx.supabase.co";
const DB_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpeHd6d2JobWFnam14YXN0aXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDMyNTcsImV4cCI6MjA3ODAxOTI1N30.6MwQWeAyP4pmywAaD6TwZ4LGh-Tw8AxrsITohCjtns0";

const supa = window.supabase.createClient(DB_URL, DB_ANON);

// Produtos
async function fetchProdutosDB() {
  return await supa.from("produtos").select("*").order("id", { ascending: true });
}

// Inserir pedido
async function insertPedido(payload) {
  return await supa.from("pedidos").insert(payload).select();
}

// Admin listar pedidos
async function fetchPedidos(limit = 50) {
  return await supa
    .from("pedidos")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(limit);
}

// Admin atualizar status
async function updatePedidoStatus(id, newStatus) {
  return await supa
    .from("pedidos")
    .update({ status: newStatus })
    .eq("id", id)
    .select();
}
