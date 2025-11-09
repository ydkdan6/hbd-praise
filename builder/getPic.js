const fs = require("fs");
const path = require("path");

const setPic = function (pic) {
  try {
    const targetPath = path.join(__dirname, "../src/pic.jpeg");
    
    // If pic is a string (file path), copy it
    if (typeof pic === "string") {
      fs.copyFileSync(pic, targetPath);
      console.log("IMAGE copied successfully!!!");
    } 
    // If pic is a buffer (from remote), write it
    else {
      fs.writeFileSync(targetPath, pic);
      console.log("IMAGE saved successfully!!!");
    }
  } catch (error) {
    console.error("Error handling image:", error.message);
    throw error;
  }
};

module.exports = setPic;