//Attribution: Task comments and files are from HW assignment

// Menu data structure

//part 1 menuLinks
/*var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
*/

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

const subMenuEl = document.querySelector("#sub-menu");
console.log(subMenuEl);
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = "absolute";
subMenuEl.style.top = '0';

//Task 5.1
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener("click", function (e){
  e.preventDefault();
  if (e.target.tagName!="A"){
    return;
  }
  
  //console.logthe content of the <a>to verify the handler is working.
  console.log(e.target.textContent);  
  
  //Task 5.3
  //Next in the event listener, if the clicked <a>link has a class of active:
  if (e.target.classList.contains("active")){
    console.log(e.target.classList);
    e.target.classList.remove("active");
    console.log(e.target.classList);
    showingSubMenu = false;
    subMenuEl.style.top = 0;
    return;
  }
console.log(topMenuLinks);
  
  //Task 5.4
  //the event listener should remove a class name of activefrom each <a>element in topMenuLinks- 
  //whether the activeclass exists or not.
  for (i=0; i<topMenuLinks.length; i++){
      topMenuLinks[i].classList.remove("active");
  }

  //Task 5.5
  //Next, the event listener should add a class name of activeto the <a>element that was clicked.
  e.target.classList.add('active');

  //Task 5.6
  //Set showingSubMenuto trueif the clicked <a>element's "link" object
  //within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), 
  //otherwise, set it to false.
   if(e.target.textContent!="about"){
    showingSubMenu = true;
    console.log('showingSubMenu: ' + showingSubMenu);
  }else{
    showingSubMenu = false;
    console.log('showingSubMenu: ' + showingSubMenu);
  }

  //Hint: Saving the "link" object in a variable will come in 
  //handy for passing its subLinksarray in Task 5.7
  let linksObject;
  if(e.target.textContent=="catalog"){
    linksObject = menuLinks[1]['subLinks'];
  }else if(e.target.textContent=="orders"){
    linksObject = menuLinks[2]['subLinks'];
  }else if(e.target.textContent=="account"){
    linksObject = menuLinks[3]['subLinks'];
  }

  //Task 5.7
  if (showingSubMenu == true){
    buildSubMenu(linksObject);
    subMenuEl.style.top = '100%';
  }else{
    subMenuEl.style.top = '0';

  }

  //Task 5.8
  function buildSubMenu(linksObject){
    //Clears the contents of subMenuEl
    subMenuEl.innerHTML = "";
   
    for(i=0; i<linksObject.length; i++){ 
   const subLink = document.createElement("a");
   subLink.href = linksObject[i]['href'];
   subLink.textContent = linksObject[i]['text'];
   console.log(subLink);
   subMenuEl.append(subLink);
    }

  }

 //Task 6.4
  //If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
  if (e.target.textContent=="about"){
    mainE1.innerHTML = "<h1> About </h1>";  
    }


} //callback function closing
  ) //addEventListener() closing bracket: for topMenuEl

  //Task 6.0
  subMenuEl.addEventListener('click', function(e){
      e.preventDefault();
      if (e.target.tagName!="A"){
        return;
      }
  //console.logthe content of the <a>to verify the handler is working.
  console.log(e.target.textContent);  
  
  //Task 6.1
  //Set showingSubMenuto false
  showingSubMenu = false;

  //Set the CSS topproperty of subMenuElto 0
  subMenuEl.style.top = 0;

  //Task 6.2
  //Remove the class name of activefrom each <a>element in topMenuLinks- 
  //whether the activeclass exists or not.
  for (i=0; i<topMenuLinks.length; i++){
    topMenuLinks[i].classList.remove("active");
  }

  //Task 6.3
  //Update the contents of mainEl to the contents of the <a>element, within an <h1>, 
  //clicked within subMenuEl.
  mainE1.innerHTML = "<h1>" + e.target.textContent + "</h1>";

  //Task 6.4
  //See topMenu's event handler above
 
  });