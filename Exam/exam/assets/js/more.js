
// const moreBox=document.querySelector('.moreCard');
// function fetchData() {
//     fetch('http://localhost:3000/exam')
//     .then((res)=>res.json())
//     .then(data=>{
  

//        for (let i = 0; i < data.lenght; i++) {
//         const element=data[i];

//         const more = document.createElement('div');
//         more.className.add('cards');

//         const cardImg = document.createElement('div');
//         cardImg.className='cardImg';
//         const picture = document.createElement('img');
//         picture.src=element.img_url;
// // appen 
//         cardImg.appendChild(picture);
    
//         const cardTime = document.createElement('div');
//         cardTime.className='cardTime';

//         const time = document.createElement('p');
//         time.innerText=element.time;
// // appen 
// cardTime.appendChild(time);
        

//         const cardText = document.createElement('div');
//         cardText.className='cardText';

//         const name = document.createElement('h6');
//         name.innerText= element.name;

//         const official =document.createElement('p');
//         official.innerText=element.text;

//         cardText.appendChild(name);
//         cardText.appendChild(official);

//         const likes =document.createElement('div');
//         likes.className='likes'

//         const like = document.createElement('p');
//         like.innerText= element.like;

//         const comment =document.createElement('p');
//         comment.innerText=element.comment;

// // append 
// likes.appendChild(like);
// likes.appendChild(comment);

//         more.appendChild(cardImg);
//         more.appendChild(cardTime);
//         more.appendChild(cardText);
//         more.appendChild(likes);

//         moreBox.appendChild(more);
//         console.log(more);
//        };
//     });
    
// };

// fetchData()


const moreCard=document.querySelector(".moreCard");
fetch("http://localhost:3000/exam")
.then((res)=> res.json())
.then((data)=>{
    data.forEach((item,i) => {
        if (i<data.length) {
                const card = document.createElement('div');
                card.className='cards';
        
            
            
                const cardTime = document.createElement('div');
                cardTime.className='cardTime';
        
                const time = document.createElement('p');
                time.innerText=item.time;
        // appen 
        cardTime.appendChild(time);
                
        
                const cardText = document.createElement('div');
                cardText.className='cardText';
        
                const name = document.createElement('h6');
                name.innerText= item.name;
        
                const official =document.createElement('p');
                official.innerText=item.text;
        
                cardText.appendChild(name);
                cardText.appendChild(official);
        

              
                card.appendChild(cardTime);
                card.appendChild(cardText);
               
        
                moreCard.appendChild(card);
        

    };
    });
})
