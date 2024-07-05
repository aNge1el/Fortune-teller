const fortuneButton = document.getElementById("fortuneButton");
const instructions = document.getElementById("instructions");
const container = document.getElementById("container");
const themeMessage = document.getElementById("themeMessage");

const fortunes = [{
    // good endings
    id: 1,
    result: "A new chapter is about to begin for you.",
    theme: "good"
},
{
    id: 2,
    result: "A beautiful, smart, and loving person will be coming into your life.",
    theme: "good"
},
{
    id: 3,
    result: "A fresh start will put you on your way.",
    theme: "good"
},
{
    id: 4,
    result: "A friend asks only for your time, not your money.",
    theme: "good"
},
{
    id: 5,
    result: "A golden opportunity is heading your way.",
    theme: "good"
},
{
    id: 6,
    result: "A lifetime of happiness lies ahead of you.",
    theme: "good"
},
{
    id: 7,
    result: "A new perspective will come with the new year.",
    theme: "good"
},
{
    id: 8,
    result: "Adventure can be real happiness.",
    theme: "good"
},
{
    id: 9,
    result: "An unexpected event will bring you riches.",
    theme: "good"
},
{
    id: 10,
    result: "Believe in yourself and others will too.",
    theme: "good"
},
{
    id: 11,
    result: "Change is happening in your life, so go with the flow!",
    theme: "good"
},
{
    id: 12,
    result: "Don't just think, act!",
    theme: "good"
},
{
    id: 13,
    result: "Good news will be brought to you by mail.",
    theme: "good"
},
{
    id: 14,
    result: "Hard work pays off in the future, laziness pays off now.",
    theme: "good"
},
{
    id: 15,
    result: "Your life will be happy and peaceful.",
    theme: "good"
},
{   // after the 15th is Neutral
    id: 16,
    result: "An important decision will soon need to be made.",
    theme: "Neutral"
},
{
    id: 17,
    result: "You will soon embark on a journey.",
    theme: "Neutral"
},
{
    id: 18, 
    result: "Unexpected changes are in your future.",
    theme: "Neutral"
},
{
    id: 19, 
    result: "A conversation with a stranger will bring new insights.",
    theme: "Neutral" 
},
{    
    id: 20, 
    result: "Routine will bring stability to your life.",
    theme: "Neutral" 
},
{ 
    id: 21,
    result: "Your talents will be recognized and rewarded.",
    theme: "Neutral" 
},
{
    id: 22, 
    result:"An opportunity to help someone will arise.",
    theme: "Neutral" 
},
{
    id: 23, 
    result: "A brief pause from your routine will be beneficial.",
    theme: "Neutral" 
},
{
    id: 24, 
    result: "You will soon find clarity in an uncertain situation.",
    theme: "Neutral" 
},
{
    id: 25, 
    result: "Balance is the key to a fulfilling life.",
    theme: "Neutral" 
},
{
    id: 26, 
    result: "A quiet evening will bring you peace of mind.",
    theme: "Neutral" 
},
{
    id: 27,
    result: "You will discover something new about yourself.",
    theme: "Neutral" 
},
{
    id: 28, 
    result: "A new acquaintance will become a trusted friend.",
    theme: "Neutral"
},
{
    id: 29, 
    result: "Your patience will soon be rewarded.",
    theme: "Neutral" 
},
{ // after the 29th its all bad fortunes
    id: 30,
    result: "You will find solutions to your current challenges.",
    theme: "bad" 
},
{
    id: 31, 
    result: "A difficult challenge lies ahead.",
    theme: "bad" 
},
{
    id: 32, 
    result: "Be cautious of those around you.",
    theme: "bad" 
},
{
    id: 33, 
    result: "An unexpected setback may occur.",
    theme: "bad" 
},
{
    id: 34,
    result: "Disappointment will soon pass your way.",
    theme: "bad" 
},
{
    id: 35, 
    result: "A misunderstanding will cause temporary strife.",
    theme: "bad" 
},
{
    id: 36, 
    result: "Financial caution is advised.",
    theme: "bad" 
},
{
    id: 37, 
    result: "A friendship may face a test.",
    theme: "bad"  
},
{
    id: 38, 
    result: "Tread carefully in upcoming decisions.",
    theme: "bad" 
    
},
{
    id: 39, 
    result: "A challenging period is on the horizon.",
    theme: "bad"
},
{
    id: 40, 
    result: "Your patience will be tested.",
    theme: "bad" 
},
{
    id: 41,
    result: "Plans may not unfold as expected.",
    theme: "bad" 
},
{
    id: 42,
    result: "Beware of false promises.",
    theme: "bad"
},
{
    id: 43,
    result: "Health concerns may arise; take care.", 
    theme: "bad"
},
{
    id: 44,
    result: "Emotional turbulence may be near.", 
    theme: "bad"
},
{
    id: 45, 
    result: "Unexpected obstacles will challenge your path.",
    theme: "bad"
}];

const generateMessage = () => {
    let randomIndex = Math.floor(Math.random() * fortunes.length)
    return fortunes[randomIndex];
}

fortuneButton.addEventListener("click", ()=> {
    let fortune = generateMessage()
    instructions.innerText = fortune.result;
    let theme = fortune.theme;
    
switch(theme){
    case "good": 
        container.style.backgroundColor = "green";
        themeMessage.innerText = "Good Ending";
        break;
    case "Neutral": 
        container.style.backgroundColor = "gray";
        themeMessage.innerText = "Neutral Ending";
        break;
    case "bad": 
        container.style.backgroundColor = "red";
        themeMessage.innerText = "Bad Ending";
        break;
}
});

