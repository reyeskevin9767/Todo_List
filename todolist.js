
window.setTimeout(function() {
  // alert("Hello");

  var todos = ["Buy new Turtle"];
  var input = prompt("What would you like to do?");

  while(input !== "quit"){

    if(input === "list") {
      listTodo();
    }
    else if(input === "new") {
      addTodo();
    }else if(input === "delete"){
      deleteTodo();
    }
    var input = prompt("What would you like to do?");
  }

  console.log("OK, YOU QUIT THE APP");

 


function listTodo(){
  todos.forEach(function(todo, i){
    console.log("**********");
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function addTodo(){
      //ask for new todo
      var newTodo = prompt("Enter new todo");
      //add to todos array
      todos.push(newTodo);
      console.log("Added Todo");
    }


function deleteTodo(){
//as for index of todod
var index = prompt("Enter index of todo to delete");
      //delete that todo
      //splice
      todos.splice(index,1);
      console.log("Deleted Todo");
    }


  }, 500); 