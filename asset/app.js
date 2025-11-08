// JS ობიექტი — აქ ჩაწერე შენი ინფორმაცია
const profile = {
  name: "ანდრია",
  age: 15,
  favoriteColor: "შავი",
  favoriteColorHex: "#000000ff",
  school: "თბილისი 173-ე სკოლა",
  country: "საქართველო",
  hobbies: ["კოდინგი", "თმაში", "გარეტთ გასვლა"],
  song: 'fulla - "4444"',
  movie: "the mentalist",
  bio: "მიყვარს მუსიკის მოსმენა.",
  likesGames: true
};


document.getElementById("name").textContent = profile.name;
document.getElementById("age").textContent = profile.age;
document.getElementById("color").textContent = profile.favoriteColor;
document.getElementById("color-box").style.backgroundColor = profile.favoriteColorHex;
document.getElementById("school").textContent = profile.school;
document.getElementById("country").textContent = profile.country;
document.getElementById("hobbies").textContent = profile.hobbies.join(", ");
document.getElementById("song").textContent = profile.song;
document.getElementById("movie").textContent = profile.movie;
document.getElementById("bio").textContent = profile.bio;
document.getElementById("games").textContent = profile.likesGames ? "დიახ" : "არა";
