var ok = false;
function changeMenu(a) {
    // clear();
    var x = document.getElementById("group1");
    var y = document.getElementById("mega-menu");
    var i,j;
    for(i = 0; i< x.children.length; i++) {
        // x[i].style.display = 'none';
        // console.log(x.item(i));
        x.children[i].style.borderBottom = 'none';
        x.children[i].style.height = '18px';
        x.children[i].style.color = 'white';
    }
    for(j=0; j < y.children.length; j++) {
        y.children[j].style.display = 'none';
    }
    if(a === 'Расписание'){
        document.getElementById("schedule").style.display = 'block';
        var elem = document.getElementById("navbar__schedule").style;
        elem.borderBottom = '2px solid #FF5656';
        elem.height = '39px';
        elem.color = '#FF5656';
    }
    if(a === 'Скоро'){
        document.getElementById("soon").style.display = 'block';
        var elem = document.getElementById("navbar__soon").style;
        elem.borderBottom = '2px solid #FF5656';
        elem.height = '39px';
        elem.color = '#FF5656';
    }
    if(a === 'Еда и напитки'){
        document.getElementById("foods").style.display = 'block';
        var elem = document.getElementById("navbar__foods").style;
        elem.borderBottom = '2px solid #FF5656';
        elem.height = '39px';
        elem.color = '#FF5656';
    }
    if(a === 'Мой Kinopark'){
        document.getElementById("my-kinopark").style.display = 'block';
        var elem = document.getElementById("navbar__my-kinopark").style;
        elem.borderBottom = '2px solid #FF5656';
        elem.height = '39px';
        elem.color = '#FF5656';
    }
}
function openBar() {
    var elem = document.getElementById('mega-menu').style.display;
    if(ok === true)
        ok = false;
    else
        ok = true;
    if(ok){
        document.getElementById('mega-menu').style.display = 'block';
        document.getElementById('mega-menu').children[0].children[0].children[0].innerHTML = 'Расписание';
        document.getElementById('line').style.display = 'none';
        var sched = document.getElementById('schedule');
        var k;
        for(k = 0; k < sched.children.length; k++) {
            // console.log(sched.children[k]);
            sched.children[k].style.cssFloat = 'none';
            sched.children[k].style.borderBottom = '1px solid #4E4E4E';
            sched.children[k].style.maxWidth = '104.3%';
            sched.children[k].style.whiteSpace = 'pre-line';
            sched.children[k].style.marginLeft = '16px';
            sched.children[k].style.marginRight = '16px';
            sched.children[k].style.marginTop = '-15px';
        }
        document.getElementById('exclusive').style.cssFloat = 'none';
        var bar = document.getElementById('bar');
        bar.style.backgroundImage = 'url("times.png")';
        bar.style.width = '30px';
        bar.style.height = '30px';
        bar.style.marginLeft = '65px';
        bar.style.marginTop = '15px';
        var i;
        var elem2 = document.getElementById('navbar');
        console.log(elem2.children.length);
        for(i = 0; i < elem2.children.length; i++){
            if(i > 2) {
                elem2.children[i].style.display = 'block';
            }
            else {
                elem2.children[i].style.display = 'none';
            }
        }
    }
    else {
        document.getElementById('mega-menu').style.display = 'none';
        document.getElementById('mega-menu').children[0].children[0].children[0].innerHTML = 'Фильмы';
        document.getElementById('line').style.display = 'block';
        var j;
        var elem3 = document.getElementById('navbar');
        console.log(elem3.children.length);
        for(j = 0; j < elem3.children.length; j++){
            if(elem3.children[j].id === 'navbar__name-of-cinema' ||
            elem3.children[j].id === 'dropdown' ||
            elem3.children[j].id === 'bar') {
                elem3.children[j].style.display = 'block';
            }
            else {
                elem3.children[j].style.display = 'none';
            }
        }
        document.getElementById('bar').style.backgroundImage = 'url("bars.png")';
        var bar1 = document.getElementById('bar');
        bar1.style.width = '21.88px';
        bar1.style.height = '18.15px';
        bar1.style.marginLeft = '12.8%';
    }
}