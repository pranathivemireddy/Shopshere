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
    let prodcutsContainers = document.getElementById('prodcutsContainers');
     
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
            <p class='productPrice'>Price: ${prodObj.price}₹</p>
            <button class= 'buynow' onclick = 'buynow(${prodObj.id})'>BUY NOW</button>
            `
        itemcontainer.appendChild(deatilsContainer);
        prodcutsContainers.appendChild(itemcontainer);
        
})
}
    function buynow(){
        window.open('login.html', '_blank');
    }
    
document.addEventListener("DOMContentLoaded", getProducts);