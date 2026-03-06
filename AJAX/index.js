const image = document.querySelector('img')
const button = document.querySelector('.Fetcher')

button.addEventListener('click',()=>{
    const xhr = new XMLHttpRequest;

    // xhr.responseType = 'json'
    xhr.addEventListener('load',()=> {
        
    //  const data = JSON.parse(xhr.response)
        // console.log(data.message)
        // image.src = data.message
    //   console.log(xhr)
        //  image.src = xhr.response.message
        console.log(xhr)
    })
  xhr.open('GET','https://procodrr.vercel.app/?sleep=3000',false)
  // 3rd argument here "false" is used to set AJAX  i.e true by default 
  // marking it false will make the API call synchronus making the main thread block 
  xhr.send()
})

// Click button
//    ↓
// Create XHR
//    ↓
// Open request
//    ↓
// Send request
//    ↓
// Server responds
//    ↓
// load event fires
//    ↓
// image.src updated