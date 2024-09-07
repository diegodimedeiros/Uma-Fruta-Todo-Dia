// Função de pesquisa
function pesquisar(searchTerm = '') {
    searchTerm = searchTerm.toLowerCase(); // Converte o termo de pesquisa para minúsculas

    // Se a busca for por uma fruta específica, mostrar apenas o resultado específico
    if (searchTerm) {
        mostrarDetalhes(searchTerm); // Mostra detalhes da fruta específica
        return; // Sai da função após mostrar os detalhes
    }

    // Pesquisa geral
    const term = document.getElementById('search-input').value.toLowerCase(); // Obtém o termo de pesquisa do input e converte para minúsculas
    // Filtra a lista de frutas com base no termo de pesquisa
    const resultados = frutasbr.filter(fruta => {
        return fruta.fruta.toLowerCase().includes(term) || // Verifica se o nome da fruta contém o termo
            fruta.descricao.toLowerCase().includes(term); // Verifica se a descrição da fruta contém o termo
    });

    // Oculta os cards
    document.getElementById('card-container').style.display = 'none'; // Esconde a seção dos cards para mostrar os resultados da pesquisa

    // Mostra os resultados da pesquisa
    mostrarResultados(resultados); // Chama a função para exibir os resultados da pesquisa
}

// Função para mostrar os resultados da pesquisa
function mostrarResultados(resultados) {
    const resultadosContainer = document.getElementById('resultados-pesquisa'); // Obtém o container para resultados
    resultadosContainer.innerHTML = ''; // Limpa resultados anteriores

    // Se não houver resultados
    if (resultados.length === 0) {
        resultadosContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>'; // Exibe mensagem de nenhum resultado encontrado
        // Adiciona o botão de voltar em caso de resultado vazio
        buttonBack(resultadosContainer);
        return; // Sai da função após mostrar a mensagem e o botão de voltar
    }

    buttonBack(resultadosContainer); // Adiciona o botão de voltar

    resultados.forEach(fruta => {
        // Cria um container para cada resultado da pesquisa
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result-item mb-4 p-3 border border-secondary rounded shadow'; // Adiciona classes para estilo

        // Adiciona a imagem da fruta
        const img = document.createElement('img');
        img.src = fruta.imagem; // Define o URL da imagem
        img.alt = `Imagem de ${fruta.fruta}`; // Texto alternativo para a imagem
        img.className = 'img-fluid mb-3'; // Adiciona classes para estilo
        img.style.maxWidth = '300px'; // Define o tamanho máximo da imagem
        img.style.height = 'auto'; // Mantém a proporção da imagem
        img.style.display = 'block'; // Garante que a imagem se comporte como um bloco
        img.style.margin = '0 auto'; // Centraliza a imagem horizontalmente
        resultDiv.appendChild(img); // Adiciona a imagem ao container de resultado

        // Adiciona o título da fruta
        const title = document.createElement('h3');
        title.textContent = fruta.fruta; // Define o texto do título
        resultDiv.appendChild(title); // Adiciona o título ao container de resultado

        // Adiciona a descrição da fruta
        const description = document.createElement('h5');
        //description.style.textIndent = '20px'; // Comentado, pode ser usado para indentação
        description.textContent = fruta.descricao; // Define o texto da descrição
        resultDiv.appendChild(description); // Adiciona a descrição ao container de resultado

        // Adiciona o valor nutritivo da fruta
        const valorNutritivo = document.createElement('div');
        valorNutritivo.innerHTML = `
            <strong>Valor Nutritivo para cada 100gr:</strong>            
            <ul class="list-unstyled mb-2">
                <li>Calorias: ${fruta.valorNutritivo.calorias} kcal</li>
                <li>Carboidratos: ${fruta.valorNutritivo.carboidratos} g</li>
                <li>Proteínas: ${fruta.valorNutritivo.proteinas} g</li>
                <li>Gorduras: ${fruta.valorNutritivo.gorduras} g</li>                
            </ul>
        `; // Adiciona informações nutricionais da fruta
        resultDiv.appendChild(valorNutritivo); // Adiciona o valor nutritivo ao container de resultado

        // Adiciona as vitaminas da fruta
        const vitaminas = document.createElement('p');
        vitaminas.innerHTML = `
            <strong>Vitaminas:</strong> ${fruta.vitaminas.join(', ')}
        `; // Adiciona informações sobre vitaminas
        vitaminas.className = 'mb-2'; // Adiciona classe para estilo
        resultDiv.appendChild(vitaminas); // Adiciona as vitaminas ao container de resultado

        // Adiciona a região onde a fruta é encontrada
        const regiao = document.createElement('p');
        regiao.innerHTML = `<strong>Região:</strong> ${fruta.regiao}`; // Adiciona informações sobre a região
        regiao.className = 'mb-2'; // Adiciona classe para estilo
        resultDiv.appendChild(regiao); // Adiciona a região ao container de resultado

        // Adiciona um link para mais informações sobre a fruta
        const link = document.createElement('a');
        link.href = fruta.link; // Define o URL do link
        link.textContent = 'Mais informações'; // Texto do link
        link.target = '_blank'; // Abre o link em uma nova aba
        link.className = 'btn btn-info mt-2'; // Adiciona classes para estilo
        resultDiv.appendChild(link); // Adiciona o link ao container de resultado

        // Adiciona o container de resultado ao container principal de resultados
        resultadosContainer.appendChild(resultDiv);
    });
    // Adiciona o botão para voltar ao topo da página
    resultadosContainer.appendChild(buttonToTop());
}

