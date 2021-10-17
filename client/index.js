import './stylesheets/style.css';
import './stylesheets/mystyle.css';

console.log('Webpack working!');
// Default parameters están disponibles solamente en ES6/2015
let show = (m = 'Hot module replacement working ') => {
  alert(m);
};

show();

function resolveAfter25Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('Calling an async function');
  const result = await resolveAfter25Seconds();
  console.log(result);
}

asyncCall();
