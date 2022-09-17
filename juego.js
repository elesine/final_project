let palabrita;
let cant_errores = 0; 
let cant_aciertos = 0; 

const palabras = [
    'naranja',    
    'manzana',     
    'pera',    
    'granadilla',      
    'chirimoya',     
    'mandarina',       
    'arandano',  
    'uva',     
    'kiwi',    
    'papaya',    
    'frambuesa',     
];

const btn = id('jugar');
const imagen = id( 'imagen' );
const btn_letras = document.querySelectorAll( "#letras button" );

/* click en iniciar juego */
btn.addEventListener('click', iniciar );

function iniciar(event){
    imagen.src = 'img/img0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0; 

    const parrafo = id( 'palabra_a_adivinar' );
    parrafo.innerHTML = ''; 

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabrita = palabras[ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;

    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }
}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}

function click_letras(event){
    const spans = document.querySelectorAll( '#palabra_a_adivinar span' );
    const button = event.target;
    button.disabled = true;

    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( );

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `img/img${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 7 ){
        id('resultado').innerHTML ="Perdiste, la palabra era " + palabrita;
        game_over( );
    }else if( cant_aciertos == palabrita.length ){
        id('resultado').innerHTML = "GANASTE!!";
        game_over( );
    }
    // console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );
}


/* fin del juego */
function game_over( ){
    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = true;
    }
    btn.disabled = false;
}

game_over( );