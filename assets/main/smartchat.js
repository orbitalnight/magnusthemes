/* smart chat by magnusthemes.tumblr.com */

function colourChat(chatDivs,chatLabel,colours) {
  for (var i = 0; i < chatDivs.length; i++) {
    // loop through all chat posts
    var chatNames = chatDivs[i].getElementsByClassName(chatLabel); // get all the elements to inspect
    var textCheck = chatNames[0].innerHTML; // save first name in chat post

    var allNames = []; // 1d array
    allNames.push(new Array(chatNames[0])); // make the array 2d

    for (var j = 0; j < chatNames.length; j++) {
      // loop through all chat name elements
      var currentText = chatNames[j].innerHTML; // save current chat name
      var matchFound = false; // set as false bc not matched yet

      // check all the current words for matches
      for (var k = 0; k < allNames.length; k++) {
        // loop through the current array of words
        textCheck = allNames[k][0].innerHTML; // the text to check
        if (currentText == textCheck) {
          // if a match is found
          allNames[k].push(chatNames[j]); // add element
          matchFound = true; // match found
          break; // exit loop
        } //end if text matches
      } //end chatname checker loop

      if (matchFound === false)
        // if the current name hasn't been recorded yet, otherwise matchFound will return true
        allNames.push(new Array(chatNames[j])); // make a new array with the current element
    } //end chat name element loop

    var colourCounter = Math.floor(Math.random() * colours.length); // randomize the starting colour

    for (var m = 0; m < allNames.length; m++) {
      // loop through all the words
      for (var n = 0; n < allNames[m].length; n++)
        allNames[m][n].style.color = colours[colourCounter]; // colour the element
      if (++colourCounter == colours.length)
        // if there are no more colours to use
        colourCounter = 0; // go back to the first colour
    } // end word-element-array loop
  } // end chat div loop
} // end function
