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
    //reassign the value which fetch from user inputs
    h3.innerHTML =  `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);
}