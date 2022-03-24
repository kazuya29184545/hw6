//Selecting the element and storing it
 
var el = document.getElementById('one');
 
// Changing the value of the attribute.
el.className = 'yellow';

// Store NodeList in array
var blueItems = document.querySelectorAll('li.blue'); 
if (blueItems.length > 0) {                          
 
  // Loop from the first item to the third one.  
  for (var i = 0; i < blueItems.length; i++) {  
    
    // Changing value of the attribute
    blueItems[i].className = 'skyblue';         
  }
 
}

var itemTwo = document.getElementById('two');  // Get second item
 
var elText  = itemTwo.firstChild.nodeValue;    // Get the text content into the viriable
 
elText = elText.replace('Change the world', 'Be distinctive');  // Replacing the text
 
itemTwo.firstChild.nodeValue = elText;  


//Creating a new element and storing it 
var newEl = document.createElement('li');
 
// Create a text node and store it 
var newText = document.createTextNode('Just do it.');
 
// Attach the new text node to the new element.
newEl.appendChild(newText);
 
// Find the position and add teh new attribute
var position = document.getElementsByTagName('ul')[0];
 
// Add the new element to the position.
position.appendChild(newEl);


var firstItem = document.getElementById('one'); // Get first list item 
if (firstItem.hasAttribute('class')) {          // If it has class attribute
  var attr = firstItem.getAttribute('class');   // Get the attribute
 
  // Add the value of the attribute after the list
  var el = document.getElementById('conclude');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '.\nWe are achieving all of these</p>';
"";
 
}
