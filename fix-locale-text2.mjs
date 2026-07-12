import fs from 'fs';
const path = 'app/routes/products.$slug.tsx';
let c = fs.readFileSync(path, 'utf8');

const oldCode = 'const [isFavorite, setIsFavorite] = useState(false);';
const newCode = 'const [isFavorite, setIsFavorite] = useState(false);\n  const getLocaleText = (value) => typeof value === \"object\" ? Object.values(value)[0] : value;';

c = c.replace(oldCode, newCode);

const oldSection = 'dangerouslySetInnerHTML={{ __html: product.customFields.productDetails }}';
const newSection = 'dangerouslySetInnerHTML={{ __html: getLocaleText(product.customFields.productDetails) }}';

c = c.replace(oldSection, newSection);

fs.writeFileSync(path, c, 'utf8');
console.log('done');