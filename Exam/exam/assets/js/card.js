
function fetchData() {
    fetch('http://localhost:3000/exam')
    .then((res)=>res.json())
    .then(data=>{
       const cardBox=document.querySelector('.cardBox');

       for (let i = 0; i < 4; i++) {
        const element=data[i];

        const card = document.createElement('div');
        card.className='cards';

        const cardImg = document.createElement('div');
        cardImg.className='cardImg';
        const picture = document.createElement('img');
        picture.src=element.img_url;
// appen 
        cardImg.appendChild(picture);
    
        const cardTime = document.createElement('div');
        cardTime.className='cardTime';

        const time = document.createElement('p');
        time.innerText=element.time;
// appen 
cardTime.appendChild(time);
        

        const cardText = document.createElement('div');
        cardText.className='cardText';

        const name = document.createElement('h6');
        name.innerText= element.name;

        const official =document.createElement('p');
        official.innerText=element.text;

        cardText.appendChild(name);
        cardText.appendChild(official);

        const likes =document.createElement('div');
        likes.className='likes'

        const like = document.createElement('p');
        like.innerText= element.like;

        const comment =document.createElement('p');
        comment.innerText=element.comment;

// append 
likes.appendChild(like);
likes.appendChild(comment);

        card.appendChild(cardImg);
        card.appendChild(cardTime);
        card.appendChild(cardText);
        card.appendChild(likes);

        cardBox.appendChild(card);

        console.log(cardTime);
       };
    });
    
};

fetchData()

console.log(fetchData);



//     post 
const create=document.querySelector(".create");
const post =document.createElement("a");
post.innerText="create"
post.target="_blank"
post.href="post.html"
create.append(post);



// delete 
const dlt = document.querySelector(".delete");

dlt.addEventListener('click',function () {
    fetch('http://localhost:3000/exam/2',{
        method:"DELETE"
    })
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    });

})

// update 
const update = document.querySelector(".update");

update.addEventListener('click',function () {
    fetch('http://localhost:3000/exam/5',{
        method:"PUT",
        body: JSON.stringify({
            time:"31",
            name:"may",
            text:"exam"
        }),   
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res)=>res.json())
    .then(data=>{
        console.log(data);
    });

})


// more 
const more=document.querySelector(".more");
const moreLoad =document.createElement("a");
moreLoad.innerText="moreLoad"
moreLoad.href="more.html"
moreLoad.target="_blank"
more.append(moreLoad);






























