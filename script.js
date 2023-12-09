const linkHome = document.querySelector('a[href="#sessao_1"]');
const linkClasse = document.querySelector('a[href="#sessao_2"]');
const linkMaterial = document.querySelector('a[href="#sessao_3"]');

function GotoSection(sectionID) {
    var sessao = document.getElementById(sectionID);
    sessao.scrollIntoView({ behavior: 'smooth' });
}

linkHome.addEventListener('click', function() {
    GotoSection('sessao_1');
});

linkClasse.addEventListener('click', function() {
    GotoSection('sessao_2');
});

linkMaterial.addEventListener('click', function() {
    GotoSection('sessao_3');
});

// ----------------------------------------------------------------

const barIcon = document.getElementById('bar-icon');
const barMenu = document.getElementById('menu');

let Active = true;

function changeIconBar() {
    barIcon.classList.remove('fa-bars');
    barIcon.classList.add('fa-xmark');
    barMenu.style.right = '0%';
    Active = true;
}

function changeIconXmark() {
    barIcon.classList.remove('fa-xmark');
    barIcon.classList.add('fa-bars');
    barMenu.style.right = '-100%';
    Active = false;
}

function BarValidation() {
    if (Active === false) {
        changeIconBar();
    } else {
        changeIconXmark();
    }
}

barIcon.addEventListener('click', BarValidation);
