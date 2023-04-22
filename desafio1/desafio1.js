class ProductManager{
    constructor(products){
        this.products = products;
        this.idCounter = 0;
    };

    iniciar = () => {
        this.products = [];
        this.idCounter = 1;
    }

    addProduct = (tit,desc,pric,thumb,cod,sto) => {
        
        if (!tit || !desc || !pric || !thumb || !cod || !sto){
            console.error("Todos los campos son obligatorios");        
        }

        const product ={
            id: this.idCounter,
            title: tit,
            description: desc,
            price: pric,
            thumbnail:thumb,
            code: cod,
            stock:sto
        }
        let exist;
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

    getById(id){
        const prods = this.getProducts();
        //devuelvo indice de primer elemento que cumpla la condicion
        const indice = prods.findIndex((element) => element.id === id);
        if (indice < 0 ){
            //devuelvo null y termino ejecucion
            console.error('Not found');
        }
        return prods[indice];        
    }

}

let products;

let productManager1 = new ProductManager(products);
productManager1.iniciar();

productManager1.addProduct("almacen", "gaseosa", 300, "sin imagen", 0, 10);
productManager1.addProduct("verduleria", "manzana", 600, "sin imagen", 1, 100);
productManager1.addProduct("almacen", "gaseosa", 300, "sin imagen", 0, 10);
productManager1.addProduct("almacen", "gaseosa", 300, "sin imagen", 2, 10);
productManager1.addProduct("almacen", "gaseosa", 300, "sin imagen", 5, 10);
productManager1.addProduct("almacen", "gaseosa", 300, "sin imagen", 1, 10);
productManager1.addProduct("almacen", "gaseosa", 300, "sin imagen", 0, 10);



// console.log(productManager1.getProducts());

console.log(productManager1.getById(7));



