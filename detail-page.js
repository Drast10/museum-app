function submitComment(){
    console.log("Hello I am submit Comment function");
    const inputField = document.getElementById('name');
    // fetching the value from any field use value property 
    let name = inputField.value;
    console.log(name);
    const textArea = document.getElementById('msg');
    let msg = textArea.value;
    console.log(msg);
   
    //create the elements using createElement()
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    //reassign the value which fetch from user inputs and on console o/p as a html tag 
    h3.innerHTML =  `${name} said:`; // display as h3  and p tag value
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);
    //display the elements on the page
    const commentSection = document.getElementById('comments');
    console.log(commentSection);
    commentSection.appendChild(comment);
    //reset field 
    inputField.value = null;
    textArea.value = null;
    if(doesNotPassAllValidations(name , msg))return null;
    
    

}
function doesNotPassAllValidations(name , msg){
    if (!name || !msg ){
        alert("Name and Msg Should not be epmty!!")
        return true;
    }
    if(!name) {alert('Name is empty');}
    if(!msg) {alert('Msg is empty');}
    if(!name.match(/^[A-Z]/)){
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    }
    if(msg.length > 100){
        alert("Your msg is not longer than 100 words...!!")
        return true;
    }
    return false;
}
// let p = document.getElementById('p1').innerHTML = 'hii';