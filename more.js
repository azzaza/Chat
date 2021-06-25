const n_txt=document.querySelectorAll('.n_txt')
let data_p=document.querySelectorAll('.data_p')
function hexToRgb(hex) {

    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });
  
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
const txt_color=(vl)=>{
    let cl_obj=hexToRgb(vl)
    for (let i in cl_obj) {
        
        if(cl_obj[i]>=123){
            cl_obj[i]-=123
        }
        else{
            cl_obj[i]=122-cl_obj[i]
        }
    }
    return `rgb(${cl_obj.r},${cl_obj.g},${cl_obj.b})`
}

const person =[
    {
        name:'Jeshua Stout',
        src:'img/chat/1.png'
    }
    ,
    {
        name:'Harold Adams',
        src:'img/chat/2.png'
    }
    ,
    {
        name:'Aada Laine',
        src:'img/chat/3.png'
    }
]
cub_img.addEventListener('click',e=>{
    if(e.target.classList[0]=='img_p'){
        if(document.querySelector('.im_act')){
            document.querySelector('.im_act').classList.remove('im_act')
        }
        e.target.classList.add('im_act')
        im_act=document.querySelector('.im_act').src
        
        if(document.querySelector('.im_act').src=='file:///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/1.png'){
            localStorage.setItem('cur_name','Jeshua Stout')
        }
        if(document.querySelector('.im_act').src=='file:///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/2.png'){
            localStorage.setItem('cur_name','Harold Adams')
        }
        if(document.querySelector('.im_act').src=='file:///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/3.png'){
            localStorage.setItem('cur_name','Aada Laine')
        }
        localStorage.setItem('curimg',im_act)
        document.querySelector('.img_cur').src=im_act
        photo.src=im_act

    }
    

})
more.addEventListener('click',e=>{
    cub.classList.toggle('cub_active')   
    if(document.querySelector('.ch_img_active'))ch_img.classList.remove ('ch_img_active') 
    
})




const bg=document.querySelector('.bg')
if(localStorage.getItem('bg')){
    bg.value = localStorage.getItem('bg')
    for (const i of data_p) {
        i.style.background=localStorage.getItem('bg')
    }
}
bg.addEventListener('input',e=>{
// e.target.value = 'rgd(255,255,255)'  
data_p=document.querySelectorAll('.data_p')
localStorage.setItem('bg',bg.value)
chat.style.background=bg.value
for (const i of data_p) {
    i.style.background=bg.value
    
}
localStorage.setItem('txt_col',txt_color(e.target.value))
for (const i of n_txt) {
    i.style.color=txt_color(e.target.value)
    
}
chat.style.color=txt_color(e.target.value)
})




ch_img.addEventListener('click',e=>{

    ch_img.classList.toggle('ch_img_active') 
    cub_img.classList.toggle('cub_img_active')

})




document.addEventListener('click',e=>{
    
    if(document.querySelector('.cub_active')&&e.target.classList[0]!='img_p'&&e.target.classList[0]!='more'&&e.target.classList[0]!='cub'&&e.target.classList[0]!='ch_img'&&e.target.classList[0]!='cub_img'&&e.target.classList[0]!='bg'){
        cub.classList.remove('cub_active')
        if(document.querySelector('.cub_img_active'))cub_img.classList.remove('cub_img_active')
        if(document.querySelector('.ch_img_active'))ch_img.classList.remove ('ch_img_active') 
    }
    
})
if(localStorage.getItem('txt_col')){
    for (const i of n_txt) {
        i.style.color=localStorage.getItem('txt_col')
        
    }
    chat.style.color=localStorage.getItem('txt_col')
}

if(localStorage.getItem('curimg')){
    document.querySelector('.img_cur').src=localStorage.getItem('curimg')

}

chat.style.background=localStorage.getItem('bg')    


const current_user = {
    name: 'a',
    src : 'asdas'
}