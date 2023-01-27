let matriculas = [];

function visitar(cpf) {
  for (let i = 0; i < matriculas.length; i++){
    if (matriculas[i].cpf == cpf) {
      matriculas[i].pontos -= 50;
      console.log("50 pontos removidos, pontos restantes: " + matriculas[i].pontos);
    }
  }
}
function remover(cpf) {
  for (let i = 0; i < matriculas.length; i++) {
    if (matriculas[i].cpf == cpf) {
      matriculas.splice(i, 1);
      console.log("Matrícula removida com sucesso!");
      return;
    }
  }
  console.log("CPF não encontrado");
}
function verificar() {
  let cpf = prompt("Informe o CPF da pessoa matriculada que deseja verificar");
  let matricula;
  for (let i = 0; i < matriculas.length; i++) {
    if (matriculas[i].cpf == cpf) {
      matricula = matriculas[i];
      break;
    }
  }
  if (!matricula) {
    console.log("CPF não encontrado");
    return;
  }
  let altura = prompt("Informe sua altura em metros");
  let imc = matricula.peso / (altura * altura);
  console.log("IMC:", imc.toFixed(2));
  if(matricula.idade<=18)
  {
    if (imc < 18.5) {
      console.log("Abaixo do peso recomendado para a idade");
    } else if (imc <= 24.9) {
      console.log("Peso dentro dos limites recomendados para a idade");
    } else {
      console.log("Acima do peso recomendado para a idade");
    }
  }
  else if(matricula.idade>18&&matricula.idade<=60)
  {
    if (imc < 20) {
      console.log("Abaixo do peso recomendado para a idade");
    } else if (imc <= 25) {
      console.log("Peso dentro dos limites recomendados para a idade");
    } else {
      console.log("Acima do peso recomendado para a idade");
    }
  }
  else if(matricula.idade>60)
  {
    if (imc < 22) {
      console.log("Abaixo do peso recomendado para a idade");
    } else if (imc <= 27) {
      console.log("Peso dentro dos limites recomendados para a idade");
    } else {
      console.log("Acima do peso recomendado para a idade");
    }
  }
}
function procurar(valor){
      let x=true;
    for (let y = 0; y < matriculas.length; y++){
      if(matriculas[y].cpf==valor){
         x=false;
        console.log("CPF ja registrado");
        console.log("CPF:",matriculas[y].cpf);
        console.log("Nome",matriculas[y].nome);
        console.log("Idade",matriculas[y].idade);
        console.log("Peso:",matriculas[y].peso);
        console.log("Pontos",matriculas[y].pontos);
      }
    }if(x==true){console.log("CPF nao registrado");}
}
function regis(nome, idade, peso, cpf,pontos) {
  let x = true;
  for (let i = 0; i < matriculas.length; i++) {
    if (matriculas[i].cpf == cpf) {
      x = false;
      console.log("matricula ja registrada");
    }
  }
    if(idade<14){console.log("Idade minima de 14 anos para se matricular")
      return 0;}
  let matricula = {
    nome: nome,
    idade: idade,
    peso: peso,
    cpf: cpf,
    pontos:pontos,
  }
  matriculas.push(matricula);
  if (x = true) {
    console.log("Matricula realizada com sucesso");
  }
}
let opc;
while(opc!==6){
 console.log("1-para fazer matricula");
 console.log("2-Para procurar matriculado pelo CPF"); 
 console.log("3-Para saber se seu peso esta bom para sua idade e seu IMC");
 console.log("4-Para remover uma matricula");
 console.log("5-Para visitar a academia");
 opc = prompt("faça sua escolha");
if (opc == 1) {
  let pontos=1000;
  let nome = prompt("Informe seu nome");
  let idade = prompt("Informe sua idade");
  let peso = prompt("Informe seu peso em KG");
  let cpf = prompt("Informe seu cpf");
  regis(nome,idade,peso,cpf,pontos);
}else if(opc==2){
  let valor=prompt("Digite o CPF do matriculado");
   procurar(valor);
}else if(opc==3){
  verificar();
}else if(opc==4){
  let cpf=prompt("Digite o cpf da matricula que deseja remover");
  remover(cpf);
}else if(opc==5){
   let cpf=prompt("Digite o cpf para visitar a academia");
   visitar(cpf);
}
}



