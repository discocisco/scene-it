[![Screenshot of Scene It Application](https://imgur.com/l2W5piy)](https://discocisco.github.io/scene-it)

# Scene It | MovieDb Web Application

Scene It is a movie database website created by [@discocisco](https://github.com/discocisco) for an educational project. Anyone can view the website and read a collection of reviews made by people who have _hopefully_ seen the movie they are reviewing. After sign-in, users are able to create reviews of their own as well as store certain movies as a favorite of theirs. The back-end was developed using combination of Ruby, Rails, and PostgreSQL. The front-end was developed using React primarily with JavaScript and axios commands to communicate with the Scene It API and display changes to the web application in real-time for the viewer. While anyone is able to view movies and movie reviews, only signed-in users are able to create, update, or destroy their own review. Favorites can only be viewed, added, or removed by the signed-in user.

-   [View the deployed client here!](https://discocisco.github.io/scene-it)
-   [View the deployed API here!](https://sceneit-api.herokuapp.com)

## Setup and installation
1.  [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository
2.  Create a branch for edits (_suggested_)
3.  Install dependencies with `npm install`.
4.  Run local host for viewing live-changes with `npm start`.

## Technologies used

-   React
-   JavaScript
-   Hypertext Markup Language (HTML)
-   Cascading Style Sheets (CSS)
-   Sass (SCSS)
-   axios
-   Bootstrap
-   moment.js
-   Git
-   cURL
-   API [(view the repo here.)](https://github.com/discocisco/scene-it-api)

## Development process and strategy

The focus of this project was to establish a basic skeleton of content before branching off and working on specific individual components. First, in a high-level component, all necessary forms, buttons, etc. were made to ensure a basic axios HTTP call could be made to the back-end. When successful, large fragments of JSX were refactored into a new and more specific component, while also ensuring the functionality was not lost. After several iterations, a feature was considered to be "completed" if the final product(s) was a functional component. After all user methods were established, the process was repeated for each resource existing in the database (movies, reviews, and favorites) when applicable. Stylesheets were the last to be created and edited followed by animations and responsive design.

## Close, but still not in reach _(yet!)_
-   Incorporating usage of a third-party API to populate movies table so that users can always view an updated list of movies with additional information (rating, critic review scores, box office numbers, etc.)
-   API key for `TheMovieDb` has been successfully acquired. Next steps are to configure back-end to communicate with the API appropriately.
-   Allow users with accounts from `TheMovieDb` or Guests to create sessions within Scene It so that they are able to review movies and have their reviews reflected through the application.
-   Responsive design for all screensizes.
-   Accessability features.
-   Nesting reviews into a forum of comments.

### Wireframes and user stories

#### [Wireframes located here.](https://imgur.com/a/e4u4IJN)
#### User stories:

-   As an unregistered user, I would like to view a list of movies.
-   As an unregistered user, I would like to view movie reviews.
-   As a registered user, I would like to sign up/in with email and password.
-   As a signed in user, I would like to change password.
-   As a signed in user, I would like to sign out.
-   As a signed in user, I would like to add a movie to my favorites
-   As a signed in user, I would like to create a review for a movie
-   As a signed in user, I would like to edit or delete my review
