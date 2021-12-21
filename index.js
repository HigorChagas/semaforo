function semaforo() {

    const buttons = document.querySelector('#buttons');
    const img = document.querySelector('#img');  

    let aleatorio;
    
    buttons.addEventListener('click', (e) => {
        const elementos = e.target;
        if(elementos.classList.contains('button-green')) {
            semaforoVerde();
            clearInterval(aleatorio);
        }
        if(elementos.classList.contains('button-yellow')) {
            semaforoAmarelo();
            clearInterval(aleatorio);
        }
        if(elementos.classList.contains('button-red')) {
            semaforoVermelho();
            clearInterval(aleatorio);
        }
        if(elementos.classList.contains('button-random')) {
            semaforoAleatorio();
            
        }
    }); 

    const semaforoVerde = () => img.src = './img/verde.png';
    const semaforoAmarelo = () => img.src = './img/amarelo.png';
    const semaforoVermelho = () => img.src = './img/vermelho.png';

    const cores = [
        semaforoVerde(),
        semaforoAmarelo(),
        semaforoVermelho()
    ];
    

    const semaforoAleatorio = () => {
        clearInterval(aleatorio);
        aleatorio = setInterval(() => {
            
            cores.forEach((valor) =>  {
                console.log(valor);
                
            });
        }, 2000);
    }
}

semaforo();


