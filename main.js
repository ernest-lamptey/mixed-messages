// FUNCTION...
import { data, headings, preps } from "./modules/data.js"

// select random topic
let quote = document.getElementById('quote')
let topic = document.getElementById('topic')


function randomSelect(item){
    return item[Math.floor(Math.random() * item.length)]
}

// this function changes topic and message
function change(){
    // keys of the data object representing the various topics
    const keys = Object.keys(data)
    // random select one of the keys as the chosen topic
    const randomSelection = randomSelect(keys)
    // retrieve the value of the selected key
    const messageSelect = data[randomSelection]
    // random select one of the messages in the list
    const singleRandomMessage = randomSelect(messageSelect) 
    topic.innerHTML = `${randomSelect(headings)} ${randomSelect(preps)} ${randomSelection.toUpperCase()}`;
    quote.innerHTML = `${singleRandomMessage}.`;
}

// event listener to call the function when the button is clicked
let eventTarget = document.getElementById('button');
eventTarget.addEventListener('click', change);