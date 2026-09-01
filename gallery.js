/* =====================================================================
   KUNAL KESHRI — GALLERY
   =====================================================================

   HOW TO ADD NEW IMAGES
   ---------------------

   1. Put your image inside the "images" folder.

   2. Give it any normal filename, for example:
      images/client01.jpg
      images/event-01.webp
      images/poster.png

   3. Add ONE line inside the "GALLERY IMAGES" list below:

{ src: 'images/client01.jpg', alt: 'Client project 01' },
{ src: 'images/client02.jpg', alt: 'Client project 02' },
{ src: 'images/client03.jpg', alt: 'Client project 03' },
{ src: 'images/client04.jpg', alt: 'Client project 04' },
{ src: 'images/client05.jpg', alt: 'Client project 05' },
{ src: 'images/client06.jpg', alt: 'Client project 06' },
{ src: 'images/client07.jpg', alt: 'Client project 07' },
{ src: 'images/client08.jpg', alt: 'Client project 08' },
{ src: 'images/client09.jpg', alt: 'Client project 09' },
{ src: 'images/client10.jpg', alt: 'Client project 10' },
{ src: 'images/client11.jpg', alt: 'Client project 11' },
{ src: 'images/client12.jpg', alt: 'Client project 12' },
{ src: 'images/client13.jpg', alt: 'Client project 13' },
{ src: 'images/client14.jpg', alt: 'Client project 14' },
{ src: 'images/client15.jpg', alt: 'Client project 15' },
{ src: 'images/client16.jpg', alt: 'Client project 16' },
{ src: 'images/client17.jpg', alt: 'Client project 17' },
{ src: 'images/client18.jpg', alt: 'Client project 18' },
{ src: 'images/client19.jpg', alt: 'Client project 19' },
{ src: 'images/client20.jpg', alt: 'Client project 20' },
{ src: 'images/client21.jpg', alt: 'Client project 21' },
{ src: 'images/client22.jpg', alt: 'Client project 22' },








   That's it.

   You DO NOT need to edit gallery.html for every new image.

   Supported formats:
   JPG / JPEG / PNG / WEBP / GIF / AVIF / SVG

   For 300+ images:
   - Keep image files reasonably compressed.
   - The gallery uses lazy-loading.
   - The browser only loads images as they come into view.
   - Clicking an image opens the full-size viewer.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ================================================================
     GALLERY IMAGES
     ================================================================

     IMPORTANT:
     Add your new images HERE.

     Example:
       { src: 'images/my-photo.jpg', alt: 'My photo' },

     You can add as many as you want: 20, 100, 300, 500+.

     The order written here = the order shown in the gallery.
     ================================================================ */

  const images = [

    /* ---------- CURRENT IMAGES ---------- */

    { src: 'images/gallery1.jpg',  alt: 'Gallery frame 1' },
    { src: 'images/gallery2.jpg',  alt: 'Gallery frame 2' },
    { src: 'images/gallery3.jpg',  alt: 'Gallery frame 3' },
    { src: 'images/gallery4.jpg',  alt: 'Gallery frame 4' },
    { src: 'images/gallery5.jpg',  alt: 'Gallery frame 5' },
    { src: 'images/gallery6.jpg',  alt: 'Gallery frame 6' },
    { src: 'images/gallery7.jpg',  alt: 'Gallery frame 7' },
    { src: 'images/gallery8.jpg',  alt: 'Gallery frame 8' },
    { src: 'images/gallery9.jpg',  alt: 'Gallery frame 9' },
    { src: 'images/gallery10.jpg', alt: 'Gallery frame 10' },
    { src: 'images/gallery11.jpg', alt: 'Gallery frame 11' },
    { src: 'images/gallery12.jpg', alt: 'Gallery frame 12' },
{ src: 'images/gallery13.jpg', alt: 'Gallery frame 13' },
{ src: 'images/gallery14.jpg', alt: 'Gallery frame 14' },
{ src: 'images/gallery15.jpg', alt: 'Gallery frame 15' },
{ src: 'images/gallery16.jpg', alt: 'Gallery frame 16' },
{ src: 'images/gallery17.jpg', alt: 'Gallery frame 17' },
{ src: 'images/gallery18.jpg', alt: 'Gallery frame 18' },
{ src: 'images/gallery19.jpg', alt: 'Gallery frame 19' },
{ src: 'images/gallery20.jpg', alt: 'Gallery frame 20' },
{ src: 'images/gallery21.jpg', alt: 'Gallery frame 21' },
{ src: 'images/gallery22.jpg', alt: 'Gallery frame 22' },
{ src: 'images/gallery23.jpg', alt: 'Gallery frame 23' },
{ src: 'images/gallery24.jpg', alt: 'Gallery frame 24' },
{ src: 'images/gallery25.jpg', alt: 'Gallery frame 25' },
{ src: 'images/gallery26.jpg', alt: 'Gallery frame 26' },
{ src: 'images/gallery27.jpg', alt: 'Gallery frame 27' },
{ src: 'images/gallery28.jpg', alt: 'Gallery frame 28' },
{ src: 'images/gallery29.jpg', alt: 'Gallery frame 29' },
{ src: 'images/gallery30.jpg', alt: 'Gallery frame 30' },
{ src: 'images/gallery31.jpg', alt: 'Gallery frame 31' },
{ src: 'images/gallery32.jpg', alt: 'Gallery frame 32' },
{ src: 'images/gallery33.jpg', alt: 'Gallery frame 33' },
{ src: 'images/gallery34.jpg', alt: 'Gallery frame 34' },
{ src: 'images/gallery35.jpg', alt: 'Gallery frame 35' },
{ src: 'images/gallery36.jpg', alt: 'Gallery frame 36' },
{ src: 'images/gallery37.jpg', alt: 'Gallery frame 37' },
{ src: 'images/gallery38.jpg', alt: 'Gallery frame 38' },
{ src: 'images/gallery39.jpg', alt: 'Gallery frame 39' },
{ src: 'images/gallery40.jpg', alt: 'Gallery frame 40' },
{ src: 'images/gallery41.jpg', alt: 'Gallery frame 41' },
{ src: 'images/gallery42.jpg', alt: 'Gallery frame 42' },
{ src: 'images/gallery43.jpg', alt: 'Gallery frame 43' },
{ src: 'images/gallery44.jpg', alt: 'Gallery frame 44' },
{ src: 'images/gallery45.jpg', alt: 'Gallery frame 45' },
{ src: 'images/gallery46.jpg', alt: 'Gallery frame 46' },
{ src: 'images/gallery47.jpg', alt: 'Gallery frame 47' },
{ src: 'images/gallery48.jpg', alt: 'Gallery frame 48' },
{ src: 'images/gallery49.jpg', alt: 'Gallery frame 49' },
{ src: 'images/gallery50.jpg', alt: 'Gallery frame 50' },
{ src: 'images/gallery51.jpg', alt: 'Gallery frame 51' },
{ src: 'images/gallery52.jpg', alt: 'Gallery frame 52' },
{ src: 'images/gallery53.jpg', alt: 'Gallery frame 53' },
{ src: 'images/gallery54.jpg', alt: 'Gallery frame 54' },
{ src: 'images/gallery55.jpg', alt: 'Gallery frame 55' },
{ src: 'images/gallery56.jpg', alt: 'Gallery frame 56' },
{ src: 'images/gallery57.jpg', alt: 'Gallery frame 57' },
{ src: 'images/gallery58.jpg', alt: 'Gallery frame 58' },
{ src: 'images/gallery59.jpg', alt: 'Gallery frame 59' },
{ src: 'images/gallery60.jpg', alt: 'Gallery frame 60' },
{ src: 'images/gallery61.jpg', alt: 'Gallery frame 61' },
{ src: 'images/gallery62.jpg', alt: 'Gallery frame 62' },
{ src: 'images/gallery63.jpg', alt: 'Gallery frame 63' },
{ src: 'images/gallery64.jpg', alt: 'Gallery frame 64' },
{ src: 'images/gallery65.jpg', alt: 'Gallery frame 65' },
{ src: 'images/gallery66.jpg', alt: 'Gallery frame 66' },
{ src: 'images/gallery67.jpg', alt: 'Gallery frame 67' },
{ src: 'images/gallery68.jpg', alt: 'Gallery frame 68' },
{ src: 'images/gallery69.jpg', alt: 'Gallery frame 69' },
{ src: 'images/gallery70.jpg', alt: 'Gallery frame 70' },
{ src: 'images/gallery71.jpg', alt: 'Gallery frame 71' },
{ src: 'images/gallery72.jpg', alt: 'Gallery frame 72' },
{ src: 'images/gallery73.jpg', alt: 'Gallery frame 73' },
{ src: 'images/gallery74.jpg', alt: 'Gallery frame 74' },
{ src: 'images/gallery75.jpg', alt: 'Gallery frame 75' },
{ src: 'images/gallery76.jpg', alt: 'Gallery frame 76' },
{ src: 'images/gallery77.jpg', alt: 'Gallery frame 77' },
{ src: 'images/gallery78.jpg', alt: 'Gallery frame 78' },
{ src: 'images/gallery79.jpg', alt: 'Gallery frame 79' },
{ src: 'images/gallery80.jpg', alt: 'Gallery frame 80' },
{ src: 'images/gallery81.jpg', alt: 'Gallery frame 81' },
{ src: 'images/gallery82.jpg', alt: 'Gallery frame 82' },
{ src: 'images/gallery83.jpg', alt: 'Gallery frame 83' },
{ src: 'images/gallery84.jpg', alt: 'Gallery frame 84' },
{ src: 'images/gallery85.jpg', alt: 'Gallery frame 85' },
{ src: 'images/gallery86.jpg', alt: 'Gallery frame 86' },
{ src: 'images/gallery87.jpg', alt: 'Gallery frame 87' },
{ src: 'images/gallery88.jpg', alt: 'Gallery frame 88' },
{ src: 'images/gallery89.jpg', alt: 'Gallery frame 89' },
{ src: 'images/gallery90.jpg', alt: 'Gallery frame 90' },
{ src: 'images/gallery91.jpg', alt: 'Gallery frame 91' },
{ src: 'images/gallery92.jpg', alt: 'Gallery frame 92' },
{ src: 'images/gallery93.jpg', alt: 'Gallery frame 93' },
{ src: 'images/gallery94.jpg', alt: 'Gallery frame 94' },
{ src: 'images/gallery95.jpg', alt: 'Gallery frame 95' },
{ src: 'images/gallery96.jpg', alt: 'Gallery frame 96' },
{ src: 'images/gallery97.jpg', alt: 'Gallery frame 97' },
{ src: 'images/gallery98.jpg', alt: 'Gallery frame 98' },
{ src: 'images/gallery99.jpg', alt: 'Gallery frame 99' },
{ src: 'images/gallery100.jpg', alt: 'Gallery frame 100' },
{ src: 'images/gallery101.jpg', alt: 'Gallery frame 101' },
{ src: 'images/gallery102.jpg', alt: 'Gallery frame 102' },
{ src: 'images/gallery103.jpg', alt: 'Gallery frame 103' },
{ src: 'images/gallery104.jpg', alt: 'Gallery frame 104' },
{ src: 'images/gallery105.jpg', alt: 'Gallery frame 105' },
{ src: 'images/gallery106.jpg', alt: 'Gallery frame 106' },
{ src: 'images/gallery107.jpg', alt: 'Gallery frame 107' },
{ src: 'images/gallery108.jpg', alt: 'Gallery frame 108' },
{ src: 'images/gallery109.jpg', alt: 'Gallery frame 109' },
{ src: 'images/gallery110.jpg', alt: 'Gallery frame 110' },
{ src: 'images/gallery111.jpg', alt: 'Gallery frame 111' },
{ src: 'images/gallery112.jpg', alt: 'Gallery frame 112' },
{ src: 'images/gallery113.jpg', alt: 'Gallery frame 113' },
{ src: 'images/gallery114.jpg', alt: 'Gallery frame 114' },
{ src: 'images/gallery115.jpg', alt: 'Gallery frame 115' },
{ src: 'images/gallery116.jpg', alt: 'Gallery frame 116' },
{ src: 'images/gallery117.jpg', alt: 'Gallery frame 117' },
{ src: 'images/gallery118.jpg', alt: 'Gallery frame 118' },
{ src: 'images/gallery119.jpg', alt: 'Gallery frame 119' },
{ src: 'images/gallery120.jpg', alt: 'Gallery frame 120' },
{ src: 'images/gallery121.jpg', alt: 'Gallery frame 121' },
{ src: 'images/gallery122.jpg', alt: 'Gallery frame 122' },
{ src: 'images/gallery123.jpg', alt: 'Gallery frame 123' },
{ src: 'images/gallery124.jpg', alt: 'Gallery frame 124' },
{ src: 'images/gallery125.jpg', alt: 'Gallery frame 125' },
{ src: 'images/gallery126.jpg', alt: 'Gallery frame 126' },
{ src: 'images/gallery127.jpg', alt: 'Gallery frame 127' },
{ src: 'images/gallery128.jpg', alt: 'Gallery frame 128' },
{ src: 'images/gallery129.jpg', alt: 'Gallery frame 129' },
{ src: 'images/gallery130.jpg', alt: 'Gallery frame 130' },
{ src: 'images/gallery131.jpg', alt: 'Gallery frame 131' },
{ src: 'images/gallery132.jpg', alt: 'Gallery frame 132' },
{ src: 'images/gallery133.jpg', alt: 'Gallery frame 133' },
{ src: 'images/gallery134.jpg', alt: 'Gallery frame 134' },
{ src: 'images/gallery135.jpg', alt: 'Gallery frame 135' },
{ src: 'images/gallery136.jpg', alt: 'Gallery frame 136' },
{ src: 'images/gallery137.jpg', alt: 'Gallery frame 137' },
{ src: 'images/gallery138.jpg', alt: 'Gallery frame 138' },
{ src: 'images/gallery139.jpg', alt: 'Gallery frame 139' },
{ src: 'images/gallery140.jpg', alt: 'Gallery frame 140' },
{ src: 'images/gallery141.jpg', alt: 'Gallery frame 141' },
{ src: 'images/gallery142.jpg', alt: 'Gallery frame 142' },
{ src: 'images/gallery143.jpg', alt: 'Gallery frame 143' },
{ src: 'images/gallery144.jpg', alt: 'Gallery frame 144' },
{ src: 'images/gallery145.jpg', alt: 'Gallery frame 145' },
{ src: 'images/gallery146.jpg', alt: 'Gallery frame 146' },
{ src: 'images/gallery147.jpg', alt: 'Gallery frame 147' },
{ src: 'images/gallery148.jpg', alt: 'Gallery frame 148' },
{ src: 'images/gallery149.jpg', alt: 'Gallery frame 149' },
{ src: 'images/gallery150.jpg', alt: 'Gallery frame 150' },
{ src: 'images/gallery151.jpg', alt: 'Gallery frame 151' },
{ src: 'images/gallery152.jpg', alt: 'Gallery frame 152' },
{ src: 'images/gallery153.jpg', alt: 'Gallery frame 153' },
{ src: 'images/gallery154.jpg', alt: 'Gallery frame 154' },
{ src: 'images/gallery155.jpg', alt: 'Gallery frame 155' },
{ src: 'images/gallery156.jpg', alt: 'Gallery frame 156' },
{ src: 'images/gallery157.jpg', alt: 'Gallery frame 157' },
{ src: 'images/gallery158.jpg', alt: 'Gallery frame 158' },
{ src: 'images/gallery159.jpg', alt: 'Gallery frame 159' },
{ src: 'images/gallery160.jpg', alt: 'Gallery frame 160' },
{ src: 'images/gallery161.jpg', alt: 'Gallery frame 161' },
{ src: 'images/gallery162.jpg', alt: 'Gallery frame 162' },
{ src: 'images/gallery163.jpg', alt: 'Gallery frame 163' },
{ src: 'images/gallery164.jpg', alt: 'Gallery frame 164' },
{ src: 'images/gallery165.jpg', alt: 'Gallery frame 165' },
{ src: 'images/gallery166.jpg', alt: 'Gallery frame 166' },
{ src: 'images/gallery167.jpg', alt: 'Gallery frame 167' },
{ src: 'images/gallery168.jpg', alt: 'Gallery frame 168' },
{ src: 'images/gallery169.jpg', alt: 'Gallery frame 169' },
{ src: 'images/gallery170.jpg', alt: 'Gallery frame 170' },
{ src: 'images/gallery171.jpg', alt: 'Gallery frame 171' },
{ src: 'images/gallery172.jpg', alt: 'Gallery frame 172' },
{ src: 'images/gallery173.jpg', alt: 'Gallery frame 173' },
{ src: 'images/gallery174.jpg', alt: 'Gallery frame 174' },
{ src: 'images/gallery175.jpg', alt: 'Gallery frame 175' },
{ src: 'images/gallery176.jpg', alt: 'Gallery frame 176' },
{ src: 'images/gallery177.jpg', alt: 'Gallery frame 177' },
{ src: 'images/gallery178.jpg', alt: 'Gallery frame 178' },
{ src: 'images/gallery179.jpg', alt: 'Gallery frame 179' },
{ src: 'images/gallery180.jpg', alt: 'Gallery frame 180' },
{ src: 'images/gallery181.jpg', alt: 'Gallery frame 181' },
{ src: 'images/gallery182.jpg', alt: 'Gallery frame 182' },
{ src: 'images/gallery183.jpg', alt: 'Gallery frame 183' },
{ src: 'images/gallery184.jpg', alt: 'Gallery frame 184' },
{ src: 'images/gallery185.jpg', alt: 'Gallery frame 185' },
{ src: 'images/gallery186.jpg', alt: 'Gallery frame 186' },
{ src: 'images/gallery187.jpg', alt: 'Gallery frame 187' },
{ src: 'images/gallery188.jpg', alt: 'Gallery frame 188' },
{ src: 'images/gallery189.jpg', alt: 'Gallery frame 189' },
{ src: 'images/gallery190.jpg', alt: 'Gallery frame 190' },
{ src: 'images/gallery191.jpg', alt: 'Gallery frame 191' },
{ src: 'images/gallery192.jpg', alt: 'Gallery frame 192' },
{ src: 'images/gallery193.jpg', alt: 'Gallery frame 193' },
{ src: 'images/gallery194.jpg', alt: 'Gallery frame 194' },
{ src: 'images/gallery195.jpg', alt: 'Gallery frame 195' },
{ src: 'images/gallery196.jpg', alt: 'Gallery frame 196' },
{ src: 'images/gallery197.jpg', alt: 'Gallery frame 197' },
{ src: 'images/gallery198.jpg', alt: 'Gallery frame 198' },
{ src: 'images/gallery199.jpg', alt: 'Gallery frame 199' },
{ src: 'images/gallery200.jpg', alt: 'Gallery frame 200' },
{ src: 'images/gallery201.jpg', alt: 'Gallery frame 201' },
{ src: 'images/gallery202.jpg', alt: 'Gallery frame 202' },
{ src: 'images/gallery203.jpg', alt: 'Gallery frame 203' },
{ src: 'images/gallery204.jpg', alt: 'Gallery frame 204' },
{ src: 'images/gallery205.jpg', alt: 'Gallery frame 205' },
{ src: 'images/gallery206.jpg', alt: 'Gallery frame 206' },
{ src: 'images/gallery207.jpg', alt: 'Gallery frame 207' },
{ src: 'images/gallery208.jpg', alt: 'Gallery frame 208' },
{ src: 'images/gallery209.jpg', alt: 'Gallery frame 209' },
{ src: 'images/gallery210.jpg', alt: 'Gallery frame 210' },
{ src: 'images/gallery211.jpg', alt: 'Gallery frame 211' },
{ src: 'images/gallery212.jpg', alt: 'Gallery frame 212' },
{ src: 'images/gallery213.jpg', alt: 'Gallery frame 213' },
{ src: 'images/gallery214.jpg', alt: 'Gallery frame 214' },
{ src: 'images/gallery215.jpg', alt: 'Gallery frame 215' },
{ src: 'images/gallery216.jpg', alt: 'Gallery frame 216' },
{ src: 'images/gallery217.jpg', alt: 'Gallery frame 217' },
{ src: 'images/gallery218.jpg', alt: 'Gallery frame 218' },
{ src: 'images/gallery219.jpg', alt: 'Gallery frame 219' },
{ src: 'images/gallery220.jpg', alt: 'Gallery frame 220' },
{ src: 'images/gallery221.jpg', alt: 'Gallery frame 221' },
{ src: 'images/gallery222.jpg', alt: 'Gallery frame 222' },
{ src: 'images/gallery223.jpg', alt: 'Gallery frame 223' },
{ src: 'images/gallery224.jpg', alt: 'Gallery frame 224' },
{ src: 'images/gallery225.jpg', alt: 'Gallery frame 225' },
{ src: 'images/gallery226.jpg', alt: 'Gallery frame 226' },
{ src: 'images/gallery227.jpg', alt: 'Gallery frame 227' },
{ src: 'images/gallery228.jpg', alt: 'Gallery frame 228' },
{ src: 'images/gallery229.jpg', alt: 'Gallery frame 229' },
{ src: 'images/gallery230.jpg', alt: 'Gallery frame 230' },
{ src: 'images/gallery231.jpg', alt: 'Gallery frame 231' },
{ src: 'images/gallery232.jpg', alt: 'Gallery frame 232' },
{ src: 'images/gallery233.jpg', alt: 'Gallery frame 233' },
{ src: 'images/gallery234.jpg', alt: 'Gallery frame 234' },
{ src: 'images/gallery235.jpg', alt: 'Gallery frame 235' },
{ src: 'images/gallery236.jpg', alt: 'Gallery frame 236' },
{ src: 'images/gallery237.jpg', alt: 'Gallery frame 237' },
{ src: 'images/gallery238.jpg', alt: 'Gallery frame 238' },
{ src: 'images/gallery239.jpg', alt: 'Gallery frame 239' },
{ src: 'images/gallery240.jpg', alt: 'Gallery frame 240' },
{ src: 'images/gallery241.jpg', alt: 'Gallery frame 241' },
{ src: 'images/gallery242.jpg', alt: 'Gallery frame 242' },
{ src: 'images/gallery243.jpg', alt: 'Gallery frame 243' },
{ src: 'images/gallery244.jpg', alt: 'Gallery frame 244' },
{ src: 'images/gallery245.jpg', alt: 'Gallery frame 245' },
{ src: 'images/gallery246.jpg', alt: 'Gallery frame 246' },
{ src: 'images/gallery247.jpg', alt: 'Gallery frame 247' },
{ src: 'images/gallery248.jpg', alt: 'Gallery frame 248' },
{ src: 'images/gallery249.jpg', alt: 'Gallery frame 249' },
{ src: 'images/gallery250.jpg', alt: 'Gallery frame 250' },
{ src: 'images/gallery251.jpg', alt: 'Gallery frame 251' },
{ src: 'images/gallery252.jpg', alt: 'Gallery frame 252' },
{ src: 'images/gallery253.jpg', alt: 'Gallery frame 253' },
{ src: 'images/gallery254.jpg', alt: 'Gallery frame 254' },
{ src: 'images/gallery255.jpg', alt: 'Gallery frame 255' },
{ src: 'images/gallery256.jpg', alt: 'Gallery frame 256' },
{ src: 'images/gallery257.jpg', alt: 'Gallery frame 257' },
{ src: 'images/gallery258.jpg', alt: 'Gallery frame 258' },
{ src: 'images/gallery259.jpg', alt: 'Gallery frame 259' },
{ src: 'images/gallery260.jpg', alt: 'Gallery frame 260' },
{ src: 'images/gallery261.jpg', alt: 'Gallery frame 261' },
{ src: 'images/gallery262.jpg', alt: 'Gallery frame 262' },
{ src: 'images/gallery263.jpg', alt: 'Gallery frame 263' },
{ src: 'images/gallery264.jpg', alt: 'Gallery frame 264' },
{ src: 'images/gallery265.jpg', alt: 'Gallery frame 265' },
{ src: 'images/gallery266.jpg', alt: 'Gallery frame 266' },
{ src: 'images/gallery267.jpg', alt: 'Gallery frame 267' },
{ src: 'images/gallery268.jpg', alt: 'Gallery frame 268' },
{ src: 'images/gallery269.jpg', alt: 'Gallery frame 269' },
{ src: 'images/gallery270.jpg', alt: 'Gallery frame 270' },
{ src: 'images/gallery271.jpg', alt: 'Gallery frame 271' },
{ src: 'images/gallery272.jpg', alt: 'Gallery frame 272' },
{ src: 'images/gallery273.jpg', alt: 'Gallery frame 273' },
{ src: 'images/gallery274.jpg', alt: 'Gallery frame 274' },
{ src: 'images/gallery275.jpg', alt: 'Gallery frame 275' },
{ src: 'images/gallery276.jpg', alt: 'Gallery frame 276' },
{ src: 'images/gallery277.jpg', alt: 'Gallery frame 277' },
{ src: 'images/gallery278.jpg', alt: 'Gallery frame 278' },
{ src: 'images/gallery279.jpg', alt: 'Gallery frame 279' },
{ src: 'images/gallery280.jpg', alt: 'Gallery frame 280' },
{ src: 'images/gallery281.jpg', alt: 'Gallery frame 281' },
{ src: 'images/gallery282.jpg', alt: 'Gallery frame 282' },
{ src: 'images/gallery283.jpg', alt: 'Gallery frame 283' },
{ src: 'images/gallery284.jpg', alt: 'Gallery frame 284' },
{ src: 'images/gallery285.jpg', alt: 'Gallery frame 285' },
{ src: 'images/gallery286.jpg', alt: 'Gallery frame 286' },
{ src: 'images/gallery287.jpg', alt: 'Gallery frame 287' },
{ src: 'images/gallery288.jpg', alt: 'Gallery frame 288' },
{ src: 'images/gallery289.jpg', alt: 'Gallery frame 289' },
{ src: 'images/gallery290.jpg', alt: 'Gallery frame 290' },
{ src: 'images/gallery291.jpg', alt: 'Gallery frame 291' },
{ src: 'images/gallery292.jpg', alt: 'Gallery frame 292' },
{ src: 'images/gallery293.jpg', alt: 'Gallery frame 293' },
{ src: 'images/gallery294.jpg', alt: 'Gallery frame 294' },
{ src: 'images/gallery295.jpg', alt: 'Gallery frame 295' },
{ src: 'images/gallery296.jpg', alt: 'Gallery frame 296' },
{ src: 'images/gallery297.jpg', alt: 'Gallery frame 297' },
{ src: 'images/gallery298.jpg', alt: 'Gallery frame 298' },
{ src: 'images/gallery299.jpg', alt: 'Gallery frame 299' },
{ src: 'images/gallery300.jpg', alt: 'Gallery frame 300' },

    /* ================================================================
       ADD NEW IMAGES BELOW THIS LINE
       ================================================================

       COPY THIS:
       { src: 'images/your-file-name.jpg', alt: 'Description' },

       Example:

       { src: 'images/client-01.jpg', alt: 'Client campaign 01' },
       { src: 'images/client-02.jpg', alt: 'Client campaign 02' },
       { src: 'images/event-01.webp',  alt: 'Event branding 01' },

       ================================================================ */

  ];


  /* ================================================================
     SAFETY CHECK
     Remove accidental empty / invalid entries.
     ================================================================ */

  const galleryImages = images.filter(image => {
    return image &&
           typeof image.src === 'string' &&
           image.src.trim() !== '';
  });

  if (!galleryImages.length) {
    console.warn('Gallery: No images have been added.');
    return;
  }


  /* ================================================================
     GALLERY GRID
     ================================================================ */

  const grid = document.getElementById('floatingGallery');

  if (!grid) return;

  const fragment = document.createDocumentFragment();

  galleryImages.forEach((image, index) => {

    const item = document.createElement('button');

    item.type = 'button';
    item.className = 'gallery-item';

    /* Each card gets its own floating animation timing. */
    item.style.setProperty(
      '--float-duration',
      (3.4 + Math.random() * 2.4).toFixed(2) + 's'
    );

    item.style.setProperty(
      '--float-delay',
      (Math.random() * -4).toFixed(2) + 's'
    );

    const img = document.createElement('img');

    img.src = image.src;
    img.alt = image.alt || `Gallery frame ${index + 1}`;

    /*
      Lazy loading is important when you have 300+ images.
      It prevents the browser from downloading every image immediately.
    */
    img.loading = 'lazy';
    img.decoding = 'async';

    item.appendChild(img);

    item.addEventListener('click', () => {
      openOverlay(index);
    });

    fragment.appendChild(item);
  });

  grid.appendChild(fragment);


  /* ================================================================
     OVERLAY / LIGHTBOX
     ================================================================ */

  const overlay = document.getElementById('galleryOverlay');

  if (!overlay) return;

  const overlayImg = document.getElementById('galleryOverlayImg');
  const overlayCount = document.getElementById('galleryOverlayCount');

  let currentIndex = 0;


  /* ------------------------------------------------
     Render selected image
     ------------------------------------------------ */

  function render(index) {

    const image = galleryImages[index];

    if (!image) return;

    overlayImg.src = image.src;
    overlayImg.alt = image.alt || `Gallery frame ${index + 1}`;

    overlayCount.textContent =
      `${String(index + 1).padStart(2, '0')} / ` +
      `${String(galleryImages.length).padStart(2, '0')}`;
  }


  /* ------------------------------------------------
     Open overlay
     ------------------------------------------------ */

  function openOverlay(index) {

    currentIndex = index;

    render(currentIndex);

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');

    document.body.style.overflow = 'hidden';
  }


  /* ------------------------------------------------
     Close overlay
     ------------------------------------------------ */

  function closeOverlay() {

    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';
  }


  /* ------------------------------------------------
     Previous / Next
     ------------------------------------------------ */

  function step(direction) {

    if (galleryImages.length <= 1) return;

    currentIndex =
      (currentIndex + direction + galleryImages.length) %
      galleryImages.length;

    render(currentIndex);
  }


  /* ================================================================
     BUTTON EVENTS
     ================================================================ */

  document
    .getElementById('galleryOverlayClose')
    ?.addEventListener('click', closeOverlay);

  document
    .getElementById('galleryOverlayBackdrop')
    ?.addEventListener('click', closeOverlay);

  document
    .getElementById('galleryOverlayPrev')
    ?.addEventListener('click', () => step(-1));

  document
    .getElementById('galleryOverlayNext')
    ?.addEventListener('click', () => step(1));


  /* ================================================================
     KEYBOARD CONTROLS
     ================================================================ */

  document.addEventListener('keydown', (event) => {

    if (!overlay.classList.contains('open')) return;

    if (event.key === 'Escape') {
      closeOverlay();
    }

    if (event.key === 'ArrowLeft') {
      step(-1);
    }

    if (event.key === 'ArrowRight') {
      step(1);
    }
  });


  /* ================================================================
     IMAGE ERROR HANDLING
     ------------------------------------------------
     If you accidentally type a wrong filename, that image card
     gets hidden instead of breaking the entire gallery.
     ================================================================ */

  grid.addEventListener('error', (event) => {

    const failedImage = event.target;

    if (failedImage && failedImage.tagName === 'IMG') {

      const card = failedImage.closest('.gallery-item');

      if (card) {
        card.style.display = 'none';
        console.warn(
          `Gallery image could not be loaded: ${failedImage.src}`
        );
      }
    }

  }, true);

});
