<script>
  import Header from "./header.svelte";
  import TextContainer from "./textContainer.svelte";
  import TextInputBox from "./textInputBox.svelte";
  
  
    
</script>

<section class="chatBox-container">
<Header />
<TextContainer/>
<TextInputBox/>
</section>


<style>
    .chatBox-container{
        max-width: 642.5px;
        margin: 0 auto;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 0.5rem;
    }
</style>