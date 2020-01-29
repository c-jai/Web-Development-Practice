
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

createPost({title: "Post 3", body: "This is post 3"})
.then(getPosts)
.catch(err => console.log(err)) //basically createPosts() returns a promise, 
//if it has resolved then "then" part is executed, if not then "catch" part is executed


//Promise all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {resolve("Goodbye")}, 2000)
})

//Promise.all creates a new promise which resolves 
//when all the promises are resolved or rejected when any one of them is rejected
Promise.all([promise1, promise2, promise3]).then(values => console.log(values));