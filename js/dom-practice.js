

// given style in article tag by using getElementsByTagName in JS
const articles = document.getElementsByTagName('article');
for (const article of articles) {
    article.style.border = '2px solid red';
    article.style.margin = '5px';
    article.style.padding = '5px';
    article.style.borderRadius = '10px';
}

// style given in p tag
const pTags = document.getElementsByTagName('p');
for(const pTag of pTags ){
    pTag.style.fontSize = '18px';
    pTag.style.color = 'green';
}

// style given in h3 tag
const h3Tags = document.getElementsByTagName('h3');
for(const h3Tag of h3Tags){
    h3Tag.style.textAlign = 'center';
    h3Tag.style.backgroundColor = 'yellow';
}

//========================================================================



