const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuProductDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleIconMenu);
menuCarritoIcon.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const isdropdowns = isActive();
    if(isdropdowns.detailProduct){
        menuProductDetail.classList.toggle('inactive');
    }
    
}

function  toggleIconMenu(){
    mobilMenu.classList.toggle('inactive');
    const isdropdowns = isActive();
    if(isdropdowns.menuDesktop){
        menuProductDetail.classList.toggle('inactive');
    }
    if(isdropdowns.detailProduct){
        menuProductDetail.classList.toggle('inactive');
    }
    
}
function toggleProductDetail(){
    menuProductDetail.classList.toggle('inactive');
    const isdropdowns = isActive();
    if(isdropdowns.menuMobile){
        mobilMenu.classList.toggle('inactive');
    }
    if(isdropdowns.menuDesktop){
        desktopMenu.classList.toggle('inactive');
    }
}
function isActive(){
    const isdesktopMenu = !desktopMenu.classList.contains('inactive');
    const isIconMenu = !mobilMenu.classList.contains('inactive');
    const isProductDetail = !menuProductDetail.classList.contains('inactive');
    return{
        menuDesktop:isdesktopMenu,
        menuMobile:isIconMenu,
        detailProduct:isProductDetail
    }
}

function renderProducts(arr) {
    for ( product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} -> product.image
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
    
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
    
                const productInfoDiv = document.createElement('div');
    
                    const productPrice = document.createElement('p');
                    productPrice.innerText = '$' + product.price;
                    const productName = document.createElement('p');
                    productName.innerText = product.name;
    
                    productInfoDiv.appendChild(productPrice);
                
                    productInfoDiv.appendChild(productName);
    
            const productIngoFigure = document.createElement('figure');
                 const productImgCart = document.createElement('img');
                    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
                productIngoFigure.appendChild(productImgCart);
        
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productIngoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    
    }
}
renderProducts(productList);

