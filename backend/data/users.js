import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'First User',
    email: 'First@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'Second User',
    email: 'Second@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
];

export default users;
