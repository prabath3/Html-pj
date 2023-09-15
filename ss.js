javascript
const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
    const orbit = planet.id === 'sun' ? 0 : parseInt(planet.id.slice(1)) * 50;
    planet.style.left = `${orbit}px`;
});