<script>
  import ProfileImg from "./profileImg.svelte";


    
</script>

<header class="chat-header">
   <aside class="chat-aside"> 
<div class="chat-profile">
       <ProfileImg/>
</div>
   <div class="chat-profile-details">
    <p class="chat-profile-name">
        Karina
    </p>
    <p class="chat-profile-active">
        Active Now
    </p>
   </div>
</aside>
<button class="info-svg">
   <svg height="24px" name="icon" role="presentation" viewBox="0 0 36 36" width="24px" ><g transform="translate(18,18)scale(1.2)translate(-18,-18)"><path d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z" fill="#0084ff" stroke="#0084ff"></path></g></svg>
</button>
</header>

<style>
  .chat-header{
 display: flex;
 padding: 0.5rem 1rem;
 box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
justify-content: space-between;  
align-items: center;
}
.chat-aside{
    display: flex;
}

.chat-profile{
    position: relative;
}

.chat-profile::after{
    content: "";
    position: absolute;
    width: 9.5px;
    height: 9.5px;
    border-radius: 50%;
    z-index: 2;
    background-color: #31A24C;
   bottom: 4px;
   right: 6%;
   border: 2px solid whitesmoke;
 
}

   


.chat-profile-details{
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 0.5rem;
}
.chat-profile-name{
font-weight: 500;    
font-size: 1.1rem;
}

    .chat-profile-active{
font-weight: 300;
font-size: 12.5px;
    }

.info-svg{
    position: relative;
    z-index: 3;
    outline: none;
    border: none;
    background: white;
}

    .info-svg:hover{
    cursor: pointer;
}

.info-svg:hover::before{
content: '';
position: absolute;
width: 150%;
height: 140%;
background-color: #f0f2f5;
z-index: -1;
top: 47.5%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 50%;

}
</style>