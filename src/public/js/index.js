const form = document.getElementById('inputGpt');
form.addEventListener('submit',async(evt)=>{
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value,key)=>obj[key]=value);
    fetch('/',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(result=>result.json())
    .then(json=>{
        console.log(json)
        const text = document.getElementById('text')
        text.innerHTML = `${json.response}`
    })
});
