$(document).ready(function()
{
    $arr=[{id:"1" ,Name:"Mouse", image:"/image/img1.jpg",quntity:"0",price:"14.99" ,amount:"0"},
    {id:"2" ,Name:"Keyboard", image:"/image/keyboard.jpg",quntity:"0",price:"79.99" ,amount:"0"},
    {id:"3" ,Name:"Handfree", image:"/image/Handfree.png",quntity:"0",price:"17.99" ,amount:"0"}]
//populate for Product detail  
function populate()
{
    text="";
    text="<div id='header'><h1>Shopping Cart[]</h1></div>"
    $subtotal=0;
    for(i=0;i<$arr.length;i++)
    {
      text+="<div class='mainDiv'>"
            +"<div class='left'><img style='height: 100%; width: 100%;' src='"+$arr[i].image+"'></div>"
            +"<div class='right'>"
                +"<div class='top'>"
                 +"<h1>"+$arr[i].Name+"</h1>"
            +"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit."
                +"Aut quisquam voluptas commodi consectetur, reiciendis asperiores obcaecati perferendis"
                        + "iure quod incidunt!"
                    +"</p>"
                +"</div>"
                +"<div class='bottom'>"
                    +"<div class='bottom_left'><button class='btnMinus'>-</button><input type='text' id='inpQuntity' value='"+$arr[i].quntity+"'><button class='btnPlus'>+</button></div>"
                    +"<div class='bottom_right'><p>"+$arr[i].price+"</p><p id='pprice"+$arr[i].id+"'>"+$arr[i].amount+"</p></div>"
               +"</div>"
            +"</div>"
       +"</div>"
       $subtotal=$subtotal+parseFloat($arr[i].amount);    
    }
    console.log($subtotal)
    $("#outer").html(text);
}
populate();
//Populate for total and subtotal
function Total_populate()
{
  var txt=""
  $subtotal= $subtotal.toFixed(2);
  $tax=(parseFloat($subtotal)*.05);
  $tax=$tax.toFixed(2);
  $total=parseFloat($subtotal)+parseFloat($tax)+parseFloat(5);
  $total=$total.toFixed(2);
      txt+="<div id='prod_left'><h1>Subtotal:"+$subtotal+"</h1>"
              +"<p>Taxes(5%):"+$tax+"</p>"
              +"<p>Shipping: 5.00</p>"
           +"</div>"
           +"<div id='prod_right'><h1>Total:"+$total+"</h1>"
           +"<button id='btnCheckout'>Checkout</button>"
           +"</div>" 
   $("#productData").html(txt);
}
//Decrement Quantity value
$("#outer").on('click','.btnMinus', function(){
    $index=$(this).parent().parent().parent().parent().index()-1;
    $inpValue=$(this).next().val();
    $inpValue=$inpValue-1;
    if($inpValue==-1)
    {
        $inpValue=0;
    }
    $(this).next().val($inpValue);
    $arr[$index].quntity=$inpValue;
    $calPrice=$inpValue*$arr[$index].price;
    $calPrice= $calPrice.toFixed(2);
    $arr[$index].amount=$calPrice;
    populate();
    Total_populate();
})
//Increment Quantity value 
$("#outer").on('click','.btnPlus',function(){
    $index=$(this).parent().parent().parent().parent().index()-1;
    $inpValue=parseInt($(this).prev().val());
    $inpValue=$inpValue+1;
    $(this).prev().val($inpValue);
    $arr[$index].quntity=$inpValue;
    $calPrice=$inpValue*$arr[$index].price;
    $calPrice= $calPrice.toFixed(2);
    $arr[$index].amount=$calPrice;
    populate();
    Total_populate();
})
}
)