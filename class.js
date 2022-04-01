class Semaforo {
    constructor() {
        this.buttons = document.querySelector('#buttons');
        this.random = null;
        this.img = document.querySelector('#img');
        this.colorIndex;
        this.ligar = {
            'green': () => this.img.src = './img/verde.png',
            'yellow': () => this.img.src = './img/amarelo.png',
            'red': () => this.img.src = './img/vermelho.png'
        };
        this.eventos();
    }

    currentColor() {
        let currentColor = Object.keys(this.ligar)[this.nextIndex()];
        this.ligar[currentColor]();
    }

    eventos() {
        this.buttons.addEventListener('click', (e) => {
            const elementos = e.target;
            
            if(elementos.classList.contains('button-green')) {
                this.ligar.green();
                this.clearInterval();
            }

            if(elementos.classList.contains('button-yellow')) {
                this.ligar.yellow();
                this.clearInterval();
            }

            if(elementos.classList.contains('button-red')) {
                this.ligar.red();
                this.clearInterval();
            }

            if(elementos.classList.contains('button-random')) {
                this.clearInterval();
                this.random = setInterval(() => {
                    this.currentColor();
                }, 2000);

                
            }
        });
    }

    nextIndex() {
        if(this.colorIndex < 2) {
            this.colorIndex++
        } else {
            this.colorIndex = 0;
        }

        return this.colorIndex;
    }

    clearInterval() {
        clearInterval(this.random);
    }
}

const semaforo = new Semaforo();