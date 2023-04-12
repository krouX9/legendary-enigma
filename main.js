
document.getElementById("productMetaData").innerHTML = `<h3>Showing 1-$() of $() results for "Phone"</h3>`

var phoneDataSet = [
    {
        name: "Galaxy Note 9",
        "brand": "Samsung",
        "sale": true,
        "color": "MidnightBlack",
        "storage": 512,
        "new": true,
        "rating": 4,
        "reviewCount": 9303, 
        "photo": ,
        "originalPrice" : 149.99,
        "currentPrice": 129.99 ,
        "discount": 30
    },

    {
        "name": "Mix 2",
        "brand": "Mi",
        "sale": false,
        "color": "Black",
        "storage": 128,
        "new": true,
        "rating": 3,
        "reviewCount": 9303, 
        "photo": ,
        "originalPrice" : 149.99,
        "currentPrice": 129.99 ,
        "discount": 30
    }
]

var html = '';
phoneDataSet.forEach(function(item){
html =  <div class=""> Name:'+ item.name +'</div>','<h2>' + item.name+ '</h2>'
'<div>Model: '+ item.model + '</div>'

});

$('productDataCard').append(html);
