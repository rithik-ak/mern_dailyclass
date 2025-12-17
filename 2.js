let p=new Promise((resolve,reject)=>{
    let ic=false;
    if(ic){
        resolve("i can come");
    }   
    else{
        reject("i can't come");
    }
}
);

p.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});