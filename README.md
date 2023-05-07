# COVID 19 Tracing website

This website allows users to checkin Covid 19 at different places. It also allows venue owners to manage the number of visits at their restaurant. More importantly, the web app gives health officials detailed reports about current Covid 19 situation.

![covid_demo](https://user-images.githubusercontent.com/64762998/236666414-6544206d-43a6-4280-9029-b77419e92546.png)


# Instructions to run the web:

1. It is recommended to access this website using Google Chrome.

2. Connect to database:

    sql_start
    mysql --host=127.0.0.1
    use PROJECT;
    SET time_zone='+09:30';

3. Some existing accounts can be used for testing:

    admin:
        employeeID: sa111111
        password: 12345678

    individual:
        username: nhulong2001
        password: Longnhu2201
        email: a1787526@student.adelaide.edu.au

    manager:
        username: andy2201
        email:
        password: andy123
    ***If you want to login with Google, you must first sign up with the email account use want to use. Otherwise, it will not work***
4. To create a new admin account, you have to log in first using one of the existing admin account, and click "add new admin" in the top right corner dropdown menue.
5. ***IMPORTANT***
   When managers create their account, we assume that Health Officials will create a venue and assign it to managers.
   Managers cannot create a venue themselves. That's why when first creating the account, all info in Manage will be empty
     until the admin assign a venue to them.
   Managers cannot update their venues' info, they will submit a form to the Health Official. Because submission through a network
     is out of scope of this course, we just print out a line "Waiting for the approval from Health Official"
