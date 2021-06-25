"use strict";
const backgroundLinks = [
  "http://4.bp.blogspot.com/-lqjR_dc3PRM/U1Tf_UMjjkI/AAAAAAAAOuM/D-grOMb4wMo/s1600/IT_67.jpg",
  "http://4.bp.blogspot.com/-zEvrji5v4Rc/VBfkYxoBAtI/AAAAAAAAZZM/TvQqqNt8fO8/s1600/Beach%2BBunny%2B(6).png",
  "http://2.bp.blogspot.com/-flbUr3GCINw/UmZAmTS0ZhI/AAAAAAAAIOY/8IlddkMcnFY/s1600/827233655_SM_16_123_405lo.jpg",
  "http://3.bp.blogspot.com/-dX4KkIL-8yA/UmZAir_rd7I/AAAAAAAAIN8/teaYfDGzSo4/s1600/827228483_SM_07_123_210lo.jpg",
  "http://3.bp.blogspot.com/-lXcGZuzJ5IE/Ue-hWoxpewI/AAAAAAAAEiA/nhKhP-HmRUk/s1600/a3.jpg",
  "http://1.bp.blogspot.com/-TnDZoRd5dco/UlZmZ5f9JjI/AAAAAAAAHig/XkTMeZddpDQ/s1600/718788512_010_123_195lo.jpg",
  "http://1.bp.blogspot.com/-p5ucRz3edWE/UlZmXT8ZvTI/AAAAAAAAHiU/WHqMJlDAwgI/s1600/718785903_008_123_74lo.jpg",
  "http://2.bp.blogspot.com/-J3fi77BPy70/UlZmG0as2PI/AAAAAAAAHhk/R38UFJcOtWY/s1600/718772721_002_123_252lo.jpg",
  "https://64.media.tumblr.com/6ccc925d2a3dcd9862c28844abbf23f3/tumblr_ngw7ff50W61qlr0abo1_1280.jpg",
  "https://i.pinimg.com/originals/35/c6/20/35c6209c6d2beefff323c03188c6e4c8.jpg",
  "https://jav-fetish.com/wp-content/uploads/2018/02/pppd00618pl-1.jpg",
  "https://javpornpics.com/dmm/hitomi-hitomi-tanaka/pppd00881/hd-hitomi-hitomi-tanaka-0.jpg",
];
let backgroundIndex = Math.round(Math.random() * backgroundLinks.length);

//dynamically set background image
const hero = document.querySelector(".hero");
const setBackground = function () {
  hero.style.backgroundImage = backgroundLinks[backgroundIndex];
};
setBackground();
console.log(hero);
// Dynamically adding content

const getPageObject = function (page) {
  const pageObject = page.trim().toLowerCase().split(" ");
  const secondWord = pageObject[1];
  console.log(pageObject.join(""));
  return pageObject;
};
const thisPage = document.getElementsByTagName("h1")[0].innerHTML;
const pageObject = getPageObject(thisPage);

const videoBlock = document.querySelector(".gallery-video");
const displayContent = function (links) {
  videoBlock.innerHTML = "";
  links.forEach(function (videoLink, imageLink) {
    html = `<div class="gallery-video">
    <a href="${videoLink}">
    <img src="${imageLink}"></a>
    </div>`;

    videoBlock.insertAdjacentHTML("afterbegin", html);
  });
};
console.log(thisPage, thisPage.videos);
displayContent(thisPage.videos);

///////////////////////////////////////////////////
///////////All video links/////////////////////////
//list of pages
const girls = new Set([
  abellaDanger,
  ajApplegate,
  alanahRae,
  alexaPearl,
  anastasiaKvitko,
  angelaWhite,
  anikkaAlbrite,
  autumnFalls,
  avaAddams,
  babemashek,
  badDragonSlayer,
  bethLily,
  comerzz,
  evetteMarie,
  gabbieCarter,
  gifgallery,
  harleyJade,
  hayleelove,
  hitomiTanaka,
  irynaIvanova,
  jadaStevens,
  jaydenJaymes,
  jessieRogers,
  jordanCarver,
  katerinaHartlova,
  kelsiMonroe,
  kendraLust,
  kendraSunderland,
  lanaKendrick,
  lenaPaul,
  louisaKhovanski,
  lucieWilde,
  mandyMuse,
  merilynSakova,
  miaKhalifa,
  misc,
  newMila,
  remyLacroix,
  sA,
  savannahBond,
  siswet19,
  skylarVox,
  tessaFowler,
  violetMyers,
]);

