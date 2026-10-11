export default function SeletorTamanho({
  label = "Escolha o tamanho",
  opcoes,
  valor,
  erro,
  aoSelecionar,
}) {
  return (
    <div onClick={(evento) => evento.stopPropagation()}>
      <select
        aria-label={label}
        value={valor || ""}
        onChange={(evento) => aoSelecionar(evento.target.value)}
        style={{
          width: "100%",
          marginTop: 5,
          padding: "4px 5px",
          border: "1px solid #ddd",
          borderRadius: 3,
          background: "#fff",
          fontSize: 9,
        }}
      >
        <option value="">Selecione o tamanho</option>
        {opcoes.map((tamanho) => (
          <option key={tamanho} value={tamanho}>
            {tamanho}
          </option>
        ))}
      </select>
      {erro && (
        <small role="alert" style={{ display: "block", color: "#b00020", fontSize: 8 }}>
          Escolha um tamanho antes de adicionar.
        </small>
      )}
    </div>
  );
}
