// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var newtask = $(this).data("newtask");
  
      var newtaskState = {
        status: newtask
      };
  
      // Send the PUT request.
      $.ajax("/api/tasks/" + id, {
        type: "PUT",
        data: newtaskState
      }).then(
        function() {
          console.log("changed task to", newtask);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newTask = {
        name: $("#task").val().trim(),
        status: $("[name=status]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/tasks", {
        type: "POST",
        data: newTask
      }).then(
        function() {
          console.log("created new task");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-task").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/tasks/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted task", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  