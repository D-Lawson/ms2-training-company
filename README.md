![The Training Company](/assets/readme-images/.PNG)

URL to the current deployed website:  [The Training Company](URL)

# The Training Company - Job sheet app

This application is intended to capture field data for a national training company.   The application will serve as a means of capturing and submitting employee shift data at the end of their shift.   As employees will be completing these forms regularly, it needs to be intuitive and user friendly.  As there are a few different variables associated with different shifts, the form will need to behave dynamically and respond to user input in an interactive way to make the experience as seamless as possible. 

The goal is to provide the employee managers with accurate and timely data at the end of each shift.  This will not only supply the company with useful HR information, but also information relating to the activities delivered by the company on a daily basis.

----

# UX
## Who is the audience?

The audience are employees of the company, in particular trainers, tutors, assessors.  At the end of each shift, employees are required to submit their shift data to their manager to record various details in relation to their shift (such as hours, miles travelled, nature of work activities and associated data).

## The site owner

The owner seeks to obtain accurate and timely data relating to the activities of employees on a daily basis.  This data will be used to manage and monitor staff activity, HR purposes and also monitor the activities devlivered by the company.  

## Typical user stories to expect:

1.  As a tutor I want to be able to quickly send my manager the details of today's one-to-one tutoring sessions I delivered with learners, along with shift hours and miles travelled for my mileage claim.

1.  As a trainer I want to be able to quickly send my manager details of the presentation I delivered to students today, along with shift hours and miles travelled for my mileage claim.

1.  As an assessor I want to be able to quickly send details of learners assessed on a site visit today and for which qualifications, along with shift hours and miles travelled for my mileage claim. 

1.  As an employee of the company I want to report today's activities and also supply information relating to a health and safety vetting carried out on site.


## The Strategy Plane

This application needs to make the process of submitting data as easy and efficient as possible.  As a routine activity that staff will undertake it must be very easy to use, intuitive and interactive to the point that the form adapts dynamically based on user inputs to speed up the process, and also avoid presenting the user with any unrequired inputs.   The form will need to ensure that data is accurate and that sufficient data has been submitted to meet requirements.  

Website user objectives:

* Document and submit HR data relating to shift (hours on job and miles travelled)
* Document and submit details of work activities, details of learners seen and the nature of activties delivered 
* Document and submit details of health and safety requirements
* Document and submit any additional details relevant to the job undertaken

Website owner objectives: 

* Provide employees with an efficient way to capture and submit information at the end of their shift
* Receive accurate and timely information relating to employee work activity and company activities
* Collect mileage information for expenses claims
* Improve effectiveness of systems for capturing and recording information
* Improve employee productivity


## The Scope Plane

These features are to be included as priorities:

*	Navigation bar across the top with basic brand information
*	Dynamic form that responds interactively to user inputs.  The form will contain the following features:
    *	Date selector (selecting 'today' or 'yesterday', generates the associated date)
    *	Text fields for employee name, employee ID, job location, job postcode
    *	Number fields for hours on job, miles travelled, number of learners (form to dynamically generate text input fields for learner names, dependent on the number of learners)
    *	Job type drop down selector (form to generate unique sections conditional on the job type)
    *	Health and safety section to be rendered into the form upon radio button 'yes'
    *	Section for supplying additional information relevant to the work activity
*	Application to determine a productivity score/rating based on hours on job, miles travelled and number of learners
*	Form to submit form data to the site owner via Email API

## The Structure Plane

The page will contain a standard navigation bar that will feature some basic brand information.  The page will provide instant access to the data capture form, which will feature prominently in the centre of the page.   The structure of the form will adhere to the data requirements outlined, with the form structure changing dynamically in response to user inputs.

## The Skeleton Plane

Here are the initial wireframes produced for this project:

[Landing page - desktop and tablets](assets/wireframes/wireframe-for-desktop.png)

[Landing page - mobile](assets/wireframes/wireframe-for-mobile.png)


