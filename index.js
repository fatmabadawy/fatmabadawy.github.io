<script>

    var productImages = document.querySelectorAll('.product img');
    productImages.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    function addToCart() {
        alert("Product added to cart!");
    }

    function changeButtonColor(button) {
        button.style.backgroundColor = "lightblue";
    }

    function resetButtonColor(button) {
        button.style.backgroundColor = ""; // Reset to default color
    }
</script>