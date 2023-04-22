class ProductManager{
    constructor(products){
        this.products = products;
        this.products = [];
        this.idCounter = 1;
    };

    // iniciar = () => {
    //     this.products = [];
    //     this.idCounter = 1;
    // }

    addProduct = ({ title, description, price, thumbnail, code, stock }) => {
        if (!title || !description || !price || !thumbnail || code < 0 || !stock){
            console.error("Todos los campos son obligatorios");   
            return;     
        }

        const product = {
            id: this.idCounter,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        let exist = false;
        this.products.forEach(prod => {
            if (prod.code === product.code)
            exist = true;            
        });
        if (!exist){
            this.products.push(product);
			// console.log(`producto agregado`);
            this.idCounter++;
        }else{
			// console.log("producto existente");
		}
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        // const prods = this.getProducts();
        //devuelvo indice de primer elemento que cumpla la condicion
        // const indice = prods.findIndex((element) => element.id === id);
        const indice = this.products.findIndex((element) => element.id === id);
        if (indice < 0 ){
            //devuelvo null y termino ejecucion
            console.error('Not found');
            return;
        }else{
            return this.products[indice];        
        }
    }

}

let products;

let productManager1 = new ProductManager(products);
// productManager1.iniciar();


productManager1.addProduct({ title: "almacen", description: "gaseosa", price: 300, thumbnail: "sin imagen", code: 0, stock: 10 });
productManager1.addProduct({ title: "verduleria", description: "manzana", price: 600, thumbnail: "sin imagen", code: 1, stock: 100 });
productManager1.addProduct({ title: "almacen", description: "gaseosa", price: 300, thumbnail: "sin imagen", code: 0, stock: 10 });
productManager1.addProduct({ title: "almacen", description: "gaseosa", price: 300, thumbnail: "sin imagen", code: 2, stock: 10 });
productManager1.addProduct({ title: "almacen", description: "gaseosa", price: 300, thumbnail: "sin imagen", code: 5, stock: 10 });
productManager1.addProduct({ title: "almacen", description: "gaseosa", price: 300, thumbnail: "sin imagen", code: 1, stock: 10 });



console.log(productManager1.getProducts());

console.log(productManager1.getProductById(3));



