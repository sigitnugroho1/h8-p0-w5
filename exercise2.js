// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. 
// Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]


function naikAngkot(arrPenumpang) {
    var result = []
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    // i untuk loop arrPenumpang
    // j untuk loop rute
    for (var i = 0; i < arrPenumpang.length; i++) {
        var count = 0
        var check = false

        var penumpang = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }

        for (var j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]) {
                var check = true
            } else if (arrPenumpang[i][2] === rute[j]) {
                penumpang.bayar = count * 2000
            }

            if (check === true) {
                count += 1
            }
        }
        result.push(penumpang)
    }
    return result
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]

//tambahan
console.log(naikAngkot([
    ['Bagong', 'A', 'F'],
    ['Mineta', 'A', 'B'],
    ['Alex', 'C', 'F']
]));