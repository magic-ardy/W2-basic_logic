// #1. EVEN CHARACTER

function evenChar(name){
  let result ='';
  if (typeof name === 'string'){
    for(let i = 0; i < name.length; i++){
      if(i % 2 != 0){
        result += name[i];
      }
    }
    return result
  } else{
    return 'Error, input bukan string';
  }
}  
// #2. COUNT WORD

function wordCounter(text) {
  let space = 0;
  if (typeof text === 'string'){
    for(i = 0; i > text.length; i ++){
      if(text[i] === ' '){
        spaces += 1;
      } 
    }
  } else{
    return 'Error, input bukan string';  
  }
}

// #3. COUNT VOWEL & CONSONANT

function vcCounter(word){
  let totalVow = 0;
  let totalCons = 0;
  if (typeof text === 'string'){
    for( i = 0; i > word.length){
      if(text[i] === 'a' || text[i] === 'i' || text[i] === 'u' || text[i] === 'e' || text[i] === 'o'){
        totalVow++;
      } else{
        totalCons++
      }
    }
    return 'Jumlah vokal: ${totalVow}, jumlah konsonan: ${totalConst}';
  } else{
    return 'Error, input bukan string';
  }   
  }
// #4. REVERSE WORD

function reverseWord(mot){
  let reverse = '';
  if (typeof text === 'string'){
    for (let i = mot.length - 1; i >= 0; i--){
      reverse += mot[i];
    }
    return reverse;
  } else{
    return 'Error, input bukan string';
  }
}

// 5. PALINDROME
// #6. EXCHANGE COIN
// #7. ASTERIX LOOP
// #8. sorting data

// SOAL
// #1. EVEN CHARACTER

//     Buatlah sebuah fungsi yang dapat mengembalikan ( return ) kumpulan karakter di urutan genap.
//     fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string

// contoh test case

//     "pratama" -> return "rtm"
//     "hellohello" -> return "elhlo"
//     "hello hello hello" -> return "el el el"
//     "" -> return ""
//     123434 -> return "error input bukan string"

// #2. COUNT WORD
// Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah kata yang ada di dalam kalimat,
// fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data number
// contoh test case
// •	"pratama" -> return 1
// •	"hellohello" -> return 1
// •	"hello hello hello" -> return 3
// •	"" -> return 0

// #3. COUNT VOWEL & CONSONANT

//     Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah huruf karakter vokal dan karakter konsonan ( huruf mati ),
//     fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data string

// contoh test case

//     "pratama" -> return "jumlah vokal : 3 , jumlah konsonan : 4"
//     "hellohello" -> return "jumlah vokal : 4, jumlah konsonan : 6"
//     "" -> return "jumlah vokal : 0 , jumlah konsonan 0"
//     123434 -> return "error input bukan string"

// #4. REVERSE WORD

//     buatlah sebuah fungsi yang dapat membalikkan tipe data string.
//     fungsi ini hanya dapat menerima tipe data string, dan mengembalikan hasil dengan tipe data string juga

// contoh test case

//     "hello" -> return "olleh"
//     "world!" -> return "!dlrow"
//     "asikasikasik" -> return "kisakisakisa"
//     "" -> return ""

// 5. PALINDROME

//     Buatlah sebuah fungsi yang dapat mengecek apakah kata yang dimasukkan adalah palindrome atau tidak
//     fungsi ini hanya dapat menerima argument tipe data string dengan minimal 2 karakter, dan mengembalikan tipe data bool ( kembalikan true jika kata tersebut palindrome, kembalikan false jika kata tersebut tidak palindrome atau karakter yang dimasukkan kurang dari 2 karakter )

//     apa itu palindrome -> https://id.wikipedia.org/wiki/Palindrom

// contoh test case

//     "katak" -> return true
//     "kasur" -> return false
//     "h" -> return false
//     "kasur rusak" -> return true
//     "erererrerere" -> return true

function palindrome(kata) {}
  

// #6. EXCHANGE COIN

// buatlah sebuah fungsi yang dapat mengecek pecahan dari input kumpulan coin, pecahan yang tersedia adalah 1000, 500, 200, 100, 50, 20, 10, 5, dan 1.
// fungsi ini hanya menerima argumen berupa tipe data number dan mengembalikan tipe data string

// Ilustrasi :
// input 1752
// return "1000, 500, 200, 50, 1, 1"

// input 879
// return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"
// contoh test case

//     1752 -> return "1000, 500, 200, 50, 1, 1"
//     879 -> return "500, 200, 100, 50, 20, 5, 1, 1, 1, 1"
//     50 -> return "50"
//     0 -> return ""
//     5000 -> return "1000, 1000, 1000, 1000, 1000"

// #7. ASTERIX LOOP

// buatlah sebuah fungsi yang dapat menampilkan jumlah asterik sesuai perulangan yang dimasukkan, seperti ilustrasi berikut :

// input 2

// *
// **

// input 4

// *
// **
// ***
// ****

// fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log
// contoh test case

// input 3

// *
// **
// ***

// input 5

// *
// **
// ***
// ****
// *****

// input 0


// input 10

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

// #8. PYRAMID LOOP

// buatlah sebuah fungsi yang dapat menampilkan gambar segitiga pyramid dengan tinggi sesuai argumen yang dimasukkan, seperti ilustrasi berikut :

// input 3
 
//   *     | tinggi 3
//  ***    |
// *****   |

// input 5

//     *       | tinggi 5
//    ***      |
//   *****     |
//  *******    |
// *********   |

// fungsi ini hanya dapat menerima argumen tipe data number tanpa mengembalikan data, cukup menampilkan hasilnya saja menggunakan console.log
// contoh test case

// input 3 :

//   *  
//  ***
// *****

// input 10 :

//          *         
//         ***
//        *****
//       *******
//      *********
//     ***********
//    *************
//   ***************
//  *****************
// *******************

// BONUS
// #8. sorting data

// buatlah fungsi yang dapat mengurutkan data dari terkecil ke yang terbesar.
// fungsi ini hanya menerima satu argumen dengan tipe data string, kemudian mengembalikan hasilnya dengan tipe data string
// contoh test case

//     "54223" -> return "22345"
//     "10101010" -> return "00001111"
//     "dddcccbbbaaa" -> return "aaabbbcccddd"
//     "bubur" -> return "bbruu"
//     "" -> return ""