# Project Name

Reflection Survey Redux App

##Demo
[Click here!](https://drive.google.com/file/d/1tl8tbSlptFMvCXpI0P64ner62RqJXZpT/view?usp=sharing)

## Technologies Used

JavaScript
React
Redux
HTML
CSS
Material UI
Node.js

## Description

For this project, I updated a React app to use redux. This app includes several views in a reflection survey form, and the redux store is used to store the user's input until the form is submitted. 

To add redux to this project, I first began by creating a store instance and creating reducers for each of the survey form views (feeling, understanding, support, and comment). 
Each reducer included a  switch statement with listeners for storing the user's input in the redux store and clearing the input once the form was submitted. Since the action.payload was coming back as  
a string, I added the Number method to the action.payload to convert it into a number.


In the App.jsx file, I used useSelector to gather the information stored in the redux store and wrap it into a constant called 'input', which included an object with all of the user's input for each feedback question.

When the user clicks the next button in the survey, they are brought to the next question. After the final question, upon clicking next, the user is brought to the review page. This page renders all of their
feedback responses to the DOM. When the user clicks the submit button on the review page, the saveFeedback function is called. This function takes the input variable as an argument and includes a POST request so 
that the user's feedback is stored in the database. 

After submitting their responses, the user is brought to a success page that tells them their responses were submitted. This page includes an option to take the survey agai. If the user clicks that button, the 
dispatches are sent out to the reducers, which will clear all input from the survey so that the user can take the survey again.

To add styling to this project, I used Material UI.





