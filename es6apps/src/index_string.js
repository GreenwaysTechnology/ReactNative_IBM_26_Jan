let firstName = "Subramanian"
let lastName = 'Murugan'
//back tick and string interpolation
let fullName = firstName + lastName // traditional 
//back tick 
fullName = `${firstName} ${lastName}`
console.log(fullName)

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)