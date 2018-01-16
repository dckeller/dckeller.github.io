# The DOM Challenge

## Summary
Every time we visit a webpage, our browser first sends a request to the server asking for content, and the server sends back a response with the HTML for the page.

The HTML in the server's response is just text.  But, when the browser receives the response, it parses that text into Javascript objects. Each object represents one HTML element, and they're linked together in a tree structure representing the HTML text.

This collection of objects is known as the *document object model*, or DOM for short.  

If we flip the words around, we could say that the DOM models a document. Typically you start interacting with the DOM by using a variable called `document` which represents the "root node" — the node that is the parent of all the other HTML nodes below it. 

We can access nodes with specific classes, get their child nodes, and more — just like we did with the Nokogiri objects.  In the browser, we interact with the DOM via JavaScript.

[chrome console]: https://developer.chrome.com/devtools#console
[chrome dev tools]: https://developer.chrome.com/devtools
[html5rocks node tree]: http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#DOM
