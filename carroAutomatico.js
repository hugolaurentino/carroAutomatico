const carro = {
    ligado: false,
    velocidade: 0,

    ligar: function () {
        this.ligado ? console.log(`Carro já ligado.`) : (
            this.ligado = true,
            this.velocidade = 0,
            console.log(`Carro ligado. Parado velocidade ${this.velocidade}Kmh`));

    },

    desligar: function () {
        if (!this.ligado) {
            console.log(`Carro já desligado.`)
        }
        else {
            this.ligado = false,
                this.velocidade = 0,
                console.log(`Carro desligado. Parado velocidade ${this.velocidade}Kmh`);
        }
    },

    acelerar: function () {
        !this.ligado ? (console.log(`Não é possível, carro desligado.`),
            this.start()
        ) : (
            this.velocidade += 10,
            console.log(`Carro acelerando. Velocidade ${this.velocidade}`))
    },

    desacelerar: function () {
        !this.ligado ?
            console.log(`Não é possível desacelerar carro desligado.`) : (
                this.velocidade -= 10,
                this.velocidade < 0 ? (
                    this.velocidade = 0, this.stop()) : '',
                console.log(`Carro desacelerando. velocidade ${this.velocidade}Kmh`),
                this.stop()
            );
    },

    freia: function () {
        !this.ligado ?
            console.log(`Não é possível freia carro desligado.`) : (
                this.velocidade -= 5,
                console.log(`Carro desacelerando. Velocidade ${this.velocidade}`))
    },

    start: function () {
        this.ligar()
    },

    stop: function () {
        this.velocidade <= 0 ? this.desligar() : '';
    },
}

carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()
