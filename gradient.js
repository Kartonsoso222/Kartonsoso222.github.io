let btn = document.querySelectorAll('.menu-tile')[2];
btn.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn.style.setProperty('--x', x + 'px');
  btn.style.setProperty('--y', y + 'px');
});
let btn2 = document.querySelectorAll('.menu-tile')[1];
btn2.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn2.style.setProperty('--x', x + 'px');
  btn2.style.setProperty('--y', y + 'px');
});
let btn3 = document.querySelectorAll('.menu-tile')[0];
btn3.addEventListener('mousemove', e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  btn3.style.setProperty('--x', x + 'px');
  btn3.style.setProperty('--y', y + 'px');
});
