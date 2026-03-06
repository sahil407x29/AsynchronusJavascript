const image = document.querySelector('img')
const button = document.querySelector('.Fetcher')

button.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest;

    xhr.responseType = 'json'
    xhr.addEventListener('load',()=> {
        
    //  const data = JSON.parse(xhr.response)
        // console.log(data.message)
        // image.src = data.message
    //   console.log(xhr)
         image.src = xhr.response.message
    })
  xhr.open('GET','https://dog.ceo/api/breeds/image/random')
  xhr.send()
})