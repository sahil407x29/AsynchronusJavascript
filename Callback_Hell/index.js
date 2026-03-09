function makeHttpRequest(method,url,callback) {
   const xhr = new XMLHttpRequest;

    xhr.responseType = 'json'
    xhr.addEventListener('load',()=> {
    callback(xhr.response)
    })
  xhr.open(method,url)
  xhr.send()
}

makeHttpRequest('GET','https://dummyjson.com/users',(userData)=> {
  console.log(userData)
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${userData.users[0].id}`,(postData)=> {
    console.log(postData)
    makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`,(commentData)=> {
      console.log(commentData)
    })
  })
})