function pesquisarSemana() {

    let section = document.getElementById("campoSemana");

    let respostaPesquisa = document.getElementById("resposta-pesquisa").value.toLowerCase();

    if (!respostaPesquisa) {
        section.innerHTML = `<p class="respostas">Nada foi encontrado, pois nada foi digitado.</p>`

        return;
    }

    let resultados = "";


    for (let dado of semanas) {
        semana = dado.semanas;
        descricao = dado.descricao;
        dica = dado.dica;

        if (semana.includes(respostaPesquisa) || descricao.includes(respostaPesquisa) || dica.includes(respostaPesquisa)) {

            resultados += `
        <div class="respostas">
            <p>${dado.semanas}</p>
            <p>${dado.descricao}</p>
            <p>${dado.dica}</p>
        </div>
        `;
        }
    }

    if (!resultados) {
        section.innerHTML = `<p class="respostas">Nada foi encontrado em nosso banco de dados.</p>`

        return;
    }

    section.innerHTML = resultados;
}


// pagina remédios
function pesquisarRemedio() {

    let section = document.getElementById("campoRemedio");

    let respostaPesquisa = document.getElementById("resposta-pesquisa").value;

    if (!respostaPesquisa) {
        section.innerHTML = `<p class="respostas">Nada foi encontrado, pois nada foi digitado.</p>`

        return;
    }

    let resultados = "";


    for (let dado of remedios) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        medicamentos = dado.medicamentos.toLowerCase();
        lembrete = dado.lembrete.toLowerCase();

        if (titulo.includes(respostaPesquisa) || descricao.includes(respostaPesquisa) || medicamentos.includes(respostaPesquisa) || lembrete.includes(respostaPesquisa)) {

            resultados += `
        <div class="respostas">
            <p>${dado.titulo}</p>
            <p>${dado.descricao}</p>
            <p>${dado.medicamentos}</p>
            <p>${dado.lembrete}</p>
        </div>
        `;
        }
        if (!resultados) {
            section.innerHTML = `<p class="respostas">Nada foi encontrado em nosso banco de dados.</p>`
    
            return;
        }
    }

    section.innerHTML = resultados;
}

function pesquisarEnxoval() {
    const seção = document.getElementById("campoEnxoval");
    const respostaPesquisa = document.getElementById("resposta-pesquisa").value.toLowerCase();

    if (!respostaPesquisa) {
        seção.innerHTML = `<p class="respostas">Nada foi encontrado, pois nada foi digitado.</p>`;
        return;
    }

    let resultados = "";

    for (let item of enxoval) {
        let { titulo, quantidade } = item; 
        let quantidadeString = quantidade.toString().toLowerCase();

        if (titulo.toLowerCase().includes(respostaPesquisa) || quantidadeString.includes(respostaPesquisa)) {
            resultados += `
            <div class="respostasEnxoval">
            <p>${titulo}</p>
            <p>${quantidade}</p>
            </div>
        `;
        }     
    }

    seção.innerHTML = resultados;
}