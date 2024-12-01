const theme = document.querySelector('body');
const themeSwitch = document.getElementById('themeSwitch');
const blogSwitch = document.getElementById('blogSwitch');

submit.addEventListener('click', function () {
    if(username.value === '' || title.value === '' || content.value === ''){
        window.alert('Please complete all forms before submitting');
    } else {
        window.location.replace('blog.html');
        newBlogPost();
    }
})

themeSwitch.addEventListener('click', function(){
    if(theme.classList.contains('light')){
        theme.classList.replace('light','dark');
    }else{
        theme.classList.replace('dark','light');
    }
})