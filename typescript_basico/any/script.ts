function normalizar(texto: any) {
  return texto.trim().toLowerCase();
}


console.log(normalizar('  Rafael Simionato '))
// console.log(normalizar(50))

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON('https://api.origamid.dev/json/cursos.json');

interface Curso {
  nome: string;
  horas: number;
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
  });
}

const dados: any = 'o any gera problemas';

mostrarCursos(dados);