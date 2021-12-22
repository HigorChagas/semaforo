function semaforo() {

    const buttons = document.querySelector('#buttons');
    const img = document.querySelector('#img');  

    let colorIndex;

    const nextIndex = () => {
        if(colorIndex < 2) {
            colorIndex++;
        } else {
            colorIndex = 0;
        }
    } 
    
    buttons.addEventListener('click', (e) => {
        const elementos = e.target;
        if(elementos.classList.contains('button-green')) {
            ligar.green();
        }
        if(elementos.classList.contains('button-yellow')) {
            ligar.yellow();
        }
        if(elementos.classList.contains('button-red')) {
            ligar.red();
        }
        if(elementos.classList.contains('button-random')) {
            console.log(ligar[nextIndex()]);
            
        }
    }); 

    const ligar = {
        'red': () => img.src = './img/vermelho.png',
        'yellow': () => img.src = './img/amarelo.png',
        'green': () => img.src = './img/verde.png'
    }
}

semaforo();


