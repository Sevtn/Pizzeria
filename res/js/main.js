const start = document.getElementById("start");

const rail = document.getElementById("rail");

const cook = document.getElementById("cook");
const build = document.getElementById("build");
const orders = document.getElementById("orders");
const cut = document.getElementById("cut");
const cookpizza = document.getElementById("cookpizza");
const takepizza = document.getElementById("takepizza");

const body = document.getElementsByTagName("body")[0];

const pep = document.getElementById("pep");
const cheese = document.getElementById("cheese");
const sausage = document.getElementById("sausage");
const ketchup = document.getElementById("ketchup");
const dough = document.getElementById("dough");

const dough1 = document.getElementById("dough1");
const pep1 = document.getElementById("pep1");
const ketchup1 = document.getElementById("ketchup1");
const cheese1 = document.getElementById("cheese1");
const sausage1 = document.getElementById("sausage1");

const dough2 = document.getElementById("dough2");
const cheese2 = document.getElementById("cheese2");

const dough3 = document.getElementById("dough3");
const cheese3 = document.getElementById("cheese3");
const ketchup3 = document.getElementById("ketchup3");

const pizzacutter = document.getElementById("pizzacutter");
const cut1 = document.getElementById("cut1");
const cut2 = document.getElementById("cut2");
const pizzabox = document.getElementById("pizzabox");
const pizzabox0 = document.getElementById("pizzabox0");
const pizzabox1 = document.getElementById("pizzabox1");

const cut1box = document.getElementById("cut1box");
const cut2box = document.getElementById("cut2box");

const order1 = document.getElementById("order1");
const order2 = document.getElementById("order2");
const order3 = document.getElementById("order3");
const order4 = document.getElementById("order4");

const customer1 = document.getElementById("customer1");
const register = document.getElementById("register");
const loop = document.getElementById("loop");

//customer logic
register.onclick = () => {
  if (orderCheck >= 178 && orderCheck < 230) {
    customer1.style.display = "none";
    pizzabox0.style.display = "none";
    ordernumber / 0;
    pizzaOrder / 0;
    doughTime / 0;
    cheeseTime / 0;
    ketchupTime / 0;
    sausageTime / 0;
    pepTime / 0;
    cutCount1 / 0;
    cutCount2 / 0;
    orderCheck / 0;
  }
  if (orderCheck > 300) {
    customer1.style.display = "none";
    pizzabox0.style.display = "none";
    ordernumber / 0;
    pizzaOrder / 0;
    doughTime / 0;
    cheeseTime / 0;
    ketchupTime / 0;
    sausageTime / 0;
    pepTime / 0;
    cutCount1 / 0;
    cutCount2 / 0;
    orderCheck / 0;
  }
  if (orderCheck >= 80 && orderCheck < 150) {
    customer1.style.display = "none";
    pizzabox0.style.display = "none";
    ordernumber / 0;
    pizzaOrder / 0;
    doughTime / 0;
    cheeseTime / 0;
    ketchupTime / 0;
    sausageTime / 0;
    pepTime / 0;
    cutCount1 / 0;
    cutCount2 / 0;
    orderCheck / 0;
  }
};

//order repeat
loop.onclick = () => {
  customer1.style.display = "block";

  let random = Math.floor(Math.random() * 3) + 1;

  if (random == 1) {
    console.log("cislo 1");
    //
    order1.style.display = "block";
    ordernumber++;
  }
  if (random == 2) {
    console.log("cislo 2");
    //
    order2.style.display = "block";
    ordernumber += 2;
  }
  if (random == 3) {
    console.log("cislo 3");
    //
    ordernumber += 3;
    order3.style.display = "block";
  }
};

start.onclick = () => {
  start.style.display = "none";
  rail.style.display = "none";
  cook.style.display = "block";
  cut.style.display = "block";
  build.style.display = "block";
  orders.style.display = "block";
  cut1box.style.display = "none";
  cut2box.style.display = "none";
  customer1.style.display = "none";
  register.style.display = "block";
  loop.style.display = "block";
  body.style.backgroundImage = "url(./res/img/ordersstation.png)";
};

build.onclick = () => {
  body.style.backgroundImage = "url(./res/img/buildstation.png)";
  //ingredience
  pep.style.display = "block";
  sausage.style.display = "block";
  cheese.style.display = "block";
  ketchup.style.display = "block";
  dough.style.display = "block";
  cookpizza.style.display = "none";
  takepizza.style.display = "none";
  pizzacutter.style.display = "none";
  pizzabox1.style.display = "none";
  pizzabox.style.display = "none";
  customer1.style.display = "none";
  order1.style.display = "none";
  order2.style.display = "none";
  order3.style.display = "none";
  order4.style.display = "none";
  register.style.display = "none";
  loop.style.display = "none";
};

