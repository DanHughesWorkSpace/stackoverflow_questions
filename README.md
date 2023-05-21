# stackoverflow_questions

# FYI
## I had originally planned to complete this Assessment early next week as I had a busy weekend planned, but I noticed you requested for it to be done within 48 hours so I made it a priority of mine to complete it over the weekend.
## I began on Saturday mornnig for 1 hour 31 mins, and then I had the pleasure in attending the Heiniken Cup final in the Aviva Stadium with some friends. I then completed the remainder of the assessment on Sunday evening. After 2 hours 14mins i had gotten a 400 Response from the stackoverflow API stating "too many requests from this IP, more requests available in 75808 seconds".
## I would have liked to clean up a few things but I left it at this point to start creating the Repo on GitHub and populating the README file.
## I used the following website to generate the models i required from the API response 'https://app.quicktype.io/'

# How to run
## Open terminal
## run 'npm i' to install any required dependencies
## run 'ng s -o' to serve the application

# Project Structure
## App Component houses the Header, Router-Outlet and Footer Component.
## Router-Outlet routes to Content Component
## Content Component injects API Service
## Observable is subscribed to here and displayed to user in a For Loop
## Some general set-up styles for the page is in styles.scss
### I adjusted width from 1600px to 100% to ensure contents remain inside broweser without the use of an x-axis scrollbar.

# Areas of focus
## I mainly attempted to replicate the FIGMA design on my broswer.
## Did not worry about project layout too much
## Less emphasis on reusing styles (font classes, color variables, margin-variables) to try get as much done as possible.
## I incorporated some of the ways I style in my current employer, but mainly done by best to use any code given to me in the FIGMA designs.
### Example, i typically would use Viewports or flex to either specify margins or display center, so the Content Container would always be center of any broswer. My implemented version is centered for device that uses 1600px resolution, but on my larger 27" monitor it is not centered.
## One are of regret is that I spent a little bit too long playing around with SVG's for the 'Welcome' slide specified in the XDs. I got carried away with this wanted to add extra functionality and perfecting it - i decided to abondon that, get it styled as specified by XD's then moved onto other areas. NOTE: There is only one Slide Ellipsis in the implemented version, i planned to add more slides and then display the Slide Elipsis based on the number of images.

# Potential error cases
## Condition to tell user there is no data to be displayed if a http get returns an error.

# I would have like to add some functionality to the project.
## Routing to stackoverflow link
## Hover functionality on certain aspects (user image to display 'OWNER', hovering over an individual card item to change color using ngClass)
## Extra slides
## Filter functionality to let the user return top X questions.
### simple text area with a button. I would allow getTopTenQuestions() functions to take a paramter of type number, and add this to the already existing string. example for top 20 would be 'https://api.stackexchange.com/2.3/questions?pagesize=20&fromdate=1641168000&todate=1684454400&order=desc&sort=activity&site=stackoverflow'.


# Additional Comments:
## Im not super proud about how much i got done. I was anticpating getting some aspects completed quicker.
## I think it is clear from my implementation that I am somewhat comfortable with Angular but may have some bad habits that I have picked up form previous experiences. There may be some key principles I am missing but I do believe these habits can be changed quickly, I just require the right mentor to learn off.

# I would really appreciate some feedback on the implementation whether it be good or bad (greater emphasis on requiring feedback if implementation is poor)



