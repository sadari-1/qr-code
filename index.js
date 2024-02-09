import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"

inquirer
  .prompt([
    {
        message: "Type in URL: ",
         name: "URL"
        }
  ])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log('THE FILE HAS BEEN SAVED')
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
/*
1. use the inquirer npm package to get user input.

2. use the qr-image npm package to turn the user entered url into qr code image.
3. create a text file to save the user input using the native fd node modules.
*/