//funkce krabice0
pizzabox1.onclick = () => {
  pizzabox1.style.display = "none";
  pizzabox0.style.display = "block";

  dough1.style.display = "none";
  dough2.style.display = "none";
  cheese.style.display = "none";
  cheese2.style.display = "none";
  ketchup1.style.display = "none";
  sausage1.style.display = "none";
  pep1.style.display = "none";
  cut1box.style.display = "none";
  cut2box.style.display = "none";
  cut1.style.display = "none";
  cut2.style.display = "none";
};

//funkce krabice
pizzabox.onclick = () => {
  pizzabox.style.display = "none";
  pizzabox1.style.display = "block";
  if (cutCount1 == 2) {
    console.log(cutCount1);
    cut1.style.display = "none";
    cut1box.style.display = "block";
  }
  if (cutCount2 == 4) {
    console.log(cutCount2);
    cut2box.style.display = "block";
    cut2.style.display = "none";
  }
};

cut.onclick = () => {
  body.style.backgroundImage = "url(./res/img/cutstation.png)";
  //balls
  order1.style.display = "none";
  order2.style.display = "none";
  order3.style.display = "none";
  customer1.style.display = "none";
  pep.style.display = "none";
  sausage.style.display = "none";
  cheese.style.display = "none";
  ketchup.style.display = "none";
  dough.style.display = "none";
  cookpizza.style.display = "none";
  takepizza.style.display = "none";
  pizzacutter.style.display = "block";
  register.style.display = "none";
  pizzabox.style.display = "block";
  loop.style.display = "none";
};
//objekt+none ingredience
orders.onclick = () => {
  rail.style.display = "none";
  body.style.backgroundImage = "url(./res/img/ordersstation.png)";
  pep.style.display = "none";
  sausage.style.display = "none";
  cheese.style.display = "none";
  ketchup.style.display = "none";
  dough.style.display = "none";
  cookpizza.style.display = "none";
  takepizza.style.display = "none";
  pizzacutter.style.display = "none";
  pizzabox1.style.display = "none";
  pizzabox.style.display = "none";
  customer1.style.display = "block";
  register.style.display = "block";
  loop.style.display = "block";
};

cook.onclick = () => {
  //objekt+none ingredience

  body.style.backgroundImage = "url(./res/img/cookstation.png)";
  pep.style.display = "none";
  sausage.style.display = "none";
  cheese.style.display = "none";
  ketchup.style.display = "none";
  dough.style.display = "none";
  cookpizza.style.display = "block";
  takepizza.style.display = "none";
  pizzacutter.style.display = "none";
  pizzabox1.style.display = "none";
  pizzabox.style.display = "none";
  customer1.style.display = "none";
  register.style.display = "none";
  loop.style.display = "none";
};

//pizza cut

pizzacutter.onclick = () => {
  cut1.style.display = "block";
  cutCount1 += 2;
  console.log(cutCount1);

  pizzacutter.onclick = () => {
    cut2.style.display = "block";
    cutCount2 += 4;
    console.log(cutCount2);
  };
};

//skladani pizza

dough.onclick = () => {
  dough1.style.display = "block";
  pizzaOrder++;
  doughTime += 2;
  orderCheck++; //+1
};
pep.onclick = () => {
  if (pizzaOrder >= 1) {
    pep1.style.display = "block";
    orderCheck += 5;
    pepTime += 2;
  }
};
ketchup.onclick = () => {
  if (pizzaOrder >= 1) {
    ketchup1.style.display = "block";
    orderCheck += 100; //+100
    ketchupTime += 2;
  }
};
cheese.onclick = () => {
  if (pizzaOrder >= 1) {
    cheese1.style.display = "block";
    orderCheck += 50; //+50
    cheeseTime += 5;
    console.log(cheeseTime);
  }
};
sausage.onclick = () => {
  if (pizzaOrder >= 1) {
    sausage1.style.display = "block";
    orderCheck += 200; //+200
    sausageTime += 2;
  }
};

//let hodnoty
let ordernumber = 0;
let pizzaOrder = 0;
let doughTime = 0;
let cheeseTime = 0;
let ketchupTime = 0;
let sausageTime = 0;
let pepTime = 0;
let cutCount1 = 0;
let cutCount2 = 0;
let orderCheck = 0;

//

//cooktimer
cookpizza.onclick = () => {
  setTimeout(() => {
    if (doughTime > 0) {
      dough1.style.display = "none";
      dough2.style.display = "block";
      orderCheck += 2; //+2
      console.log(cheeseTime);
    }
    if (cheeseTime > 1) {
      cheese1.style.display = "none";
      orderCheck += 25;
      cheese2.style.display = "block";
    }
  }, 10000);
};

takepizza.onclick = () => {
  dough1.style.display = "none";
  dough2.style.display = "none";
  ketchup1.style.display = "none";
  cheese1.style.display = "none";
  cheese2.style.display = "none";
  sausage1.style.display = "none";
  pep1.style.display = "none";
};
