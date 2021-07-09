let nhapDiemLy;
let nhapDiemHoa;
let nhapDiemSinh;
nhapDiemLy = prompt("Nhập điểm Vật lý")
nhapDiemHoa = prompt("Nhập điểm Hóa Học")
nhapDiemSinh = prompt("Nhập điểm Sinh Học")
let DiemLy = parseInt(nhapDiemLy);
let DiemHoa = parseInt(nhapDiemHoa);
let DiemSinh = parseInt(nhapDiemSinh);
let DiemTB = (DiemLy + DiemHoa + DiemSinh)/3;
document.write("Điểm trung bình là: " + DiemTB);