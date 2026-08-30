$('#accountOpen').onclick=()=>{renderAccount();openPanel('accountDrawer')};
$('#checkoutButton').onclick=openCheckout;
$('#checkoutForm').onsubmit=e=>{e.preventDefault();placeOrder()};
$('#successAccount').onclick=()=>{renderAccount();openPanel('accountDrawer')};