//////////Girls//////////////////////////////////////////////////////////////////////
const abellaDanger = {
  sName: "Abella Danger",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://i.pinimg.com/originals/72/ee/49/72ee4998da543c25017591701c9c38de.jpg",
};
const ajApplegate = {
  sName: "Aj Applegate",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto: "https://www.babepedia.com/user-uploads/AJ%20Applegate6.jpg",
};
const alanahRae = {
  sName: "Alanah Rae",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://live.staticflickr.com/7571/16060820115_0558f61c50_b.jpg",
};
const alexaPearl = {
  sName: "Alexa Pearl",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://thumb-p1.xhcdn.com/a/LRjfiN-H4TK4B8XeSpxdcw/000/391/276/971_1000.jpg",
};
const anastasiaKvitko = {
  sName: "Anastasia Kvitko",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://i.pinimg.com/736x/df/19/b7/df19b72f32bd24a43a22e6d2845bc107.jpg",
};
const angelaWhite = {
  sName: "Angela White",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://external-preview.redd.it/9fbvB3fnzNOGCU0AVtoz0ygTp922C6dqhPXiiL7fInk.jpg?auto=webp&s=56443b34871d8eac5a3508fef57a53a162caa36a",
};
const anikkaAlbrite = {
  sName: "Anikka Albrite",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto: "https://cdn.pornpics.com/pics/2015-10-30/199736_08big.jpg",
};
const autumnFalls = {
  sName: "Autumn Falls",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://www.foxhq.com/autumn-falls-natural-breast-worship/5.jpg",
};
const avaAddams = {
  sName: "Ava Addams",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://cdn.milffox.com/milffox/p/1/13/23594/pic1.jpg",
};
const babemashek = {
  sName: "Babemashek",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://dntgjk0do84uu.cloudfront.net/1002577884/6e60a9d41e21fb08ea6cc7fddea00d81/screenshots/ff4d240fa87d93ef433aaf209f08b02e.jpg",
};
const badDragonSlayer = {
  sName: "BadDragonSlayer",
  tags: ["ass", "dildo", "amateur"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://ci.phncdn.com/videos/201804/16/162351902/original/(m=eaAaGwObaaaa)(mh=DW4YWqosvNIk52gF)4.jpg",
};
const bethLily = {
  sName: "Beth Lily",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto: "https://cdn.pichunter.com/356/0/3560991/3560991_8_o.jpg",
};
const comerzz = {
  sName: "Comerzz",
  tags: ["tits", "ass", "amateur"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://cliptrend.com/wp-content/uploads/2020/05/meaAaGwObaaaamhvuCIqCW7SlfB-V675.jpg",
};
const evetteMarie = {
  sName: "Evette Marie",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://external-preview.redd.it/nY26xuGvpJsdzjz-thg9zXaj6qER8uOeYoS0TjsWVXs.jpg?width=640&crop=smart&auto=webp&s=47e87d59569c2ab90d58f36ac56c6218848398b3",
};
const gabbieCarter = {
  sName: "Gabbie Carter",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://www.curvyerotic.com/thumbs/gabbie13.jpg",
};
const gifgallery = {
  sName: "Gif Gallery",
  tags: [],
  videos: [],
  photos: [],
  coverPhoto: "",
};
const harleyJade = {
  sName: "Harley Jade",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://img.ifunny.co/images/a1df641a35f09ded6f736f971e2b130b8b091f273c1435ec3c4c38c527bdb973_1.jpg",
};
const hayleelove = {
  sName: "Haylee Love",
  tags: ["tits", "amateur"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://d2adpaynhf6x63.cloudfront.net/php_uploads/video_images/HayleeLove/9Rb5CO0YsObSYFd9CAJk_screenshot_002.jpg",
};
const hitomiTanaka = {
  sName: "Hitomi Tanaka",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://megumi.b-cdn.net/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/P/P/PPPD809_7.jpg",
};
const irynaIvanova = {
  sName: "Iryna Ivanova",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJmbPmn5nqDRz9EXanLRIz2W1DRJyWFtLfbg&usqp=CAU",
};
const jadaStevens = {
  sName: "Jada Stevens",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto: "https://bigass.tube/images/jada-stevens-9194.jpg",
};
const jaydenJaymes = {
  sName: "Jayden Jaymes",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://www.tomorrowporn.com/new-sensations-network/pov-fantasy/jayden-jaymes/01.jpg",
};
const jessieRogers = {
  sName: "Jessie Rogers",
  tags: ["ass", "tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "http://3.bp.blogspot.com/-E_eCSkOsKY0/U9q5aQ2CJ4I/AAAAAAACGkA/yKQ5z_NjTnI/s1600/tumblr_mdze3lJVOR1rk7s8bo1_500%20Jessie%20Rogers.jpg",
};
const jordanCarver = {
  sName: "Jordan Carver",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://i.imgur.com/EKr5PpL.jpg",
};
const katerinaHartlova = {
  sName: "Katerina Hartlova",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://www.sexvideogif.com/wp-content/uploads/2015/08/05/3dc1YQ9.gif",
};
const kelsiMonroe = {
  sName: "Kelsi Monroe",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://images02-openlife.gammacdn.com/photo_set/59932/previews/59932_1.jpg",
};
const kendraLust = {
  sName: "Kendra Lust",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://img.freeones.com/photos/001/mz/pa/MzPA6q4vcWEZi4xTuGkMyH/teaser/59c3b1c8-2b84-4a63-8887-d3c8a47ded4f.jpg",
};
const kendraSunderland = {
  sName: "Kendra Sunderland",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://i.redd.it/99zwbefpmhe11.jpg",
};
const lanaKendrick = {
  sName: "Lana Kendrick",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://i.imgur.com/DuZUrNu.jpg",
};
const lenaPaul = {
  sName: "Lena Paul",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://bobs-tube.com/contents/albums/sources/116000/116944/1817137.jpg",
};
const louisaKhovanski = {
  sName: "Louisa Khovanski",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto: "https://i.redd.it/dk1ttr30cns51.png",
};
const lucieWilde = {
  sName: "Lucie Wilde",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://lh3.googleusercontent.com/proxy/vH-9lBMTtTjWMRMNBSoYfCPCR1RDIpAE1AjfdC9DhY3AO-cUvsBF-ITSovE4qCBktx6M7U1BYs8OR1p1TuwDpyOV8zRBoczvE-Sv61pCxXJHx8IW3czuA4u1-ztlQuQjuSy_OG0wO_hEMYKvlssCzhTvEQ",
};
const mandyMuse = {
  sName: "Mandy Muse",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://www.mypornstarbook.net/pornstars/m/mandy_muse/gallery62/images/09.jpg",
};
const merilynSakova = {
  sName: "Merilyn Sakova",
  tags: ["tits", "amateur"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://external-preview.redd.it/JnmduSOwMx8MHqqeE9aBnOP2w8FUSFtbLAajaWfGLWQ.jpg?auto=webp&s=b8ef17b8d441a4cf8dc68a5f38940f2d8e04a8f8",
};
const miaKhalifa = {
  sName: "Mia Khalifa",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://streamxxxtube.com/wp-content/uploads/2018/03/btra13562-480p-cover.jpg",
};
const misc = {
  sName: "Misc",
  tags: ["Misc"],
  videos: [],
  photos: [],
  coverPhoto: "",
};
const newMila = {
  sName: "NewMila",
  tags: ["tits", "ass", "amateur"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://ci.phncdn.com/videos/202001/06/274462711/original/(m=eaAaGwObaaaa)(mh=dtTlm4TUhqrqJ1cE)3.jpg",
};
const remyLacroix = {
  sName: "Remy Lacroix",
  tags: ["ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://cdn1.hothag.com/media/images/1/1/remy-lacroix-9110-ass.jpg",
};
const sA = {
  sName: "Sexual Addiction",
  tags: ["tits"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://di.phncdn.com/videos/201807/21/175479321/original/(m=eaAaGwObaaaa)(mh=OVqc41P346Wc_DiM)3.jpg",
};
const savannahBond = {
  sName: "Savannah Bond",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto: "https://iv1.lisimg.com/image/19305705/664full-savannah-bond.jpg",
};
const siswet19 = {
  sName: "Siswet19",
  tags: ["ass", "dildo", "amateur"],
  videos: [],
  photos: [],
  coverPhoto: "",
};
const skylarVox = {
  sName: "Skylar Vox",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://www.imperiodefamosas.com/Fotos/Dylann_Vox/Dylann_Vox_026.jpg",
};
const tessaFowler = {
  sName: "Tessa Fowler",
  tags: ["tits", "amateur"],
  videos: [
    [
      "https://spankbang.com/10bdw/video/tessa+fowler",
      "https://www.gifmeat.com/wp-content/uploads/2016/05/Getting-jiggy-with-it-with-busty-Tessa-Fowler-huge-natural-tits.gif",
    ],
    [
      "https://www.pornhub.com/view_video.php?viewkey=ph576dc98fad1ee",
      "https://www.hottystop.com/tessa-fowler-fan-favorite-outfit/5.jpg",
    ],
    [
      "https://www.pornhub.com/view_video.php?viewkey=ph5c96c1b1acab3&pkey=106790612",
      "https://www.curvyerotic.com/thumbs/tessa45.jpg",
    ],
    [
      "https://www.pornhub.com/view_video.php?viewkey=ph5ba954379e8cd",
      "https://www.primecurves.com/tessa-fowler-fan-favorite-pink-top/10.jpg",
    ],
    [
      "https://spankbang.com/2o5om/video/tessa+fowler+sexy+cop+5d+1",
      "http://mybigtitsbabes.com/wp-content/uploads/2014/10/Tessa_Fowler_Big_Boobed_Cop_01.jpg",
    ],
    [
      "https://www.pornhub.com/view_video.php?viewkey=ph5c930cee4ee55&pkey=106790612",
      "https://3.bp.blogspot.com/-tk8vsM9gV6I/V7LxSLMEP1I/AAAAAAABr4M/iHsszN663NQtjanyCe5IMsvthjQpUr3hwCPcB/s1600/tessaworkoutsm.jpg",
    ],
    [
      "https://www.pornhub.com/view_video.php?viewkey=ph5ca8f42cea89c",
      "https://i.pinimg.com/originals/87/58/4a/87584ad17d0753b3dceb853ba9ad4d67.jpg",
    ],
    [
      "https://www.pornhub.com/view_video.php?viewkey=ph58cec0fea914b",
      "https://www.xxxery.com/thumbs/Yq4yBNa1wuhhci-C1DiQBMGGr0F3KQYgeNm0fXbEWF0n1uCMBEsC-Jq3czo004mxfKyCqvlERjKu8IEaE8dkhS8dkwLWXeI3fmff9vIY0ABmSoyukamuH0Rzd-agaUUK.jpg",
    ],
    [
      "https://spankbang.com/33yww/video/tessa+fowler+fan+outfit+12",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyh4LClqcX3-EKUgWT1671hr4Sqwg8ssTGwS_MQCbN7YHANM87xg",
    ],
    [
      "https://www.xvideos.com/video60069213/tessa_fowler_dildo_titty_fuck",
      "https://thumb-lvlt.xhcdn.com/a/REYJsfehDOlcwIxKtcJjmA/016/870/180/320x240.4.jpg",
    ],
  ],
  photos: [],
  coverPhoto: "https://pbs.twimg.com/media/DEprBDVUIAA80jD.jpg:large",
};
const violetMyers = {
  sName: "Violet Myers",
  tags: ["tits", "ass"],
  videos: [],
  photos: [],
  coverPhoto:
    "https://cdn.fleshbot.com/uploads/2019/11/ARCHANGEL-2019-TheBootyMovie8-VioletMyers-PROMO-HIRES-012-e1573357820875.jpg",
};
