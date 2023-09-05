const btnExperience = document.querySelector(".btnExperience")
const btnQualification = document.querySelector(".btnQualification")
const moreExperience = document.querySelector(".more")
const moreQualification = document.querySelector(".qualification")
const generateButton = document.querySelector(".generate")


let clickedExperience = 0
let clickedQualification = 0

btnExperience.addEventListener("click",()=>{
   
    
    clickedExperience++
    if(clickedExperience <= 4){
     


        const newList = document.createElement("input" )
    newList.setAttribute("type", "text")
    newList.setAttribute("placeholder", "Enter your experience here..")
    newList.classList.add(`input${clickedExperience}`)
    newList.style.marginTop = "20px"
    moreExperience.appendChild(newList  )
    }
    
 
    
    
})


btnQualification.addEventListener("click",()=>{

    clickedQualification++
    if(clickedQualification<=4){

        const newList = document.createElement("input")
        newList.setAttribute("type", "text")
        newList.setAttribute("placeholder", "Enter your experience here..")
        newList.style.marginTop = "20px"
        moreQualification.appendChild(newList)
    }
})


generateButton.addEventListener("click",()=>{
    const inputName = document.querySelector("#name");
    const userName = inputName.value;
    const number = document.querySelector("#number")
    const userNumber = number.value;
    const usernumber = document.querySelector(".usernumber")
    const address = document.querySelector("#address").value
    const userAddress = document.querySelector("#templateaddress")
    const fb = document.querySelector("#facebook").value
    const userFb = document.querySelector(".facebook")
    const insta = document.querySelector("#instagram").value
    const userInstagram = document.querySelector(".instagram")
    const linkedin = document.querySelector("#linkedin").value
    const userLinkedin = document.querySelector(".linkedin")
    const github = document.querySelector("#github").value
    const userGithub = document.querySelector(".github")
    const objective = document.querySelector("#objective").value
    const userObjective = document.querySelector(".userObjective")
    const experience0 = document.querySelector("#experience").value
    const userExperience = document.querySelector(".experience0")
    const templateUserName = document.querySelectorAll(".templateUserName")
   
    const templateContainer = document.querySelector(".template-container")

    templateContainer.classList.remove("template")
    console.log(templateContainer)
   

    const displayHide = document.querySelector(".main-container")

 displayHide.classList.add("generater")
 


 const designationInput = document.querySelector("#designation").value


 const designationUser = document.querySelector(".designation")

 designationUser.textContent = designationInput
 

   usernumber.textContent = userNumber
   userAddress.innerHTML = address
   userFb.innerHTML = `<span class="social"><i class="fa-brands fa-facebook"></i></span> ${fb}`
   userInstagram.innerHTML = `<span class="social"><i class="fa-brands fa-instagram"></i></span> ${insta}`
   userLinkedin.innerHTML = `<span class="social"><i class="fa-brands fa-linkedin"></i></span> ${linkedin}`
   userGithub.innerHTML = `<span class="social"><i class="fa-brands fa-github"></i></span>${github}`
   userObjective.textContent = objective
   userExperience.textContent = experience0
   

   

   templateUserName.forEach((item)=>{
       item.textContent = userName
    })
    userAddress.textContent = address
    

   const inputLi = document.querySelectorAll(".more input[type=text]")
   const ulLi = document.querySelector(".ulLi")
  

   let newElement = ""
 for(let input of inputLi){
   newElement = newElement + `<li>${input.value}</li>`
 }


 ulLi.innerHTML = newElement



 const inputLi2 = document.querySelectorAll(".qualification input[type=text]")
 const ulLi2 = document.querySelector(".ulLi2")

 let newElement2=""
 for(let input of inputLi2){
    newElement2 = newElement2 + `<li>${input.value}</li>`
 }

 ulLi2.innerHTML = newElement2



 const chooseFile = document.querySelector("#imgFile").files
 const imgTemplate = document.querySelector(".imgTemplate")



 const imgUrl = chooseFile[0].name;

 
imgTemplate.setAttribute("src", `${imgUrl}`)



})




const printBtn = document.querySelector(".print")
printBtn.addEventListener("click", printCV)

function printCV(){
    printBtn.style.display = "none"
window.print()

}