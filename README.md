<h1>Mars Mission Task Tracker</h1>
<h2>About This Project:</h2>
<p>
This project was completed as part of a technical assessment for a JavaScript Test Automation Developer position. The assessment required me to build a JavaScript SPA for tracking tasks for a Mars mission. The application needed to use webpack as the bundler.
</p>
<p>
I chose React for the application and used the project as an opportunity to demonstrate both my development and test automation skills. The goal was not only to build the required functionality, but also to verify the behaviour of the application through automated testing.
</p>
<p>The scenario for the assessment was:</p>
"We are going to Mars."
<p>
I was asked to create a WebApp that could be used to track tasks for the Mars mission.
</p>
<p>The main requirements were to:</p>
<ol>
  <li>Create, view, update and delete mission tasks.</li>
  <li>Store a title, description, creator and assignee for each task.</li>
  <li>Create a coloured header with a title that remains visible while scrolling.</li>
  <li>Create a side panel showing the current user and number of tasks, with the ability to delete all tasks.</li>
  <li>Display the provided Mars image asynchronously.</li>
  <li>Write tests to verify that the application behaves correctly.</li>
  <li>Use Git for version control and commit changes throughout the development of the project.</li>
</ol>
<h2>My Approach:</h2>
<p>
I decided to build the application using React and JavaScript, with webpack handling the application bundling. I separated the application into different React components rather than building the entire interface in a single component. I also implemented additional validation and persistence behaviour to make the application more practical to use.
</p>

<h2>What I Implemented:</h2>
<h3>1. Mission Task Management</h3>
<p>
I implemented the main CRUD functionality required by the assessment.
</p>
<p>Users can:</p>
<ul>
  <li>Create a mission task</li>
  <li>View existing mission tasks</li>
  <li>Update a task</li>
  <li>Cancel an update</li>
  <li>Delete an individual task</li>
  <li>Delete all tasks</li>
</ul>
<p>
Each mission task contains a title, description, creator and assignee. I also added validation to prevent incomplete task information from being submitted.
</p>

<h3>2. Persistent Task Storage</h3>
<p>
I used the browser's localStorage to persist task information. This was an additional implementation decision that allows created tasks to remain available after the browser is refreshed.
</p>

<h3>3. Header and Dashboard</h3>
<p>
I created a Mars-themed dashboard for the application. The header remains visible while scrolling through the page. I also created a sidebar that provides task-related information and controls, including the number of tasks currently stored in the application. The task counter updates as tasks are created or deleted. In addition to deleting individual tasks, I implemented the required option for deleting all tasks. A confirmation is required before tasks are removed to help prevent accidental deletion.
</p>
<h3>4. Mars Image</h3>
<p>
The assessment provided a Mars image from Unsplash that needed to be displayed at the top of the application. I incorporated the Mars-themed image into the interface as part of the dashboard design.
</p>
<h2>Automated Testing:</h2>
<p>
Testing was an important part of the assessment because the position itself focused on JavaScript Test Automation.
</p>
<h3>Selenium WebDriver:</h3>
<p>
I used Selenium WebDriver to automate the application through the browser.
</p>
<p>My Selenium tests cover functionalities including:</p>
<ul>
  <li>Creating mission tasks</li>
  <li>Updating existing tasks</li>
  <li>Cancelling task updates</li>
  <li>Deleting individual tasks</li>
  <li>Deleting all tasks</li>
  <li>Task counter behaviour</li>
</ul>
<p>
These tests interact with the application in a similar way to an actual user, allowing me to verify the application's end-to-end behaviour.
</p>

<h3>Jest:</h3>
<p>
As part of this project, I also decided to try Jest for the first time to explore unit testing alongside the browser-based testing I was doing with Selenium WebDriver. I used Jest to test some of the JavaScript functionality independently from the browser. This gave me an opportunity to gain initial hands-on experience with unit testing and understand how it differs from the end-to-end testing I performed with Selenium.
</p>

<h2>Project Structure</h2>
<p>
I separated the application into reusable components based on their responsibilities.
</p
<p>The main components include:</p>
<ul>
  <li>Header: Handles the application's header.</li>
  <li>Sidebar: Displays task information and controls.</li>
  <li>MarsImage: Handles the Mars image displayed on the dashboard.</li>
  <li>TaskForm: Handles the creation of new mission tasks.</li>
  <li>TaskRead: Displays existing mission tasks and their available actions.</li>
  <li>UpdateTaskForm: Handles updating existing tasks.</li>
</ul>
<p> One of my biggest takeaways from this assessment was understanding the relationship between development and testing. Building the application myself helped me understand how the functionality works behind the scenes, while testing it with Selenium allowed me to approach the same functionality from a user's perspective. </p>
<p> Trying Jest for the first time also introduced me to unit testing and helped me understand where unit tests and end-to-end tests fit within the testing process. </p>
