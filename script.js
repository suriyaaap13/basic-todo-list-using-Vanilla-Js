// variable to keep track of the number of tasks
let number_of_tasks = 0;
TasksLeft();
// function to update the number of tasks
function TasksLeft(){
    let tasks = document.getElementById('number-of-tasks');
    
    tasks.innerText = number_of_tasks+" tasks left";
}


// function to clear all the completed tasks
document.getElementById('clear-completed-task').onclick = function(){
    let listItems = document.getElementById('list').childNodes;
    // taking all the list items from unordered list
    for(let i=3;i<listItems.length;i++){
        let div = listItems[i].childNodes;
        console.log(div);
        if(div[1].classList.contains('checked')){
            listItems[i].style.display = "none";
        }
    }
}

//collect the input of the user and appending it in the list
document.getElementById('submit-btn').addEventListener('click',function(e){
    e.preventDefault();
    let input = document.getElementById('input-box').value;
    if(input===""){
        // not allowing the user to submit empty string
        alert('You should write something!');
        return;
    }else if(input.length>=20){
        // not allowing the user to submit a long string
        alert('Your text is very long!!');
    }else{
        let list = document.getElementById('list');
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
        number_of_tasks++;
        TasksLeft();
        
        //adding event Listener to every delete button in every list item
        var close = document.getElementsByClassName('delete-list-item');
        for(let i=0;i<close.length;i++){
            close[i].onclick = function(){  
                let LI = close[i].parentNode;
                //setting the display to none
                LI.style.display = "none";

                // updating the number of tasks only if it is not completed
                let div = LI.childNodes;
                if(div[1].classList.contains('checked')==false){
                    number_of_tasks--;
                    TasksLeft();
                }
                
            }
        }
        


        // adding event listener for complete task
        var complete = document.getElementsByClassName('complete-icon');
        for(let i=0;i<complete.length;i++){
            complete[i].onclick = function(){
                let div = complete[i].parentNode.getElementsByTagName('div');
                //toggling the checked class
                div[1].classList.toggle('checked');
                let icon = div[0].childNodes;
                //toggling the circle with check circle icon and vice-versa
                if(icon[0].classList.contains('fa-circle')){
                    icon[0].classList.remove('fa-circle');
                    icon[0].classList.add('fa-check-circle');
                }else{
                    icon[0].classList.remove('fa-check-circle');
                    icon[0].classList.add('fa-circle');
                }
                number_of_tasks--;
                TasksLeft();
            }
        }


        
    }
    

});

// complete all task function
document.getElementById('complete-all-tasks').addEventListener('click',function(){
    var complete = document.getElementsByClassName('complete-icon');
    for(let i of complete){
        let div = i.parentNode.getElementsByTagName('div');
        div[1].classList.add('checked');
        let icon = i.childNodes
        // changing the circle icon to check circle
        if(icon[0].classList.contains('fa-circle')){
            icon[0].classList.remove('fa-circle');
            icon[0].classList.add('fa-check-circle');
        }
        number_of_tasks = 0;
        TasksLeft();
    }

});
