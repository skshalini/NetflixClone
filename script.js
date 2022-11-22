const tabitems = document.querySelectorAll('.tab-item');
const tabcontent = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();//remove border
    removeShow();//remove show
    this.classList.add('tab-border');

    const tabcontent = document.querySelector(`#${this.id}-content`);
    //add show
    tabcontent.classList.add('show');
}
function removeBorder() {
    tabitems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabcontent.forEach(item => item.classList.remove('show'));
}

tabitems.forEach(item => item.addEventListener('click', selectItem));
