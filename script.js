let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function MenuAB() {
    if (menu.classList.contains("menu-fechado")) {
        menu.classList.remove("menu-fechado")
        menu.style.display = "flex"

        iconeX.style.display = "inline"
        iconeBarras.style.display = "none"
    } else {
        menu.classList.add("menu-fechado")
        menu.style.display = "none"

        iconeX.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    menu.style.display = "flex"

    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

const solicitarServico = (event) => {
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value 
    let valorDescricao = document.getElementById("campo-descricao").value 

    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then(resposta => {
        console.log(resposta)

        document.querySelector("#contato form").reset()
        alert("Solicitação cadastrada com sucesso!")
    })
    .catch(erro => {
        console.error(erro)
        alert("Ocorreu um erro na requisição")
    })

    event.preventDefault()
}
