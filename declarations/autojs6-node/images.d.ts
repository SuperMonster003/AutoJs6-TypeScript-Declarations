declare module "images" {
  import image = require("image");
  const images: image.ImageModule;
  export = images;
}

declare module "autojs6:images" {
  import images = require("images");
  export = images;
}

declare module "autojs6:image" {
  import image = require("image");
  export = image;
}
