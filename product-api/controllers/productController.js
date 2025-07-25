const products = require('../data/products.json');

exports.getAllProducts = (req, res) => {
  const category = req.query.category;
  if (category) {
    const filtered = products.filter(p => p.category === category);
    return res.json(filtered);
  }
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { id, name, price, category } = req.body;
  if (!id || !name || !price || !category) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  products.push({ id, name, price, category });
  res.status(201).json({ message: 'Product added successfully' });
};
