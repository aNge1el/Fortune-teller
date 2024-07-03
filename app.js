const fortuneButton = document.getElementById("fortuneButton")
const instructions = document.getElementById("instructions")

const List = [{
    // good endings
    id: 1,
    result: "A new chapter is about to begin for you."
},
{
    id: 2,
    result: "A beautiful, smart, and loving person will be coming into your life."
},
{
    id: 3,
    result: "A fresh start will put you on your way."
},
{
    id: 4,
    result: "A friend asks only for your time, not your money."
},
{
    id: 5,
    result: "A golden opportunity is heading your way."
},
{
    id: 6,
    result: "A lifetime of happiness lies ahead of you."
},
{
    id: 7,
    result: "A new perspective will come with the new year."
},
{
    id: 8,
    result: "Adventure can be real happiness."
},
{
    id: 9,
    result: "An unexpected event will bring you riches."
},
{
    id: 10,
    result: "Believe in yourself and others will too."
},
{
    id: 11,
    result: "Change is happening in your life, so go with the flow!"
},
{
    id: 12,
    result: "Don't just think, act!"
},
{
    id: 13,
    result: "Good news will be brought to you by mail."
},
{
    id: 14,
    result: "Hard work pays off in the future, laziness pays off now."
},
{
    id: 15,
    result: "Your life will be happy and peaceful."
},
{   // after the 15th is Neutral
    id: 16,
    result: "An important decision will soon need to be made." 
},
{
    id: 17,
    result: "You will soon embark on a journey."
},
{
    id: 18, 
    result: "Unexpected changes are in your future." 
},
{
    id: 19, 
    result: "A conversation with a stranger will bring new insights." 
},
{    
    id: 20, 
    result: "Routine will bring stability to your life." 
},
{ 
    id: 21,
    result: "Your talents will be recognized and rewarded." 
},
{
    id: 22, 
    result:"An opportunity to help someone will arise." 
},
{
    id: 23, 
    result: "A brief pause from your routine will be beneficial." 
},
{
    id: 24, 
    result: "You will soon find clarity in an uncertain situation." 
},
{
    id: 25, 
    result: "Balance is the key to a fulfilling life." 
},
{
    id: 26, 
    result: "A quiet evening will bring you peace of mind." 
},
{
    id: 27,
    result: "You will discover something new about yourself." 
},
{
    id: 28, 
    result: "A new acquaintance will become a trusted friend." 
},
{
    id: 29, 
    result: "Your patience will soon be rewarded." 
},
{ // after the 29th its all bad fortunes
    id: 30,
    result: "You will find solutions to your current challenges." 
},
{
    id: 31, 
    result: "A difficult challenge lies ahead." 
},
{
    id: 32, 
    result: "Be cautious of those around you." 
},
{
    id: 33, 
    result: "An unexpected setback may occur." 
},
{
    id: 34,
    result: "Disappointment will soon pass your way." 
},
{
    id: 35, 
    result: "A misunderstanding will cause temporary strife." 
},
{
    id: 36, 
    result: "Financial caution is advised."
},
{
    id: 37, 
    result: "A friendship may face a test." 
},
{
    id: 38, 
    result: "Tread carefully in upcoming decisions." 
},
{
    id: 39, 
    result: "A challenging period is on the horizon." 
},
{
    id: 40, 
    result: "Your patience will be tested." 
},
{
    id: 41,
    result: "Plans may not unfold as expected." 
},
{
    id: 42,
    result: "Beware of false promises." 
},
{
    id: 43,
    result: "Health concerns may arise; take care." 
},
{
    id: 44,
    result: "Emotional turbulence may be near." 
},
{
    id: 45, 
    result: "Unexpected obstacles will challenge your path." 
}];

const generateMessage = () => {
    let randomIndex = Math.floor(Math.random() * 45)
    return List[randomIndex].result;
}

fortuneButton.addEventListener("click", ()=> {
    let message = generateMessage(List)
    instructions.innerText = message;
})