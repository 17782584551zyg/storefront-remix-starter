$filePath = "app\routes\products.tsx"
$content = Get-Content $filePath -Raw -Encoding UTF8
$content = $content.Replace("""<section className=""py-16 bg-white""""", """<section id=""report-form"" className=""py-16 bg-white""""")
