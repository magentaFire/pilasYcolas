
var nombres = [];
var nombre = new Stack();
var apellido = new Stack();
var nombresCola = [];
var nombreCola = new Queue();
var apellidoCola = new Queue();

nombre.push("Ana");
nombre.push("Sofía");
nombre.push("Dafne");
nombre.push("Vanessa");
nombre.push("Laura");
apellido.push("Silva");
apellido.push("Rodríguez");
apellido.push("Vazquez");
apellido.push("Trejo");
apellido.push("Luna");

nombreCola.enqueue("Manuel");
nombreCola.enqueue("Juan");
nombreCola.enqueue("Gabriel");
nombreCola.enqueue("Saul");
nombreCola.enqueue("Adrian");
apellidoCola.enqueue("Salgado");
apellidoCola.enqueue("Cortés");
apellidoCola.enqueue("Hernandez");
apellidoCola.enqueue("Ruiz");
apellidoCola.enqueue("Juárez");

nombre.print();
apellido.print();
for (var k = 0, i = 5; i > 0 ; i--)
{
  nombres = nombres.concat(nombre.pop() + " " + apellido.pop());
  k += 1;
}
console.log(nombres);

nombreCola.print();
apellidoCola.print();
for (var i = 0; i < 5; i++)
{
   nombresCola = nombresCola.concat(nombreCola.dequeue() + " " + apellidoCola.dequeue());
}
console.log(nombresCola);


function Stack()
  {
    var items = [];
    this.push = function(element)
    {
      items.push(element);
    };
    this.pop = function()
    {
      return items.pop();
    };
    this.peek = function()
    {
      return items(items.length - 1);
    };
    this.isEmpty = function()
    {
      return items.length == 0;
    };
    this.size = function()
    {
      return items.length();
    };
    this.clear = function()
    {
      items = [];
    };
    this.print = function()
    {
      return console.log(items);
    }
  }


function Queue()
  {
    this.datastore = Array.prototype.slice.call(arguments, 0);
    this.enqueue = enqueue;
    this.dequeue = dequeue,
    this.isEmpty = isEmpty;
    this.print = print;
    this.tamanio = tamanio;

    function enqueue (element)
    {
      this.datastore.push(element);
    }
    function dequeue ()
    {
      return this.datastore.shift();
    }
    function isEmpty ()
    {
      return this.datastore.length == 0;
    }
    function print()
    {
      return console.log(this.datastore);
    }
    function tamanio()
    {
      return this.datastore.length();
    }
  }
