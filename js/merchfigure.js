let addToCartButtons = document.getElementsByClassName("button_addtocart")

for (let i = 0; i < addToCartButtons.length; i++){
    let addToCartButton = addToCartButtons[i]
    addToCartButton.addEventListener('click',addItemToCart)
}

function addItemToCart(event) {
    let item = (event.target).parentElement

    let itemData = {
        image : item.getElementsByClassName("figuremerchandise_items_image")[0].src,
        name : item.getElementsByClassName("figuremerchandise_items_name")[0].innerText,
        price : item.getElementsByClassName("figuremerchandise_items_price")[0].innerText,
        quantity : 1
    }
    
    let currLocalStorage
    if(JSON.parse(localStorage.getItem("cart")) == undefined) {
        localStorage.setItem("cart","[]")
    }
    currLocalStorage = JSON.parse(localStorage.getItem("cart"))
    selectedItemIdx = isItemExistInCart(itemData,currLocalStorage)

    if(selectedItemIdx==-1){
        currLocalStorage.push(JSON.stringify(itemData));
    } else {
        let selectedItem = JSON.parse(currLocalStorage[selectedItemIdx])
        selectedItem.quantity++
        currLocalStorage[selectedItemIdx] = JSON.stringify(selectedItem)
    }
    localStorage.setItem("cart",JSON.stringify(currLocalStorage))
}

function isItemExistInCart(itemData, currLocalStorage) {
    if(currLocalStorage.length != undefined) {
        for (let i = 0; i < currLocalStorage.length; i++){
            let thisItem = JSON.parse(currLocalStorage[i])
            if(itemData.name == thisItem.name) return i
        }
        return -1
    }
    return -1
}

