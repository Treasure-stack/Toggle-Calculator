const toggle = document.querySelector('.img')
const toggle2 = document.querySelector('.img2')
const containerLight = document.querySelector('.containerLight')
const container2 = document.querySelector('.container2')

toggle.addEventListener('click',(e)=>{
    containerLight.style.display = 'none'
     container2.style.display = 'block'
    
  
})

toggle2.addEventListener('click',(e)=>{
    container2.style.display = 'none'
    containerLight.style.display = 'inline-block'
    containerLight.style.display ='flex'
    
    
  
})

