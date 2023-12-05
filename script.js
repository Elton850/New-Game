document.addEventListener("DOMContentLoaded", function () {
    // Obtém os links do menu de navegação
    var homeLink = document.querySelector('a[href="#sessao_1"]');
    var classesLink = document.querySelector('a[href="#sessao_2"]');
    var materiaisLink = document.querySelector('a[href="#sessao_3"]');

    // Adiciona um evento de clique aos links
    homeLink.addEventListener("click", function () {
        scrollToSection("sessao_1");
    });

    classesLink.addEventListener("click", function () {
        scrollToSection("sessao_2");
    });

    materiaisLink.addEventListener("click", function () {
        scrollToSection("sessao_3");
    });

    // Função para rolar para uma determinada seção
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});