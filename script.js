// TYPEOUT ON LOAD

function typeOut() {
    const element = document.getElementById('main-title-text');
    const fullText = element.textContent;

    if (element.querySelector('span')) return;

    const wrappedHTML = fullText
        .split('')
        .map(char => `<span style="opacity: 0;">${char}</span>`)
        .join('');

    element.innerHTML = wrappedHTML;

    const spans = element.querySelectorAll('span');

    spans.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = 1;
        }, index * 100);
    });
}

// SHOW MAIN MENU

function showMenu(menu){
   if (window.innerWidth > 768){
    document.getElementById(menu).style.display = 'flex';
   }
   
}

function closeMenu(menu){
    document.getElementById(menu).style.display = 'none';
}

function closeMenus4SmallScreens(){
    if (window.innerWidth < 768){
      closeMenu('menu');
      closeMenu('about');
      closeMenu('work');
      closeMenu('contact');
    }
}


// DARK MODE

function darkMode(){
    document.documentElement.style.setProperty('--whitesmoke','rgba(0, 0, 0, 0.9)');
    document.documentElement.style.setProperty('--smokeblack',' #F5F5F5');
    document.documentElement.style.setProperty('--halfwhite','rgba(0, 0, 0, 0.5)');
    document.documentElement.style.setProperty('--halfblack',' rgba(255, 255, 255, 0.5)');

    document.getElementById('black-star-1').classList.add('invert');
    document.getElementById('black-star-2').classList.add('invert');
    document.getElementById('spiky-circle').classList.add('invert');

    let chains = document.getElementsByClassName('chains');
    for (let i = 0; i < chains.length; i++) {
    chains[i].classList.add('invert');
    }
   
}


//  LIGHT MODE

function lightMode(){
    document.documentElement.style.setProperty('--whitesmoke', ' #F5F5F5');
    document.documentElement.style.setProperty('--smokeblack','rgba(0, 0, 0, 0.9)');
    document.documentElement.style.setProperty('--halfwhite',' rgba(255, 255, 255, 0.5)');
    document.documentElement.style.setProperty('--halfblack','rgba(0, 0, 0, 0.5)');

    document.getElementById('black-star-1').classList.remove('invert');
    document.getElementById('black-star-2').classList.remove('invert');
    document.getElementById('spiky-circle').classList.remove('invert');

    let chains = document.getElementsByClassName('chains');
    for (let i = 0; i < chains.length; i++) {
    chains[i].classList.remove('invert');
    }
}


// CLICK AND DRAG

document.addEventListener("DOMContentLoaded", function() {
  dragElement(document.getElementById("menu"));
});

document.addEventListener("DOMContentLoaded", function() {
  dragElement(document.getElementById("about"));
});

document.addEventListener("DOMContentLoaded", function() {
  dragElement(document.getElementById("work"));
});

document.addEventListener("DOMContentLoaded", function() {
  dragElement(document.getElementById("contact"));
});

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





