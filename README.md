# uda-image-resize-Project
# Get started
Install all dependecies with __npm i__
# Application
## Intro
This API resizes an image to a given size. The images are limited to the ones that are stored on the server right now.
Possible Images for resizing are:
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica
- encenadaport

All Images are JPG at the moment.
## Routes
To resize an image you can call the GET URL 
/api/images?filename=\<filename>&width=\<width>&height=\<height>
__height__: integer
__width__: integer
__filename__: see list of possible values above

sample: http://localhost:3000/api/images?filename=fjord&width=200&height=200

On error you will see the error. On success you will see the image in the requested size. The images are stored in thumb folder until server restarts (delete to clear space)
## Tests
Jasmin is implemented to test basic functions. you can run it with __npm run test__
