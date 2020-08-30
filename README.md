Project title
  SpaceX-Launch-Program

Tech/framework used
  Angular

Functionalities
  User can be able to Filter the results with help of provided Filters.
1) Filter options are hard coded with the values shown in the visual comp.
2) Applying any Filter reflect the below changes:
•	Selected filter shall be in selected state as shown in the visual comp.
•	Applied filters shall change the URL and update the Page with latest records.

Description
  I have developed a front-end application which would help users list and browse all launches by SpaceX program.
  For this the values are given by API paths.
  Firstly home.component is developed where the visual is present.
  The CSS file is also included.
  To get the API path values, I have used service and resolver files. 
  Here service file is used to get the data from API.
  The fuction calls in Service return the Observable instances.
  Here resolver is used to load the data at first time load.
  We subscribe at the component file, this is because to receive the data before the actual html loads and give exceptional values.
  
Files
  There is an app folder, which includes required files such as:-
  
  * home --> home.component.html
             home.component.ts
             home.component.css
  * services --> spaceXResolver.ts
                 spaceXService.ts
  app.component.css
  app.component.html
  app.component.ts
  app.module.ts
  app.server.module.ts
  
  This is the file structure of the project.
  




