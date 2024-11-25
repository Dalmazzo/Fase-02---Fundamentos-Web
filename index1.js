let index = 0;

function moverCarrossel(direcao) {
    const items = document.querySelector('.carrossel-items');
    const totalItems = items.children.length;

    index += direcao;
    if (index < 0) {
        index = totalItems - 1;
    } else if (index >= totalItems) {
        index = 0;
    }

    const itemWidth = items.children[0].getBoundingClientRect().width;
    items.style.transform = `translateX(${-index * itemWidth}px)`;
}
