let saveButton = document.getElementById("saveButton");

function addRow() {
    const logDiv = document.getElementById("workoutLog");

    const logEntry = document.createElement("div");
    logEntry.className = "log-entry";

    const dateInput = createInput("date", "Date");
    const typeInput = createInput("text", "Workout Type");
    const notesInput = createInput("text", "Notes");
    const weightInput = createInput("number", "Body Weight");

    const removeBtn = createRemoveButton(logEntry);

    logEntry.appendChild(dateInput);
    logEntry.appendChild(typeInput);
    logEntry.appendChild(notesInput);
    logEntry.appendChild(weightInput);
    logEntry.appendChild(removeBtn);

    logDiv.appendChild(logEntry);

    // shows the Save button once a row is created
    saveButton.style.display = "inline-block";
}

function createInput(type, placeholder) {
    const input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

function createRemoveButton(row) {
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = function () {
        row.remove();
        checkRows(); // Checks if there are remaining rows
    };
    return removeBtn;
}

function checkRows() {
    // Hides the Save button if there are no rows
    saveButton.style.display = document.getElementById("workoutLog").hasChildNodes() ? "inline-block" : "none";
}

function saveLog() {
    // Adds logic to save the workout log
    alert("Workout log saved!");
}
