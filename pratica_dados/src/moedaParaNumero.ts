/**
 * Recebe string '1.200,50' e retorna number 1200.50
 * @param moeda 
 * @returns 
 */
export function moedaParaNumero(moeda: string): number | null {
  const numero = Number(moeda.replaceAll('.', '').replace(',', '.'));
  if (isNaN(numero)) {
    return null;
  } else {
    return numero;
  }
}
