const CONTAS_KEY = "nike-contas-local";
const SESSAO_KEY = "nike-sessao-local";
const ITERACOES = 120000;
const EMAIL_DEMO = "demo@sitenike.com";
const SENHA_DEMO = "nike1234";

function lerContas() {
  try {
    const contas = JSON.parse(localStorage.getItem(CONTAS_KEY) || "[]");
    return Array.isArray(contas) ? contas : [];
  } catch {
    return [];
  }
}

function paraHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function deHex(hex) {
  return new Uint8Array(hex.match(/.{2}/g).map((byte) => parseInt(byte, 16)));
}

async function criarHash(senha, saltHex) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("Seu navegador não permite criar uma conta local neste endereço.");
  }

  const salt = saltHex
    ? deHex(saltHex)
    : globalThis.crypto.getRandomValues(new Uint8Array(16));
  const chave = await globalThis.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(senha),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const resultado = await globalThis.crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: ITERACOES, hash: "SHA-256" },
    chave,
    256
  );

  return { salt: paraHex(salt), hash: paraHex(new Uint8Array(resultado)) };
}

export async function criarContaLocal(dados) {
  const contas = lerContas();
  const email = dados.email.trim().toLowerCase();

  if (contas.some((conta) => conta.email === email)) {
    throw new Error("Já existe uma conta com esse e-mail. Entre ou use outro e-mail.");
  }

  const { salt, hash } = await criarHash(dados.senha);
  const conta = { ...dados, email, salt, hash };
  delete conta.senha;
  delete conta.confirmarSenha;
  contas.push(conta);
  localStorage.setItem(CONTAS_KEY, JSON.stringify(contas));

  const sessao = { nome: conta.nome, email: conta.email };
  localStorage.setItem(SESSAO_KEY, JSON.stringify(sessao));
  return sessao;
}

export async function entrarContaLocal(identificador, senha) {
  const procura = identificador.trim().toLowerCase();
  const conta = lerContas().find(
    (item) => item.email === procura || item.nome.trim().toLowerCase() === procura
  );

  if (!conta && procura === EMAIL_DEMO && senha === SENHA_DEMO) {
    return criarContaLocal({
      nome: "Conta de demonstração",
      email: EMAIL_DEMO,
      telefone: "",
      endereco: {
        rua: "Rua de demonstração",
        numero: "1",
        complemento: "",
        bairro: "Centro",
        cidade: "São Paulo",
        estado: "SP",
        cep: "01000-000",
      },
      senha: SENHA_DEMO,
    });
  }

  if (!conta) return null;

  const { hash } = await criarHash(senha, conta.salt);
  if (hash !== conta.hash) return null;

  const sessao = { nome: conta.nome, email: conta.email };
  localStorage.setItem(SESSAO_KEY, JSON.stringify(sessao));
  return sessao;
}

export function obterSessaoLocal() {
  try {
    return JSON.parse(localStorage.getItem(SESSAO_KEY) || "null");
  } catch {
    return null;
  }
}

export function sairContaLocal() {
  localStorage.removeItem(SESSAO_KEY);
}
