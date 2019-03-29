# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

1) When we type in the URL (Uniform Resource Locator) above in our browser, that browser is going to check the DNS (Domain Name System)
which is a database that maintains the website (techthonic) and the IP address connected to it.  DNS is basically a list of URLs and
their IP addresses, similar to how a phone book and is a list of names and their corresponding phone books.

2) Once the browser finds the address of the server that the website lives on, the browser will send a HTTP (Hyper Text Transer Protocol - the language for clients and servers to communicate) GET request to the server, asking it send a copy of the website to the client.  This message, and all other data, is sent between client (browser) and server, is sent across your Internet connection.

3) If the server approves the client's request, the server will send a "200 OK" green message, and will start sending the Techtonic website's files to the browser.

4) The browser will read the HTML files and display them on the browser.

SOURCE: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)</br>

## From start to finish, how does data reach you to be rendered in the browser?

When we write HTML/CSS/JavaScript code, the browser reads it as raw bytes of data but can't really do anything with it.  The raw bytes
of data must be converted into a form the browser understands.

* Every browser has a rendering engine which processes HTML markup to build the DOM (Document Object Model) tree.
* After HTML markup is processed, the rendering engine will process CSS markup to build the CSSOM (CSS Object Model) tree. 
* The DOM and CSSOM trees are combined to form the render tree.
* Render tree contains only the nodes required to render the page.
* Layout computes the exact position and size of each object.
* The last step is paint, which takes in the final render tree and renders the pixels to the screen.

## What code is rendered in the browser?

HTML is the structure that begins with the <html> tag, and usually follows with a <head> and <body> tag.  The HTML elements are parsed by the browser's rendering engine and turned into a DOM (Document Object Model) tree.  It is a tree-like structure that made out of HTML, where each tag is a branch starting at the root element.
  
CSS attributes are also parsed and combined with the DOM tree to create a "render tree".  This is a tree of visual elements such as height/width and color ordered in the hierarchy in which they are to be displayed in the browser.

JavaScript code comes after the web page has been rendered and painted into the screen, and when it executes it triggers a re-render to
account for changes made.

SOURCE: [Path Interactive](https://www.pathinteractive.com/blog/design-development/rendering-a-webpage-with-google-webmaster-tools/)</br>

## What is the server-side code’s main function?

Server-side processing happens when a page is first requested and when pages are posted back to the server. Examples of server-side processing are:

* User validation
* Saving and retrieving data
* Navigating to other pages
* Interact with permanent storage like databases or files
* Render pages to the client and process user input

SOURCE: [SequeTech](https://www.seguetech.com/client-server-side-code/)</br>

## What is the client-side code’s main function?

Client-side code is used for all the programs which are run on the browser (client).  It is used to:

* Make interactive webpages
* Make stuff happen dynamically on the web page
* Interact with temporary storage (cookies)
* Send requests to the server and retrieve data from it

SOURCE: [Stack Exchange](https://softwareengineering.stackexchange.com/questions/171203/what-are-the-differences-between-server-side-and-client-side-programming)</br>

## What is runtime?

Runtime describes software/instructions that are executed while your program is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code.

Low-level languages like C have very small (if any) runtime. More complex languages like Objective-C, which allows for dynamic message passing, have a much more extensive runtime.

Runtime code is specifically the code required to implement the features of the language itself.

SOURCE: [Stack Overflow](https://stackoverflow.com/questions/3900549/what-is-runtime)</br>

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?



## How many instances of the server-side code are available at any given time?

put your answer here

## How many instances of the databases connected to the server application are created?

put your answer here
