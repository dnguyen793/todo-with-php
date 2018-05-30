var data = {
	"tasks": [{
		"title": "buy eggs",
		"description": "Buy a dozen eggs from the store",
		"dueDate": "5-28-2018 5:00pm",
		"completed": false
	}, {
		"title": "rotate tires",
		"description": "move the tires around your car, yo",
		"dueDate": "6-1-2018 5:00pm",
		"completed": false
	}, {
		"title": "change oil",
		"description": "change the oil on the pinto",
		"dueDate": "6-3-2018 5:00pm",
		"completed": false
	}],
	"user": {
		"id": 4,
		"firstname": "Dan",
		"lastname": "Paschal",
		"avatar": "images/bunny.png"
	}
};


$(document).ready(initializeApp);

function initializeApp(){
    getTaskDataAndRender();

}

// create a single dom section for a single todo task
// input: task object
// output: task dom element to attach to page
{/* <div class="todoTask">
<div class="title">buy egss</div> 
<div class="date">5-1-2018 5:00pm</div>
<div class="description">Buy a dozen eggs from ...</div>

<div class="controls">
    <input type="checkbox" name="complete"><button>delete</button>
</div>
</div> */}

function createTaskItem(taskObj){
    const taskContainer = $("<div>",{
        'class': 'todoTask'
    });
    const title = $("<div>", {
        'class': 'title',
        text: taskObj.title
    });
    const date = $("<div>", {
        'class': 'date',
        text: taskObj.dueDate
    });
    const description = $("<div>", {
        'class': 'description',
        text: shortenText(taskObj.description, 20)
    });
    const controlContainer = $("<div>", {
        'class': 'controls'
    });
    const completed = $("<input>", {
        type: 'checkbox',
        name: 'complete',
        'class': 'completed'
    });
    const deleteButton = $("<button>", {
        'class': "deleteButton",
        text: 'Delete'
    });
    controlContainer.append(completed, deleteButton);
    taskContainer.append(title, date, description, controlContainer);
    
    return taskContainer;
}

// render all tasks to the dom, clear the dom first, then render all
// input: array of tasks
// output: none
function renderAllTasks(tasksArray){
    const taskElements = [];
    for(let i = 0; i<tasksArray.length; i++){
        let element = createTaskItem(tasksArray[i]);
        taskElements.push(element);
    }
    $("#todoTasks").append(taskElements);

}

// get all task data fr resources and then render tasks to dom
// input: none
// output: none
function getTaskDataAndRender(){
    renderAllTasks(data.tasks);

}

function shortenText (str, maxlength){
    var stringSection = str.slice(0, maxlength);
    var lastSpacePos = stringSection.lastIndexOf(' ');
    let output = '';
    if(lastSpacePos !== -1){
        output = stringSection.slice(0, lastSpacePos);
    }
    else{
        output = stringSection;
    }

    return output+'...';
}