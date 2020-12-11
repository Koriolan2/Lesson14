'use strict'

function DomElement() {
    this.selector = '';
    this.height = '200px';
    this.width = '960px';
    this.bg = '#f50000';
    this.fontSize = '18px';
}

DomElement.prototype.createBlock = function (selector, text) {
    let str = selector.trim().charAt(0), 
        rez = '';
    if(str == '.') {
        rez = document.createElement('div');
        rez.classList.add(selector.trim().slice(1));
    } else if (str == '#') {
        rez = document.createElement('p');
        rez.id = selector.trim().slice(1);
    }
    rez.innerHTML = text;

    rez.style.cssText='height:'+ this.height + ';' +
                      ' width:' + this.width + ';' +
                      'background-color:' + this.bg + ';' +
                      'font-size:' + this.fontSize + ';';

    document.body.append(rez);
}

let block = new DomElement ();

console.log(block);

block.createBlock('.cl', 'Просто текст');
