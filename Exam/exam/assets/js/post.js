const create=document.querySelector(".create");
create.addEventListener('click',function ()  {
    const time = document.querySelector(".time").value;
    const name=document.querySelector(".name").value;
    const text =document.querySelector(".text").value;

    let obj = {
        time: time,
        name: name,
        text: text 
    }

    fetch("http://localhost:3000/exam",{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    } )

    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    });

})