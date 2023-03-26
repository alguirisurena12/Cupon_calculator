const inputCoupon = document.querySelector('#coupon');
const btnCoupon = document.querySelector('#applycoupon');
const btn = document.querySelector('#applycoupon');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calculePriceWithDiscount);

const couponsList = [];
couponsList.push({
  name: 'Red_Flag',
  discount: 10,
});

couponsList.push({
  name: 'Zeta_Halo',
  discount: 5,
});

couponsList.push({
  name: 'ONI',
  discount: 3,
});

couponsList.push({
  name: 'Spartans_Never_Die',
  discount: 15,
});

function calculePriceWithDiscount() {
   const price = 65;
   const coupon = inputCoupon.value;
   
   if (!coupon) {
    pResult.innerText = 'Type something lol';
    return;
   }
   
   let discount;

function IsCouponInArray(couponElement) { // {name, discount}
   return couponElement.name == coupon;
}

const couponInArray = couponsList.find(IsCouponInArray); // [{}]

   if (couponInArray) {
  discount = couponInArray.discount;
} else {
  pResult.innerText = 'The coupon is not valid';
  return;
}

console.log({
  coupon,
  discount,
  couponInArray,
})

const newPrice = (price - discount);

pResult.innerText = 'Your new price with discount is $' + 
newPrice;
}