_Rough notes - for reference_

# HTML
- Body
- Main Frame Div
    - Heading
    - Search Box Div
        - Input
        - Get Button
    - Content Div
        - Paras for each info block
        - Image div
            - Image

# JS
- Selected the required HTML components using DOM, query selectors
   
- Added event listener to search button (whenever clicked) (_line 8_)
- Placed the value of input in a const 'word'
  
- Dictionary API fetched and retrieved data converted to a .json object (_line 11_)
- Definition and Phonetics retrieved from js object using indices 
- Info added to HTML divs using .innerText with error handling when required data is unavailable
- if else blocks used to counter data inconsistency
  
- Wikimedia API fetched and data converted to .json (_line 27_)
- Image inserted in HTML using .src and fallback image kept in case or errors
  
- .catch to handle error of not finding the required definition in Dictionary API (_line 38_)
