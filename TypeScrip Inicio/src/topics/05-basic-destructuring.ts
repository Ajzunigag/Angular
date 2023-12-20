interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Daddy Yankee",
    year: 2018,
  },
};
/*
const { song } = audioPlayer;

console.log("Song:", song);

console.log("Song:", audioPlayer.song);
*/
//Desoctructuracion de Arreglos

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

const [p1, p2, trunks = "Valor defecto"]: string[] = [
  "Goku",
  "Vegeta",
  "Trunks",
];

console.error("Personaje 3:", dbz[3] || "No hay personajes");
console.error("Personaje 3:", trunks || "No hay personajes");

export {};
