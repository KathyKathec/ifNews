//Thu Jun 01 2023 15:03:08 GMT-0300 formato date()
//usar a data 30/11/2023
// data limite no formato date: Thu Nov 30 2023 15:03:08 GMT-0300

const getTiempoRestante  = dataLimite=>{
    let hoje = new Date(),
        tempoRestante = (new Date(dataLimite)- hoje +1000)/1000,
        horasRestantes = ('0'+Math.floor(tempoRestante/3600 % 24)).slice(-2), //o zero e o slide e para que se for menor a 10 a hora fique com um zero a frente
        diasRestantes = Math.floor(tempoRestante/(3600*24));

    return{
        tempoRestante,
        horasRestantes,
        diasRestantes
    }
};


console.log(getTiempoRestante('Thu Nov 30 2023 15:03:08 GMT-0300'));

const contador = (dataLimite, elemento, mensajemFinal) =>{

    const el= document.getElementById(elemento);

    const tempoAtualiza = setInterval(() =>{
        let tiempo=getTiempoRestante(dataLimite);
        let texto = tiempo.diasRestantes +"dias"+ tiempo.horasRestantes+" horas";
        el.innerHTML = texto;


        if(tiempo.tempoRestante<=1){
            clearInterval(tempoAtualiza);
            el.innerHTML = mensajemFinal;
        }


    },3600) //ele vai ser atualizado de hora em hora

};

contador('Thu Nov 30 2023 15:03:08 GMT-0300',"relogio",'Acabou o ultimo periodo de processo seletivo, em breve sera publicado outro');

function Inscrito(){
    alert('Inscrição realizada com sucesso')
    const email=document.querySelector('#input');
    email.value='';

}

