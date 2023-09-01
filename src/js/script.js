// script.js
let tasks = [
  new Task({
    text: "First task",
    done: false,
    date: "2020-02-10",
    id: Date.now(), // makes a unique id
  }),
];
class Task {
  constructor({ text, date, done, id }) {
    // HINT This method is the constructor. In C++, this would be
    // the Task() method. The curly braces inside the constructor is // a JavaScript syntax that is called 'deconstruction'. This
    // means the constructor will ask for an object
    // (`{i: 'am', an: 'object'}`) with the parameters `text`,
    // `date`, `done`, and `id`. This will make it easier to
    // convert it from the local storage database we will set up.
    this.text = text;
    this.date = date;
    this.done = done;
    this.id = id;
  }

  toHTML() {
    // TODO: Fill out this method. It should return a string version
    // of this task, including an `<li>` tag and all of the
    // css classes you used to make it look pretty. It should
    // display the `text`, `date`, and `done` property of this
    // Task. It should also have two inline event handlers, which call the
    // update and delete function, with this Task's `id` as a
    // parameter.
    const checkedStatus = this.done ? "checked" : "";
    const checkedClass = this.done ? "task-checked" : "";
    const prettyDate = this.prettyDate();

    return `
    <li class="task">
        <input type="checkbox" class="task-done checkbox-icon" ${checkedStatus} onclick="updateTask(${this.id})" />
        <span class="task-description ${checkedClass}">${this.text}</span>
        <span class="class-date">${prettyDate}</span>
        <button class="task-delete material-icon" onclick="deleteTask(${this.id})">backspace</button>
    </li>
    `;
  }

  prettyDate() {
    // TODO: Fill out this method. It should return the date in our
    // locale's format, 'MM / DD / YYYY', instead of the
    // easily-sortable international standard, 'YYYY-MM-DD'.
    const dateParts = this.date.split("-");
    return `${dateParts[1]} / ${dateParts[2]} / ${dateParts[0]}`;
  }

  toggle() {
    // TODO: Fill out this method. It should flip this Task's `done`
    // property from `true` to `false`, or from `false` to `true`.
    this.done = !this.done;
  }
}

function updateStorage(newData) {
  // ... update the local storage
}

function readStorage() {
  let result = JSON.parse(jsonString) || [];
  result = result.map((taskData) => new Task(taskData));
  // ... read from the local storage
  //Call this `readStorage` function inside the body tag of the index.html page using the onload event listener, to read in any previously-saved data. Do this instead of hardcoding the contents of `tasks` like we were before.
}

function createTask() {
  // TODO: Pull in form data from DOM
  // TODO: Format form data to Task Object
  // TODO: Pull in tasks from local storage and push new one to task list array
  // TODO: Save it to local storage
  // TODO: Update DOM (Call readTasks())
  // Hint - Look at the JavaScript code from lab 1B to see how to extract form data
}
function readTasks() {
  // TODO: Clear current tasks to not have duplicates
  // TODO: Pull in tasks from local storage
  // TODO: Parse tasks and Update DOM accordingly
}
function updateTask(id) {
  // TODO: Update the task in `tasks` array by flipping it's `done` value
  // TODO: Save to local storage
  // TODO: Update DOM (Call readTasks())
}
function deleteTask(id) {
  // TODO: Delete task from `tasks` array
  // TODO: Save to local storage
  // TODO: Make the DOM update
  // TODO: Update DOM (Call readTasks())
}
