document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const lightbox = document.getElementById('video-lightbox');
    const youtubePlayer = document.getElementById('youtube-player');
    const closeBtn = document.querySelector('.close-lightbox');
    const lwTitle = document.querySelectorAll('.lw-title-shadow')

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