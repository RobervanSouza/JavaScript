

const enviarEmail = (pessoaAprovada) => {
    
const enviar1 = `${pessoaAprovada.email}: Parabens ${pessoaAprovada.nome}`;
const mensagem = `${enviar1} sua nota foi ${pessoaAprovada.nota}`;
 //console.log(mensagem);
} 

const listaAlunos= [
    {nome: 'cssdfdsf', email: "csdfsfsdfsd", nota: 22},
    {nome: 'csf', email: "csdfsfsdfsd", nota: 33},
    {nome: 'cdsf', email: "csdfsfsdfsd", nota: 44},
    {nome: 'cssddddfdsf', email: "csdfsfsdfsd", nota: 55},
    {nome: 'cssdsdfsffdsf', email: "csdfsfsdfsd", nota: 66}
];
const verifica = listaAlunos.filter((alunos) => alunos.nota >= 35)
const teste= listaAlunos.filter((alunos) => alunos.nota<42)
   

verifica.forEach((aluno) => enviarEmail(aluno))


const reduce =verifica.reduce((teste, test) => (teste += test),0)
console.log(reduce,"sdsafas")