const arr = [{
        id: 1,
        src: "./the fame game/1.jpg",
        // src: 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Ahri_0.jpg',
    },
    {
        id: 2,
        src: "./the fame game/2.jpeg",
        // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Aatrox_0.jpg',
    },
    {
        id: 3,
        src: "./the fame game/3.jpeg"
            // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Ashe_0.jpg',
    },
    {
        id: 4,
        src: "./the fame game/4.jpeg"
            // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/AurelionSol_0.jpg',
    },
    {
        id: 5,
        src: "./the fame game/5.jpeg"
            // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Amumu_0.jpg',
    },
    {
        id: 6,
        src: "./the fame game/6.jpeg"
            // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Annie_0.jpg',
    },
    {
        id: 7,
        src: "./the fame game/7.jpeg"
            // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Brand_0.jpg',
    },
    {
        id: 8,
        src: "./the fame game/8.jpeg"
            // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Corki_0.jpg',
    },
    {
        id: 9,
        src: "./the fame game/9.jpeg"
            // 'https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Draven_0.jpg',
    },
]

// nhan doi arr len 
// trước khi append thì phải xáo trộn các ảnh trong mảng
const arrImage = arr.concat(arr)

const shuffle = (array) => {
    var currentIndex = array.length,
        randomIndex;
    // while there remain elements to shuffle...
    while (0 !== currentIndex) {
        // pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];

    }
    return array;
}

const myArrImage = shuffle(arrImage);

// goi ra dom cha
let myGameDom = $('#my-game')



// chay vong lap va append vao dom cha
arrImage.forEach((item, index) => {
    myGameDom.append(`
        <div class="flip-card" >
        <div class="flip-card-inner" data-name="${item.id}">
            <div class="flip-card-front">
            <img src="./the fame game/mlem-mlem.jpeg"  >
            </div>
            

        <div class="flip-card-back" >
            <div class="flip-card-second">
            <img src="${item.src}">
            
                </div>

            </div>
        </div>
        </div>
    `)

})
var run = setInterval(function() {
    remainingTime--;
    console.log(remainingTime);

    if (remainingTime === 0) {
        clearInterval(run);
        alert("You lost.")
    }
}, 1000);

var remainingTime = 30;
var current = null;
var count = 0;

// const addClassFlip = (card) => {
//     $('.flip-card-inner').click(function() {
//         $(this).addClass('flip-card-event');
//     });

//     if (!current) {
//         current = $(card);
//         console.log(current);
//         console.log('$(card) :>> ', $(card));
//     } else {
//         if (current.attr('data-name') != $(card).attr('data-name')) {
//             console.log('Khac nhau');
//         } else {
//             console.log('Giong nhau ')
//         }
//     }
// }

function addClassFlip() {
    $('.flip-card-inner').click(function() {
        $(this).toggleClass('flip-card-event');

        if (!current) {
            current = $(this);


        } else {
            if (current.attr('data-name') != $(this).attr('data-name')) {
                let that = $(this);
                setTimeout(function() {
                    that.toggleClass('flip-card-event');
                    current.toggleClass('flip-card-event');
                    current = null;
                }, 500);
                console.log('Khac nhau');

            } else {
                setTimeout(() => {
                    $(this).css('opacity', '0');
                    current.css('opacity', '0');
                    current = null;
                    count++;

                    if (count === 9) alert("You won!!!")
                }, 200);
                console.log('Giong nhau ');

            }
        }
    });
}
addClassFlip()


// function replay() {
//     window.location.reload();
// }
const replay = $('#btn')
replay.click(() => {
    window.location.reload();
})