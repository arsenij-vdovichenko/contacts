const formRef = document.querySelector("form")
const listRef = document.querySelector(".list")


const userNumber = JSON.parse(localStorage.getItem("masive")) || []


formRef.addEventListener("submit", (event)=>{
    event.preventDefault()

    const data = {
        name:event.currentTarget.elements.name.value,
        surname:event.currentTarget.elements.surname.value,
        phone:event.currentTarget.elements.phone.value,
        email:event.currentTarget.elements.email.value
    }
       userNumber.push(data)
       localStorage.setItem("masive",JSON.stringify(userNumber))
       formRef.reset()
       createNumbers(userNumber)
       
})

function createNumbers(array){
    const number = array.map((num, index)=>{
        return`<li id= "${index}">
        <p>${num.name}</p>
        <p>${num.surname}</p>
        <p>${num.phone}</p>
        <p>${num.email}</p>
        <button type="button" data-action= "delete" class= "btn-delete">delete</button>
    </li>`
    }).join("")
    
    listRef.innerHTML=number

}
listRef.addEventListener("click", (event)=>{
    
    if(event.target.nodeName !== "BUTTON"){
        return
    }
    
    const id = event.target.closest("li").id
    const index = Number(id)
    userNumber.splice(index, 1)
    createNumbers(userNumber)
    localStorage.setItem("masive",JSON.stringify(userNumber))
    
})

createNumbers(userNumber)



