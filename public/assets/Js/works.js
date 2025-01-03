// document.querySelectorAll('.toggle-description').forEach(button => {
//     button.addEventListener('click', function () {
//         const description = this.closest('article').querySelector('.workDescription');
//         description.classList.toggle('show');

//         // アイコンの向きも変更
//         const icon = this.querySelector('i');
//         icon.classList.toggle('fa-caret-down');
//         icon.classList.toggle('fa-caret-up');
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const works = document.querySelectorAll('.work');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            works.forEach(work => {
                // `data-category` をスペース区切りで分割して配列に変換
                const categories = work.getAttribute('data-category').split(' ');

                if (category === 'all' || categories.includes(category)) {
                    work.style.display = 'flex';
                } else {
                    work.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('video-lightbox');
    const youtubePlayer = document.getElementById('youtube-player');
    const closeBtn = document.querySelector('.close-lightbox');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const videoId = thumbnail.getAttribute('data-video-id');
            const videoType = thumbnail.getAttribute('data-video-type') || 'normal'; // デフォルトは通常動画
            let embedUrl = '';

            // 動画タイプに応じて埋め込みURLを生成
            if (videoType === 'normal') {
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            } else if (videoType === 'short') {
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            } else if (videoType === 'playlist') {
                embedUrl = `https://www.youtube.com/embed/videoseries?list=${videoId}&autoplay=1`;
            }

            youtubePlayer.src = embedUrl;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        youtubePlayer.src = ''; // 再生停止
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            youtubePlayer.src = ''; // 再生停止
            lightbox.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const topButton = document.getElementById("toTopBtn");

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    topButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // Safari用
        document.documentElement.scrollTop = 0; // 他のブラウザ用
    });
});