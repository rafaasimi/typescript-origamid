// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fetchCursosExercicio() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json)
}

fetchCursosExercicio();

interface Curso {
  nome: string;
  horas: number;
  gratuito: boolean;
  nivel: 'iniciante' | 'avancado';
  tags: Array<string>
  idAulas: Array<number>
  aulas: number;
}

function isCursos(value: unknown): value is Curso {
  if(value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if(Array.isArray(data)) {
    data.filter(isCursos).forEach((item) => {
      document.body.innerHTML += `
      <h1>Curso: ${item.nome}</h1>
      <p>Quantidade de horas: ${item.horas}</p>
      <p>${item.tags.join(', ')}</p>
    `
    })
  }
}