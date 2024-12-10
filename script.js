$(document).ready(function () {
    var progressBar = $('.progress-bar span'); // Seletor para a barra de progresso

    // Inicializa o carrossel com o autoplay
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000, // Tempo entre cada slide
        pauseOnHover: false, // Não pausa ao passar o mouse
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            // Resetar a barra de progresso antes de cada troca
            progressBar.css('width', '0');
        },
        afterChange: function (event, slick, currentSlide) {
            // Inicia a animação de progresso após a mudança do slide
            progressBar.css('transition', 'none');
            setTimeout(function () {
                progressBar.css('transition', 'width 3s linear'); // Definir o tempo de transição
                progressBar.css('width', '100%');
            }, 100); // Aguarda um pouco para garantir que a animação funcione corretamente
        }
    });
});


        function createStar() {
            const star = document.createElement('div');
            star.classList.add('star');

            // Posição e tamanho aleatórios para as estrelas
            const size = Math.random() * 3 + 2;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 5 + 2}s`;

            document.querySelector('.celestial-background').appendChild(star);
        }

        // Cria várias estrelas no carregamento
        for (let i = 0; i < 150; i++) {
            createStar();
        }

        // Adiciona a aurora
        const aurora = document.createElement('div');
        aurora.classList.add('aurora');
        document.querySelector('.celestial-background').appendChild(aurora);

        // Função para exibir o botão ao rolar para baixo
        window.onscroll = function () {
            const scrollTopBtn = document.getElementById("scrollTopBtn");
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        // Função para rolar suavemente até o topo
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
