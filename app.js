let navElement = document.createElement("nav");
let ulElement = document.createElement("ul");
//home
let home = document.createElement("li");
let homeLink = document.createElement("a");
homeLink.setAttribute("href","#");
homeLink.textContent = "Home";
//about
let about = document.createElement("li");
let aboutLink = document.createElement("a");
aboutLink.setAttribute("href","#");
aboutLink.textContent = "About";
//Contact
let contact = document.createElement("li");
let contactLink = document.createElement("a");
contactLink.setAttribute("href","#");
contactLink.textContent = "Contact";
//services
let services = document.createElement("li");
let servicesLink = document.createElement("a");
servicesLink.setAttribute("href","#");
servicesLink.textContent = "Services";
//blog
let blog = document.createElement("li");
let blogLink = document.createElement("a");
blogLink.setAttribute("href","#");
blogLink.textContent = "Blog";

//input
let loginElement = document.createElement("div");
let loginInput = document.createElement("input");
let loginButton = document.createElement("button")
loginButton.innerText = "open";
loginButton.addEventListener("click", function(e){
    if(loginInput.getAttribute("type") === "password"){
        loginInput.setAttribute("type", "text");
        loginButton.innerText = "close";
    }else{
        loginInput.setAttribute("type", "password");
        loginButton.innerText = "open";
    }
});
loginInput.setAttribute("type", "password");


home.appendChild(homeLink);
about.appendChild(aboutLink);
contact.appendChild(contactLink);
services.appendChild(servicesLink);
blog.appendChild(blogLink);
ulElement.appendChild(home);
ulElement.appendChild(about);
ulElement.appendChild(contact);
ulElement.appendChild(services);
ulElement.appendChild(blog);
loginElement.appendChild(loginInput);
loginElement.appendChild(loginButton);
navElement.appendChild(ulElement);
navElement.appendChild(loginElement);
document.body.appendChild(navElement);

document.body.setAttribute("style","margin:0;padding:0;")
navElement.setAttribute("style","background-color:#ccc;display: flex; justify-content: space-between; align-items: center;");
ulElement.setAttribute("style","display:flex;margin:0;list-style:none;margin:0;padding:15px;");
loginElement.style.marginRight = "40px";
loginInput.setAttribute("style", "padding:none;border:1px solid #ddd;max-width: 200px;border-radius:5px;");
loginButton.setAttribute("style", "border: none; background: transparent;"); 

document.querySelectorAll("a").forEach(function(a){
    a.setAttribute("style","text-decoration:none;padding:15px;color:#000;")
    a.addEventListener("mouseenter",function(b){
        b.target.setAttribute("style","padding:15px;background-color:#000;text-decoration:none;padding:15px;color:#fff;");
    });
    a.addEventListener("mouseleave",function(c){
        c.target.setAttribute("style","padding:15px;background-color:#ccc;text-decoration:none;padding:15px;color:#000;");
    });

});
