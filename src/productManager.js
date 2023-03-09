const fs = require('fs');

class ProductManager {
  constructor() {
    this.path = "./productos.json";
  }
    consultarProductos = async () => {
        if (fs.existsSync(this.path)) {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const result = JSON.parse(data);
            return result;
        } else {
            return [];
        }
    };



    getProductElementById = async (id) =>{
        const products = await this.consultarProductos();
 
        try{
            const product = products.find(element => element.id === id);
            return product ? product : null;
        }catch(err){
            console.log(`error: ${err}`);
        }

    };




}

module.exports = ProductManager;
