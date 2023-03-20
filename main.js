
class Canva {

    constructor(){
        this.lienzo = document.querySelector('#lienzo')
        this.lienzo.width = 1000
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
        // this.crearCoordenadasAgua_t0()
        // this.dibujarAgua()
        // this.dibujarBolita()
        // dataOld = data_t0
        setInterval(() => {
            this.limpiarLienzo()
            this.dibujarFondo()
            // dataOld => dataNew
            // dibujo Agua(daNew)
            // dataOld = DataNew
            // this.dibujarAgua()
            // this.dibujarBolita()
        }, 1000)
    }

    crearCoordenadasFondo(){

        const long = this.lienzo.width
        const npoints = 100
        const dx = long/npoints
        const humpHeight = 1
        const x_hump_init = this.lienzo.width/5*2
        const x_hump_end = this.lienzo.width/5*3
    
        for (let i = 0; i <= npoints; i++) {

            const x = i*dx
            let y

            if (x < x_hump_init || x > x_hump_end) {
                y = 0
            } else {
                y = humpHeight * Math.sin(Math.PI*(x - x_hump_init)/(x_hump_end - x_hump_init))
            }

            this.vectorFondo.push({ x, y })
        }
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

        const coeficienteEscalacionY = 5
        this.ctx.beginPath()
        this.ctx.strokeStyle = "blue"
        this.ctx.moveTo( this.vectorFondo[0].x, this.lienzo.height - this.vectorFondo[0].y * this.lienzo.height/coeficienteEscalacionY )

        for (let i = 1; i < this.vectorFondo.length; i++) {

            let x = this.vectorFondo[i].x
            let y = this.lienzo.height - this.vectorFondo[i].y * this.lienzo.height/coeficienteEscalacionY
            this.ctx.lineTo( x, y )
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