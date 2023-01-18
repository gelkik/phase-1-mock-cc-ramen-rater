// // write your code here
  
// fetch('http://localhost:3000/ramens')
//     .then(response=>response.json())
//     .then(data=>renderData(data))


// const renderData = (e) => {
//     e.forEach((data)=>{    
//         const img  = document.createElement('img');
//         img.src = data.image;
//         img.alt = data.name;
//         // const resta = data.restaurant;
//         // const com = data.com;
//         // const rat = parseInt(data.rating);
//         // document.querySelector('#ramen-menu').addEventListener('click',()=>{
//         img.addEventListener('click',()=>{
//             const i = document.querySelector('.detail-image');
//             // i.src = e.target.image.value;
//             i.src = data.image;
        
//             const h2 = document.querySelector('.name');
//             // h2.textContent = e.target.name.value;
//             h2.textContent = data.name;

//             const h3 = document.querySelector('.restaurant');
//             // h3.textContent = e.target.restaurant.value;
//             h3.textContent = data.restaurant;

//             const span = document.querySelector('#rating-display');
//             span.textContent = data.rating;

//             const p = document.querySelector('#comment-display');
//             p.textContent = data.comment;
            

//         })

//         document.querySelector('#ramen-menu').append(img);
//     })
// }




// document.querySelector('#new-ramen').addEventListener('submit', (e)=>{
//     e.preventDefault()
//     console.log('Form Submitted!')
//     const ramen = {
//         name: e.target.name.value,
//         restaurant: e.target.restaurant.value,
//         image: e.target.image.value,
//         rating: e.target.rating.value,
//         comment: e.target['new-comment'].value
//     }
//     renderData(ramen)
// })


















fetch('http://localhost:3000/ramens')
    .then(r=>r.json())
    .then(data=>renderData(data))

const renderData = (data) =>{
    data.forEach(e=>{
        const img = document.createElement('img');
        img.src = e.image;
        img.alt = e.name;
        console.log(e)

        img.addEventListener('click', ()=>{
            const i = document.querySelector('.detail-image');
            i.src = e.image;

            const name = document.querySelector('.name');
            name.textContent = e.name;

            const rest = document.querySelector('.restaurant');
            rest.textContent = e.restaurant;

            const rating = document.querySelector('#rating-display');
            rating.textContent = e.rating;

            const com = document.querySelector('#comment-display');
            com.textContent = e.comment;
        })


        document.querySelector('#ramen-menu').append(img)
    })

}

const newRamen = document.querySelector('#new-ramen')
newRamen.addEventListener('submit',(e)=>{
    e.preventDefault()
    const ramen = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    console.log(ramen)
    fetch('http://localhost:3000/ramens',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ramen)
    })
    .then(response=>response.json())
    .then(ramen=>renderData(ramen))
})
