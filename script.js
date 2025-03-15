// 页面加载时，文章内容逐渐显示
window.addEventListener('load', () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        setTimeout(() => {
            post.style.opacity = 1;
            post.style.transform = 'translateY(0)';
        }, index * 300);  // 为每个文章块添加不同的延迟效果
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有图片元素
    const images = document.querySelectorAll('.testpost img');

    // 为每个图片添加点击事件
    images.forEach(img => {
        img.addEventListener('click', function() {
            // 创建全屏容器
            const fullscreen = document.createElement('div');
            fullscreen.className = 'fullscreen-image';

            // 创建图片元素
            const fullImg = document.createElement('img');
            fullImg.src = this.src;

            // 将图片添加到容器中
            fullscreen.appendChild(fullImg);

            // 添加点击关闭事件
            fullscreen.addEventListener('click', function() {
                document.body.removeChild(this);
            });

            // 将容器添加到页面
            document.body.appendChild(fullscreen);
        });
    });
});

// 按钮的动画效果
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// 广告栏功能
const adContainer = document.getElementById('adContainer');
const adToggle = document.getElementById('adToggle');
const adContainerLeft = document.getElementById('adContainerLeft');
const adToggleLeft = document.getElementById('adToggleLeft');
let lastScrollTop = 0;
let isManuallyHidden = false; // 添加状态变量记录用户是否手动关闭广告栏
let isManuallyHiddenLeft = false; // 添加状态变量记录用户是否手动关闭左侧广告栏

// 页面加载时隐藏广告栏
window.addEventListener('load', () => {
    adContainer.classList.add('hidden');
    adContainerLeft.classList.add('hidden');
});

// 处理广告栏的显示和隐藏
window.addEventListener('scroll', () => {
    // 如果用户已手动关闭广告栏，则不再自动显示
    if (isManuallyHidden) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop === 0) {
        // 在页面顶部时隐藏
        adContainer.classList.add('hidden');
    } else {
        // 不在页面顶部时显示
        adContainer.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});

// 点击按钮手动切换广告栏
if (adToggle) {
    adToggle.addEventListener('click', () => {
        adContainer.classList.toggle('hidden');
        // 当用户点击关闭按钮时，设置状态为已手动关闭
        if (adContainer.classList.contains('hidden')) {
            isManuallyHidden = true;
        } else {
            isManuallyHidden = false;
        }
    });
}
