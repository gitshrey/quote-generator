let apiQuotes=[];

const newText=document.querySelector('.quote-note');
const newTextBtn=document.querySelector('.new-quote');
const authorName=document.querySelector('.author-name');
const twitterBtn=document.querySelector('.twitter-button');
 
const quoteText=document.querySelector('.quote-text');


//on click button
newTextBtn.addEventListener("click",function newQuote(){
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
   let newQ=quote.text;
   let newA=quote.author;
   console.log(newQ);
   console.log(newA);
   
   if(!quote.author){
    authorName.textContent="Unknown";
   }else{
    authorName.textContent=newA;
   }
    //long quote
   if (quote.text.length>80){
    quoteText.classList.add('long-quote');
   } 
   else{
    quoteText.classList.remove('long-quote')
   }
    newText.textContent=newQ;

    
});


//tweet button




twitterBtn.addEventListener("click",function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${newText.textContent} - ${authorName.textContent}`;
    window.open(twitterUrl,'_blank');
})






//get quotes from api


async function getQuotes(){
    
    try {
        const response=await fetch('https://type.fit/api/quotes');
        apiQuotes=await response.json();
        newQuote();
        

        
    } catch (error) {
        
    }
}

getQuotes();