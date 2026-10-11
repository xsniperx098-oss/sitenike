import feminino1 from "../assets/feminino1.jpg";
import feminino2 from "../assets/feminino2.jpg";
import feminino3 from "../assets/feminino3.jpg";
import feminino4 from "../assets/feminino4.jpg";
import feminino5 from "../assets/feminino5.jpg";
import feminino6 from "../assets/feminino6.jpg";
import infantil1 from "../assets/infantil1.png";
import infantil2 from "../assets/infantil2.png";
import infantil3 from "../assets/infantil3.png";
import infantil4 from "../assets/infantil4.png";
import infantil5 from "../assets/infantil5.png";
import infantil6 from "../assets/infantil6.png";
import tenis1 from "../assets/tenis1.jpg";
import tenis2 from "../assets/tenis2.jpg";
import tenis3 from "../assets/tenis3.jpg";
import tenis4 from "../assets/tenis4.jpg";
import tenis5 from "../assets/tenis5.jpg";
import tenis6 from "../assets/tenis6.jpg";

export const produtosHome = [
  { id: "home-tenis-1", nome: "Nike Air Zoom Pegasus", categoria: "Lifestyle", preco: 699.99, imagem: tenis1, departamento: "Novidades" },
  { id: "home-tenis-2", nome: "Nike Air Max 90", categoria: "Lifestyle", preco: 599.99, imagem: tenis2, departamento: "Novidades" },
  { id: "home-tenis-3", nome: "Nike Blazer Mid 77", categoria: "Lifestyle", preco: 699.99, imagem: tenis3, departamento: "Novidades" },
];

export const produtosMasculinos = [
  { id: "tenis-1", nome: "Nike Air Max 90", categoria: "Lifestyle", preco: 599.99, imagem: tenis1, departamento: "Masculino" },
  { id: "tenis-2", nome: "Nike Air Force 1", categoria: "Lifestyle", preco: 599.99, imagem: tenis2, departamento: "Masculino" },
  { id: "tenis-3", nome: "Nike Court Vision Low", categoria: "Lifestyle", preco: 449.99, imagem: tenis3, departamento: "Masculino" },
  { id: "tenis-4", nome: "Nike Revolution 7", categoria: "Corrida", preco: 399.99, imagem: tenis4, departamento: "Masculino" },
  { id: "tenis-5", nome: "Nike Waffle Debut", categoria: "Lifestyle", preco: 499.99, imagem: tenis5, departamento: "Masculino" },
  { id: "tenis-6", nome: "Nike Air Jordan 1", categoria: "Lifestyle", preco: 799.99, imagem: tenis6, departamento: "Masculino" },
];

export const produtosFemininos = [
  { id: "feminino-tenis-1", nome: "Nike Air Max 90", categoria: "Lifestyle", preco: 599.99, imagem: feminino1, departamento: "Feminino" },
  { id: "feminino-tenis-2", nome: "Nike Air Force 1", categoria: "Lifestyle", preco: 599.99, imagem: feminino2, departamento: "Feminino" },
  { id: "feminino-tenis-3", nome: "Nike Court Vision Low", categoria: "Lifestyle", preco: 449.99, imagem: feminino3, departamento: "Feminino" },
  { id: "feminino-tenis-4", nome: "Nike Revolution 7", categoria: "Corrida", preco: 399.99, imagem: feminino4, departamento: "Feminino" },
  { id: "feminino-tenis-5", nome: "Nike Waffle Debut", categoria: "Lifestyle", preco: 499.99, imagem: feminino5, departamento: "Feminino" },
  { id: "feminino-tenis-6", nome: "Nike Air Jordan 1", categoria: "Lifestyle", preco: 799.99, imagem: feminino6, departamento: "Feminino" },
];

export const produtosInfantis = [
  { id: "infantil-tenis-1", nome: "Nike Revolution 7", categoria: "Infantil", filtroCategoria: "Corrida", preco: 329.99, imagem: infantil1, departamento: "Infantil" },
  { id: "infantil-tenis-2", nome: "Nike Air Max SC", categoria: "Infantil", filtroCategoria: "Lifestyle", preco: 349.99, imagem: infantil2, departamento: "Infantil" },
  { id: "infantil-tenis-3", nome: "Nike Court Borough", categoria: "Infantil", filtroCategoria: "Lifestyle", preco: 329.99, imagem: infantil3, departamento: "Infantil" },
  { id: "infantil-tenis-4", nome: "Nike Flex Runner", categoria: "Infantil", filtroCategoria: "Treino", preco: 279.99, imagem: infantil4, departamento: "Infantil" },
  { id: "infantil-tenis-5", nome: "Nike Star Runner", categoria: "Infantil", filtroCategoria: "Corrida", preco: 299.99, imagem: infantil5, departamento: "Infantil" },
  { id: "infantil-tenis-6", nome: "Nike Air Jordan 1", categoria: "Infantil", filtroCategoria: "Basquete", preco: 499.99, imagem: infantil6, departamento: "Infantil" },
];

export const todosProdutos = [
  ...produtosHome,
  ...produtosMasculinos,
  ...produtosFemininos,
  ...produtosInfantis,
];
