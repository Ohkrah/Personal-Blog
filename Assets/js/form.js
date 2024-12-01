//variables for input methods
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submit = document.querySelector('#submit');


//troubleshot issue with pulling value of input boxes at submit vs on pageload
//troubleshot issue with repeated nested arrays in localStorage
//function to create and store new blog posts
function newBlogPost() {
    let blogs = [];
    if (localStorage.getItem('blogs')){
        blogs = (JSON.parse(localStorage.getItem('blogs')));
        console.log("testing for local storage print" + JSON.parse(localStorage.getItem('blogs')));
        localStorage.clear();
    }
    
    console.log('calling function');
    
    const post = {
        username: username.value,
        title: title.value,
        content: content.value
    };

    blogs.push(post);

    localStorage.setItem('blogs', JSON.stringify(blogs))

    console.log('saved to local storage');
    console.log(localStorage.getItem('blogs'));
    
};




