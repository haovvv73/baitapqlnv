document.getElementById("btnTingLuong").onclick = (event) => {
    event.preventDefault();// ko cho load lại trang

    let nhanVien = {};
    let arrInp = document.querySelectorAll('.form-input input');
    let chucVu = document.getElementById("chucVu").value;

    // đưa giá trị vào đối tượng
    for (let i = 0; i < arrInp.length; i++) {
        let tagInp = arrInp[i];

        let value = tagInp.value;
        let id = tagInp.id;

        nhanVien = { ...nhanVien, [id]: value };
    }

    // tính lương
    tinhLuong = () => {
        return +nhanVien.LuongCB + +(nhanVien.HSluong * nhanVien.LuongCB)
    }

    let tongLuong = tinhLuong();


    // đưa lên html
    content = `
        <tr>
            <th>Mã nhân viên: ${nhanVien.MaNV}</th>
        </tr>
        <tr>
            <th>Tên nhân viên: ${nhanVien.TenNV}</th>
        </tr>
        <tr>
            <th>chức vụ: ${chucVu}</th>
        </tr>
        <tr>
            <th>Lương: ${tongLuong}</th>
        </tr>
    `;
    document.getElementById("infoNV").innerHTML = content


}