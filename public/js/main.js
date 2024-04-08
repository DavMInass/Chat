const socket = io();
const chatForm = document.getElementById('chat-form')

chatForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  const msg = e.target.elements.msg.value
  socket.emit('chatmsg', msg)
  e.target.elements.msg.value=''
  e.target.elements.msg(focus)
})

function outputMsg (m){

  const div = document.createElement('div')
  
  const container = document.querySelector(".chat-messages");
  div.classList.add('message')
  
  div.innerHTML = `<p class='meta'>John
  <span>12:20pm</span></p><p class='text'>${m}</p>`;
  container.appendChild(div)
  
  }

socket.on('message', (data)=>{
  outputMsg(data  )
})