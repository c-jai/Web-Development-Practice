let posts = [{title: "Post 1", body: "This is post 1"},
            {title: "Post 2", body: "This is post 2"}];


function getPosts(){
    setTimeout(() => {
        posts.forEach((post) => console.log(post.title))
    }, 2000); //execute the function after timeout of 3 sec, added timeout to simulate a typical fetch from an API
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
    
            let error = false;

            if (error)
                reject("Something went wrong");
            else
                resolve();

        }, 3000)
    })
    
}

async function init(){
    await createPost({title: "Post 3", body: "This is post 3"});

    getPosts();
}

init();