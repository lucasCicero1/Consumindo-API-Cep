const cep = document.querySelector('#cep')

cep.addEventListener('blur', async () => {

    const search = cep.value.replace('-','')

    try {
        const response = await fetch(`https://viacep.com.br/ws/${search}/json/`)
        const data = await response.json()
        console.log(data)
        showData(data)

    } catch (error) {
        console.log(error)
    }

})


function showData(dados){

    document.querySelector('#logradouro').value = dados.logradouro
    document.querySelector('#bairro').value = dados.bairro
    document.querySelector('#localidade').value = dados.localidade
    document.querySelector('#uf').value = dados.uf

}
