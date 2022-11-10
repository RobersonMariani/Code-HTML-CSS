
        function mudouTamanho(){
            if(window.innerWidth >= 768){
                itens.style.display = 'block'
                

            }else{
                itens.style.display = 'none'
                
            }
            if(sobre.style.display == 'flex'){
                sobre.style.display = 'none'
            }
        }

        function clickMenu(){
            if(itens.style.display == 'block'){
                itens.style.display = 'none'
            }else{
                itens.style.display ='block'                                
            }
        }

        

         function carregarSobre(){
            if(sobre.style.display == ''){
                sobre.style.display = 'none'
            }
        } 

        function clickSobre(){
            
            if(sobre.style.display == 'none'){
                sobre.style.display = 'flex'
            }else{               
                sobre.style.display = 'none'                 

            }
            
        }

       
   