let btn = document.getElementById ('btn')

btn.addEventListener ('click', function(){
    verIdade()

})

function verIdade() {
    let data = new Date()
    let ano = data.getFullYear() //vai pegar com 4 dígitos "2022"
    let Infoano = document.getElementById ('ano').value
    let res = document.getElementById ('res')
    

    //VALIDAÇÃO DE ERRO

    if(Infoano.length == 0 || Infoano > ano){
    
        alert ('[ERRO] Revise os dados e tente novamente')

    } else{
        let fsex = document.getElementsByName ('radsex')

        //VARIÁVEL PARA SOMAR A IDADE

        let idade =  ano - Number(Infoano)

        //VARIÁVEL PARA ADICIONAR IMAGENS DINAMICAMENTE

        let img = document.createElement ('img')
        img.setAttribute ('id', 'foto') // é a mesmo coisa de colocar um id='foto' em uma div no HTML

        //CONDIÇÃO PARA VALIDAR O SEXO

        let genero = ''

        if (fsex[0].checked){
            genero ='Homem'
            if( idade >=0 && idade <=5){
                img.setAttribute ('src', './Imagens/criancaM.png')

            } else if (idade <=15) {
                img.setAttribute ('src', './Imagens/jovemM.png')

            } else if (idade <= 25){
                img.setAttribute ('src', './Imagens/adolescenteM.png')

            } else if (idade <= 45){
                img.setAttribute ('src', './Imagens/homemM.png')

            } else if (idade <= 65){
                img.setAttribute ('src', './Imagens/homemM+.png')

            } else if (idade > 65){
                img.setAttribute ('src', './Imagens/idosoM.png')

            }
        } else{
           genero = 'Mulher'
           if( idade >=0 && idade <=5){
            img.setAttribute ('src', './Imagens/criancaF.png')

        } else if (idade <=15) {
            img.setAttribute ('src', './Imagens/JovemF.png')

        } else if (idade <= 25){
            img.setAttribute ('src', './Imagens/adolescenteF.png')

        } else if (idade <= 45){
            img.setAttribute ('src', './Imagens/mulherF.png')

        } else if (idade <= 65){
            img.setAttribute ('src', './Imagens/mulherF+.png')

        } else if (idade > 65){
            img.setAttribute ('src', './Imagens/idosoF.png')
        }
    } 
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild (img)
    } 

}

