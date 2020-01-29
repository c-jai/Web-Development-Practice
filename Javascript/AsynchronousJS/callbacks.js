//asynchronous: when you dont want to wait until something is finished and continue with your other program

let posts = [{title: "Post 1", body: "This is post 1"},
            {title: "Post 2", body: "This is post 2"}];


function getPosts(){
    setTimeout(() => {
        posts.forEach((post) => console.log(post.title))
    }, 2000); //execute the function after timeout of 3 sec, added timeout to simulate a typical fetch from an API
}

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback(); //since a new post will be pushed after 3 sec, initial call of getPosts() will not return 
        //the newly created post, hence "getPosts()" as a callback function is provided
    }, 3000)
}

getPosts();
createPost({title: "Post 3", body: "This is post 3"}, getPosts);
