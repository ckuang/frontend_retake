# Final Technical Exam Retake
You will be cloning the application LinkedIn. We will be testing you on React. You will need to use `react-router` to handle front-end routing, create React components with lifecycle methods, and send AJAX requests to the built out backend. The models and routes have been written for you.

There are two models:
* Person
* Experience

There are a number of routes that you can hit:
* `GET` - `/api/persons`
* `GET` - `/api/persons/:id`
* `POST` - `/api/persons`
* `POST` - `/api/experiences`
**BONUS FEATURES**
* `PUT` - `/api/experiences/:id`
* `DELETE` - `/api/experiences/:id`  

You can configure your components however you like, but I'll break down how I would structure it below.

### Router
You will need to use `react-router` to determine what components are displayed on the page. There should be two routes: one `IndexRoute` and another `Route`.
* The `IndexRoute` should display the `Persons` component and `NewPerson` component
* The `Route` should display the `Person component`. If you click an edit button found on each experience, it should mount a form to edit that experience.

### Persons
  - fetches information(name, location, industry) on all persons
  - clicking on a person will change the URL and bring you to the `Single Person` page
  - renders a form that creates a new person

### New Person Form
  - form with 3 text fields and 1 drop-down option fields
  - the drop-down menu should have the options: `["Education, "Technology", "Science", "Mathematics"]`
  - fires off AJAX request to the server to create a new person
  - on successful creation, the person will be added to the list of persons

### Single Person
  - fetches information on a single person with all associated experiences
  - displays all the person's information along with all their experiences
  - renders a form that allows you to write a new experience for that person

### New Experience Form
  - form with 2 date/calendar fields and 2 text fields
  - sends form data off to the server to create a new experience (don't forget to include the ID of the person the experience is for!)
  - on successful creation, the experience will be added to the list of experiences for that person

### Edit Experience Form [10 points]
For each experience, add a button that renders a form that allows for editing of that experience.

### Delete Experience Button [5 points]
Place a button inside each experience component that'll be remove that experience from the person's profile.
