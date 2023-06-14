<script>
  import { messageArray } from "../store/stores";
  import ProfileImg from "./profileImg.svelte";
  import Text from "./text.svelte";
  

  export let isComing = false;
  export let message = 'default message'
   
</script>
<div class="chat-text-component">
  {#if isComing}
    <ProfileImg isChatImage={isComing}/>
    {/if}
    <Text isComing={isComing} localMessage = {message}/>



</div>

<style>
.chat-text-component{
  display: flex;
  align-items: center;
  gap: 1.2rem;

}



</style>