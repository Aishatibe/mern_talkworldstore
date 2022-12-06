/* import ankara4 from './images/ankara4.jpeg';
import ankara2 from './images/ankara2.jpeg';
import lace1 from './images/lace1.jpg';
import lace3 from './images/lace3.jpg';

 */

import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'talk',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: true,
    },
    {
      name: 'hello',
      email: 'hello@example.com',
      password: bcrypt.hashSync('1234567'),
      isAdmin: false,
    },
  ],
  products: [
    {
      /*  _id: '1', */
      name: 'Ankara-1',
      slug: 'ankara-1',
      category: 'Wrappers',
      image: '/images/ankara4.jpeg',
      price: 2000,
      countInStock: 10,
      brand: 'Veritable Wax',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality Nigerian Ankara Wrapper',
    },
    {
      /*  _id: '2', */
      name: 'ankara-2',
      slug: 'ankara-2',
      category: 'Wrappers',
      image: '/images/ankara2.jpeg',
      price: 35000,
      countInStock: 8,
      brand: 'Nigeria lace ',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality Nigerian Lace wears',
    },
    {
      /* _id: '3', */
      name: 'Ankara-3',
      slug: 'ankara-3',
      category: 'Wrappers',
      image: '/images/lace1.jpg',
      price: 2000,
      countInStock: 10,
      brand: 'Veritable Wax',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality Nigerian Ankara Wrapper',
    },
    {
      /*  _id: '4', */
      name: 'Ankara-4',
      slug: 'ankara-4',
      category: 'Wrappers',
      image: '/images/lace3.jpg',
      price: 2000,
      countInStock: 0,
      brand: 'Nigerian lace',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality Nigerian lace Wrapper',
    },
  ],
};

export default data;
