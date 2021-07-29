let result ='';
function oddLetter(name){
  for(let i = 0; i < name.length; i++){
    if(i % 2 != 0){
      result += name[i];
    }
  }
  return result
}

let nama = 'Kurniawan';

console.log(oddLetter(nama));



•	Buatlah sebuah fungsi yang dapat mengembalikan ( return ) jumlah kata yang ada di dalam kalimat,
•	fungsi ini hanya dapat menerima argument tipe data string, dan mengembalikan tipe data number
contoh test case
•	"pratama" -> return 1
•	"hellohello" -> return 1
•	"hello hello hello" -> return 3
•	"" -> return 0

let spaces = 0
function summation(text){
    for(i = 0; i < text.length; i++){
        if(text[i] == ' '){
            spaces = spaces + 1 // counting number of spaces
        }

    } 
    return spaces + 1 //the number of words
}

0465224202 Cherif Ousmane Utsman Syarif Sheriff Shareef 