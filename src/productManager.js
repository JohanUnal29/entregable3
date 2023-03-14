const fs = require('fs');

class ProductManager {
    constructor() {
        this.path = "./src/productos.json";
    }
    consultarProductos = async () => {
        try {
            if (fs.existsSync(this.path)) {
                const data = await fs.promises.readFile(this.path, "utf-8");
                const result = JSON.parse(data);
                return result;
            } else {
                return [];
            }
        } catch (err) {
            console.log(`error: ${err}`);
        }
    };



    getProductElementById = async (id) => {
        const products = await this.consultarProductos();

        try {
            const product = products.find(element => element.id === id);
            console.log(product);
            return product ? product : null;
        } catch (err) {
            console.log(`error: ${err}`);
        }

    };




}

module.exports = ProductManager;
