function toCapitalCase(text) {
    words = text.split(' ')
    for (i=0; i < words.length; i++)
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
        text = words.join(' ');
    return text; 
}