const panels = document.querySelectorAll('.panel');
function classChanger(){
    this.classList.toggle('open');
}
panels.forEach(panel => panel.addEventListener('click', classChanger));