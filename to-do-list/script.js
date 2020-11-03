let list = [];

function addTask(){
    
    let task = document.getElementById('taskId').value
    if ( task === ''){
        alert('escribe algo')
    } else {
        list.push(task)
        console.log(list);
        for(let i = list.length-1; i < list.length; i++){
            document.getElementById('htmlList').insertAdjacentHTML('afterbegin',
            `<div class='itemDiv'><li class='itemList'>${list[i]}</li><button class='itemButton' onclick='deleteTask(${i})'>x</button></div><hr>`)
        }
        document.getElementById('taskId').value = '';
    }
    
}

function deleteTask(x){
    
    console.log(x);
    list.splice(x,1)
    console.log(list);
    document.getElementById('htmlList').innerHTML = '';
    for(let i = 0; i < list.length; i++){
        document.getElementById('htmlList').insertAdjacentHTML('afterbegin',
        `<div class='itemDiv'><li class='itemList'>${list[i]}</li><button class='itemButton' onclick='deleteTask(${i})'></button></div><hr>`)
    } 

}




