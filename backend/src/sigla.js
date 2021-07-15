const siglaDetermination =  (phrase) =>{
    const newPhrase = phrase.split(" ");
    let sigla = "";
    newPhrase.map((word)=>{
        if(word.length >= 3)
            sigla = sigla + word[0]
    });
    return sigla
};

module.exports = siglaDetermination