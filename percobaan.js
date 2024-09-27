// memanggil modul bawaan dari node.js yaitu
// untuk membuat server http

const http = require('http')

http.createServer( function (request, response) {
    response.writeHead(200, {'content-type': 'text/html'})
    response.end(
        '<h1>halo guys, script ini di generate dari backend node.js, aji</h1><hr>'
        
    )    

}).listen(3000, function () {
    console.log('server sudah nyala, buka http://localhost:3000')
})

// kalau mau keluar dari server di terminal tekan control C
// kalau mau masuk ke server di terminal perintah: node percobaan
// kalau mau update masukan ulang di terminal (3 langkah):
// git add .       (semua file yg mau di edit)
// git commit -m "komentar bebas"
// git push -u origin main

// kalau mau github nya kembali ke coding awal sebelum di update perintahnya:
// git reset --hard   (masukkan code yg ada di commit di github)

// kalau mau github nya kembali ke coding beserta keterangan update juga, perintahnya :
// git reset --softhard   (masukkan code yg ada di commit di github)