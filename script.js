// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainE1 = document.querySelector('main');
mainE1.style.backgroundColor = 'var(--main-bg)';
mainE1.innerHTML = "<h1>SEI Rocks!</h1>";
mainE1.classList.add('flex-ctr');

const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

for (i=0; i<menuLinks.length; i++){
   const link = document.createElement("a");
   link.href = menuLinks[i]['href'];
   link.textContent = menuLinks[i]['text'];
   console.log(link);
   topMenuEl.append(link);
}