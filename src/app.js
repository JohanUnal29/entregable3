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


app.get("/", async(req, res) => {
    const productos = await productManager.consultarProductos();
    res.send("¡Bienvenido a la página principal! "+productos);
  });

/**
 * Ejemplo: usando req.params
 *
 * Este endpoint nos permite retornar un usuario con un id especifico
 */
app.get("/:idProducto", async (req, res) => {
    const idProducto = req.params.idProducto;
    console.log(`Recibida solicitud para producto con ID ${idProducto}`);
    const producto = await productManager.getProductElementById(idProducto);
    res.send("Recibida solicitud para producto con ID 1 "+producto);
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
