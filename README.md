# UrlShortener

This is an application designed to provide a short URL based on a given Full URL of any web page.

## Front-End Routes


Route "/" : Loads the main page.\

Route "/:code" : Redirects the user to the full web page based on the code.\

Route "/admin/login" : Loads the login page.\

Route "/admin/dashboard" : Load the admin dashboard

## Back-End Routes

Route "/:code" : Returns the object that matches the code and adds a visit to the given site.\

Route "/api/url/shorten" : Creates an register on the data base given a Long URL and returns the object created containing the short URL\

Route "/api/auth" : Verifies if the user is valid and returns the authorization token.\

Route "/api/auth/me" : Verifies if the given token is valid.\

Route "/api/toplist" : Returns the 20 most visited sites after verifying the authorization token.\
