import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to Database ');
  })
  .catch((err) => {
    console.log(err.message);
  });

//creating express app
const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
//
//
const _dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontrnd/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
//
//
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

//all products
/* app.get('/api/products', (req, res) => {
  res.send(data.products);
});
 */
//single products
/* app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
});
 */
//add product to cart
/* app.get('/api/products/:_id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params._id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
}); */

//define the port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});
