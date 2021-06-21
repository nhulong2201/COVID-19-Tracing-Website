# contact-tracing-website


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
        email: a1787526@student.adelaide.edu.au
        password: Longnhu2201

    manager:
        username: andy2201
        email:
        password: andy123

4. To create a new admin account, you have to log in first using one of the existing admin account, and click "add new admin" in the top right corner dropdown menue.
5. ***IMPORTANT***
   When managers create their account, we assume that Health Officials will create a venue and assign it to managers.
   Managers cannot create a venue themselves. That's why when first creating the account, all info in Manage will be empty
     until the admin assign a venue to them.
   Managers cannot update their venues' info, they will submit a form to the Health Official. Because submission through a network
     is out of scope of this course, we just print out a line "Waiting for the approval from Health Official"
