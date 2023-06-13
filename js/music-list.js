let allMusic = [
  {
    name: "01 Harley Bird - Home",
    artist: "Jordan Schor",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg",
    src: "https://github.com/Digilaser/Reproductor/raw/main/music-1.mp3"
    tags: ['dubstep']
  },
  {
    name: "02 Ikson Anywhere – Ikson",
    artist: "Audio Library",
    img: "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg",
    src: "https://github.com/Digilaser/Reproductor/raw/main/music-2.mp3"
    tags: ['dubstep']
  },
  {
    name: "03 Beauz & Jvna - Crazy",
    artist: "Beauz & Jvna",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
    src: "https://github.com/Digilaser/Reproductor/raw/main/music-3.mp3"
    tags: ['electronic']
  },
  {
    name: "04 Hardwind - Want Me",
    artist: "Mike Archangelo",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    src: "https://github.com/Digilaser/Reproductor/raw/main/music-4.mp3"
    tags: ['eurodance']
  },
  {
    name: "05 Jim - Sun Goes Down capturado",
    artist: "Jim Yosef x Roy",
    img: "https://cc-prod.scene7.com/is/image/CCProdAuthor/CODERED_B1_landscape_P2d_714x348.jpg.img?$png$&jpegSize=200&wid=960",
    src: "https://github.com/Digilaser/Reproductor/raw/main/music-5.mp3"
    tags: ['eurodance']
  },
  {
    name: "06 Lost Sky - Vision NCS Descargas",
    artist: "NCS Release",
    img: "https://i.pinimg.com/originals/c4/3c/2d/c43c2dbe83d7b9c45b9cd028ad2be95f.jpg",
    src: "https://github.com/Digilaser/Reproductor/raw/main/music-6.mp3"
    tags: ['electronic']
  },
  {
    name: "07 Power Of Patience ",
    artist: "George Georgia",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3334/03.mp3"
    tags: ['electronic']
  },
  {
    name: "08 Fashion Alex Arcoleo ",
    artist: "Josh Oliver",
    img: "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3378/01.mp3"
    tags: ['dnb']
  },
  {
    name: "09 Morning Glow ",
    artist: "Martin Felix Kaczmarski",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3070/02.mp3"
    tags: ['house']
  },
  {
    name: "10 Chords of Life",
    artist: "Madza",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    src: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3"
    tags: ['house']
  },
  {
    name: "11 Late Night Drive",
    artist: "Madza",
    img: "https://cc-prod.scene7.com/is/image/CCProdAuthor/CODERED_B1_landscape_P2d_714x348.jpg.img?$png$&jpegSize=200&wid=960",
    src: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3"
    tags: ['dnb']
  },
  {
    name: "12 Persistence",
    artist: "Madza",
    img: "https://i.pinimg.com/originals/c4/3c/2d/c43c2dbe83d7b9c45b9cd028ad2be95f.jpg",
    src: "https://audioplayer.madza.dev/Madza-Persistence.mp3"
    tags: ['dubstep']
  },
  {
    name: "13 Harley Bird - Home",
    artist: "Jordan Schor",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg",
    src: "https://github.com/Digilaser/Reproductor/raw/main/music-1.mp3"
  },
  {
    name: "14 Podemos Repetirlo",
    artist: "Don Omar ft Chencho",
    img: "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg",
    src: "https://mp3teca.app/-/aac/96/103767_96.m4a"
    tags: ['latin']
  },
  {
    name: "15 Bodyguard",
    artist: "Yandel ft JonLee",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
    src: "https://mp3teca.app/-/aac/96/103727_96.m4a"
    tags: ['latin']
  },
  {
    name: "16 Arcangel - JS4E",
    artist: "Mike Archangelo",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    src: "https://mp3teca.app/-/aac/96/102104_96.m4a"
    tags: ['latin']
  },
  {
    name: "17 El Ciclo",
    artist: "JKen-Y",
    img: "https://cc-prod.scene7.com/is/image/CCProdAuthor/CODERED_B1_landscape_P2d_714x348.jpg.img?$png$&jpegSize=200&wid=960",
    src: "https://mp3teca.app/-/aac/96/103738_96.m4a"
    tags: ['latin']
  },
  {
    name: "18 Tengo Un Draco",
    artist: "Casper ft Juanka El Problematik",
    img: "https://i.pinimg.com/originals/c4/3c/2d/c43c2dbe83d7b9c45b9cd028ad2be95f.jpg",
    src: "https://mp3teca.app/-/aac/96/103764_96.m4a"
    tags: ['latin']
  },
  {
    name: "19 69",
    artist: "Nicky Jam ft Feid",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg",
    src: "https://mp3teca.app/-/aac/96/103701_96.m4a"
    tags: ['latin']
  },
  {
    name: "20 Te Felicito",
    artist: "Shakira ft Rauw Alejandro",
    img: "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg",
    src: "ttps://mp3teca.app/-/aac/96/100273_96.m4a"
    tags: ['latin']
  },
  {
    name: "21 Foto En La Pared",
    artist: "C-Kan ft Al2 El Aldeano",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
    src: "https://mp3teca.app/-/aac/96/103718_96.m4a"
    tags: ['latin']
  },
  {
    name: "22 Mollylandia",
    artist: "Angel Dior ft Young Gatillo ft Viruz FL",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    src: "https://mp3teca.app/-/aac/96/103721_96.m4a"
    tags: ['latin']
  },
  {
    name: "23 I Can Feel It ",
    artist: "Dylan Rogers ft. Josh Oliver",
    img: "https://cc-prod.scene7.com/is/image/CCProdAuthor/CODERED_B1_landscape_P2d_714x348.jpg.img?$png$&jpegSize=200&wid=960",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3702/08.mp3"
    tags: ['eurodance']
  },
  {
    name: "24 I See Colours Per Ljungqvist",
    artist: "George Nakas ft. Sara Gunnarsson",
    img: "https://i.pinimg.com/originals/c4/3c/2d/c43c2dbe83d7b9c45b9cd028ad2be95f.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW2784/03.mp3"
    tags: ['electronic']
  },
  {
    name: "25 We Believe ",
    artist: "George Nakas, Per Ljungqvist ft. Sara Gunnarsson",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/600px-Cat03.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3334/03.mp3"
    tags: ['electronic']
  },
  {
    name: "26 In This Together Dylan Rogers",
    artist: "Andrea Hamilton Binley",
    img: "https://img.freepik.com/foto-gratis/disparo-gran-angular-solo-arbol-que-crece-cielo-nublado-puesta-sol-rodeada-cesped_181624-22807.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3702/02.mp3"
    tags: ['dnb']
  },
  {
    name: "27 Midnight Love",
    artist: "Jamie ElderPeo Haggstrom",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3701/07.mp3"
    tags: ['house']
  },
  {
    name: "28 Just Like Bubblegum",
    artist: "Matt Goodman",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    src: "https://content2.audionetwork.com/Preview/tracks/mp3/v5res/ANW3642/04.mp3"
    tags: ['house']
  },
];
