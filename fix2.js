const fs = require('fs')
const content = fs.readFileSync('app/routes/products.tsx', 'utf8')
const newContent = content.split('Tell us more</button>').join('Tell us more</a>')
