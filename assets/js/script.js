// Get and format the date

var dateValue = document.getElementById('dateValue');

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
    $('#dateValue').html(todayDate);
});

$(".set-yesterday").on("click", function () {
    $('#dateValue').html(yesterdayDate);
});

// Learner name function

function addFields1() {
    // Get number value
    var number = document.getElementById("numberField").value;
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
        cell1.innerHTML = `<label class="form-labels remove reduce-size" for="learner-name-${[i+1]}">Learner name ${[i+1]}:</label>`;
        cell2.innerHTML = `<input type="text" class="form-control text-width2 learnerNames remove" id="learner-name-${[i+1]}" name="learner_name[]"
        placeholder="Enter name" required>`;
    }
}

function sendMail(contactForm) {

    collectNames()

    var typeValue = document.getElementById("typeField").value;
    var hsValue = document.getElementById("hsField_1").checked;
    var presentationSubjectMail = {};
    var presentationResourceMail = {};
    var examSubjectMail = {};
    var examResourceMail = {};
    var oneSubjectMail = {};
    var assessmentTypeMail = {};
    var vettingMail = {};
    var eliMail = {};

    if (typeValue === TRAINING_PRESENTATION) {
        presentationSubjectMail = contactForm.presentationSubject.value;
    } else {
        presentationSubjectMail = "";
    }

    if (typeValue === TRAINING_PRESENTATION) {
        presentationResourceMail = contactForm.presentationResource.value;
    } else {
        presentationResourceMail = "";
    }

    if (typeValue === EXAMS_OR_TESTS) {
        examSubjectMail = contactForm.examSubject.value;
    } else {
        examSubjectMail = "";
    }

    if (typeValue === EXAMS_OR_TESTS) {
        examResourceMail = contactForm.examResource.value;
    } else {
        examResourceMail = "";
    }

    if (typeValue === ONE_TO_ONE) {
        oneSubjectMail = contactForm.sessionSubject.value;
    } else {
        oneSubjectMail = "";
    }

    if (typeValue === ONE_TO_ONE) {
        assessmentTypeMail = contactForm.assessmentType.value;
    } else {
        assessmentTypeMail = "";
    }

    if (hsValue === true) {
        vettingMail = contactForm.vettingReference.value;
    } else {
        vettingMail = "";
    }

    if (hsValue === true) {
        eliMail = contactForm.eliRenewal.value;
    } else {
        eliMail = "";
    }

    emailjs.send("service_jrlcm3l", "template_pfvzimj", {
            "report_date": document.getElementById("dateValue").innerHTML,
            "employee_name": contactForm.nameField.value,
            "employee_id": contactForm.idField.value,
            "job_location": contactForm.locationField.value,
            "job_postcode": contactForm.postcodeField.value,
            "hours": contactForm.hoursField.value,
            "miles": contactForm.milesField.value,
            "number_of_learners": contactForm.numberField.value,
            "learner_names": namesArray,
            "job_type": contactForm.typeField.value,
            "presentation_subject": presentationSubjectMail,
            "presentation_resource": presentationResourceMail,
            "exam_subject": examSubjectMail,
            "exam_resource": examResourceMail,
            "one_to_one_subject": oneSubjectMail,
            "assessment_type": assessmentTypeMail,
            "vetting_reference": vettingMail,
            "eli_renewal": eliMail,
            "job_details": contactForm.additionalInfo.value,
            "productivity": document.getElementById("prodMail").innerHTML,
        })

        .then(
            function (response) {
                console.log("SUCCESS", response)
            },
            function (error) {
                console.log("FAILED", error)
            });

            location.reload();

    return false;
}

// Document ready with jquery, call learner name function

$(document).ready(function () {

    $("#numberField").change(function () {
        $.fn.myFunction();
    });
    $.fn.myFunction = function () {
        addFields1();
    };

    $("#productivityRating").hide();
    renderJobTypeOptions();

});

// Render job type options

const TRAINING_PRESENTATION = "Training presentation";
const EXAMS_OR_TESTS = "Exams/tests";
const ONE_TO_ONE = "One-to-one";

const typeFieldOptions = [{
        value: TRAINING_PRESENTATION,
        displayValue: "Training presentation"
    },
    {
        value: EXAMS_OR_TESTS,
        displayValue: "Exams/tests"
    },
    {
        value: ONE_TO_ONE,
        displayValue: "One-to-one"
    },
];

function renderJobTypeOptions() {
    const select = document.getElementById("typeField");

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

    container.innerHTML = `<div class="row">
    <div class="col-sm-4"><img alt="Presentation icon"
            src="assets/images/presentation.png" class="img-fluid img-style d-none d-sm-block"></div>
    <div class="col-sm-8 type-padding justify-content-center">
        <label class="form-labels1 removeType" for="presentationSubject">Presentation
            subject:</label>
        <input type="text"
            class="form-control text-width1 align-items-center form-fields"
            id="presentationSubject" name="presentationSubject"
            placeholder="Enter subject" required>
        <label class="form-labels1 removeType" for="presentationResource">Resource ref:</label>
        <input type="text"
            class="form-control text-width1 align-items-center form-fields"
            id="presentationResource" name="presentationResource"
            placeholder="Enter resource reference" required>
    </div>
</div>`;

}

// Exams/tests Function

