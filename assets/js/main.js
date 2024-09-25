const cards = document.querySelectorAll('.card');
const container = document.getElementById('cardContainer');

let draggedCard = null;

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);
});

container.addEventListener('dragover', dragOver);
container.addEventListener('drop', drop);

function dragStart(e) {
    draggedCard = this;
    setTimeout(() => {
        this.classList.add('dragging');
    }, 0);
}

function dragEnd() {
    this.classList.remove('dragging');
    draggedCard = null;
}

function dragOver(e) {
    e.preventDefault();
    const target = e.target.closest('.card');

    if (target && target !== draggedCard) {
        const cardsArray = Array.from(container.children);
        const draggedIndex = cardsArray.indexOf(draggedCard);
        const targetIndex = cardsArray.indexOf(target);

        if (draggedIndex < targetIndex) {
            container.insertBefore(draggedCard, target.nextSibling);
            container.insertBefore(target, cardsArray[draggedIndex + 1]);
        } else {
            container.insertBefore(target, draggedCard);
            container.insertBefore(draggedCard, target);
        }
    }
}

function drop(e) {
    e.preventDefault();
}
