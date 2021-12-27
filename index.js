function semaforo() {

    const buttons = document.querySelector('#buttons');
    const img = document.querySelector('#img');  

    let colorIndex;
    let random = null;

    const nextIndex = () => {
        if(colorIndex < 2) {
            colorIndex++;
        } else {
            colorIndex = 0;
        }
         
        return colorIndex;
    } 

    
    
    buttons.addEventListener('click', (e) => {
        const elementos = e.target;
        if(elementos.classList.contains('button-green')) {
            ligar.green();
            clearInterval(random);
        }
        if(elementos.classList.contains('button-yellow')) {
            ligar.yellow();
            clearInterval(random);
        }
        if(elementos.classList.contains('button-red')) {
            ligar.red();
            clearInterval(random);
        }
        if(elementos.classList.contains('button-random')) {
            clearInterval(random);
            random = setInterval(() => {
                currentColor = Object.keys(ligar)[nextIndex()];
                    ligar[currentColor]();
            }, 1000);

            random;
        }
    }); 

    const ligar = { 
        'red': () => img.src = './img/vermelho.png',
        'yellow': () => img.src = './img/amarelo.png',
        'green': () => img.src = './img/verde.png' 
    }

}

semaforo();


