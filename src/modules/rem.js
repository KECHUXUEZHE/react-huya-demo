document.documentElement.style.fontSize = 
    document.documentElement.clientWidth / 3.75 + 'px'; // 初始化

// 横竖屏切换
window.onresize = function () { 
    document.documentElement.style.fontSize = 
        document.documentElement.clientWidth / 3.75 + 'px'; 
}