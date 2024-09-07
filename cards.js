// Adiciona um listener que aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Verifica se a variável global 'frutasbr' está definida
    if (typeof frutasbr !== 'undefined') {
        // Seleciona o container onde os cards serão adicionados
        const container = document.getElementById('card-container');
        let currentCard = null; // Variável para armazenar o card atualmente aberto

        // Itera sobre o array 'frutasbr' para criar um card para cada fruta
        frutasbr.forEach(fruta => {
            // Cria o elemento que envolve o card
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'card-wrapper';

            // Cria o elemento principal do card
            const card = document.createElement('div');
            card.className = 'card mb-4'; // Adiciona uma margem inferior para espaçamento

            // Cria o lado da frente do card
            const cardFront = document.createElement('div');
            cardFront.className = 'card-front';

            // Adiciona a imagem ao lado da frente do card
            const img = document.createElement('img');
            img.className = 'card-img-top'; // Classe para estilo da imagem
            img.src = fruta.imagem; // Define a URL da imagem
            img.alt = `Imagem de ${fruta.fruta}`; // Texto alternativo para acessibilidade
            cardFront.appendChild(img); // Adiciona a imagem ao lado da frente do card

            // Cria o corpo do card, onde ficará o título e o botão
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            
            // Adiciona o título da fruta
            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = fruta.fruta; // Define o nome da fruta
            cardBody.appendChild(title); // Adiciona o título ao corpo do card

            // Cria o botão "Saiba mais" que permite virar o card
            const button = document.createElement('button');
            button.className = 'btn btn-primary';
            button.textContent = 'Saiba mais';
            // Adiciona um evento de clique ao botão
            button.addEventListener('click', (event) => {
                event.stopPropagation(); // Impede que o clique propague para outros elementos
                if (currentCard && currentCard !== card) {
                    currentCard.classList.remove('flipped'); // Remove a classe 'flipped' do card atualmente aberto
                }
                card.classList.toggle('flipped'); // Alterna a classe 'flipped' do card clicado
                currentCard = card.classList.contains('flipped') ? card : null; // Atualiza o card atual
            });
            cardBody.appendChild(button); // Adiciona o botão ao corpo do card
            cardFront.appendChild(cardBody); // Adiciona o corpo ao lado da frente do card

            // Cria o lado de trás do card
            const cardBack = document.createElement('div');
            cardBack.className = 'card-back';

            // Adiciona a descrição da fruta ao lado de trás do card
            const description = document.createElement('p');
            description.className = 'card-text';
            description.textContent = fruta.descricao; // Define a descrição da fruta
            cardBack.appendChild(description); // Adiciona a descrição ao lado de trás do card

            // Cria o botão "Veja mais" para mostrar detalhes
            const backButton = document.createElement('button');
            backButton.className = 'btn btn-info';
            backButton.textContent = 'Veja mais';
            // Adiciona um evento de clique ao botão
            backButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Impede que o clique propague para outros elementos
                mostrarDetalhes(fruta.fruta); // Chama a função para mostrar detalhes da fruta
            });
            cardBack.appendChild(backButton); // Adiciona o botão ao lado de trás do card

            // Adiciona os lados do card ao card
            card.appendChild(cardFront);
            card.appendChild(cardBack);

            // Adiciona o card ao wrapper
            cardWrapper.appendChild(card);

            // Adiciona o wrapper ao container de cards
            container.appendChild(cardWrapper);

            // Permite virar o card ao clicar em qualquer lugar do wrapper
            cardWrapper.addEventListener('click', () => {
                if (currentCard && currentCard !== card) {
                    currentCard.classList.remove('flipped'); // Remove a classe 'flipped' do card atualmente aberto
                }
                card.classList.toggle('flipped'); // Alterna a classe 'flipped' do card clicado
                currentCard = card.classList.contains('flipped') ? card : null; // Atualiza o card atual
            });
        });
    } else {
        // Mensagem de erro se a variável global 'frutasbr' não estiver definida
        console.error('A variável global frutasbr não está definida.');
    }
});
