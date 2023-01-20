const panels = document.querySelectorAll('panel');
function classChanger{
    this.classlist.toggle('open');
}
panels.forEach(panels => panels.addeventlistener('clisk', classChanger));
