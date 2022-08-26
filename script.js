'use-strict';

// 1. create a constructor which receives an object of type HTMLImageElement (use createElement('img') or document.getElement.. to receive one already in DOM) , width = 200 as default, height = 300 as default
// 2. create the following functions in prototype
//     - addImage(url, title)
//     - getAmountOfImages() - will return the amount of images added already
//     - changeToImageIndex(index) - will change the src and alt of the HTMLImageElement based on the image in the specific index
//     - next() - will change to next image
//     - prev() - will change to prev image

// The object created by the constructor should look something like that
//  {
//      imageElement: SOME HTMLImageElement Object
//      images: [
//          {
//              url: 'http://dsfdsaf...dsfasdf.com/dfsadsf../..dsfa/',
//              title:'birds'
//          }
//      ],
//     currentImage:4,

//  }

class Img {
  constructor(id) {
    this.imageElement = document.getElementById(id);
  }

  images = [];
  currentImage = null;

  addImg(url, title) {
    const img = {
      url,
      title,
    };
    this.images.push(img);
  }

  getAmountOfImages = () => this.images.length;

  changeToImageIndex(index) {
    this.imageElement.src = this.images[index].url;
    this.imageElement.alt = this.images[index].title;
    this.currentImage = index;
  }
  next(index) {
    index === this.images.length - 1 ? (index = 0) : index++;
    this.imageElement.src = this.images[index].url;
    this.imageElement.alt = this.images[index].title;
    this.currentImage = index;
  }
  prev(index) {
    index === 0 ? (index = this.images.length - 1) : index--;
    this.imageElement.src = this.images[index].url;
    this.imageElement.alt = this.images[index].title;
    this.currentImage = index;
  }
}

const img1 = new Img('img1');
img1.addImg(
  'https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg',
  'a dog'
);
img1.addImg(
  'https://www.heloplus.com/wp-content/uploads/2022/02/whatsapp-dp-pic.jpg',
  'a lion'
);
img1.addImg(
  'https://1.bp.blogspot.com/-kV9I_gQDXO0/XrFa86aPnbI/AAAAAAAAA50/QMNzu19d48Ip8ZLmZlQkcDY4JF1yMtB6gCK4BGAsYHg/w266-h400/Rose-Whatsapp-DP-Pic.jpg6',
  'a flower'
);
img1.addImg(
  'https://toppng.com/uploads/preview/3d-red-heart-png-pic-heart-psd-11563017295ko0z21akbg.png',
  'heart'
);

img1.changeToImageIndex(0);
img1.next(1);
img1.prev(0);
// console.log(img1);

const img2 = new Img('img2');
img2.addImg(
  'https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000',
  'space'
);
img2.addImg('https://pbs.twimg.com/media/EWQzScBXQAEn0xu.jpg', 'elephant');
img2.addImg(
  'https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=20&m=636379014&s=612x612&w=0&h=Zb6EobVr_BR278tpANKvKzfcQMIz-P_2Tv3XVXZufAM=',
  'hands'
);
img2.addImg(
  'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
  'orange'
);
img2.changeToImageIndex(1);
img2.next(1);
img2.prev(0);

// console.log(img2);
