const elementos ={};
function buscaElementos(){

    const titulo = document.querySelector('.title-1');
    titulo ? elementos["Nome"] = titulo.innerText : elementos['nome'] = 'não existe' ;

    document.querySelectorAll('#field_categorias,#field_brands,#field_generic_name, #field_quantity, #field_packaging').forEach(elemento =>{
        const key = elemento.querySelector('.field');
        const texto = elemento.querySelector('.field_value');
    
        if(key && texto){
            const addKey = key.innerText;
            const addTexto = texto.innerText;
    
            elementos[addKey] =addTexto;
        }else {
    
            const addKey = 'elemento nao existe';
            elementos[addKey] = addKey
        }
        
    });
    const atributos = document.querySelectorAll('.attr_text');

    atributos.forEach(atributo=>{
        if(atributo){
            const titulo = atributo.querySelector('.attr_title');
            const texto = atributo.querySelector('span')
            elementos [titulo.innerText] = texto.innerText;
        } else {
            const addKey = 'elemento nao existe';
            elementos[addKey] = addKey
        }
    })
    
    console.log(elementos)

}
buscaElementos();
