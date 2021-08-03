![The Training Company](/assets/readme-images/.PNG)

URL to the current deployed website:  [The Training Company](URL)

# The Training Company

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
*	Application to determine a productivity score based on hours on job, miles travelled and number of learners
*	Form to submit form data to the site owner via Email API

## The Structure Plane

The page will contain a standard navigation bar that will feature some basic brand information.  The page will provide instant access to the data capture form, which will feature prominently in the centre of the page.   The structure of the form will adhere to the data requirements outlined, with the form structure changing dynamically in response to user inputs.

## The Skeleton Plane

Here are the initial wireframes produced for this project:

[Landing page - desktop and tablets](URL)

[Landing page - mobile](URL)


## The Surface Plane 

Here are some of the styling rules that has been defined to date: 

### Fonts/typography

**Georama regular 400** from Google Fonts has been identified as suitable for form labels and headings throughout this project.   

### Colours

rgb(56, 69, 85) has been identified as a suitable base color for the theme

### Buttons

Generic bootstrap buttons have been deemed suitable, providing that the styling is overridden to complement the theme.

----

# Features

## Existing Features

## Features Left to Implement

----

# Technologies Used


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
