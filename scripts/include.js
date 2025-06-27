function incluirHTML(seletor, arquivo) {
    fetch(arquivo)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar o arquivo: ' + arquivo);
            return response.text();
        })
        .then(data => {
            document.querySelector(seletor).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Exemplo de uso
document.addEventListener('DOMContentLoaded', () => {
    incluirHTML('head', 'partials/head.html');
    incluirHTML('header', 'partials/header.html');
});
