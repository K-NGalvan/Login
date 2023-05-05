const loginSec=document.querySelector('.loginSection')
const userlink=document.querySelector('.userLink')
const adminLink=document.querySelector('.adminLink')
adminLink.addEventListener('click',()=>{
    loginSec.classList.add('active')
})
userlink.addEventListener('click',()=>{
    loginSec.classList.remove('active')
})
