

function addToCartSimilar(productId) {
    alert("Product added to cart successfully!");
}

function addToCart(event) {
    event.preventDefault();
    alert("Product added to cart successfully!");
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event triggered");

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    const productId = parseInt(getParameterByName('id'));

    console.log("Product ID:", productId);

    const products = [

        {
        id: 1,
        name: "Ankle Boots",
        description: "Women’s Fashion Ankle Boots Square Toe Suede Side Zipper Chunky Block Heel Booties",
        price: "$39.99",
        image: "images/71fhq3hbcHL._AC_SY500_.jpg",
        similarProducts: [5, 6, 7],
        color: "Pink",
        size: "6",
        style: "Square Toe Suede Side Zipper Chunky Block Heel Booties",
        rating: 4, // Example rating
        ratingCount: 358 // Example rating count
    
    },
    {
        id: 2,
        name: "Comfortable Skate Shoe",
        description: "Obtaom Women's Canvas Sneakers Cute Lace up Fashion Sneaker Comfortable Skate Shoe for Lady Casual Tennis Flats",
        price: "$23.99",
        image: "images/71no9GAWnAL._AC_SY395_.jpg",
        similarProducts: [3, 4, 8],
        color: "Multi White Pink",
        size: "6",
        style: "Cute Lace up Casual Tennis Flats",
        rating: 3.5, // Example rating
        ratingCount: 97 // Example rating count
    },
    {
        id: 3,
        name: "Floral Sneaker",
        description: "Obtaom Women's Play Fashion Sneaker White Color Washed and Leopard Canvas Slip on Shoes",
        price: "$22.99",
        image: "images/71WCZ-pwx1L._AC_SY500_.jpg",
        similarProducts: [2, 4, 8],
        color: "Multi Green",
        size: "5",
        style: "Canvas Slip on Shoes",
        rating: 5, // Example rating
        ratingCount: 10678 // Example rating count
    },
    {
        id: 4,
        name: "Tennis Shoes",
        description: "J. Adams Hero Platform Sneakers for Women",
        price: "$-9% $31.99",
        image: "images/41Df-RFYS8L._AC_UF480,480_SR480,480_.jpg",
        similarProducts: [2, 3, 8],
        color: "Fine Rainbow Glitter",
        size: "8",
        style: "Casual Lace Up Fashion",
        rating: 2.5, // Example rating
        ratingCount: 1929 // Example rating count
    },
    {
        id: 5,
        name: "Espadrille Wedge Sandals",
        description: "Allegra K Women's Platform Floral Printed Slingback Espadrille Wedge Sandals",
        price: "$40.99 - $41.99",
        image: "images/81Tyzqb8lZL._AC_SY500_.jpg",
        similarProducts: [6, 7, 9],
        color: "Black",
        size: "9",
        style: "Slingback Espadrille Wedge Sandals",
        rating: 2, // Example rating
        ratingCount: 25 // Example rating count
    },
    {
        id: 6,
        name: "DREAM PAIRS Sandal",
        description: "DREAM PAIRS Women's Ingrid Ankle Strap Low Wedge Sandal",
        price: "$36.99",
        image: "images/41T+0ms--7L._AC_UF480,480_SR480,480_.jpg",
        similarProducts: [5, 7, 9],
        color: "Floral",
        size: "5.5",
        style: "Strap Low Wedge Sandal",
        rating: 3.5, // Example rating
        ratingCount: 11602 // Example rating count
    },
    {
        id: 7,
        name: "Floral Heels Sandals",
        description: "Perphy Platform Heel Slingback Floral Heels Sandals for Women",
        price: "$41.99",
        image: "images/81lQKmPkLhL._AC_SY500_.jpg",
        similarProducts: [5, 6, 9],
        color: "Dark Blue",
        size: "9",
        style: "Slingback Floral Heels Sandals",
        rating: 4.5, // Example rating
        ratingCount: 60 // Example rating count
    },
    {
        id: 8,
        name: "Fashion Tennis Shoe",
        description: "Women's Slip-On Limited-Edition Cotton Casual Canvas Classic ComfortableSneaker or Fashion Tennis Shoe",
        price: "$29.99",
        image: "images/818pGCLddlL._AC_UF480,480_SR480,480_.jpg",
        similarProducts: [12, 11, 10],
        color: "Iguana",
        size: "6.5",
        style: "Casual Canvas Classic",
        rating: 3.5, // Example rating
        ratingCount: 5 // Example rating count
    },
    {
        id: 9,
        name: "Shoes with Bow",
        description: "J. Adams Wally - Comfortable Slip On Shoes with Bow",
        price: "$36.99 - $43.99",
        image: "images/31fm1s2zokL._AC_UF480,480_SR480,480_.jpg",
        similarProducts: [8, 10, 11],
        color: "Black",
        size: "9",
        style: "Platform Sneakers for Women",
        rating: 4, // Example rating
        ratingCount: 1214 // Example rating count
    },
    {
        id: 10,
        name: "Slip On Canvas Shoes",
        description: "JENN ARDOR Slip On Canvas Shoes for Women Low Top Fashion Sneakers Comfortable Walking Flats",
        price: "-33% $39.99",
        image: "images/412Wgmnx7YL._AC_UF480,480_SR480,480_.jpg",
        similarProducts: [8, 11, 12],
        color: "Olive",
        size: "8",
        style: "Low Top Fashion Sneakers",
        rating: 0.5, // Example rating
        ratingCount: 1089 // Example rating count
    },
    {
        id: 11,
        name: "Casual Walking Shoes",
        description: "Women's Slip On Canvas Sneaker Low Top Casual Walking Shoes Classic Comfort Flat Fashion Sneakers",
        price: "$25.99",
        image: "images/41OKGEYy9sL._AC_UF480,480_SR480,480_.jpg",
        similarProducts: [2, 12, 10],
        color: "Color Stripe",
        size: "9",
        style: "Comfort Flat Fashion Sneakers",
        rating: 1, // Example rating
        ratingCount: 11934 // Example rating count
    },
    {
        id: 12,
        name: "Casual Flats",
        description: "JENN ARDOR Womens Comfortable Elastic Shoes Stylish Canvas Fashion Sneakers Cute Lightweight Slip On Shoes Casual Flats for Walking",
        price: "$29.99",
        image: "images/41mDN7N1bYL._AC_UF480,480_SR480,480_.jpg",
        similarProducts: [11, 10, 8],
        color: " B-light Pink",
        size: "9",
        style: " Cute Lightweight Slip On Shoes",
        rating: 1.5, // Example rating
        ratingCount: 1113 // Example rating count
    }
];

    const product = products.find(product => product.id === productId);
    console.log("Product:", product); // Debug log

    if (productId === 2) {
        console.log("Similar Products for Product 2:", product.similarProducts);
    }

    document.getElementById('shoe-image').src = product.image;
    document.getElementById('shoe-name').innerText = product.name;
    document.getElementById('shoe-description').innerText = product.description;
    document.getElementById('shoe-price').innerText = product.price;
    document.getElementById('shoe-style').innerText = product.style;
    document.getElementById('shoe-color').innerText = product.color;
    document.getElementById('shoe-size').innerText = product.size;
    document.getElementById('shoe-rating').innerText = product.rating;
    document.getElementById('rating-count').innerText = product.ratingCount;

    const ratingElement = document.getElementById('shoe-rating');
    const ratingCountElement = document.getElementById('rating-count');
    const rating = product.rating;
    const ratingCount = product.ratingCount;

    ratingElement.innerHTML = '';
    ratingCountElement.innerText = ratingCount;

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        const starIcon = document.createElement('img');
        starIcon.src = 'th-1134902402.jpg';
        starIcon.alt = 'Star';
        starIcon.classList.add('star-icon');
        ratingElement.appendChild(starIcon);
    }

    if (halfStar) {
        const halfStarIcon = document.createElement('img');
        halfStarIcon.src = 'th-3515297802.jpg';
        halfStarIcon.alt = 'Half Star';
        halfStarIcon.classList.add('star-icon');
        ratingElement.appendChild(halfStarIcon);
    }

    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < emptyStars; i++) {
        const emptyStarIcon = document.createElement('img');
        emptyStarIcon.src = 'th-738322422.jpg';
        emptyStarIcon.alt = 'Empty Star';
        emptyStarIcon.classList.add('star-icon');
        ratingElement.appendChild(emptyStarIcon);
    }

    function generateSimilarProductsHTML() {
        const similarProductsGrid = document.getElementById("similar-products-grid");
        product.similarProducts.slice(0, 3).forEach(similarProductId => {
            const similarProduct = products.find(product => product.id === similarProductId);
            if (similarProduct) {
                console.log("Similar Product:", similarProduct); // Debug log
                const productHTML = `
                    <div class="similar-product" data-product-id="${similarProduct.id}">
                        <img src="${similarProduct.image}" alt="${similarProduct.name}">
                        <h3>${similarProduct.name}</h3>
                        <p class="price">${similarProduct.price}</p>
                        <button class="add-to-cart" onclick="addToCartSimilar(${similarProduct.id})">Add to Cart</button>
                    </div>
                `;

                similarProductsGrid.innerHTML += productHTML;
            } else {
                console.error("Similar product not found for ID:", similarProductId); // Debug log
            }
        });
    }

    generateSimilarProductsHTML();

    console.log("Shoe Image Element:", document.getElementById('shoe-image'));
    console.log("Shoe Name Element:", document.getElementById('shoe-name'));
    console.log("Shoe Description Element:", document.getElementById('shoe-description'));
    console.log("Shoe Price Element:", document.getElementById('shoe-price'));

    const similarProductImages = document.querySelectorAll('.similar-product img');
    similarProductImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.5s';
        });
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
		image.addEventListener('click', function() {
            const productId = this.closest('.similar-product').dataset.productId;
            window.location.href = 'page_details1.html?id=' + productId;
        });

    });

    const similarProducts = document.querySelectorAll('.similar-product');

