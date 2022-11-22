// 1 - Selecione os elementos com a classe link
// 2 - Crie uma função que deve ser executada para cada elemento
// 3 - Modificar através da função o estilo da color e border
const linksExercicio = document.querySelectorAll('.link');
linksExercicio.forEach(item => {
    if (item instanceof HTMLElement) {
        modificaEstilo(item);
    }
});
function modificaEstilo(element) {
    element.style.color = 'red';
    element.style.border = '2px solid green';
}
