const express = require("express");
const ProductManager = require('./productManager.js');

/**
 * Ya tenemos express instalado, sin embargo, antes de poder usarlo tenemos que inicializarlo.
 *
 * A partir de la linea de abajo, nuestra variable "app" tendrá todas las funcionalidades
 * que nos ofrece express.
 */
const app = express();
const productManager = new ProductManager();


app.get("/products", async(req, res) => {
    const productos = await productManager.consultarProductos();
    const products2 = JSON.stringify(productos)
    res.send("¡Bienvenido a la página principal! "+products2);
  });

/**
 * Ejemplo: usando req.params
 *
 * Este endpoint nos permite retornar un usuario con un id especifico
 */
app.get("/products/:id", async (req, res) => {
    const idProducto = req.params.id;
    console.log(`Recibida solicitud para producto con ID ${idProducto}`);
    const producto = await productManager.getProductElementById(parseInt(idProducto));
    const producto2 = JSON.stringify(producto)
    res.send("Recibida solicitud para producto con ID "+producto2);
  });

/**
 * Ejemplo: usando req.query
 *
 * Sí la propiedad "genero" no se introdujo en el query, o si el genero no es "M" ni "F",
 * entonces no se emplea ningun filtro y retorna el array usuarios completo
 */

app.listen(8080, () => {
  console.log("Servidor arriba en el puerto 8080");
});