## The Surface Plane 

Here are some of the styling rules that has been defined to date: 

### Fonts/typography

**Georama regular 400** from Google Fonts has been identified as suitable for form labels and headings throughout this project.   

### Colours

*	rgba(35, 47, 73) has been identified as a suitable base color for the theme
*	rgb(139,38,29) has been identified as suitable for the nav bar and footer
*	rgb(242,242,214) has been identified as suitable for form labels
*	rgb(228,195,133) has been identified as suitable for the form heading
*	rgb(139,38,29) has been identified as suitable for form input fill color

### Buttons

Generic bootstrap buttons have been deemed suitable, providing that the styling is overridden to complement the theme.

----

# Features

## Existing Features

*	Basic nav bar displaying the company  name and nature of the application
*	Form container placed prominently in the centre of the page for immediate access to the form.  A graphical element is placed on the left hand side of the container.
*   Form contains a radio button for reporting the date with options Today or Yesterday.  The application then utilises a JQuery event listener to render the calculated date into a span element within the form.
*   The form contains a range of input fields to obtain all the information specified (text, number, radio, date).  Also utilises Select and Textarea inputs.  
*   Upon entering Hours, Miles and Number of learners the application utilises JavaScript to calculate a productivity score using a specific formula.  This is then converted to a rating of Low, Medium or High which is then rendered into the form as feedback.
*   Upon selecting the Number of Learners, the application renders the associated amount of input fields to enter learner names.  Each name is assigned an unique Name and ID.
*   The 'Select job type' select element obtains a list of job types which is rendered into the element using JavaScript.  The chosen option then calls on the appropriate function to render the associated HTML into the container below.
*   The 'Health and safety vetted?' radio button Yes selection calls upon a function to render the associated HTML into the container below.
*   A textarea input field is displayed to allow the user to provide any additional information of use.
*   The form is validated using the native HTML5 validation which supplies sufficient feedback to the user to provide suffient and valid data.  The Postcode field contains a pattern to validate a UK postcode with required attributes placed where needed.
*   Upon successful validation the Submit button calls upon the relevant function to compile the form data and associate them with properties for the EmailJS API template.  The form is then submitted to the API and the data is sent to the assigned email address.  The submit function also initiates the modal popup to confirm successful submission, which then resets the form.
*   Basic footer is provided for application information and contact details.
*   The application contains adequate accessibility features for its purpose.

## Features Left to Implement

*   Information (i) icon to be placed next to 'report date' label with hover popover which instructs the user the reason why reports can only be created for Today and Yesterday (to encourage timeliness of reports), and to contact the administrator if the window has been missed.  (i) to be placed next to postcode label to instruct of the expected postcode format.

*   Generate JSON file containing form data upon submit.
*   Order form labels and inputs vertically in mobile view to enhance the mobile experience.

----

# Technologies Used

*   GitHub was used to host my repository and deploy the website onto Github Pages. GitPod was used as a workspace to develop the application.
*   Google Chrome was used as my primary browser for the development, including Dev Tools and Lighthouse. I used chrome on android mobile to aid development of responsiveness.
*   Bootstrap version 4.6 used for the grid system, nav, some styling and a button.
*   Languages used for this application were HTML, CSS and JavaScript.
*   JQuery libary version 3.6 was used so that I can utilise JQuery for some features
*   Google Fonts to import font styles into the CSS. The CSS2 API was used.
*   Balsamiq wireframes was used to produce the wireframes.
*   Adobe Illustrator was used to manipulate a vector graphic obtained from shutterstock
*   A11Y was used to test colour contrasts for sufficient accessibility.
*   TinyPNG was used to compress images.
*   The W3C validation tools were used to validate HTML and CSS
*   The JSHint tool was used to check for quality issues within the JavaScript

----

# Testing

## Testing against user stories:

## Manual testing procedures

## Other testing considerations/Known bugs

----

# Deployment


----

# Credits

## Content

## Media

## Acknowledgements 
