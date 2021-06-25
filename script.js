const measege=document.querySelector('.measege')
const chat=document.querySelector('.main_chat')
if(localStorage.getItem('chat'))chat.innerHTML=localStorage.getItem('chat')
const send=document.querySelector('.send')
const more=document.querySelector('.more')
const cub=document.querySelector('.cub')
const ch_img=document.querySelector('.ch_img') 
const cub_img=document.querySelector('.cub_img')
const photo=document.querySelector('.photo')
let use=document.querySelectorAll('.user h4')
const search=document.querySelector('.search')
let message_gl=document.querySelectorAll('.message_gl')
const ch_search=document.querySelector('.ch_search')
const my_mesages=document.querySelector('.my_mesages')
let my_message = localStorage.getItem('my_message') 
? JSON.parse(localStorage.getItem('my_message')) 
: []
let defolt_mesage=[
    {
        message:`<p class="bl_txt">@pierrhack I did for 6 days in Iceland</p>`,
        name:'Jeshua Stout',
        data:'6:38 PM',
        data_p_d:'Monday, October 21st',
        _id: 'id1',
        img:'///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/1.png'
    }
    ,
    {
        message:`<p class="n_txt">
        Which country to visit next? This is a photo with my friends - celebrating in Bali
        <img class="emojy" src="img/chat/s1.png">
        </p>
        <p class="bl_txt">
            my-top-places.jpg
        </p>
        <img src="img/chat/img.png" alt="">`,
        name:'Harold Adams',
        data:'5:02 PM',
        data_p_d:'Monday, October 22nd',
        _id: 'id2',
        img:'///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/2.png'
    }
    ,
    {
        message:`<p class="bl_txt">
        @har_adams wow it’s amazing, I want to buy a van and travelling next year
        <img class="emojy" src="img/chat/s2.png">
        </p>`,
        name:'Aada Laine',
        data:'11:54 AM',
        data_p_d:'Yersterday',
        _id: 'id3',
        img:'///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/3.png'
    }
    ,
    {
        message:`<p class="n_txt">
        Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).
        </p>`,
        name:'Nala Hester',
        data:'11:54 AM',
        data_p_d:'Today',
        _id: 'id4',
        img:'///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/4.png'
    }
    ,
    {
        message:`<p class="n_txt">
        <span class="bl_txt">@aa_da </span>
        What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.
        </p>`,
        name:'Ramon Bateman',
        data:'11:59 AM',
        data_p_d:'Today',
        _id: 'id5',
        img:'///C:/Users/%D0%97%D0%B0%D1%85%D0%B0%D1%80/Desktop/Git/Chat/img/chat/5.png'
    }
]

const id = ()=> 'id'+my_message.length
const create_message =(message,name)=> ({
        message:`<p class='n_txt'>${message}</p>`,
        name,
        data : `${new Date().getHours()}:${new Date().getMinutes()>=10?new Date().getMinutes():'0'+new Date().getMinutes()}`, //?
        data_p_d:` ${new Date().getDate()}.${new Date().getMonth()}`,
        _id: id(),
        img : localStorage.getItem('curimg')
})

const push_new_message = (message)=>{
    my_message.push(create_message(message, localStorage.getItem('cur_name')))
    set_local_my_message()
}

const set_local_my_message = ()=>{
    localStorage.setItem('my_message', JSON.stringify(my_message))
}

const draw_all_messagge = ()=>{
    my_mesages.innerHTML+= my_message.map(item=>`
    <div class="date">
    <div class="message_gl" >
    <img src="${item.img}" class="chatp">
    <div class="message">
        <div class="user">
            <h4>${item.name} </h4>
                <h6>${item.data}</h6>
        </div>
        <div class="message_cont">
            ${item.message} 
        </div>
    </div>
</div>
<div class="container_date_p">
<p class="data_p">${item.data_p_d}.${item.data}</p>     
                        </div>
</div>
`)
.join('')
chat.scrollTop=chat.scrollHeight
}
draw_all_messagge()
const drow_message = () => {
    let cur_el=my_message[my_message.length-1]
    my_mesages.innerHTML+=
            `
            <div class='date'>
            <div class="message_gl" >
            <img src="${cur_el.img}" class="chatp">
            <div class="message">
                <div class="user">
                    <h4>${cur_el.name} </h4>
                        <h6>${cur_el.data}</h6>
                </div>
                <div class="message_cont">
                    ${cur_el.message} 
                </div>
            </div>
        </div>
        <div class="container_date_p">
        <p class="data_p">${cur_el.data_p_d}.${cur_el.data}</p>       
                        </div>
        </div>
        `
            chat.scrollTop=chat.scrollHeight
    measege.value=''
    send.innerHTML=''
}
measege.addEventListener('keyup',e=>{

    send.innerHTML = e.target.value.trim() ? '<button class="b_send">Send</button>' : ''
    if(document.querySelector('.b_send')){
    document.querySelector('.b_send').addEventListener('click',()=>{
        push_new_message(measege.value)
        drow_message()
    })
    }
    if(e.key=='Enter'&& e.target.value.trim()){
        push_new_message(measege.value)
        drow_message()
    }
   
})


search.addEventListener('input',e=>{
    my_mesages.innerHTML=''
    // person.map(i1=>{
        // if(i1.value.toLowerCase().indexOf(e.target.value)>=0){
        //     d.innerHTML+=i1.value+'<br>'
        // }
    // })
     my_mesages.innerHTML= my_message
        .filter(i1=>i1.name.toLowerCase().includes(e.target.value.toLowerCase()))
        .map(item=>`
        <div class="date">
    <div class="message_gl" >
    <img src="${item.img}" class="chatp">
    <div class="message">
        <div class="user">
            <h4>${item.name} </h4>
                <h6>${item.data}</h6>
        </div>
        <div class="message_cont">
            ${item.message} 
        </div>
    </div>
</div>
<div class="container_date_p">
<p class="data_p">${item.data_p_d}.${item.data}</p>     
                        </div>
</div>
        `)
        .join('')
    document.querySelector('.defoult').innerHTML=defolt_mesage
    .filter(i1=>i1.name.toLowerCase().includes(e.target.value.toLowerCase()))
    .map(item=>`
    <div class="date">
    <div class="message_gl" >
    <img src="${item.img}" class="chatp">
    <div class="message">
        <div class="user">
            <h4>${item.name} </h4>
                <h6>${item.data}</h6>
        </div>
        <div class="message_cont">
            ${item.message} 
        </div>
    </div>
</div>
<div class="container_date_p">
<p class="data_p">${item.data_p_d}</p>        
                        </div>
</div>
    `)
    .join('')

        chat.scrollTop=chat.scrollHeight
    
})

//class //js