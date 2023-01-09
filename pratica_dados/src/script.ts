import { fetchData } from './fetchData.js';

type TransacaoPagamento = 'Boleto' | 'Cartão de Crédito';
type TransacaoStatus = 'Paga' | 'Aguardando pagamento' | 'Recusada pela operadora de cartão' | 'Estornada';

interface TransacaoAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransacaoStatus;
    Email: string;
    ['Valor (R$)']: string;
    ['Forma de Pagamento']: TransacaoPagamento;
    ['Cliente Novo']: number;
}

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    'https://api.origamid.dev/json/transacoes.json'
  );

  if (data) {
    data.forEach((item) => {
      console.log(item['Forma de Pagamento']);
    });
  }

  console.log('Codigo continuou');
}

handleData();
