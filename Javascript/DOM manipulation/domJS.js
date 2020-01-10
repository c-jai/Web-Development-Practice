// *************** selectors: select html dom elements, put them in variables and manipulate them ***************

//single element

const form = document.getElementById("my-form"); //selects element of specific id
console.log(document.querySelector("h1")); //can select any class, tags etc and not just id

console.log(form);

//multiple elements

const allItems = document.querySelectorAll(".item"); // can run array methods on the result

allItems.forEach((item) => console.log(item));

const items = document.querySelector(".items");
//items.remove(); //removes all elements with class items
//items.lastElementChild.remove();
items.firstElementChild.textContent = "hello";
items.children[1].textContent = "world";
items.lastElementChild.innerHTML = "<h3>jai</h3>" //dynamically adds html

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("button clicked")
    }   
); //e is the event parameter