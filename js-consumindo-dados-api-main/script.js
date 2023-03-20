//Com callback hell

/*
const cep = fetch('https://viacep.com.br/ws/23075498/json/')
.then(Element => Element.json())
.then(r => {
    if(r.erro){
        throw Error('Cep inexistente!');
    }else
        console.log(r.logradouro)
        console.log(r.cep)
        console.log(r.bairro)
})
.catch(erro => console.log(erro))
.finally(e => console.log('processado com sucesso!'));

*/


//Com async e await 
const mensagemErro = document.getElementById('erro');
mensagemErro.innerHTML = "";

async function recuperaCep(cep){
    
try{
const cepPuro = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const cepConvert = await cepPuro.json();
    if(cepConvert.erro){
        throw Error('Cep inexistente!');
    }else{
        endereco = document.getElementById('endereco');
        bairro = document.getElementById('bairro');
        cidade = document.getElementById('cidade');
        uf = document.getElementById('estado');

        endereco.value = cepConvert.logradouro;
        bairro.value = cepConvert.bairro;
        cidade.value = cepConvert.localidade 
        uf.value = cepConvert.uf;

        console.log(cepConvert)
        mensagemErro.innerHTML = "";

    }
}
    catch(erro){
        mensagemErro.innerHTML = `<p style="color:red"> Cep não encontrado </p>` ;
        console.log(erro);
    }
}

const cep = document.getElementById('cep');
cep.addEventListener('focusout', ()=> {
    recuperaCep(cep.value);
    

});

