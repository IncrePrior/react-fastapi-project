# React-FastAPI

## Intro
An Event-driven architecture thematic of a delivery service.
This project is built from a freeCodeCamp.org course
and use the following technologies:

##### Front-end:
The client side is built with ReactJS, TypeScript and TailwindCSS.

##### Back-end:
The server side is built with FastAPI (RestAPI) and Redis (database).


In this notes, you will read the client side experience.

#### Create Delivery
In the beginning, the user is able to create a delivery,
setting the delivery's budget and note.


### Delivery
The user will be redirected to the delivery section,
where it gonna be able to see the progress bar
and interact with some card events.

#### Start Delivery
The start card contains a submit button to start
the delivery and drive the data to other events.

#### Increase Budget
If the user's budget can't pay the total
purchase price, it is allowed to increase its budget.
