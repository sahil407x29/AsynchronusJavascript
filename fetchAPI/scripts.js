const image = document.querySelector('img')
const button = document.querySelector('.Fetcher')

const value = ()=> { fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data)=>{
    image.src = data.message;
  });
}

button.addEventListener('click',value)

