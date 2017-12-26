class Gpu {

  parseParticle(str) {
    function getValues(str2) {
      let parts = str2.split(',');
      return [parseInt(parts[0].slice(3)), parseInt(parts[1]), parseInt(parts[2])];
    }

    let parts = str.split(', ');
    return {
      p: getValues(parts[0]),
      v: getValues(parts[1]),
      a: getValues(parts[2]),
    };
  }

  parseArray(str) {
    let parts = str.split('\n');
    return parts.map(part => {
      return this.parseParticle(part);
    })
  }

  getDistance(particle) {
    return Math.abs(particle.p[0]) + Math.abs(particle.p[1]) + Math.abs(particle.p[2]);
  }

  getClosestParticleIndex(particles) {
    let closest = null;
    let minDistance = Infinity;
    particles.forEach(particle => {
      let distance = this.getDistance(particle);
      if (distance < minDistance) {
        closest = particle;
        minDistance = distance;
      }
    });

    return particles.indexOf(closest);
  }

  getSlowestParticleIndex(particles) {
    let minAcc = Infinity;
    let index = 0;
    particles.forEach((particle, i) => {
      let acc = Math.pow(particle.a[0], 2) + Math.pow(particle.a[1], 2) + Math.pow(particle.a[2], 2);
      if (acc < minAcc) {
        minAcc = acc;
        index = i;
      }
    });
    return index;
  }

  stepParticle(particle) {
    particle.v[0] += particle.a[0];
    particle.v[1] += particle.a[1];
    particle.v[2] += particle.a[2];
    particle.p[0] += particle.v[0];
    particle.p[1] += particle.v[1];
    particle.p[2] += particle.v[2];
  }

  step(particles) {
    particles.forEach(particle => {
      this.stepParticle(particle);
    })
  }
}

module.exports = Gpu;