console.log("Begin");
async function a(){
    await new Promise((resolve)=>{
        setTimeout(()=>{
            let sum=0
            for(i=0; i<1000000; i++){
                sum+=i
            }
            console.log(sum)
        },2000);
    })
}
a()
console.log("End")
