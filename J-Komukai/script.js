// 背景色をランダムに変化させる関数
function changeBackgroundColor() {
    const colors = [
        "#FF5733", "#33FF57", "#5733FF", "#33A8FF", "#FF33A8", // 例: 色のリスト（追加する色を自由に増やすことができます）
        "#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4",
        "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722",
        "#795548", "#9E9E9E", "#607D8B"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
​
// 10秒ごとに背景色を変更
setInterval(changeBackgroundColor, 10000);
​
// ページロード時に初回の背景色変更を実行
document.addEventListener("DOMContentLoaded", function() {
    changeBackgroundColor();
});