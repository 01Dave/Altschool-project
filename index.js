const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(bodyParser.json());

const mongo_url = 'mongodb+srv://davidatanda84:david2001@blogcluster.gqclz8u.mongodb.net/blog_data?retryWrites=true&w=majority'

const mongo_uri = 'mongodb+srv://davidatanda84:david2001@blogcluster.gqclz8u.mongodb.net/?retryWrites=true&w=majority&appName=Blogcluster'

mongoose.connect(mongo_url, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
