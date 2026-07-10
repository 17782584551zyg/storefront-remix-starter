$filePath = "app\routes\products.tsx"
$content = Get-Content $filePath -Raw -Encoding UTF8

$content = $content -replace '<div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">', '<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">'

$content = $content -replace '<div\s+key=\{category\.id \|\| index\}\s+className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-500/10 hover:shadow-md transition-all duration-300 cursor-pointer">', '<Link key={category.id || index} to={`/products/category/${category.slug}`} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-orange-500/10 hover:shadow-lg transition-all duration-300 cursor-pointer group">'

$content = $content -replace '<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">', '<div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-3">'

$content = $content -replace '<img src=\{BACKEND_URL \+ category\.featuredAsset\.preview\} alt=\{category\.name\} className="w-6 h-6 object-contain" />', '<img src={BACKEND_URL + category.featuredAsset.preview} alt={category.name} className="w-12 h-12 object-contain" />'

$content = $content -replace '<svg className="w-6 h-6 text-gray-600"', '<svg className="w-10 h-10 text-gray-600 group-hover:text-orange-500"'

$content = $content -replace '<span className="text-sm text-gray-700 text-center">\{category\.name\}</span>', '<span className="text-sm font-medium text-gray-700 text-center mt-1 group-hover:text-orange-500 transition-colors">{category.name}</span>'

$content = $content -replace '</div>\s*<\/div>\s*\)\s*\)\s*\)\s*<\/div>', '</Link></div>'

Set-Content -Path $filePath -Value $content -Encoding UTF8