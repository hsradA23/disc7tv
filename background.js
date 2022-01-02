let replace = (originalMessage) => {
    let words = originalMessage.split(" ")
    for(let i = 0; i < words.length; i++){
        if(emotes.get(words[i]) !== undefined){
            words[i] = "<img class='customEmote markup-2BOw-j' src='"+ emotes.get(words[i]) +"'>"
        }
    }
    return words.join(' ')
}


setInterval(() => {
    p = document.getElementsByClassName("messageContent-2qWWxC")
    for (const msg of p){
        msg.innerHTML = replace(msg.innerHTML)
    } 
}, 1500);