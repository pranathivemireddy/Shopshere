async function getProducts() {
    try {
        let response = await fetch('https://twisty-heartbreaking-tablecloth.glitch.me/data');
        if (!response.ok) {
            throw new Error('HE PAGE YOU ARE LOOKING IS UNAVAILABLE');
        }
        let result = await response.json();
        console.log("API Data Fetched:", result); // Debugging
        displayProducts(result);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
function displayProducts(data){
    let Fashioncontainer = document.getElementById('fashioncontainer')
    let Accessoriescontainer=document.getElementById('accessoriescontainer')
    let Bookscontainer=document.getElementById('bookscontainer')
    let Gadgetscontainer=document.getElementById('gadgetscontainer')
    let Toyscontainer=document.getElementById('toyscontainer')
    let Homeluxecontainer=document.getElementById('homeluxecontainer')
    let Grocerycontainer=document.getElementById('grocerycontainer')
    let Mobilescontainer=document.getElementById('mobilescontainer')
    let Beautycontainer=document.getElementById('beautycontainer')
    let Handbagcontainer=document.getElementById('handbagscontainer')
    let Footwearcontainer=document.getElementById('footwearcontainer')
     
    data.forEach(prodObj => {
        let itemcontainer=document.createElement('div')
        itemcontainer.className = 'itemContainer'

        let imageContainer = document.createElement('div');
        imageContainer.className = 'imageContainer'
        imageContainer.innerHTML = `<img src = '${prodObj.image}'>`
        itemcontainer.appendChild(imageContainer);

        let deatilsContainer = document.createElement('div')
        deatilsContainer.className='detailsContainer'
        deatilsContainer.innerHTML = `
            <h3 class='productTitle'>${prodObj.title}</h3>
            <p class='productPrice'>Price: $${prodObj.price}</p>
            <button class= 'buynow' onclick = 'buynow(${prodObj.id})'>BUY NOW</button>
            `
        itemcontainer.appendChild(deatilsContainer);

        if(prodObj.category==='FASHION'){
            Fashioncontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='ACCESSORIES'){
            Accessoriescontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='BOOKS'){
            Bookscontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='GADGETS'){
            Gadgetscontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='TOYS'){
            Toyscontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='HOMELUXE'){
            Homeluxecontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='GROCERY'){
            Grocerycontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='MOBILES'){
            Mobilescontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='BEAUTY & MAKEUP'){
            Beautycontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='HANDBAGS'){
            Handbagcontainer.appendChild(itemcontainer)
        }
        else if(prodObj.category==='FOOTWEAR'){
            Footwearcontainer.appendChild(itemcontainer)
        }
        
})
}
    function buynow(){
        window.open('login.html', '_blank');
    }
    
document.addEventListener("DOMContentLoaded", getProducts);