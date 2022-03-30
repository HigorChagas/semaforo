class Semaforo {
    constructor() {
        this.buttons = document.querySelector('#buttons');
        this.img = document.querySelector('#img');
        this.ligar = {
            'green': () => this.img.src = './img/verde.png',
            'yellow': () => this.img.src = './img/amarelo.png',
            'red': () => this.img.src = './img/vermelho.png'
        };
        this.eventos();
    }

    eventos() {
        this.buttons.addEventListener('click', (e) => {
            const elementos = e.target;
            
            if(elementos.classList.contains('button-green')) {
                this.ligar.green();
            }

            if(elementos.classList.contains('button-yellow')) {
                this.ligar.yellow();
            }

            if(elementos.classList.contains('button-red')) {
                this.ligar.red();
            }

            if(elementos.classList.contains('button-random')) {
                
            }
        });
    }

    clearInterval() {
        let random = null;
        this.clearInterval(random);
    }
}

const semaforo = new Semaforo();