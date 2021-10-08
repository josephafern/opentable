# Open Table Clone: Empty Chairs

<img src="https://open-table-seeds.s3.us-west-1.amazonaws.com/READMEimgs/first-final.jpg" />
<br/>
<a href="https://empty-chairs.herokuapp.com/#/">
  <img src="https://open-table-seeds.s3.us-west-1.amazonaws.com/READMEimgs/button.png" style="width: 150px; height: 50px;"/> 
</a>
<br/>

## Background

Empty Chairs is a clone of the popular reservation-making web and mobile app Open Table. Need a reservation at a local restaurant for a wedding? A birthday party? A celebration? Look no further than Empty Chairs! You can peruse our selection of fine establishments on the home page. Create an account and login in order to make a reservation or leave a review.

## Technologies

This project utilizes React and Redux on the frontend. As such, it also utilizes webpack. For the backend, I used Ruby on Rails and AJAX as well as PostgreSQL as the database.

## Functionality

### _User Auth_

New and returning users are able to input information into a login/signup modal and have their information, including their reservations and reviews, persist to the cloud. It also handles and renders any errors appropriately. Don't forget your password!!

### _RestaurantsIndex_

On the splash page, you can view individual restaurants, access their show page / all of their information, make a reservation (if signed in) directly from the home page. Subtle animations make the individual restaurant cards pop!

### _Reservations_

Users are able to make reservations either on the home page or a restaurants individual show page. Creating a reservation will lead the user to a reservation form that will take in their information and, if valid, will render a success message and then take the user to their profile page, where their reservations and reviews are displayed. Users are able to create, update and destroy reservations from their profile page.

### _Restaurant Search_

On the splash page, users are able to search for restaurants either by their name or their cuisine type. Depending on the results, the items will be displayed on a search index page. Users can then either conduct another search right from the search index page or navigate to a restaurant's show page.

### _Restaurant Show_

I wanted to highlight my Restaurant Show page as a particular point of pride. One of the last tasks I had for this project was readjusting the CSS positioning of every item on the page in order to retain the footer at the bottom of the page as well as automatically increase the size of the page (and adjust the location of the footer) upon the addition of a new review. 

<img src="https://open-table-seeds.s3.us-west-1.amazonaws.com/READMEimgs/third.png" />

Another point of pride is my Resevation modal on every Restaurant Show page. It sticks to the nav bar after reaching a certain height, emulating a similar feature on the actual Open Table website. I ran into an issue where the modal wouldn't run past the height of the Information container, given that they are within the same overall container that arranges their positions laterally across the page. 

<img src="https://open-table-seeds.s3.us-west-1.amazonaws.com/READMEimgs/fourth.png" />

### _Reviews_

On each restaurant's show page, users are able to write a review, which takes in a rating, title and body, that will persist to the cloud and render on both the restaurant's show page and also the user's profile. Users are able to create, update and destroy reviews from their profile page.

Implementing reviews was a paricular challenge as I needed to determine what the best (and least costly) way to fetch data from the database would be. Originally, I was making three individual SQL calls and three JBuilder renderings per User Show. Through ActiveRecords .includes method, I was able to cut the number of database calls to N over N+1!

Another challenge came in refactoring my code, particularly my Redux reducers, to account for changes to the user's state and render the changes immediately (as one would intuitively expect, as opposed to on refresh.

## Styling

Overall, styling proved to be one of the more challenging parts of the project. CSS is such a vast language and creating dozens if not hundreds of rulesets can easily cause one to get lost. Positioning can be a particular challenge. This project also gave me an opportunity to fine-tune my CSS design principles. Prior, I had little intuition for color and spacing heirarchy and also learned the difference between archane designs and more modern structures. In addition, transitions are something I became more familiar with in this project. 

## Future Additions

I would in the near future to add search categories for the Restaurant Search feature. I would also like to add more functionality to the reservation modal as well as an enterprise login that allows for Restaurant creation as well inputing of upcoming available reservation times that would then render to the page (at the moment, there are just standard boilerplate time slots.

_Shoutout to my project mentor, Diego Chavez. THANK YOU!!_
