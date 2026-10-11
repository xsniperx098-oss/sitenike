import { useMemo, useState } from "react";

export default function useFiltrosProdutos(produtos) {
  const [categorias, setCategorias] = useState([]);
  const [precoMinimo, setPrecoMinimo] = useState("");
  const [precoMaximo, setPrecoMaximo] = useState("");

  function alternarCategoria(categoria) {
    setCategorias((atuais) =>
      atuais.includes(categoria)
        ? atuais.filter((item) => item !== categoria)
        : [...atuais, categoria]
    );
  }

  const produtosFiltrados = useMemo(() => {
    const minimo = precoMinimo === "" ? 0 : Number(precoMinimo);
    const maximo = precoMaximo === "" ? Infinity : Number(precoMaximo);

    return produtos.filter((produto) => {
      const categoriaValida =
        categorias.length === 0 || categorias.includes(produto.filtroCategoria || produto.categoria);
      const preco = Number(produto.preco);
      return categoriaValida && preco >= minimo && preco <= maximo;
    });
  }, [categorias, precoMinimo, precoMaximo, produtos]);

  return {
    produtosFiltrados,
    categorias,
    alternarCategoria,
    precoMinimo,
    setPrecoMinimo,
    precoMaximo,
    setPrecoMaximo,
  };
}
