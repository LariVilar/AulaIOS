document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        const target = document.querySelector(link.getAttribute('href')); // Seleciona a âncora clicada
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, 
                behavior: 'smooth' 
            });
        }
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault(); 
    alert('Sua mensagem foi enviada com sucesso! Obrigado por entrar em contato.');
    form.reset(); 
});


const title = document.querySelector('.home-content h1 span');
let words = ['Desenvolvedora Web', 'Apaixonada por Tecnologia', 'Entusiasta de Aprendizado'];
let index = 0;

function changeText() {
    title.textContent = words[index]; 
    index = (index + 1) % words.length; 
}

setInterval(changeText, 3000); 