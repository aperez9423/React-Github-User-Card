UPER Problem Solving Framework

U - Understand the problem.
P - Plan how to solve the problem.
E - Execute your plan.
R - Reflect on your work, your results, and the process. 

Understand:
Be honest with yourself with what you understand or don’t understand.

How much do I understand each topic?

How can I be more specific with what I don’t know?

What would your final results look like?

What does the project do/functionality?
- [ ] Fetch data from the Github API for a Github user
- [ ] Display the user data on the DOM
- [ ] Use class components when you need to hold any state or use any lifecycle methods

What’s the starting point? 
Blank Canvas
React App Template

What type of constraints might you have?

What might success look like?

What are your questions?
How do I create a new react app? npx create-react-app my-app. cd my-app and then npm start.

Plan:
Prepare list of steps
-Create React App
-Get rid of any unecessary files

#### Fetch the User Data

- When your component mounts, send a GET request to the following URL (replacing the palceholder with your Github name):
  - https://api.github.com/users/<your name>
- After you fetch your data, set it to state

#### Display the User Data

- Pass the data to the component that will be displaying it
- Build out a user card using the data that the Github API returns to you
  - You may reference your old project for this, or you may wish to build this from scratch yourself

#### Fetch the User's Followers

- When your component mounts, you will also fetch the user's followers using this endpoint:
  https://api.github.com/users/< Your github name >/followers
- Set that data to state as well, and display the data in your app

#### Style the User Card

- Now it's time to style up your app
- You are free to choose how you style your app, but make it look as presentable as you can
- Try something new here. Maybe that's a new CSS technique you haven't really practiced yet. Maybe it's using a styling library you haven't tried. Push yourself to get better in this area.

Plan backwards?

If you still have questions, go back to “understand” phase.

Execute:
Follow Plan

Write Code

It’s OK to adjust

Don’t be afraid to make mistakes

Create checkpoints by using console.log

Reflect:
Successful?

What did you learn?

What would you do differently?

Where might you make improvements?



