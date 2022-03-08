let cart = localStorage.getItem("cart")
cart = JSON.parse(cart)

let total=0

    //ini klo localstorage kosong
    if(cart == null) {
        document.getElementsByTagName("main")[0].insertAdjacentHTML(
            "afterbegin",
            `
            <div class="sadcart">
            <img src="../assets/sadcartlogo.png" alt="">
            </div>
            
            <h2 class="titleCarty">
            Your Cart is Empty !
            </h2>
            <p class="textCarty">
            You have no items in your shopping cart
            <br>
            Lets Go Buy <a href="figure.html">Figure</a> or <a href="merchandise.html">Merchandise</a>
            </p>
            `
        )
    
        $('main').css('display','block')
        $("#cart-container").css("display", "none")
        $("#cust-info").css("display", "none")
        $("#cart-cust-divider").css("display", "none")
    }  else {
        for (let i = 0; i < cart.length; i++) {
            let currItem = JSON.parse(cart[i])
            
            let currItemPrice = parseInt(currItem.price.substring(3))
            let subtotal = currItemPrice*currItem.quantity
            total += subtotal

            document.getElementById("cart-items").insertAdjacentHTML("beforeend",`
                <div class="cart-item">
                    <img src="${currItem.image}" class="cart_item_image" alt="">
                    <div class="cart-item-details">
                        <a class="texty" >Name</a> ${currItem.name} <br>
                        <a class="texty" >Price</a> ${currItem.price} <br>
                        <a class="texty" >Qty</a> ${currItem.quantity} <br>
                        <a class="texty" >Subtotal</a> Rp ${subtotal},00 <br>
                    </div>
                </div>
            `)
        }

        document.getElementById("cart-total").innerHTML = `Total: Rp. ${total},00`

        
    }

    function validate(){
        let username = document.getElementById("cust-name")
        var maleBtn = document.getElementById("genderMale")
        var femaleBtn = document.getElementById("genderFemale")
        let email = document.getElementById("cust-email")
        let phone = document.getElementById("cust-phone")
        let address = document.getElementById("cust-address")
    
        if(username.value==""){
            alert("Username must be filled")
        }
        else if(username.value.length <= 3){
            alert("Username must be more than 3 character")
        }
        else if(!maleBtn.checked && !femaleBtn.checked){
            alert("Gender must be checked")
        }
        else if(email.value==""){
            alert("Email must be filled")
        }
        else if(!email.value.includes("@")){
            alert("Email must contains @")
        }
        else if(!email.value.endsWith(".com")){
            alert("Email must end with .com")
        }
        else if(!phone.value.startsWith("+81")){
            alert("Phone number must start with +81")
        }
        else if(phone.value.length != 14){
            alert("Phone number invalid (Must be 11 digits)")
        }
        else if(validasiAngka(phone.value)==false){
            alert("invalid phone number (must be digit)")
        }
        else if(address.value==""){
            alert("Address must be filled")
        }
        else if(!address.value.endsWith("street") && !address.value.endsWith("Street")){
            alert("Address must contains Street")
        }
        else{
            alert(`Transaction for : ${username.value} SUCCESS! 
Thank you for Buying !`)
            clearCart()
        }
    
    }

    function clearCart(){
        localStorage.clear();
        window.location.reload();
        total=0;
    }

    function validasiAngka(number){
        for(let i=1;i<number.length;i++){
            if(isNaN(number[i])==true){
                return false;
            }
        }
        return true;
    }
    