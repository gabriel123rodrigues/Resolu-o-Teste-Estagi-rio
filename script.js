
function buscaElementos(){
    const elementos ={};
    const titulo = document.querySelector('.title-1');
    elementos["Nome"] = titulo.innerText ;

    document.querySelectorAll('#field_categorias,#field_brands,#field_generic_name, #field_quantity, #field_packaging').forEach(elemento =>{
        const key = elemento.querySelector('.field');
        const texto = elemento.querySelector('.field_value');
    
        if(key && texto){
            const addKey = key.innerText;
            const addTexto = texto.innerText;
    
            elementos[addKey] =addTexto;
        }else {
            
            elementos[addKey] = null;
        }
        
    });

    const atributos = document.querySelectorAll('.attr_text');
    atributos.forEach(atributo=>{
        if(atributo){
            const titulo = atributo.querySelector('.attr_title');
            const texto = atributo.querySelector('span')
            elementos [titulo.innerText] = texto.innerText;
        } else {
            const addKey = null;
            elementos[addKey] = addKey
        }
    });

    const ingredientes = document.querySelectorAll('#panel_ingredients_content');
    ingredientes.forEach(ingrediente=>{
        if(ingrediente){
            const lista = ingrediente.querySelector('.panel_text').innerText;
            const arrayIngredientes = lista.split(',').map(item=> item.trim())
            elementos ['Ingredientes'] = arrayIngredientes;
        } else {
            elementos ['Ingredientes'] = null;
        }
    })

    const nutrientes = document.querySelector('#panel_nutrition_facts_table_content')
    if(nutrientes){
        const tbody = nutrientes.querySelector('tbody');
        
        if(tbody){
            const linhas = tbody.querySelectorAll('tr');
            const arrayNutrientes = [];
            linhas.forEach(linha=>{
                const spans = linha.querySelectorAll('td > span');
                if (spans){
                    
                        const key = spans[0].innerText.trim();
                        const value = spans[1].innerText.trim();
                        const nutriente = {};
                        nutriente [key] = value;
                        arrayNutrientes.push(nutriente);
                                   
                }else{
                    elementos [null] = null
                }
            })
            elementos['Nutrientes'] = arrayNutrientes
        }
    }

    
    console.log(elementos)

}
buscaElementos();
