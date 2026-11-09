// Beispielprodukte – Preise/Artikel durch echte Ware deines Lieferanten ersetzen.
const PRODUCTS = [
  {id:1, brand:"Nike", name:"Air Force 1 '07", cat:"Schuhe", price:99.99, sizes:["40","41","42","43","44"]},
  {id:2, brand:"Nike", name:"Tech Fleece Hoodie", cat:"Hoodies", price:89.99, sizes:["S","M","L","XL"]},
  {id:3, brand:"Jordan", name:"Air Jordan 1 Mid", cat:"Schuhe", price:119.99, sizes:["40","41","42","43","44","45"]},
  {id:4, brand:"Jordan", name:"Jumpman T-Shirt", cat:"T-Shirts", price:34.99, sizes:["S","M","L","XL"]},
  {id:5, brand:"Lacoste", name:"Polo L.12.12 Classic", cat:"Poloshirts", price:79.99, sizes:["S","M","L","XL"]},
  {id:6, brand:"Lacoste", name:"Carnaby Sneaker", cat:"Schuhe", price:89.99, sizes:["41","42","43","44"]},
  {id:7, brand:"Tommy Hilfiger", name:"Flag Logo Sweatshirt", cat:"Hoodies", price:69.99, sizes:["S","M","L","XL"]},
  {id:8, brand:"Tommy Hilfiger", name:"Slim Fit Poloshirt", cat:"Poloshirts", price:49.99, sizes:["S","M","L","XL"]},
  {id:9, brand:"Stone Island", name:"Crewneck Sweatshirt", cat:"Hoodies", price:199.99, sizes:["M","L","XL"]},
  {id:10, brand:"Stone Island", name:"Kompass-Patch T-Shirt", cat:"T-Shirts", price:99.99, sizes:["S","M","L","XL"]},
  {id:11, brand:"Polo Ralph Lauren", name:"Custom Slim Fit Polo", cat:"Poloshirts", price:89.99, sizes:["S","M","L","XL"]},
  {id:12, brand:"Polo Ralph Lauren", name:"Pony Logo Hoodie", cat:"Hoodies", price:109.99, sizes:["S","M","L","XL"]}
];
const FREE_SHIPPING_FROM = 100;
const SHIPPING_COST = 4.99;
