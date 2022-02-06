console.log('i am from summary.js');

const blogs = document.getElementsByTagName('p');
// console.log(blogs);

for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
}

const qou = document.getElementById('special-blog');
// qou.innerText = "this new text for qou";

qou.innerHTML = `
<h4>Special inner Html</h4>
<div>
    <ul>
        <li>sp -1</li>
        <li>sp -2</li>
    </ul>
</div>
`

const friends = document.getElementById('friends');
// console.log(friends.childNodes);
console.log(friends.children);

// remove fifth element
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// create element
const friend = document.createElement('li');
friend.innerText = "Friend-11";
friends.appendChild(friend);


