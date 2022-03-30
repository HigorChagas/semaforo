class Semaforo {
    constructor() {
        this.buttons = document.querySelector('#buttons');
        this.random = null;
        this.img = document.querySelector('#img');
        this.ligar = {
            'green': () => this.img.src = './img/verde.png',
            'yellow': () => this.img.src = './img/amarelo.png',
            'red': () => this.img.src = './img/vermelho.png'
        };
        this.eventos();
    }

    currentColor() {
        let currentColor = Object.keys(this.ligar)[Semaforo.nextIndex()];
        console.log(this.ligar[currentColor]());
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
               this.random = setInterval(() => {
                    this.currentColor();
                }, 1000)
            }
        });
    }

    static nextIndex() {
        let colorIndex;
        if(colorIndex < 2) {
            colorIndex++
        } else {
            colorIndex = 0;
        }

        return colorIndex;
    }

    clearInterval() {
        clearInterval(this.random);
    }
}

const semaforo = new Semaforo();