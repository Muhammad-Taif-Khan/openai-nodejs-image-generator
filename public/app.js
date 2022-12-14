const form = document.querySelector('form');
const prompt = document.querySelector('.prompt');
const img = document.querySelector('#img');
form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    try{

    
    if(prompt.value.trim() === ""){
        alert("Please enter a value");
        return;
    }
    const response = await fetch('/openai/genImage', {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify({
            prompt:prompt.value,
        })
    });

    if(!response.ok){
        alert('Image could not generated!');
    }

    const imgData = await response.json();
    img.src = imgData.data;
    img.alt = prompt.value
    }
    catch(err){
        alert('please check your internet!')
    }
})