async function blogs(){
    const response = await fetch("./js/blog.json");
    const data = await response.json();
    addDom(data)
 console.log(data);
}


function addDom(data){
    console.log(data);

    let blogs= document.querySelector("#blogs");
    data.forEach(blog => {
        console.log(blog);
       
        blogs.innerHTML+=`

         <div class="blog-div">
                <img src="${blog.image}" alt="">
                <a href="#"><h2>${blog.title}</h2></a>
                <div class="info-blog">
                   
                    <span>Date:${blog['date-info'].date}</span>
                    <span>Comments:${blog['date-info'].comments}</span>
                </div>
                <p>${blog.description}.</p>
            </div>

        
        
        
        
        
        `
     

    });
}


document.addEventListener('DOMContentLoaded', function(){
    blogs();
 
})

