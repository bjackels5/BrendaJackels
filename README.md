# ProjectName
This challenge for Module 20 of the Coding Bootcamp is to create a professional portfolio for myself using React.

* [User Story](#userStory)

* [Requirements](#requirements)

* [Technologies Used](#techUsed)

* [What I Learned](#whatILearned)

* [ProjectName Screenshot](#webImage)

* [Sample Generated Webpage](#sampleOutput)

* [ProjectName Demo](#projectDemo)

* [ProjectName URL](#projectURL)

* [Contact Me](#contactMe)


---

<a id="userStory"></a>

## User Story

AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
--- 

<a id="requirements"></a>

## Requirements

* The portfolio must be a single-page application.
* When the portfolio is loaded, the user is presented with a page containing a header, a section for content, and a footer.
* The header contains:
    * the developer's name
    * navigation containing the following titles:
        * About Me
        * Portfolio
        * Contact
        * Resume
        * the title corresponding to the current section is highlighted
* Clicking on a navigation title presents the corresponding section below the navigation. This will not result in any page reloading.
* The *About Me* title and section are selected by default.
* The *About Me* section contains a recent photo and a short bio.
* The *Portfolio* section contains 6 of my applications, each with:
    * a link to the deployed application
    * a link to the corresponding GitHub repository
* The *Contact* section requires:
    * a contact form with fields:
        * name
        * email address
        * message
    * All fields are required, and a notification will appear to that affect when the cursor is moved out of an empty field
    * Text entered into the email address field is verified to be a valid email address, and the user is notified if it is not valid.
* The *Resume* section contains:
    * a link to a downloadable resume
    * a list of my proficiencies
* The footer contains:
    * A links to my GitHub profile
    * A link to my LinkedIn profile
    * A link to a third platform (I'll use Stack Overflow)
* Use a Create-React-App that contains:
    * A single Header component that appears on multiple pages
    * A single Navigation component within the header that will be used to conditionally render the different sections of your portfolio
    * A single Project component that will be used multiple times in the Portfolio section
    * A single Footer component that appears on multiple pages
* FOR NOW, The contact form should be similar to the one built in the module project. Because this application doesn’t include a back end or connect to an API, set up this functionality the same way it is in the module project and add in back-end functionality later. In the meantime, add my email address and phone number on the Contact page.
    
---

<a id="techUsed"></a>

## Technologies Used

* React
--- 

<a id="whatILearned"></a>
## What I Learned

I learned that the instructions in the Module to disable automatic browser opening for the CRA CLI are incorrect. The correct way to suppress the browser is to add "BROWSER=none" to the .env file. There are other methods that involved more steps.

Build a single-page application with React.

Create reusable components within a React application.

Manage state within React components.

Pass props to child components.

Use React Hooks to manage state in functional components.

Conditionally render components based on updates to state.

Compose a React application with components.

Learn how React components are basically just functions.

Construct the elements of a webpage using JSX.

Debug errors in React.


---

<a id="webImage"></a>

## ProjectName Screenshot

![ProjectName](./media/project-name.png)

---

<a id="sampleOutput"></a>

<a href="./dist/sampleOutputFile">Sample ProjectName Output</a>

---

## ProjectName Demo

<a id="projectDemo"></a>

<a href="https://youtu.be/TRyEJ-cYpcg">
   <img src="./media/ProjectName-demo.png">
</a>

---

<a id="projectURL"></a>
## ProjectName URL
[ProjectName URL](https://bjackels5.github.io/ProjectName/)

---

---

<a id="contactMe"></a>
## Contact Me
You can reach me, Brenda Jackels, at bjackels5@gmail.com.

