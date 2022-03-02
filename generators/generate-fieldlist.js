fields = "Handle,Title,Body (HTML),Vendor,Standard Product Type,Custom Product Type,Tags,Published,Option1 Name,Option1 Value,Option2 Name,Option2 Value,Option3 Name,Option3 Value,Variant SKU,Variant Grams,Variant Inventory Tracker,Variant Inventory Qty,Variant Inventory Policy,Variant Fulfillment Service,Variant Price,Variant Compare At Price,Variant Requires Shipping,Variant Taxable,Variant Barcode,Image Src,Image Position,Image Alt Text,Gift Card,SEO Title,SEO Description,Google Product Category,Variant Image,Variant Weight Unit,Variant Tax Code,Cost per item,Status".split(',')



fields.map((e,i) => { return {id: i, name: e, default: false }})