// Função para mostrar os detalhes da fruta específica
function mostrarDetalhes(frutaNome) {
    const resultado = frutasbr.find(fruta => fruta.fruta.toLowerCase() === frutaNome.toLowerCase()); // Encontra a fruta específica
    // Adiciona o botão de voltar no final    

    if (resultado) {
        // Oculta os cards
        document.getElementById('card-container').style.display = 'none'; // Esconde a seção dos cards

        // Mostra o resultado da fruta específica
        mostrarResultados([resultado]); // Chama a função para exibir os detalhes da fruta específica
    } else {
        // Se a fruta não for encontrada, pode mostrar uma mensagem de erro
        const resultadosContainer = document.getElementById('resultados-pesquisa');
        resultadosContainer.innerHTML = '<p>Fruta não encontrada.</p>'; // Exibe mensagem de fruta não encontrada
        // Adiciona o botão de voltar
        buttonBack(resultadosContainer); // Adiciona o botão de voltar
    }
}

// Função para voltar à tela dos cards
function voltar() {
    // Mostra os cards novamente
    document.getElementById('card-container').style.display = 'flex'; // Exibe a seção dos cards novamente

    // Limpa a seção de resultados
    document.getElementById('resultados-pesquisa').innerHTML = ''; // Limpa os resultados da pesquisa
}

// Função reutilizável para adicionar o botão de voltar
function buttonBack(container) {
    const backButton = document.createElement('button');
    backButton.className = 'btn btn-primary'; // Define a classe do botão
    backButton.textContent = 'Voltar'; // Texto do botão
    backButton.onclick = voltar; // Define a função a ser chamada ao clicar no botão
    backButton.style.marginBottom = '20px'; // Define a margem inferior do botão
    container.appendChild(backButton); // Adiciona o botão ao container
}

// Função para criar um botão "Voltar ao Topo" que rola a página suavemente para o topo
function buttonToTop() {
    const backToTop = document.createElement('button');
    backToTop.id = 'voltar-ao-topo'; // Define o ID do botão
    backToTop.className = 'btn btn-secondary'; // Define a classe do botão
    backToTop.textContent = 'Voltar ao Topo'; // Texto do botão
    backToTop.style.marginBottom = '10px'; // Define a margem inferior do botão
    backToTop.onclick = function () {
        window.scrollTo({
            top: 0, // Rola a página para o topo
            behavior: 'smooth' // Rolagem suave
        });
    };
    return backToTop; // Retorna o botão
}
