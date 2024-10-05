const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(cors());
let images = [];
// POST API to upload images
app.post('/api/images', (req, res) => {
   const { urls } = req.body;
   if (Array.isArray(urls)) {
       images = images.concat(urls);
       res.status(200).json({ message: 'Images uploaded successfully' });
   } else {
       res.status(400).json({ error: 'Invalid input' });
   }
});
// GET API to retrieve images
app.get('/api/images', (req, res) => {
  const images = [
      
        'https://cdn.pixabay.com/photo/2024/04/04/12/26/ai-generated-8675021_960_720.png',
         'https://images.unsplash.com/photo-1521747116042-5a810fda9664',
         'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
         'https://api.slingacademy.com/public/sample-blog-posts/6.png',
         'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
         'https://api.slingacademy.com/public/sample-blog-posts/1.png',
         'https://api.slingacademy.com/public/sample-blog-posts/2.png',
         'https://api.slingacademy.com/public/sample-blog-posts/3.png',
         'https://api.slingacademy.com/public/sample-blog-posts/4.png',
         'https://api.slingacademy.com/public/sample-blog-posts/5.png',
         'https://api.slingacademy.com/public/sample-blog-posts/6.png',
         'https://api.slingacademy.com/public/sample-blog-posts/7.png',
         'https://api.slingacademy.com/public/sample-blog-posts/8.png',
         'https://api.slingacademy.com/public/sample-blog-posts/9.png',
         'https://api.slingacademy.com/public/sample-blog-posts/10.png',
         'https://api.slingacademy.com/public/sample-blog-posts/11.png',
         'https://api.slingacademy.com/public/sample-blog-posts/12.png',
         'https://api.slingacademy.com/public/sample-blog-posts/13.png',
         'https://api.slingacademy.com/public/sample-blog-posts/14.png',
         'https://api.slingacademy.com/public/sample-blog-posts/15.png',
         'https://api.slingacademy.com/public/sample-blog-posts/16.png',
         'https://api.slingacademy.com/public/sample-blog-posts/17.png',
         'https://api.slingacademy.com/public/sample-blog-posts/18.png',
         'https://api.slingacademy.com/public/sample-blog-posts/19.png',
         'https://api.slingacademy.com/public/sample-blog-posts/20.png',
         'https://api.slingacademy.com/public/sample-blog-posts/21.png',
         'https://api.slingacademy.com/public/sample-blog-posts/22.png',
         'https://api.slingacademy.com/public/sample-blog-posts/23.png',
         'https://api.slingacademy.com/public/sample-blog-posts/24.png',
         'https://api.slingacademy.com/public/sample-blog-posts/25.png',
         'https://api.slingacademy.com/public/sample-blog-posts/26.png',
         'https://api.slingacademy.com/public/sample-blog-posts/27.png',
         'https://api.slingacademy.com/public/sample-blog-posts/28.png',
         'https://api.slingacademy.com/public/sample-blog-posts/29.png',
         'https://api.slingacademy.com/public/sample-blog-posts/30.png',
         'https://api.slingacademy.com/public/sample-blog-posts/31.png',
         'https://api.slingacademy.com/public/sample-blog-posts/32.png',
         'https://api.slingacademy.com/public/sample-blog-posts/33.png',
         'https://api.slingacademy.com/public/sample-blog-posts/34.png',
         'https://api.slingacademy.com/public/sample-blog-posts/35.png',
         'https://api.slingacademy.com/public/sample-blog-posts/36.png',
         'https://api.slingacademy.com/public/sample-blog-posts/37.png',
         'https://api.slingacademy.com/public/sample-blog-posts/38.png',
         'https://api.slingacademy.com/public/sample-blog-posts/39.png',
         'https://api.slingacademy.com/public/sample-blog-posts/40.png',
         'https://api.slingacademy.com/public/sample-blog-posts/41.png',
         'https://api.slingacademy.com/public/sample-blog-posts/42.png',
         'https://api.slingacademy.com/public/sample-blog-posts/43.png',
         'https://api.slingacademy.com/public/sample-blog-posts/44.png',
         'https://api.slingacademy.com/public/sample-blog-posts/45.png',
         'https://api.slingacademy.com/public/sample-blog-posts/46.png',
         'https://api.slingacademy.com/public/sample-blog-posts/47.png',
         'https://api.slingacademy.com/public/sample-blog-posts/48.png',
         'https://api.slingacademy.com/public/sample-blog-posts/49.png',
         'https://api.slingacademy.com/public/sample-blog-posts/50.png',
        
  ]
  console.log(images);
   res.json(images);
});

const PORT = 5000;
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});