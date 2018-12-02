const Gpu = require('./Gpu');

test('parse one particle string', () => {
  let gpu = new Gpu();
  let str = 'p=< 3,0,0>, v=< 2,0,0>, a=<-1,0,0>';
  let res = gpu.parseParticle(str);
  expect(res).toEqual({
    p: [3, 0, 0],
    v: [2, 0, 0],
    a: [-1, 0, 0]
  });
});

test('parse two particles', () => {
  let gpu = new Gpu();
  let str = `p=<-717,-4557,2578>, v=<153,21,30>, a=<-8,8,-7>
p=<1639,651,-987>, v=<29,-19,129>, a=<-5,0,-6>`;
  let res = gpu.parseArray(str);
  expect(res).toEqual([
    {
      p: [-717, -4557, 2578],
      v: [153, 21, 30],
      a: [-8, 8, -7],
    },
    {
      p: [1639, 651, -987],
      v: [29, -19, 129],
      a: [-5, 0, -6],
    }
  ]);
});

test('get distance', () => {
  let gpu = new Gpu();
  let particle = {
    p: [-3, 1, 0],
    v: [2, 0, 0],
    a: [-1, 0, 0]
  };
  let res = gpu.getDistance(particle);
  expect(res).toEqual(4);
});

test('step particle', () => {
  let particle = {
    p: [3, 0, 0],
    v: [2, 0, 0],
    a: [-1, 0, 0],
  };
  let gpu = new Gpu();
  gpu.stepParticle(particle);
  expect(particle).toEqual({
    p: [4, 0, 0],
    v: [1, 0, 0],
    a: [-1, 0, 0],
  })
});

test('closest particle', () => {
  let particles = [
    {
      p: [3, 0, 0],
      v: [2, 0, 0],
      a: [-1, 0, 0],
    },
    {
      p: [8, 0, 0],
      v: [2, 0, 0],
      a: [-1, 0, 0],
    },
  ];
  let gpu = new Gpu();
  let res = gpu.getClosestParticleIndex(particles);
  expect(res).toEqual(0);
});
