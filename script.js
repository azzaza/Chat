const measege=document.querySelector('.measege')
const chat=document.querySelector('.main_chat')
const send=document.querySelector('.send')
const draw=(val)=>{
    chat.innerHTML+=
        `
        <div class="message_gl" >
        <img src="img/footer/1.jpg" class="chatp">
        <div class="message">
            <div class="user">
                <h4>Yasko Zakhar </h4>
                    <h6>14:15 PM</h6>
            </div>
            <div class="message_cont">
                <p class="n_txt">
                    ${val}
                </p>
            </div>
        </div>
    </div>
    `
    chat.scrollTop=chat.scrollHeight
    measege.value=''
}
measege.addEventListener('keyup',e=>{
    // if(e.key&&e.keyCode!=32){
    // send.innerHTML='<button class="b_send">Send</button>'
    // }
    // if(!measege.value){
    //     document.querySelector('.b_send').remove()
    // }
    send.innerHTML = e.target.value.trim() ? '<button class="b_send">Send</button>' : ''
    document.querySelector('.b_send').addEventListener('click',()=>{
        draw(measege.value)
    })
    if(e.key=='Enter'&& e.target.value.trim()){
         draw(measege.value)
    }
   
})