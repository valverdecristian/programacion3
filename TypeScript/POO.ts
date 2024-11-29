class Pelicula {
    // propiedades
    nombre: string;
    protagonistas: string[];
    actores: string[];

    // constructor (sobrescribe los datos por defecto de la clase)
    // this -> para referirse a los atributos inicializados.
    constructor(nombre:string, protagonistas:string[], actores:string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores
    }

    // metodo
    proyectarEnCine(){
        console.log(`${this.nombre} está siendo proyectada`);
    }
}

// instanciamos Pelicula
const pelicula1 = new Pelicula("The Joker 2", ["Arthur Fleck", "Lee Quinzel"], ["Joaquin Phoenix", "Lady Gaga"]);
pelicula1.proyectarEnCine();
console.log(pelicula1);


// CLASES GENERICAS
class Sorteo<T>{
    private ticket?: T;

    constructor (private nombre: string){
    }

    // encapsulamiento con getter y setter
    setTicket(numero:T){
        this.ticket = numero;
    }

    getTicket(){
        return this.ticket;
    }

    // metodo publico para poder ser llamado desde afuera
    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}

// instancio un Sorteo
let sorteo = new Sorteo<number>('Cristian');
sorteo.setTicket(7);
console.log(sorteo.sortear());