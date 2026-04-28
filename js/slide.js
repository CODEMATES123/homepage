let slideIndex = 0;
const slideInterval = 6000; // 6秒ごとに画像を切り替え
let slideshowInterval;
let slideshowPaused = false;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
}

function startSlideshow() {
    showSlides(); // 最初のスライドを表示
    slideshowInterval = setInterval(showSlides, slideInterval);
}

function pauseSlideshow() {
    clearInterval(slideshowInterval);
}

function resumeSlideshow() {
    if (!slideshowPaused) {
        startSlideshow();
    }
}

// 推奨リストの表示/非表示機能
function toggleRecommendedList() {
    const title = document.getElementById('recommended-title');
    const featureItems = document.querySelector('.feature-items');

    title.addEventListener('click', function(e) {
        e.preventDefault();
        featureItems.classList.toggle('show');
    });
}

// DOMが読み込まれた後に実行
document.addEventListener('DOMContentLoaded', function() {
    startSlideshow(); // スライドショーを開始
    toggleRecommendedList(); // 推奨リストの機能を有効化

    // スライドショーの一時停止と再開
    const slideshowContainer = document.querySelector('.slideshow-container');

    slideshowContainer.addEventListener('mouseenter', function() {
        slideshowPaused = true;
        pauseSlideshow();
    });

    slideshowContainer.addEventListener('mouseleave', function() {
        slideshowPaused = false;
        resumeSlideshow();
    });
});


