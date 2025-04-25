// src/routes/market.routes.js
import { Router } from 'express';
import {
  getUsuarios,
  getUsuario,
  getProductos,
  postProductos,
  putProductos,
  deleteProductos,
  getProductosId,
} from '../controllers/market.controllers.js';

const router = Router();

// Rutas para productos
router.get('/productos', (req, res, next) => {
  console.log('Endpoint /productos alcanzado');
  next();
}, getProductos);

router.get('/productos/:id', (req, res, next) => {
  console.log('Endpoint /productos/:id alcanzado');
  next();
}, getProductosId);

// Rutas para usuarios
router.get('/usuarios', getUsuarios);
router.post('/usuarios/login', getUsuario);

// Rutas de CRUD para productos
router.post('/productos', postProductos);
router.put('/productos/:id', putProductos);
router.delete('/productos/:id', deleteProductos);

export default router;
