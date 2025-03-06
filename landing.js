async function getCategories() {
    try {
        let response = await fetch('https://solid-diligent-iberis.glitch.me/categories');
        if (!response.ok) {
            throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
        }
        let result = await response.json();
        console.log("API Data Fetched:", result); // Debugging
        displayCategories(result);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
function displayCategories(data){
    let prodcutsContainers = document.getElementById('prodcutsContainers');
     
    data.forEach(Obj => {
        let itemcontainer=document.createElement('div')
        itemcontainer.className = 'itemContainer'

        let imageContainer = document.createElement('div');
        imageContainer.className = 'imageContainer'
        imageContainer.innerHTML = `<img src = '${Obj.categoryimage}'>`
        let categoryName = document.createElement('h3');
        categoryName.className = 'categoryName'
        categoryName.innerHTML= `${Obj.categoryname}`; 
        itemcontainer.appendChild(imageContainer);
        imageContainer.appendChild(categoryName);
        prodcutsContainers.appendChild(itemcontainer);     
})
}
//Electronics
async function electronics(){
    try {
        let response = await fetch('https://bold-windy-cephalopod.glitch.me/electronics');
        if (!response.ok) {
            throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
        }
        let result = await response.json();
        console.log("API Data Fetched:", result); // Debugging
        displayelectronics(result);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
function displayelectronics(data) {
    let electronicsproducts = document.getElementById('electronics');

    if (!electronicsproducts) {
        console.error("Element with ID 'electronics' not found! Check your HTML.");
        return;
    } else {
        console.log("Element found. Appending electronics items...");
    }

    data.forEach(Obj => {
        let electronicsitemcontainer = document.createElement('div');
        electronicsitemcontainer.className = 'electronicsitemContainer';

        let electronicsimageContainer = document.createElement('div');
        electronicsimageContainer.className = 'electronicscontainer';

        electronicsimageContainer.innerHTML = `<img src='${Obj.product_photo}'>`;

        electronicsitemcontainer.appendChild(electronicsimageContainer);
        electronicsproducts.appendChild(electronicsitemcontainer);
    });
}
//Jewellery
async function jewellery(){
    try {
        let response = await fetch('https://coffee-curly-brow.glitch.me/products');
        if (!response.ok) {
            throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
        }
        let result = await response.json();
        console.log("API Data Fetched:", result); // Debugging
        displayjewellery(result);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
function displayjewellery(data) {
    let jewelleryproducts = document.getElementById('jewellery');

    if (!jewelleryproducts) {
        console.error("Element with ID 'jewellery' not found! Check your HTML.");
        return;
    } else {
        console.log("Element found. Appending jewellery items...");
    }

    data.forEach(Obj => {
        let jewelleryitemcontainer = document.createElement('div');
        jewelleryitemcontainer.className = 'jewelleryitemContainer';

        let jewelleryimageContainer = document.createElement('div');
        jewelleryimageContainer.className = 'jewellerycontainer';

        jewelleryimageContainer.innerHTML = `<img src='${Obj.product_photo}'>`;

        jewelleryitemcontainer.appendChild(jewelleryimageContainer);
        jewelleryproducts.appendChild(jewelleryitemcontainer);
    });
}
//Grocery
async function grocery(){
    try {
        let response = await fetch('https://ambiguous-marvelous-shrimp.glitch.me/products');
        if (!response.ok) {
            throw new Error('THE PAGE YOU ARE LOOKING IS UNAVAILABLE');
        }
        let result = await response.json();
        console.log("API Data Fetched:", result); // Debugging
        displaygrocery(result);
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}
function displaygrocery(data) {
    let groceryproducts = document.getElementById('grocery');

    if (!groceryproducts) {
        console.error("Element with ID 'grocery' not found! Check your HTML.");
        return;
    } else {
        console.log("Element found. Appending grocery items...");
    }

    data.forEach(Obj => {
        let groceryitemcontainer = document.createElement('div');
        groceryitemcontainer.className = 'groceryitemContainer';

        let groceryimageContainer = document.createElement('div');
        groceryimageContainer.className = 'grocerycontainer';

        groceryimageContainer.innerHTML = `<img src='${Obj.product_photo}'>`;

        groceryitemcontainer.appendChild(groceryimageContainer);
        groceryproducts.appendChild(groceryitemcontainer);
    });
}
function buynow(){
    window.open('login.html', '_blank');
}
    
document.addEventListener("DOMContentLoaded",()=>{getCategories();electronics(),jewellery(),grocery()})