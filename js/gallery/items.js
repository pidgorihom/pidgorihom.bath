const posts = [];
const images = [
  'img/photos_gallery_page/1694350483623.jpg',
  'img/photos_gallery_page/1694350483654.jpg',
  'img/photos_gallery_page/1694350483707.jpg',
  'img/photos_gallery_page/1694350483741.jpg',
  'img/photos_gallery_page/1694350483751.jpg',
  'img/photos_gallery_page/1694350483784.jpg',
  'img/photos_gallery_page/1696142721012.jpg',
  'img/photos_gallery_page/1696142721035.jpg',
  'img/photos_gallery_page/1696142721058.jpg',
  'img/photos_gallery_page/1696142721080.jpg',
  'img/photos_gallery_page/1696142721107.jpg',
  'img/photos_gallery_page/1696142721157.jpg',
  'img/photos_gallery_page/1696142721174.jpg',
  'img/photos_gallery_page/1696142721182.jpg',
  'img/photos_gallery_page/1696142721264.jpg',
  'img/photos_gallery_page/1696142721272.jpg',
  'img/photos_gallery_page/1696142721373.jpg',
  'img/photos_gallery_page/1694350483654.jpg',
  'img/photos_gallery_page/IMG_20201115_125315.jpg',
  'img/photos_gallery_page/IMG_20201204_142125.jpg',
  'img/photos_gallery_page/IMG_20201204_142444.jpg',
  'img/photos_gallery_page/IMG_20210113_152122.jpg',
  'img/photos_gallery_page/IMG_20210113_155556.jpg',
  'img/photos_gallery_page/IMG_20210306_212426.jpg',



/*
  'https://i.pinimg.com/474x/75/73/29/757329682e5c43c6f068f2cd236ab9f8.jpg',
  'https://i.pinimg.com/474x/3b/af/a4/3bafa44ae06f6ab124b6fd9dd63626fe.jpg',
  'https://i.pinimg.com/474x/b8/e9/23/b8e92321cdd7718ece99a55c2e130a42.jpg',
  'https://i.pinimg.com/474x/81/30/eb/8130eb00c3256ec7e001836b8671df5f.jpg',
  'https://i.pinimg.com/474x/23/b4/04/23b40489ada7f425975e7547b8787d21.jpg',
  'https://i.pinimg.com/474x/23/3e/87/233e87dc813f41d11e5be5128a881469.jpg',
  'https://i.pinimg.com/474x/db/73/29/db73295453e74be00132c983ca0a710f.jpg',
  'https://i.pinimg.com/474x/1b/39/da/1b39dafada167437638ac028d8ee94b7.jpg',
  'https://i.pinimg.com/474x/6d/93/b3/6d93b32c8fe8ba58b56cd5207f35bea4.jpg',
  'https://i.pinimg.com/474x/89/8a/36/898a360b7630c094420115da1f1547fb.jpg',
  'https://i.pinimg.com/474x/e8/3b/fa/e83bfa23df348d9cb78bfb0f788b480e.jpg',
  'https://i.pinimg.com/474x/5b/02/3b/5b023b9bec0909d96e33773bb6f82cf4.jpg',
  */
];

let imageIndex = 0;

/*for (let i = 1; i <= 80; i++) {*/
for (let i = 1; i <= images.length - 1; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex],
    /*data-fancybox
    data-src="img/photos_big-hall/1696142721174.jpg"
    data-caption: `Post ${i}`,
*/
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
