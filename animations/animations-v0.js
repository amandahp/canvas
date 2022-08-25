const options = {
  width: 800,
  height: 600,
  backgroundColor: 0xdb407b,
  targetSelector: "#stage"
}

const app = setup(options);

const draw = new PIXI.Graphics();

draw.lineStyle(2, 0xFFFFFF);

draw.beginFill(0xdb2c00)

draw.moveTo(120, 120);
draw.lineTo(240, 120);
draw.lineTo(240, 240);
draw.lineTo(120, 240);
draw.lineTo(120, 120);

draw.moveTo(360, 180);
draw.lineTo(420, 120);
draw.lineTo(480, 180);
draw.lineTo(360, 180);

draw.beginFill(0xf5de31);

draw.lineStyle(0, 0xFFFFFF);

draw.moveTo(600, 120);
draw.lineTo(660, 120);
draw.lineTo(660, 240);
draw.lineTo(600, 240);
draw.lineTo(600, 120);


app.stage.addChild(draw);
