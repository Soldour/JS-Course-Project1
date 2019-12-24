let fs = require('fs')


function bubblSortAlg(dizi, n) {
    n = dizi.length;
    for (i = 0; i <= n; i++) {
        for (j = n; j > i; j--) {
            //console.log('i =',i, ' ,j= ',j)
            if (dizi[j] < dizi[j - 1]) { 

                tmp = dizi[j - 1];
                dizi[j - 1] = dizi[j];
                dizi[j] = tmp;

            }
        }
    }
    console.log(dizi)

}

module.exports = {
    bubblSortAlg
}



