//  node docs/test.js

function promise(boolean){
  return new Promise( ( resolve, reject) =>{
  setTimeout(()=>{
    if (boolean){
      resolve('Yes')
    }else{
      reject('No')
    }
  }, 100)
  })
}  

async function asyncFn() {
  console.log('1')  
  const res1 = await promise(true)
  console.log('2', res1)  
  const res2 = await promise(true)
  console.log('3', res2)  
}

asyncFn()

function promise(boolean){
return new Promise((resolve, reject)=>{
setTimeout(()=>{
if (boolean){
  resolve('Yes')
} else {
  reject('No')
}
}, 100)
  })
}