// Function to handle form submission and add comments
    function addComment(event) {
        event.preventDefault(); // Prevent form submission
        var commentMessage = document.getElementById("comment-message").value;
        
        // Create a new comment element
        var commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = "<p>" + commentMessage + "</p>";

        // Append the comment to the comment list
        var commentList = document.getElementById("comment-list");
        commentList.appendChild(commentElement);

        // Clear the input field after adding the comment
        document.getElementById("comment-message").value = "";
    }

    // Event listener for comment form submission
    document.getElementById("comment-form").addEventListener("submit", addComment);

	
});

document.addEventListener('DOMContentLoaded', function() {
    // Get the stored theme preference
    const storedTheme = getThemePreference();

    // Apply the theme preference to the page
    if (storedTheme) {
        applyTheme(storedTheme);
    }

    // Retrieve the product ID from local storage
    const productId = parseInt(localStorage.getItem('productId'));

    // Now you can use the productId to display the details of the selected product
    const product = products.find(product => product.id === productId);
    console.log("Product:", product); // Debug log

    // Display product details using product data
    // (Code for displaying product details here...)

    // Generate HTML for similar products
    generateSimilarProductsHTML();

    // Add event listeners for similar product images
    const similarProductImages = document.querySelectorAll('.similar-product img');
    similarProductImages.forEach(image => {
        // Event listener for mouse enter and leave
        image.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.5s';
        });
        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        // Event listener for click to navigate to details page of similar product
        image.addEventListener('click', function() {
            const productId = this.closest('.similar-product').dataset.productId;
            window.location.href = 'page_details1.html?id=' + productId;
        });
    });

    // Add event listener for comment form submission
    document.getElementById("comment-form").addEventListener("submit", addComment);
});