function examsTests() {

    var container = document.getElementById("container1");

    // Clear contents
    $(".removeType").remove();

    $(".type-div").slideDown('medium');

    container.innerHTML = `<div class="row">
    <div class="col-sm-4"><img alt="Exam icon"
            src="assets/images/exam.png" class="img-fluid img-style d-none d-sm-block"></div>
    <div class="col-sm-8 type-padding justify-content-center">
        <label class="form-labels1 removeType" for="examSubject">Exam/test
            subject:</label>
        <input type="text"
            class="form-control text-width1 align-items-center form-fields"
            id="examSubject" name="examSubject"
            placeholder="Enter subject" required>
        <label class="form-labels1 removeType" for="examResource">Resource ref:</label>
        <input type="text"
            class="form-control text-width1 align-items-center form-fields"
            id="examResource" name="examResource"
            placeholder="Enter resource reference" required>
    </div>
</div>`;

}

// One-to-one Function

function oneToOne() {

    var container = document.getElementById("container1");

    // Clear contents
    $(".removeType").remove();

    $(".type-div").slideDown('medium');

    container.innerHTML = `<div class="row">
    <div class="col-sm-4"><img alt="One-to-one icon"
            src="assets/images/one-on-one-icon.png" class="img-fluid img-style2 d-none d-sm-block"></div>
    <div class="col-sm-8 type-padding justify-content-center">
        <label class="form-labels1 removeType" for="sessionSubject">Activity subject:</label>
        <input type="text"
            class="form-control text-width1 align-items-center form-fields"
            id="sessionSubject" name="sessionSubject"
            placeholder="Enter activity subject" required>
        <label class="form-labels1 removeType" for="assessmentType">Assessment type:</label>
        <input type="text"
            class="form-control text-width1 align-items-center form-fields"
            id="assessmentType" name="assessmentType"
            placeholder="Enter assessment type" required>
    </div>
</div>`;

}

// Type/select Function

function typeSelect() {

    var typeValue = document.getElementById("typeField").value;

    if (typeValue === TRAINING_PRESENTATION) {
        trainingPresentation();
    } else if (typeValue === EXAMS_OR_TESTS) {
        examsTests();
    } else if (typeValue === ONE_TO_ONE) {
        oneToOne();
    } else {
        $(".type-div").hide();
    }
}

// Health and safety Function

$(".health-safety-div").hide();

function healthSafety() {

    var container = document.getElementById("container2");

    // Clear contents
    $(".removeType1").remove();

    $(".health-safety-div").slideDown('medium');

    container.innerHTML = `<div class="row removeType1">
    <div class="col-sm-4"><img alt="Presentation icon" src="assets/images/safety.png"
            class="img-fluid img-style1 d-none d-sm-block"></div>
    <div class="col-sm-8 hs-padding justify-content-center">
        <label class="form-labels1" for="vettingReference">Vetting document
            ref:</label>
        <input type="text"
            class="form-control text-width3 align-items-center form-fields"
            id="vettingReference" name="vettingReference"
            placeholder="Enter vetting document reference" required>
        <label class="form-labels1" for="eliRenewal">ELI renewal date:</label>
        <input type="date"
            class="form-control text-width3 align-items-center form-fields"
            id="eliRenewal" name="eliRenewal"
            placeholder="Enter ELI renewal date" required>
    </div>
</div>`;

}

function clearHS() {

    $(".removeType1").remove();

}

// Validate postcode

function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

function postcode() {

    var postcode_value = document.getElementById("postcodeField").value;

    var validated_postcode = valid_postcode(postcode_value);

    if (validated_postcode === true) {

        console.log("true postcode");
    } else {
        console.log("false postcode");
    }
}

// Collect names and store in array function

var namesArray = []

function collectNames() {

    var number = document.getElementById("numberField").value;

    for (i = 0; i < number; i++) {

        var idGenerator = `#learner-name-${[i+1]}`;

        var multipleValues = $(idGenerator).val() || [];

        namesArray.push(multipleValues);
    }
    namesArray.join(', ');
    console.log(namesArray);
}

// Calculate productivity score

var productivityRating = "";

function calculateRating() {

    var hoursOnJob = document.getElementById("hoursField").value;
    var milesTravelled = document.getElementById("milesField").value;
    var number = document.getElementById("numberField").value;
    var hoursScore = 0;
    var milesScore = 0;
    var numberScore = number * 10;

    if (hoursOnJob === 0) {
        hoursScore = 0;
    } else {
        hoursScore = 80 / hoursOnJob;
    }

    if (milesTravelled < 10) {
        milesScore = 50;
    } else {
        milesScore = 500 / milesTravelled;
    }
    var productivityScore = hoursScore + milesScore + numberScore;
    if (productivityScore > 90) {
        productivityRating = "High";
    } else if (productivityScore > 65) {
        productivityRating = "Medium";
    } else {
        productivityRating = "Low"
    }

}

function addRating() {

    $("#productivityRating").hide();

    var hoursOnJob = document.getElementById("hoursField").value;
    var milesTravelled = document.getElementById("milesField").value;
    var number = document.getElementById("numberField").value;
    var ratingSpan = document.getElementById("productivityRating");

    if (hoursOnJob > 0 && milesTravelled > 0 && number > 0) {

        ratingSpan.innerHTML = `Productivity rating: <br> <span id="prodMail">${productivityRating}</span>`;
        $("#productivityRating").show();
    } else {
        $("#productivityRating").hide();
    }

}