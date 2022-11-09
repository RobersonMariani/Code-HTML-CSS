
        function mudouTamanho(){
            if(window.innerWidth >= 768){
                itens.style.display = 'block'
            }else{
                itens.style.display = 'none'
            }
        }

        function clickMenu(){
            if(itens.style.display == 'block'){
                itens.style.display = 'none'
            }else{
                itens.style.display ='block'                                
            }
        }

        function clickSobre(){
            
            if(sobre.style.display == 'flex'){
                sobre.style.display = 'none'
            }else{               
                sobre.style.display = 'flex'                                                              
            }
        }
   