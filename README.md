# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# Property App

## App Overview
---

The Property App is a platform to list properties for sale, where users can make offers on other listed properties.

This was a joint one-week long project between Hal Evans and Tom Fairclough (https://github.com/tfairclough).

### Technologies

This app was built using a [`Ruby on Rails`](https://rubyonrails.org/) backend API with a [`React.js`](https://reactjs.org/) frontend

- Code Editor: VSCode
- Programming Languages: `HTML`, `CSS`, `JavaScript`, `JSX`
- Libraries: `react`, `react-router`, `axios`, `devise`, `devise-api`, `react-bootstrap`
- Database: PostregSQL
- Version Control: Git & Git Hub Source Control
- Design: Balsamiq

### Brief

- Build a full stack web application. Must be your own work.
- Select a Project Idea of your own.
- Have at least 2 models (more if it makes sense)
  - Auth is a requirement
- Have full CRUD on at least one of your models
- Be able to Add/Delete on any remaining models
- Have high quality code:
  - Follow accepted naming conventions
  - Consistent indentation
  - Well-structured and readable code
  - Semantic naming of variables, functions, CSS classes, etc.
  - Short and clear functions that do one thing
  - Efficient code - if you have your MVP, refactor
  - DRY (Don't Repeat Yourself) code
- Use one of these technology stacks. You may choose which tech stack.
  - Full-Stack Rails App
  - Rails API with React Front-End
  - Express API with React Front-End
- Be deployed on Heroku or similar platform
- Craft a `README.md` file that explains your app.

## Planning
---
### MVP

- A property listing website where users can:
    - upload properties to sell
    - make offers on properties already posted on the site

### User Stories

#### MVP

- [x] As a user, I want to sign up so that I can create an account
- [x] As a user, I want to login so that I can access the app
- [x] As a user, I want to add a property that I own so that I can list a property on the app
- [x] As a user, I want to delete a property that I own so that I can remove it from the listing on the app
- [x] As a user, I want to edit a property that I own so that I can make changes to the property details
- [x] As a user, I want to add offers on properties so that I can buy them
- [x] As a user, I want to delete offers on properties so that I can remove offers made
- [x] As a user, I want to view my properties so that I can see what I have listed
- [x] As a user, I want to view my offers so that I can see what offers I have made

### Wireframes

![](./assets/Login%20Page.png)
![](./assets/Profile%20Page.png)
![](./assets/Property%20Index.png)
![](./assets/Property.png)

### Entity Relationship Diagram

![](./assets/ERD.png)

## Build Process

1. Initialised Ruby on Rails as an API to return JSON. Created the routes and controllers. E.g.:
  ```ruby
    get 'house_offers/:house_id', to: "offers#house_offers"
    devise_for :users, 
              controllers: { tokens: 'tokens' }

    resources :users
  ```

  ```ruby
  def create
    @house = House.new(house_params)

    if @house.save
      render json: @house, status: :created, location: @house
    else
      render json: @house.errors, status: :unprocessable_entity
    end
  end
  ```

2. Initialised React App and created components to render. We use functional components throughout utilising hooks and useEffects. For example:

  ```javascript
  const [propertyOffers, setPropertyOffers] = useState([]);
  const [showOfferModal, setOfferModal] = useState(false);
  const [showEditPropertyModal, setEditPropertyModal] = useState(false);

  useEffect(() => {
    getOffers(props.user.token, props.propertyDetails.id)
    .then((response) => {
      // console.log(response)
      setPropertyOffers(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })
  }, [props.user.token, props.propertyDetails.id]);
  ```

3. Use `devise-api` with bearer token authentication to protect the database:

  ```ruby
  skip_before_action :verify_authenticity_token, raise: false
  before_action :set_house, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_devise_api_token!
  ```

4. Utilised `axios` calls to retrieve, create, edit and destroy data in the database:

  ```javascript
  export const checkTokenValidity = (token) => {
    return axios.get(`${apiUrl}/users/tokens/info`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  ```

5. Used `React Bootstrap` for styling. For example:

  ```javascript
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Property App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link href="/">Home</Nav.Link> */}
          {/* <Nav.Link href="/login">Log In</Nav.Link> */}
          <Nav.Link href="/marketplace">Marketplace</Nav.Link>
        </Nav>
        {user && 
          <>
            <Navbar.Text>
              Signed in as: <a href="/profile">{user.first_name} {user.last_name}</a>
            </Navbar.Text>
            <Button className="ms-3" variant="outline-danger" onClick={handleLogOut}>Logout</Button>
          </>
        }
      </Navbar.Collapse>
    </Container>
  </Navbar>
  ```

## Challenges
---

- Using `devise-api`
  - It is a new library with limited documentation and community support
- Determining how to link Ruby on Rails with React
- Designing the database such that a `User` could be both a property owner and an offerer

## Future Improvements
---

- Sell a property to another person
- Add filters to view only certain properties e.g. by price range
- Add Estate Agent model