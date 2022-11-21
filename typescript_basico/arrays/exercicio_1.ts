// Defina a interface da API: https://api.origamid.dev/json/cursos.json
// e mostre os dados na tela.

// Existem apenas dois nivels de cursos, Iniciante  (iniciante) e Avançado (avancado).
// Se for para inciiante, pinte o itulo de azul, para avançado pinte de vermelho.

interface ICurso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>; // string[]
  idAulas: Array<number>; // number[]
  nivel: 'iniciante' | 'avancado';
}

async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: ICurso[]) {
  
  cursos.forEach(curso => {
    let color;

    if(curso.nivel === 'iniciante') {
      color = 'blue'
    } else if (curso.nivel === 'avancado') {
      color = 'red'
    }

    document.body.innerHTML += `
    <div>
      <h2 style="color: ${color}">${curso.nome}</h2>
      <p>${curso.horas}</p>
      <p>${curso.aulas}</p>
      <p>${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>${curso.tags.join(', ')}</p>
      <p>${curso.idAulas.join(' | ')}</p>
      </div>
    `
  })
}
