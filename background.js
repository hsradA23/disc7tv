let emotes = new Map()
emotes.set("AlienPls3",  "https://cdn.7tv.app/emote/6186b9574ea2f24e50099c0c/1x")
emotes.set("ModCheck", "https://cdn.7tv.app/emote/60abf171870d317bef23d399/1x")
emotes.set("WidelyBased", "https://cdn.7tv.app/emote/60bd587060b022372c085417/1x")


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
