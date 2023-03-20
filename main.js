
class Canva {

    constructor(){
        this.lienzo = document.querySelector('#lienzo')
        this.lienzo.width = 700
        this.lienzo.height = 300
        this.ctx = this.lienzo.getContext("2d")
        this.vectorFondo = []
        this.vectorAgua = []
        // this.coordenadasBolita = { x: 10, y: 10}
        this.inicializarLienzo()
    }

    inicializarLienzo(){

        this.crearCoordenadasFondo()
        this.dibujarFondo()
        this.crearCoordenadasAgua()
        this.dibujarAgua()
        // this.dibujarBolita()
        // setInterval(() => {
        //     this.limpiarLienzo()
        //     this.dibujarFondo()
        //     this.dibujarAgua()
        //     // this.dibujarBolita()
        // }, 1000)
    }

    crearCoordenadasFondo(){

        this.vectorFondo=[
            { x: 0, y: this.lienzo.height - 10 },
            { x: 100, y: this.lienzo.height - 10 },
            { x: 150, y: this.lienzo.height - 50 },
            { x: 200, y: this.lienzo.height - 10 },
            { x: 300, y: this.lienzo.height - 10 },
            { x: 400, y: this.lienzo.height - 20 },
            { x: 500, y: this.lienzo.height - 10 },
        ]
    }

    crearCoordenadasAgua(){

        this.vectorAgua=[
            { x: 0, y: 10 },
            { x: 20, y: 20 },
            { x: 100, y: 20 },
            { x: 500, y: 30 },
            { x: 550, y: 90 },
            { x: 600, y: 10 },
            { x: 700, y: 0 }
        ]
    }

    dibujarFondo(){

        this.ctx.beginPath()
        this.ctx.strokeStyle = "blue"
        this.ctx.moveTo( this.vectorFondo[0].x, this.vectorFondo[0].y )

        for (let i = 1; i < this.vectorFondo.length; i++) {

            let x = this.vectorFondo[i].x
            let y = this.vectorFondo[i].y
            this.ctx.lineTo( x, y)
        }

        this.ctx.stroke()

    }

    dibujarAgua(){

        this.ctx.beginPath()
        this.ctx.strokeStyle = "red"
        this.ctx.moveTo( this.vectorAgua[0].x, this.vectorAgua[0].y )

        for (let i = 1; i < this.vectorAgua.length; i++) {

            let x = this.vectorAgua[i].x
            let y = this.vectorAgua[i].y
            this.ctx.lineTo( x, y)
        }

        this.ctx.stroke()

    }

    limpiarLienzo(){
        this.ctx.clearRect( 0, 0, this.lienzo.width, this.lienzo.height )
    }

    // dibujarBolita(){

    //     const x = this.coordenadasBolita.x
    //     const y = this.coordenadasBolita.y
    //     const r = 5
    //     this.ctx.beginPath()
    //     this.ctx.arc( x, y, r, 0, 2 * Math.PI);
    //     this.ctx.stroke()
    //     this.coordenadasBolita.x += 10
    //     this.coordenadasBolita.y += 5
    // }
}

const lienzo = new Canva