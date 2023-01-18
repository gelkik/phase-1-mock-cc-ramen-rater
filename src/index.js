// write your code here
function fetchData () {    
    fetch('http://localhost:3000/ramens')
    .then(response=>response.json())
    .then(data=>data.forEach(e=>renderData(e)))
}
fetchData()

const renderData = (data) => {
    const img  = document.createElement('img');
    img.src = data.image;
    img.alt = data.name;
    // const resta = data.restaurant;
    // const com = data.com;
    // const rat = parseInt(data.rating);
    document.querySelector('#ramen-menu').append(img);

    document.querySelector('#ramen-menu').addEventListener('click',(e)=>{
        console.log('Click')
        const i = document.querySelector('.detail-image');
        // i.src = e.target.image.value;
        i.src = data.image;
    
        const h2 = document.querySelector('h2.name');
        // h2.textContent = e.target.name.value;
        h2.textContent = data.name;

        const h3 = document.querySelector('h3.restaurant');
        // h3.textContent = e.target.restaurant.value;
        h3.textContent = data.restaurant;
    })
}




document.querySelector('#new-ramen').addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log('Form Submitted!')
    const ramen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.comment
    }
    renderData(ramen)
})