
    // !  for mobile menu close
    document.querySelector('.app').addEventListener('click',(e)=>{
        if(e.target.tagName==='A'){
            document.querySelector('.header-menu').classList.remove('open');
            document.querySelector('.mobile-menu').classList.remove('mobile');
            document.querySelector('.app').classList.remove('fixed');
        }

    })
