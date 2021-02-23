"use strict"

// main Function
function Clr() {
    this.mcpicker= document.querySelector('label [type="color"]')
    this.btn     = document.querySelector('[type="button"]')
    this.txts    = document.querySelector('textarea')
    this.cpicker = document.querySelector('label span')

    // Clicked in submit
    this.btn.addEventListener('click', () => {
        this.StorIt(this.mcpicker.value,this.txts.value);
    })
    // changing color
    this.mcpicker.addEventListener('change', () => {
        this.pickerChng(this.mcpicker,this.cpicker);
    })
}

// Color Choose
Clr.prototype.pickerChng = function(inp,clr) {
    this.inp = inp.value;
    clr.dataset['bac'] = inp.value;
    this.cpicker.style.background = clr.dataset['bac'] 
}

// Storing in localstorage
Clr.prototype.StorIt = function(a,b) {
    this.fstr = [a,b];
    localStorage.setItem('fstrall',JSON.stringify(this.fstr))
} 

new Clr()