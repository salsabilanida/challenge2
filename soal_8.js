const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];


function getInfoPenjualan(dataPenjualan) {
    let totalModal = 0;
    let totalKeuntungan = 0;
    let persentaseKeuntungan = 0;
    let terlaris = 0;
    let filterTerlaris = 0;
    let bukuTerlaris = 0;
    let penulisTerlaris = 0;
    let produkBukuTerlaris = 0;
    let produkPenulisTerlaris = 0;

    const rupiah = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    });

    for (let index = 0; index < dataPenjualan.length; index++){
        //mencari total modal
        totalModal += dataPenjualan[index].hargaBeli * (dataPenjualan[index].totalTerjual + dataPenjualan[index].sisaStok);
   
        //mencari total keuntungan
        totalKeuntungan += (dataPenjualan[index].hargaJual * dataPenjualan[index].totalTerjual) - dataPenjualan[index].hargaBeli;
    
        //mencari persentase keuntungan
        persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

        //filter data terlaris
        terlaris = Math.max.apply(Math, dataPenjualan.map(function (dataPenjualan) {
                return dataPenjualan.totalTerjual;
            })
        );

        filterTerlaris = dataPenjualan.filter((dataPenjualan) => {
            return dataPenjualan.totalTerjual == terlaris;
        });

        //mencari data buku yang terlaris
        bukuTerlaris = filterTerlaris.map(function (dataPenjualan) {
            return dataPenjualan.namaProduk;
        });
        produkBukuTerlaris = bukuTerlaris[0];

        //mencari judul buku yang terlaris
        bukuTerlaris = filterTerlaris.map(function (dataPenjualan) {
            return dataPenjualan.namaProduk;
        });
        produkBukuTerlaris = bukuTerlaris[0];

        //mencari nama penulis yang terlaris
        penulisTerlaris = filterTerlaris.map(function (dataPenjualan) {
            return dataPenjualan.penulis;
        });
        produkPenulisTerlaris = penulisTerlaris[0];

    }
    return (infoPenjualan = {
        totalKeuntungan: rupiah.format(totalKeuntungan),
        totalModal: rupiah.format(totalModal),
        persentaseKeuntungan: persentaseKeuntungan+ "%",
        produkBukuTerlaris: produkBukuTerlaris,
        penulisTerlaris: produkPenulisTerlaris,
    });
}

console.log(getInfoPenjualan(dataPenjualanNovel));
