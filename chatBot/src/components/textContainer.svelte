<script>

import TextComponent from "./textComponent.svelte";
import {elizabot, messageArray} from '../store/stores'
import { beforeUpdate, afterUpdate, onMount } from 'svelte';


onMount(()=>{
  
  messageArray.update(value => [...value, elizabot.getInitial()]);
})

let isComing = true;
 
console.log($messageArray)



	let article;
	let autoscroll;

	beforeUpdate(() => {
		autoscroll = article && (article.offsetHeight + article.scrollTop) > (article.scrollHeight - 20);
	});

	afterUpdate(() => {
		if (autoscroll) article.scrollTo(0, article.scrollHeight);
	});

</script>

<article class="text-container" bind:this={article}> 
  {#each $messageArray as message,index}
  <TextComponent isComing={index%2===0} message={message}/>
  {/each}
  
    
</article>


<style>
 .text-container{
    padding: 1rem;
    display: flex;
    flex-direction: column;
    /* gap: 1rem;  */
    flex-grow: 2;
    overflow-y: auto ;
}   
 
</style>