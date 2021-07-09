let bankinh;
bankinh = prompt("Nhập bán kính");
let Bk = parseInt(bankinh);
let area = Bk * Bk * 3.14;
let peri = 2 * Bk * 3.14;
document.write("Diện tích hình tròn là: " + area);
document.write('<br/>')
document.write("Chu vi hình tròn là: " + peri);