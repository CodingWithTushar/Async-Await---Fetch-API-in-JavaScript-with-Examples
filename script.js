console.log('Its Working');

/*async const GetData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 5000);
    })
}*/
//Simulate Getting Dat From A Server 
/*async function GetData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 5000);
    })
}*/
async function GetData() {
       let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       let data = await x.json()
       console.log(data);
       return 345
}
async function Main() {
    
    console.log('Loading Modules');
    
    console.log('Do SomeThing Else');
    
    let DATA = await GetData()
    
    console.log(DATA);
    console.log('Process Data ');
}
Main()
/*DATA.then ((v)=>{
    console.log(DATA);
    console.log('Process Data ');
})*/





