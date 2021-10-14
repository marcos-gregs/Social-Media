const toggle = document.querySelector('#toggle input')
function clickhandler(){
    if (this.checked){ 
    document.body.classList.remove('modeDark');
    document.body.classList.add('modeLight');
    
           
    }else{
        document.body.classList.remove('modeLight');
        document.body.classList.add('modeDark');
       

    }
    return

}
toggle.addEventListener('click',clickhandler);