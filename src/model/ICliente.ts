export default interface ICliente {
  nome: string;
  cpf: string;
  telefone: string;
  compras_vinho: {
    tipo: string;
    quantidade: number;
  }[];
}
