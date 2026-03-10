const resolveBtn = document.querySelector(".resolve-btn");
const rejectBtn = document.querySelector(".reject-btn");

let prom = new Promise((resolve, reject) => {
  //    resolveBtn.addEventListener('click',()=> {
  //     resolve('Promise resolved')
  //    })
  //    rejectBtn.addEventListener('click',()=> {
  //     reject('Promise rejected')
  //    })
  resolve("hii");
});
let prom2 = new Promise((resolve, reject) => {
     resolveBtn.addEventListener('click',()=> {
      resolve('Promise resolved')
     })
     rejectBtn.addEventListener('click',()=> {
      reject('Promise rejected')
     })
   
});

setTimeout(() => {
  console.log("timeout");
});
prom
  .then((data) => {
    // .then returns a promise and is used when a promise is resolved
    console.log(data);
  })
  .catch((data) => {
    // .catch is used when a promise is rejected
    console.log(data);
  });

// here the promise will run first
// even if both are async the promise will go to microstask queue i.e higher priorty
// and setTimeout to the callback Queue or MacroTask Queue


prom2.then((data)=> {
    console.log(data)
    return 15
   
}).then((data)=> {
    console.log(data)
    
})