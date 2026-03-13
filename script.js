document.addEventListener('DOMContentLoaded', () => {
    const loveBtn = document.getElementById('loveBtn');
    
    if (loveBtn) {
        loveBtn.addEventListener('click', () => {
            // Menggunakan SweetAlert2 untuk notifikasi yang estetik
            Swal.fire({
                title: 'Pesan Khusus',
                text: 'love James Cortis ❤️',
                icon: 'info',
                iconHtml: '💌', // Mengganti ikon default info dengan ikon surat cinta
                confirmButtonText: 'Tutup',
                confirmButtonColor: '#FF4B72',
                background: '#fff0f5', // Warna latar belakang notifikasi (lavender blush / pink sangat muda)
                color: '#de597b', // Warna teks
                backdrop: `
                    rgba(255, 105, 180, 0.4)
                    url("https://media.tenor.com/dKHtP4q0H9MAAAAj/heart-floating.gif")
                    left top
                    no-repeat
                `, // Efek latar belakang redup saat notif muncul
                customClass: {
                    title: 'poppins-font',
                    popup: 'border-radius-custom'
                }
            });
        });
    }
});
