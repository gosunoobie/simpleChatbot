<script>
    import {createEventDispatcher} from 'svelte'
    // const dispatch = createEventDispatcher();
    import {messageArray,reply,add} from '../store/stores'
    let textMessage = '';
    



   
 function sendMessage(){
 if(textMessage === '')
 return

		
	
    messageArray.update(value => [...value, textMessage]);
    // reply(textMessage)

    setTimeout(() => {
			add('...')

				setTimeout(() => {
                $messageArray.pop()    
				reply(textMessage)
				}, 550 + Math.random() * 550);
			}, 250 + Math.random() * 250);
    console.log($messageArray)
    textMessage = ''
    

 }

 function handleInputKeyDown(event) {
    if (event.key === 'Enter') {
        sendMessage();

    }
 }
</script>

<footer class="text-input-box-container">
    <input type="text" class="chat-text" placeholder="Type your worries" bind:value={textMessage} on:keydown={handleInputKeyDown}>
   <button class="enter-svg" on:click={sendMessage}>
    <svg class="xsrhx6k" height="20px" viewBox="0 0 24 24" width="20px"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill="#0084ff"></path></svg>
   </button>


</footer>

<style>
.text-input-box-container{
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

 padding: 0.25rem 0;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 1.125rem;
 padding: 1rem 0;
}

input{
    bottom: 0;
    width: 80%;
    height: 2.125rem;
    border: none;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding-left: 1rem;
    background-color: #f0f2f5;
    border-radius: 1rem;
    font-size: 14px;
    outline: none;
    font-weight: 400;
}  

.enter-svg{
    position: relative;
    z-index: 3;
    outline: none;
    border: none;
    background: white;
}
.enter-svg:hover{
    cursor: pointer;
}

.enter-svg:hover::before{
content: '';
position: absolute;
width: 150%;
height: 150%;
background-color: #f0f2f5;
z-index: -1;
top: 50%;
left: 42.5%;
transform: translate(-50%,-50%);
border-radius: 50%;

}

  
</style>