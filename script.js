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
        // console.log(list);
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
        console.log(close);
        for(let i=0;i<close.length;i++){
            close[i].onclick = function(){
                console.log(close.length, i);           
                console.log(close[i]);
                console.log(close[i].parentNode);   
                let LI = close[i].parentNode;
                LI.style.display = "none";
                
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
            }
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
        
    }

});


