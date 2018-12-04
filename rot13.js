s = "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT";

const word = document.querySelector('#word');
const output = document.querySelector('#output');
const output_rot13 = document.querySelector('#output-rot13');

word.addEventListener('input', (e) => {
    let input = word.value.toUpperCase();
    output_rot13.innerHTML = rot13(input);
});

function rot13 (s) {
    const A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const len = A.length;
    let rot13 = [];

    let s_split = s.split(' ');
    
    s_split.forEach((word) => {
        rot13_word = "";
        for (let letter of word) {
            let index = A.indexOf(letter);
            let new_index = index + 13;
    
            if (new_index >= len) {
                new_index = new_index - len;

                if (new_index === 0) {
                    new_index = 0;
                }
            }
    
            rot13_word += A[new_index];
        }
    
        rot13.push(rot13_word);
    });

    s = rot13.join(' ');

    return s;
}