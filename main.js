const inputValue = document.getElementById("input");
const btn = document.getElementById("btn");
const quantity = document.getElementById("quantity");
const quantity1 = document.getElementById("quantity1");
const quantity0 = document.getElementById("quantity0");
const variants = document.querySelector(".acc_ul");
const variants1 = document.querySelector(".acc_ul1");
const variants0 = document.querySelector(".acc_ul0");




let array = $.getJSON({ 'url': "https://gist.githubusercontent.com/MYcODEzzz/0d455f7eb583377884ab100842feefab/raw/d9b34a642badc784fae164a3f1b57569efd88ca6/dictionary.json", 'async': false });

array = JSON.parse(array.responseText);



function findElement() {
    var start = new Date().getTime();

    variants.innerHTML = '';
    variants1.innerHTML = '';
    variants0.innerHTML = '';
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
    // console.log(ans);

    // --------------------------------------
    let d = [];

    for (let i = 0; i < ans.length; i++) {
        const cList1 = document.createElement("li");
        cList1.textContent = ans[i];
        variants1.appendChild(cList1);

        for (let j = 0; j < array.length; j++) {
            if (ans[i] == array[j] && ans[i].length > 2) {
                d.push(array[j]);
                // console.log("found: " + ans[i] + " == " + array[j])
                break;
            }
        }
    }

    // console.log("--------------------");
    // console.log(d);
    // console.log("--------------------");


    for (let o = 0; o < d.length; o++) {
        const list = document.createElement("li");
        list.textContent = d[o];
        variants0.appendChild(list);
    }

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
    // console.log(res);
    for (let l = 0; l < res.length; l++) {
        const cList = document.createElement("li");
        cList.textContent = res[l];
        variants.appendChild(cList);
    }

    qNumber = res.length;
    quantity.textContent = qNumber;

    qNumber1 = ans.length;
    quantity1.textContent = qNumber1;

    qNumber0 = d.length;
    quantity0.textContent = qNumber0;

    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
}


btn.addEventListener("click", findElement);


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

$(function () {
    $('.acc__title0').click(function (j) {
        const pannel0 = document.querySelector(".acc__panel0");
        const accTitle0 = document.querySelector(".acc__title0");
        pannel0.classList.add("extra0");
        accTitle0.classList.toggle("title-acc0");

        var dropDown0 = $(this).closest('.acc__card0').find('.acc__panel0');
        $(this).closest('.acc').find('.acc__panel1').not(dropDown0).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.acc').find('.acc__title0.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown0.stop(false, true).slideToggle();
        j.preventDefault();
    });
});