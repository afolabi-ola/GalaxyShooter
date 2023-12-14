let ship = document.querySelector("#ship");
let bulletCase = document.querySelector("#bullets");
let asteroids = document.querySelector("#asteroids");

createAsteroid();

window.addEventListener("mousemove", (e) => {
  ship.style.left = `${e.x - 150}px`;

  ship.style.top = `${e.y - 50}px`;
});

window.addEventListener("keydown", (e) => {
  console.log(e);

  if (e.key == " ") {
    fireBullet();
  }
});
window.addEventListener("click", (e) => {
  console.log(e);

  fireBullet();
});




function createAsteroid() {
  let asteroidTop;
  let newAsteroid = document.createElement("div");
  newAsteroid.className = "asteroid";
  newAsteroid.style.left = `${Math.random() * screen.width}px`;


  let rockNumber = 2;


  newAsteroid.style.backgroundImage = 'url("asteroids' + rockNumber + '.gif")';
  asteroids.appendChild(newAsteroid);

  asteroidTop = 0;

  let moveAsteroid = setInterval(() => {
   

    asteroidTop = asteroidTop + 10;
    newAsteroid.style.top = asteroidTop + "px";

    let asLocation = asteroids.getBoundingClientRect();

    if (asteroidTop > screen.height) {
      newAsteroid.remove();
 ;

      clearInterval(moveAsteroid);

    }
  }, 100);
}
setInterval(() => {
  createAsteroid();
}, 1000);
function fireBullet() {

  const newBullet = document.createElement("div");
  newBullet.className = "bullet";
  bulletCase.appendChild(newBullet);
  newBullet.style.display = "block";

  const ship_loc = ship.getBoundingClientRect();
  console.log(ship_loc);
  newBullet.style.left = `${ship_loc.x + 110 + "px"}`;
  newBullet.style.top = `${ship_loc.y + 50 + "px"}`;
  let bulletTop = ship_loc.y + 50;


  let moveBullet = setInterval(() => {
    bulletTop = bulletTop - 10;
    newBullet.style.top = bulletTop + "px";
    newBullet.style.display = "block";

    if (bulletTop < -1) {
      newBullet.remove();

      clearInterval(moveBullet);
    }
  }, 1);
    console.log(getDistance(newBullet.x,newBullet.y));
}




