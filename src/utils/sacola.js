export function adicionarProdutoNaSacola(produto) {
  let sacola = [];

  try {
    const dados = JSON.parse(localStorage.getItem("sacola") || "[]");
    if (Array.isArray(dados)) sacola = dados;
  } catch {
    sacola = [];
  }

  const existente = sacola.find(
    (item) => item.id === produto.id && item.tamanho === produto.tamanho
  );

  if (existente) {
    sacola = sacola.map((item) =>
      item.id === produto.id && item.tamanho === produto.tamanho
        ? { ...item, ...produto, quantidade: Number(item.quantidade || 1) + 1 }
        : item
    );
  } else {
    sacola.push({ ...produto, quantidade: 1 });
  }

  localStorage.setItem("sacola", JSON.stringify(sacola));
}

export function formatarPreco(preco) {
  return Number(preco).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
