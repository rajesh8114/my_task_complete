// const data = fetch("https://prakash-dey.github.io/api/myntraV2.json")
// data.then(result => result.json())
//      .then(result => console.log(result))
​
const phone = document.querySelector("#phone");
​let result;
async function apiCall(){
    const data = await fetch("https://prakash-dey.github.io/api/myntraV2.json")
    const result = await data.json()
​
    result.forEach(item => {
        
        phone.innerHTML += `<h1 class="name">${item.Full_name}</h1> `;
    })
}
​
apiCall()