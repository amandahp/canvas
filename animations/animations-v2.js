const options = {
  width: 800,
  height: 600,
  backgroundColor: 0xdb407b,
  targetSelector: "#stage"
}

const app = setup(options);

const draw = new PIXI.Graphics();

draw.lineStyle(2, 0xFFFFFF);

app.stage.addChild(draw);