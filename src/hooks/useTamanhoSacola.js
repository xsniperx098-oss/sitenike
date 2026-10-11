import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adicionarProdutoNaSacola } from "../utils/sacola";

export default function useTamanhoSacola() {
  const navigate = useNavigate();
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
  const [erroTamanho, setErroTamanho] = useState(false);

  function selecionarTamanho(tamanho) {
    setTamanhoSelecionado(tamanho);
    setErroTamanho(false);
  }

  function adicionarNaSacola(produto) {
    if (!tamanhoSelecionado) {
      setErroTamanho(true);
      return;
    }

    adicionarProdutoNaSacola({ ...produto, tamanho: tamanhoSelecionado });
    navigate("/sacola");
  }

  return { tamanhoSelecionado, erroTamanho, selecionarTamanho, adicionarNaSacola };
}
