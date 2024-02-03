const form=document.querySelector(".form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    const amount=document.querySelector("#Expenses").value;
    const description=document.querySelector("#Description").value;
    const category=document.querySelector("#Category").value;

    let myobj={
        Choosen_amount:amount,
        Choosen_description:description,
        Choosen_category:category
    }

    let myobj_serial=JSON.stringify(myobj);
    localStorage.setItem(myobj.Choosen_amount,myobj_serial);

    const user_list=document.querySelector("#list");
    const newli=document.createElement('li');
    newli.innerHTML=newli.innerHTML+`<li> ${myobj.Choosen_amount} - ${myobj.Choosen_description} - ${myobj.Choosen_category}</li><button type="button" class="delete-btn">Delete</button><button type="button" class="edit-btn">Edit</button>`;

    user_list.appendChild(newli);

    const deletefunction=document.querySelector(".delete-btn");
    deletefunction.addEventListener("click",function(){
        localStorage.removeItem(myobj.Choosen_amount);
        user_list.removeChild(newli);
    })

    const editfunction=document.querySelector(".edit-btn");
    editfunction.addEventListener("click",function(){

        localStorage.removeItem(myobj.Choosen_amount);
        user_list.removeChild(newli);
        document.querySelector("#Expenses").value = myobj.Choosen_amount;
        document.querySelector("#Description").value = myobj.Choosen_description;
        document.querySelector("#Category").value = myobj.Choosen_category;
        
    })
    
})
