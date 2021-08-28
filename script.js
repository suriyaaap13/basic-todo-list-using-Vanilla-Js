// console.log('entered js');
// var inputBox = document.getElementById("input-box");
// var btn = document.getElementById('submit-btn');


// inputBox.addEventListener('keydown',function(){
//     console.log('I am in');
//     var text = inputBox.value;
//     console.log(text);
//     console.log(text.length);
//     if(text.length==0){
//         btn.style.display = "none";
//         return;
//     }
//     if(text.length>0){
//         console.log('show btn');
//         btn.style.display = "flex";
//         return;
//     }
// })


//collect the input of the user and appending it in the list
console.log('Iam in');

document.getElementById('submit-btn').addEventListener('click',function(e){
    e.preventDefault();
    let input = document.getElementById('input-box').value;
    if(input===""){
        alert('You should write something!');
        return;
    }else if(input.length>=20){
        alert('Your text is very long!!');
    }else{
        let list = document.getElementById('list');
        console.log(list);
        //creating the list item
        let li = document.createElement('li');
        //creating the div to put the input data inside it
        let div2 = document.createElement('div');
        //added class to the div
        div2.classList.add('list-content');
        //added the input data in the div2
        div2.appendChild(document.createTextNode(input));

        //Similary creating div1 and div3 for the list item with circle and close logo
        let div1 = document.createElement('div');
        let div3 = document.createElement('div');
        div1.classList.add('complete-icon');
        div3.classList.add('delete-list-item');
        let icon1 = document.createElement('i');
        let icon2 = document.createElement('i');
        icon1.classList.add('far');
        icon2.classList.add('far');
        icon1.classList.add('fa-circle');
        icon2.classList.add('fa-times-circle');
        //adding the icons to respective div's
        div1.appendChild(icon1);
        div3.appendChild(icon2);

        //added the div1,div2,div3 to the list item
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
        //add the list item to the unorder list
        list.appendChild(li);
        //initializing the value of the input box back to null
        document.getElementById('input-box').value="";
        //adding event Listener to every delete button in every list item
        var close = document.getElementsByClassName('delete-list-item');
        for(let i=0;i<close.length;i++){
            if(close[i].addEventListener('click',function(){
                let listItem = close[i].parentNode;
                //removing the list item from the unordered list
                listItem.parentNode.removeChild(listItem);
            }));
        }


        // adding event listener for complete task
        var complete = document.getElementsByClassName('complete-icon');
        for(let i of complete){
            if(i.addEventListener('click',function(){
                // console.log('I am in the complete');
                // console.log(i.parentNode);
                let div = i.parentNode.getElementsByTagName('div');
                // console.log(div);
                div[1].classList.toggle('checked');
            },false));
        }
    }
    

});


//removing the list item from the unordered list

//you have to comment this in the future
var close = document.getElementsByClassName('delete-list-item');
for(let i=0;i<close.length;i++){
    if(close[i].addEventListener('click',function(){
        let listItem = close[i].parentNode;
        console.log(listItem.parentNode);
        listItem.parentNode.removeChild(listItem);
    }));
}

// adding functionality for the complete button
var complete = document.getElementsByClassName('complete-icon');
for(let i of complete){
    if(i.addEventListener('click',function(){
        // console.log('I am in the complete');
        // console.log(i.parentNode);
        let div = i.parentNode.getElementsByTagName('div');
        // console.log(div);
        div[1].classList.toggle('checked');
    }));
}

// complete all task function
document.getElementById('complete-all-tasks').addEventListener('click',function(){
    var complete = document.getElementsByClassName('complete-icon');
    for(let i of complete){
        let div = i.parentNode.getElementsByTagName('div');
        div[1].classList.add('checked');
    }

});

// clear all tasks function
document.getElementById('clear-completed-task').addEventListener('click',function(){
    var close = document.getElementsByClassName('delete-list-item');
    for(let i of close){
        console.log(close.length, i);
        let listItem = i.parentNode;
        //removing the list item from the unordered list
        listItem.parentNode.removeChild(listItem);
    }

});

