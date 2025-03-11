let objdata=JSON.parse(localStorage.getItem('Product'))
console.log(objdata);
let objectContainer=document.getElementById('objectcontainer')

let objectimagecontainer = document.createElement('div');
objectimagecontainer.className = 'objectimageContainer';

let objectdetailscontainer=document.createElement('div');
objectdetailscontainer.className='objectdetailsContainer';

objectimagecontainer.innerHTML=`<img src='${objdata.product_photo}'>`
let ratingscontainer=document.createElement('div')
ratingscontainer.className='ratingscontainer'

let star_ratings=document.createElement('span')
star_ratings.className='starratings'
star_ratings.innerHTML=``

let rating = Math.floor(objdata.product_star_rating); 
let stars = '★'.repeat(rating) + '☆'.repeat(5 - rating); 
star_ratings.innerText = 'Rating'+stars;

let num_ratings=document.createElement('span')
num_ratings.className='numratings'
num_ratings.innerHTML=`<span>Reviews:<b>${objdata.product_num_ratings}</b></span>`

let salescontainer=document.createElement('div')
let sales_volume=document.createElement('span')
sales_volume.className='salesvolume'
sales_volume.innerHTML=`<span>Sales:<b>${objdata.sales_volume}</b></span>`

let bestsellercontainer=document.createElement('div')
let best_seller=document.createElement('span')
best_seller.className='bestseller'
best_seller.innerHTML=`<span>${objdata.is_best_seller}</span>`
if(objdata.is_best_seller){
        best_seller.innerText="Shopshere's Best Seller"
    }else{
       best_seller.innerText=" "
    }


let primecontainer=document.createElement('div')
let prime_delivery=document.createElement('span')
prime_delivery.className='primedelivery'
prime_delivery.innerHTML=`<span>${objdata.is_prime}</span>`
if(objdata.is_prime){
        prime_delivery.innerText="Prime Delivery Available"
    }else{
        prime_delivery.innerText=" "
    }

objectdetailscontainer.innerHTML=`<p>${objdata.product_title}</p>`

let deliverycontainer=document.createElement('div')
let delivery_info=document.createElement('span')
delivery_info.className='deliverycontainer'
delivery_info.innerHTML=`<span>${objdata.product_delivery_info}</span>`


let pricecontainer=document.createElement('div')
pricecontainer.className='pricecontainer'

let disprice=document.createElement('span')
disprice.innerHTML=`<span>Discounted Price:${objdata.product_price}</span>`

let originalprice=document.createElement('span')
originalprice.className='originalprice'
originalprice.innerHTML=`<span>${objdata.product_original_price}</span>`

ratingscontainer.appendChild(star_ratings)
ratingscontainer.appendChild(num_ratings)
objectdetailscontainer.appendChild(ratingscontainer)

salescontainer.appendChild(sales_volume)
objectdetailscontainer.appendChild(salescontainer)

pricecontainer.appendChild(disprice)
pricecontainer.appendChild(originalprice)
objectdetailscontainer.appendChild(pricecontainer)
primecontainer.appendChild(prime_delivery)
objectdetailscontainer.appendChild(primecontainer)

bestsellercontainer.appendChild(best_seller)
objectdetailscontainer.appendChild(bestsellercontainer)

deliverycontainer.appendChild(delivery_info)
objectdetailscontainer.appendChild(deliverycontainer)

let buttonContainer = document.createElement('div');
buttonContainer.className = 'buttonContainer';

let addToCartBtn = document.createElement('button');
addToCartBtn.innerText = "Add to Cart";

let buyNowBtn = document.createElement('button');
buyNowBtn.innerText = "Buy Now";

buttonContainer.appendChild(addToCartBtn);
buttonContainer.appendChild(buyNowBtn);
objectdetailscontainer.appendChild(buttonContainer);

        
objectimagecontainer.append(objectdetailscontainer);
objectContainer.appendChild(objectimagecontainer);
