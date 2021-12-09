// //include the   'async':false   parameter or the object data won't get captured when loading
// // var json = $.getJSON({ 'url': "https://raw.githubusercontent.com/svetlitskiy/wordlist-russian/master/russian-words.json", 'async': false });
// // var json = $.getJSON({ 'url': "https://gist.githubusercontent.com/MYcODEzzz/b170c28dcda651e320900fb8dbcfda38/raw/01eb9694ae23cf7b03a54fc7fc2df5a6ac86f452/data.json", 'async': false });
// // var json = $.getJSON({ 'url': "https://gist.githubusercontent.com/MYcODEzzz/c6bae251bfb1e8997ffbd71be2af5152/raw/2bb76cc0180304cb2bad874a14bb3103c6005fe7/dat.json", 'async': false });
// // var json = $.getJSON({ 'url': "https://gist.githubusercontent.com/MYcODEzzz/c6bae251bfb1e8997ffbd71be2af5152/raw/74652420a1854e41c503967b00470db4aa98f956/dat.json", 'async': false });
// var json = $.getJSON({ 'url': "https://gist.githubusercontent.com/MYcODEzzz/0d455f7eb583377884ab100842feefab/raw/d9b34a642badc784fae164a3f1b57569efd88ca6/dictionary.json", 'async': false });

// //The next line of code will filter out all the unwanted data from the object.
// json = JSON.parse(json.responseText);

// //You can now access the json variable's object data like this json.a and json.c
// // document.write(json.a);
// // console.log(json.length);
// // console.log(json);

// // console.log(typeof (json))
// //-------------------------------------------------------------------------------------------------------------------------------------------
let json = [];
const inputValue = document.getElementById("input");
const btn = document.getElementById("btn");
const quantity = document.getElementById("quantity");
const quantity1 = document.getElementById("quantity1");
const content = document.querySelector(".content");
const variants = document.querySelector(".acc_ul");
const variants1 = document.querySelector(".acc_ul1");




btn.addEventListener("click", findElement);


function findElement() {
    content.innerHTML = '';
    variants.innerHTML = '';
    variants1.innerHTML = '';
    let word = inputValue.value.toLowerCase();

    // -----------------------------
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        arr.push(word[i]);
    }

    const permutations = (len, val, existing) => {
        if (len == 0) {
            ans.push(val);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            Object(1).operation;
            if (!existing[i]) {
                existing[i] = true;
                permutations(len - 1, val + arr[i], existing);
                existing[i] = false;
            }
        }
    }
    let ans = [];
    const buildPermuations = (arr = []) => {
        for (let i = 0; i < arr.length; i++) {
            permutations(arr.length - i, "", []);
        }
    };
    buildPermuations(arr);
    console.log(ans);

    for (let l = 0; l < ans.length; l++) {
        const cList1 = document.createElement("li");
        cList1.textContent = ans[l];
        variants1.appendChild(cList1);
    }

    // -----------------------------

    let findPermutations = (string) => {
        if (!string || typeof string !== "string") {
            return ""
        } else if (string.length < 2) {
            return string
        }

        let permutationsArray = []

        for (let i = 0; i < string.length; i++) {
            let char = string[i]

            if (string.indexOf(char) != i) {
                continue
            }

            let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);

            for (let permutation of findPermutations(remainingChars)) {
                permutationsArray.push(char + permutation);
            }
        }
        return permutationsArray;
    }

    let res = findPermutations(word);
    console.log(res);
    for (let l = 0; l < res.length; l++) {
        const cList = document.createElement("li");
        cList.textContent = res[l];
        variants.appendChild(cList);
    }

    qNumber = res.length;
    quantity.textContent = qNumber;

    qNumber1 = ans.length;
    quantity1.textContent = qNumber1;

    // console.log(json.length + " is a length of json database!")

    // for (let stage in res) {
    //     console.log(res[stage]);

    //     for (let o = 0; o < json.length; o++) {
    //         let low = json[o].toLowerCase();
    //         if (res[stage] === low) {
    //             console.log("Yess found! " + low + " === " + res[stage]);
    //             const list = document.createElement("li");
    //             list.textContent = res[stage];
    //             content.appendChild(list);
    //             break;
    //         }
    //         else {
    //             console.log("searching for " + res[stage] + " ...");
    //         }
    //     }
    // }

}


$(function () {
    $('.acc__title').click(function (j) {
        const pannel = document.querySelector(".acc__panel");
        const accTitle = document.querySelector(".acc__title");
        pannel.classList.add("extra");
        accTitle.classList.toggle("title-acc");

        var dropDown = $(this).closest('.acc__card').find('.acc__panel');
        $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc__title.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });
});

$(function () {
    $('.acc__title1').click(function (j) {
        const pannel1 = document.querySelector(".acc__panel1");
        const accTitle1 = document.querySelector(".acc__title1");
        pannel1.classList.add("extra1");
        accTitle1.classList.toggle("title-acc1");

        var dropDown1 = $(this).closest('.acc__card1').find('.acc__panel1');
        $(this).closest('.acc').find('.acc__panel1').not(dropDown1).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc__title1.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown1.stop(false, true).slideToggle();
        j.preventDefault();
    });
});


// https://levelup.gitconnected.com/find-all-permutations-of-a-string-in-javascript-af41bfe072d2