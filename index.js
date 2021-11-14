const fs = require('fs');
const remove_bg = require("remove.bg");
const API_Key = require("./API_KEY.js")

const images = './images/';

fs.readdir(images, (err, files) => {
    files.forEach( async (file) => {       
        let imgName = file.replace(/\.[^/.]+$/, "")
        const localFile = images + file;
        const outputFile = "./png/"+ imgName + ".png";

       await remove_bg.removeBackgroundFromImageFile({
          path: localFile,
          apiKey: API_Key,
          size: "regular",
          type: "product",
          crop: true,

          outputFile 
        }).then(() => {
         console.log(`File saved to ${outputFile}`);

        }).catch((error) => {
         console.log(JSON.stringify(error));
        });

    });
})


