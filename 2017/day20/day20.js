const Gpu = require('./Gpu');
const data = require('./day20-data');


function solve() {
  let gpu = new Gpu();
  let particles = gpu.parseArray(data);
  for (let i = 0; i < 10000; i++) {
    gpu.step(particles);
  }
  let res = gpu.getClosestParticleIndex(particles);
  console.log(res);
}

solve();
