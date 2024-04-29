function toggleTheme() {

    var lightTheme = document.getElementById('light-theme');
    var darkTheme = document.getElementById('dark-theme');

    if (lightTheme.disabled === false) {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
    } else {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
    }
}

function showQuickView(imageSrc, videoSrc, title, description, price) {
    var modal = document.getElementById("quick-view-modal");
    var modalImage = document.getElementById("quick-view-image");
    var modalVideo = document.getElementById("quick-view-video");
    var modalTitle = document.getElementById("quick-view-title");
    var modalDescription = document.getElementById("quick-view-description");
    var modalPrice = document.getElementById("quick-view-price");

    modal.style.display = "block";
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalPrice.innerText = price;

    modalImage.src = imageSrc;

    if (videoSrc) {
        modalVideo.style.display = "block";
        modalVideo.src = videoSrc;
        modalVideo.autoplay = true;
    } else {
        modalVideo.style.display = "none";
    }
}

function closeQuickView() {
    var modal = document.getElementById("quick-view-modal");
    var modalVideo = document.getElementById("quick-view-video");
    
    modal.style.display = "none";

    if (modalVideo) {
        modalVideo.pause();
    }
}

function addToCart() {
    alert("Added to cart successfully!");
}

window.onclick = function(event) {
    var modal = document.getElementById("quick-view-modal");
    if (event.target == modal) {
        closeQuickView();
    }
};

function startBannerSlider() {

function slideBannerImages() {
    var banner = document.querySelector(".banner");
    var images = [
        "url('https://wallpapercave.com/wp/wp6492963.jpg')",
        "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4771870.jpg&f=1&nofb=1&ipt=3d9d3c4db8ab9a2db522b45fe3ab24aa10c6cbd15ef37400bc7045a01b5952a4&ipo=images')",
		"url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6260694.jpg&f=1&nofb=1&ipt=7373f868bb731751a4b4f9e3a4d97bb7e2722cbf8989a3587130c3af4b2a89fe&ipo=images')",
		"url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5425329.jpg&f=1&nofb=1&ipt=6745a22bd3d34a30cb71a3990432eb48fc371fe5b519e3236bb9da4246819b6e&ipo=images')",
		"url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7182890.jpg&f=1&nofb=1&ipt=9e6e4a8007a5511bf15cfa7567095bafe121f83721178c61a4856c48a06769e1&ipo=images')",
		"url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp8935181.jpg&f=1&nofb=1&ipt=df1a948b53d4f01fa0909873043373dadbebe367bcd2fd910c81a016c821772a&ipo=images')",
    ];
    var currentIndex = 0;
    var slideDuration = 5000;

    banner.style.backgroundImage = images[currentIndex];

    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        banner.style.backgroundImage = images[currentIndex];
        banner.style.backgroundPosition = "100% 0";
        setTimeout(function() {
            banner.style.transition = "background-position 1s linear";
            banner.style.backgroundPosition = "0 0";
        }, 50);
    }, slideDuration);
}

slideBannerImages();

}

function toggleTheme() {
    var lightTheme = document.getElementById('light-theme');
    var darkTheme = document.getElementById('dark-theme');
    var themeToggleBtn = document.getElementById('theme-toggle');
    
	
    if (lightTheme.disabled === false) {
        lightTheme.disabled = true;
        darkTheme.disabled = false;
        themeToggleBtn.innerText = "Light Mode";
    } else {
        lightTheme.disabled = false;
        darkTheme.disabled = true;
        themeToggleBtn.innerText = "Dark Mode";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    toggleTheme(); // Call toggleTheme() after DOM is loaded
    startBannerSlider();
});