// Get and format the date

var dateValue = document.getElementById('date-value');

var todayDate = new Date(Date.now());

var yesterdayDate = new Date(Date.now() - 86400000);

var dayFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

todayDate = todayDate.toLocaleDateString('en-GB', dayFormat);
yesterdayDate = yesterdayDate.toLocaleDateString('en-GB', dayFormat);

dateValue.innerHTML = todayDate;

// date change function

$(".set-today").on("click", function () {
    $('#date-value').html(todayDate);
});

$(".set-yesterday").on("click", function () {
    $('#date-value').html(yesterdayDate);
});

// Learner name function

function addFields1() {
    // Get number value
    var number = document.getElementById("number-field").value;
    // Clear contents
    $("#table-style .remove").parents("tr").remove();
    // Add table rows to enter learner names
    for (i = 0; i < number; i++) {

        var table = document.getElementById("table-style");
        var row = table.insertRow(8 + i);
        row.className = 'cell-1';
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        // Inner HTML for learner name
        cell1.innerHTML = `<label class="form-labels remove" for="learner-name-${[i+1]}">Learner name ${[i+1]}:</label>`;
        cell2.innerHTML = `<input type="text" class="form-control remove" id="learner-name-${[i+1]}" name="learner-name-${[i+1]}"
        placeholder="Enter name" required>`;
    }
}

// Document ready with jquery, call learner name function

$(document).ready(function () {

    $("#number-field").change(function () {
        $.fn.myFunction();
    });
    $.fn.myFunction = function () {
        addFields1();
    };

    renderJobTypeOptions();
});

// Render job type options

const TRAINING_PRESENTATION = "Training presentation";
const EXAMS_OR_TESTS = "Exams/tests";

const typeFieldOptions = [
    { value: "", displayValue: "" },
    { value: TRAINING_PRESENTATION, displayValue: "Training presentation" },
    { value: EXAMS_OR_TESTS, displayValue: "Exams/tests" },
    { value: "one-to-one", displayValue: "One-to-one" },
];

function renderJobTypeOptions() {
    const select = document.getElementById("type-field");

    typeFieldOptions.forEach((option) => {
        let optionElement = document.createElement('option');
        optionElement.innerHTML = option.displayValue;
        select.appendChild(optionElement);
    });
}


// trainingPresentation Function

$(".type-div").hide();

function trainingPresentation() {

    var container = document.getElementById("container1");

    // Clear contents
    $(".removeType").remove();

    $(".type-div").slideDown('medium');

    container.innerHTML = `<label class="form-labels1 removeType" for="presentation-subject">Presentation subject:</label>
    <input type="text" class="form-control text-width1 form-fields removeType" id="presentation-subject" name="presentation-subject"
        placeholder="Enter name" required>`;

}

// Exams/tests Function

function examsTests() {

    var container = document.getElementById("container1");

    // Clear contents
    $(".removeType").remove();

    $(".type-div").slideDown('medium');

    container.innerHTML = `<label class="form-labels1 removeType" for="presentation-subject">Exam/test subject:</label>
    <input type="text" class="form-control text-width1 form-fields removeType" id="presentation-subject" name="presentation-subject"
        placeholder="Enter name" required>`;

}

// Type/select Function

function typeSelect() {

    console.log("hello");

    var typeValue = document.getElementById("type-field").value;

    console.log(typeValue)

    if (typeValue === TRAINING_PRESENTATION) {
        console.log("training");
        trainingPresentation();
    } else if (typeValue === EXAMS_OR_TESTS) {
        console.log("exams");
        examsTests();
    } else {
        $(".type-div").hide();
    }
}