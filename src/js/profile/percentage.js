let mySvg = document.querySelector('#my-svg');
let snap = Snap(mySvg);
let w = mySvg.width.baseVal.value, h = mySvg.height.baseVal.value, cx = w/2, cy = h/2;

let radius = 90;
let perimeter = 2 * Math.PI * radius;
let percent = .67;
let color = '#007ac1';

let circle = snap.circle(cx, cy, radius);
let text = document.querySelector('.percent-text');
text.style.color = color;

updateGraph(percent);

function updateGraph(perc) {
  circle.attr({
    fill: 'none',
    stroke: color,
    strokeWidth: '0.5cm',
    strokeDasharray: '0 ' + perimeter,
    strokeDashoffset: perimeter * .25
  });
  

  Snap.animate(0, perc, (val) => {
    circle.attr({
      strokeDasharray: perimeter * val + ' ' + perimeter * (1 - val)
    });

    text.innerHTML = Math.round(val * 100) + '%';
  }, 1500, mina.easeinout)
}
