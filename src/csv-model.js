//https://help.shopify.com/en/manual/products/import-export/using-csv

module.exports =  [
    /*0*/  { name: 'Handle', default: null }, //Product ID
    /*1*/  { name: 'Title', default: null }, //Item name
    /*2*/  { name: 'Body (HTML)', default: "" }, //Description
    /*3*/  { name: 'Vendor', default: "" },
    /*4*/  { name: 'Standard Product Type', default: "" },
    /*5*/  { name: 'Custom Product Type', default: "" },
    /*6*/  { name: 'Tags', default: "" }, //Tags
    /*7*/  { name: 'Published', default: "TRUE" },

    /*8*/  { name: 'Option1 Name', default: "Licensz" },
    /*9*/  { name: 'Option1 Value', default: "" },
    /*10*/ { name: 'Option2 Name', default: "" },
    /*11*/ { name: 'Option2 Value', default: "" },
    /*12*/ { name: 'Option3 Name', default: "" },
    /*13*/ { name: 'Option3 Value', default: "" },

    /*14*/ { name: 'Variant SKU', default: "" },
    /*15*/ { name: 'Variant Grams', default: 0 },
    /*16*/ { name: 'Variant Inventory Tracker', default: "shopify" },
    /*17*/ { name: 'Variant Inventory Qty', default: "" },
    /*18*/ { name: 'Variant Inventory Policy', default: "continue" },
    /*19*/ { name: 'Variant Fulfillment Service', default: "manual" },
    /*20*/ { name: 'Variant Price', default: 2500 }, //Variant price
    /*21*/ { name: 'Variant Compare At Price', default: "" },
    /*22*/ { name: 'Variant Requires Shipping', default: "FALSE" },
    /*23*/ { name: 'Variant Taxable', default: "FALSE" },
    /*24*/ { name: 'Variant Barcode', default: "" }, //Barcode

    /*25*/ { name: 'Image Src', default: "" }, //Image
    /*26*/ { name: 'Image Position', default: 1 },
    /*27*/ { name: 'Image Alt Text', default: "A kép az eredeti csökkentett reprezentációja" }, // <125 character

    /*28*/ { name: 'Gift Card', default: "FALSE" },
    /*29*/ { name: 'SEO Title', default: "" }, //description of browser ad
    /*30*/ { name: 'SEO Description', default: "" }, //description of browser ad
    /*31*/ { name: 'Google Product Category', default: "" },
    /*32*/ { name: 'Cost per item', default: 0 },
    /*33*/ { name: 'Status', default: "active" },
    /*34*/ { name: 'Collection', default: null } // Collection
]