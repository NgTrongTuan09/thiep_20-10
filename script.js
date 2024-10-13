const phongBi = document.querySelector('.phong_bi');
const dauTron = document.querySelector('.dau_tron');
const napTamGiac = document.querySelector('.nap_tam_giac');
const thu = document.querySelector('.thu');
const startButton = document.querySelector('.start_button');
const xeTai = document.createElement('img'); // Tạo phần tử ảnh cho xe tải

// Thiết lập thuộc tính cho ảnh xe tải
xeTai.src = 'xe_tai.jpg'; // Đường dẫn đến ảnh xe tải
xeTai.alt = 'Xe Tải';
xeTai.classList.add('xe_tai'); // Thêm lớp cho ảnh xe tải
document.body.appendChild(xeTai); // Thêm ảnh xe tải vào body

// Ẩn phong bì và bức thư ban đầu
phongBi.style.display = 'none'; 
thu.style.display = 'none'; 

// Sự kiện cho nút Start
startButton.addEventListener('click', () => {
    // Ẩn nút Start
    startButton.style.display = 'none'; 

    // Di chuyển xe tải vào giữa màn hình
    xeTai.style.left = '-100px'; // Bắt đầu từ ngoài màn hình bên trái
    xeTai.style.bottom = '20%'; // Đặt dưới phong bì
    xeTai.style.transition = 'left 2s ease, transform 2s ease'; // Hiệu ứng di chuyển và phóng to
    xeTai.style.left = '50%'; // Di chuyển xe tải vào giữa
    xeTai.style.transform = 'translateX(-50%) scale(2)'; // Đưa xe tải về giữa màn hình và phóng to
    

    // Sau khi xe tải đã vào giữa, hiện phong bì
    setTimeout(() => {
        phongBi.style.display = 'block'; // Hiện phong bì
        thu.style.display = 'none'; // Đảm bảo lá thư không hiển thị ngay

        // Sau 2 giây, xe tải thả phong bì và chạy ra ngoài
        setTimeout(() => {
            xeTai.style.left = '100%'; // Di chuyển xe tải ra ngoài
            xeTai.style.transform = 'translateX(-50%) scale(1)'; // Khôi phục kích thước ban đầu
           

            setTimeout(() => {
                xeTai.style.display = 'none';
            }, 2000); 
            // Thời gian chờ để thả phong bì
        }, 2000); // Thời gian chờ để thả phong bì
        
    }, 2000); // Thời gian di chuyển vào giữa là 2 giây
});


// Sự kiện cho hình tròn
dauTron.addEventListener('click', () => {
    // Xoay nắp phong bì và di chuyển đỉnh tam giác
    napTamGiac.style.animation = 'openEnvelope 0.5s forwards';
    
    // Hiện bức thư và nội dung sau khi mở phong bì
    setTimeout(() => {
        thu.style.display = 'block'; // Đảm bảo lá thư được hiển thị
        thu.style.opacity = 1; // Đưa thư ra
        thu.style.animation = 'moveOut 0.5s forwards'; // Áp dụng hiệu ứng mờ dần
    }, 500); // Chờ một chút để phong bì mở trước khi hiện nội dung

    // Di chuyển hình tròn lên trên
    dauTron.style.animation = 'moveOut 0.5s forwards'; // Di chuyển hình tròn
    dauTron.style.transform = 'translateX(0%) translateY(-250px)'; // Điều chỉnh vị trí hình tròn
});
