const posts = document.getElementById('postsBox');
const newPost = document.getElementById('returnButton');
const deleteAll = document.getElementById('clearPosts');

const theme = document.querySelector('body');
const blogSwitch = document.getElementById('blogSwitch');

let tempData = {
    username: [],
    title: [],
    content: [],
}

newPost.addEventListener('click', function (){ 
    window.location.replace('index.html')
})

function loadPosts(){
    const data = JSON.parse(localStorage.getItem('blogs'));

    if(data){
        for(let i = 0; i<data.length; i++){
            tempData.username.push(data[i].username);
            tempData.title.push(data[i].title);
            tempData.content.push(data[i].content);
            console.log('tempData' + tempData);
            
        }
            
        console.log(tempData);
        //had trouble getting render but was able to troubleshoot with help of Xpert
        //fixed multiple printing issue with help of render
        for(let i = 0; i < tempData.username.length; i++){
        //post box
        const post = document.createElement('section');
        post.classList.add('post', 'center')
        posts.appendChild(post);
        //username
            const userDiv = document.createElement('div');
            userDiv.textContent = tempData.username[i];
            userDiv.style.left = tempData.username[i].left;
            userDiv.style.top = tempData.username[i].top;
            userDiv.classList.add('postUser', 'center');
            post.appendChild(userDiv); 
        //title
            const titleDiv = document.createElement('div');
            titleDiv.textContent = tempData.title[i];
            titleDiv.style.left = tempData.title[i].left;
            titleDiv.style.top = tempData.title[i].top;
            titleDiv.classList.add('postTitle', 'center');
            post.appendChild(titleDiv); 
        //content
            const contentDiv = document.createElement('div');
            contentDiv.textContent = tempData.content[i];
            contentDiv.style.left = tempData.content[i].left;
            contentDiv.style.top = tempData.content[i].top;
            contentDiv.classList.add('postContent', 'center');
            post.appendChild(contentDiv); 

            
        }
    }
}

deleteAll.addEventListener('click', function(){
    localStorage.clear();
    window.location.reload();
});

blogSwitch.addEventListener('click', function(){
    if(theme.classList.contains('light')){
        theme.classList.replace('light','dark');
    }else{
        theme.classList.replace('dark','light');
    }
})

loadPosts();