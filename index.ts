 // Write TypeScript code!
 // const appDiv: HTMLElement = document.getElementById('app');
 //appDiv.innerHTML = `<h2> Curso DIO TypeScript </h2>`;


 //Trabalhando com input

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event)=>{
  const vdi = event.currentTarget as HTMLInputElement;
  console.log(vdi);
})