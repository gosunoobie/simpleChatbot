<script>
  import { onMount } from 'svelte';
    import {messageArray} from '../store/stores.js'

  export let isComing = false;
  export let localMessage = 'this is default';

//   onMount(()=>{
    // localMessage = message.get()
    // console.log(message)
    // resetText()
//   })
 
</script>

<div class={isComing? "text" : 'text own'}>
    {localMessage}


</div>

<style>

    .text{
        position: relative;
        font-size: .9375rem;
        font-weight: 400;
        max-width: 80%;
        margin: 1rem 0;

    }
    .text::after{
        content: '';
        position: absolute;
width: 100%;
height: 100%;
background-color: #f0f2f5;
z-index: -1;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
padding: 0.5rem ;
border-radius: .85rem;
    }

    .text.own{
       
        margin-left: auto;
        margin-right: 1rem;
        color: #ffffff;
      

    }
    .text.own::after{
        content: '';
        position: absolute;
width: 100%;
height: 100%;
padding: 0.5rem ;
background-color: rgb(0, 132, 255);
z-index: -1;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: .85rem;
    }
</style>