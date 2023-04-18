// 1) Створити сторінку, що показує нумерований список пісень:

const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];

const songList = document.getElementById("song_list");

for (let i = 0; i < playList.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = `${i + 1}. ${playList[i].author} - ${playList[i].song}`;
  songList.appendChild(listItem);
}


/* 2) Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне 
вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне 
вікно, на кнопку "Закрити" — зникає.*/


/* 3) Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор 
на наступний колір.*/