const arr = [{
        id: 1,
        src: "./the fame game/1.jpg",

    },
    {
        id: 2,
        src: "./the fame game/2.jpeg",

    },
    {
        id: 3,
        src: "./the fame game/3.jpeg"

    },
    {
        id: 4,
        src: "./the fame game/4.jpeg"

    },
    {
        id: 5,
        src: "./the fame game/5.jpeg"

    },
    {
        id: 6,
        src: "./the fame game/6.jpeg"

    },
    {
        id: 7,
        src: "./the fame game/7.jpeg"

    },
    {
        id: 8,
        src: "./the fame game/8.jpeg"

    },
    {
        id: 9,
        src: "./the fame game/9.jpeg"

    },
]

let ids = []
let timer = 60
let isStart = false
let counterCard = 0
let counterTime
let clicknum = 0

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

myArrImage.forEach((item, index) => {
    myGameDom.append(`
        <div class="flip-card">
        <div class="flip-card-inner" data-id="${item.id}">
            <div class="flip-card-front">
            <img src="./the fame game/mlem-mlem.jpeg"  >
            </div>
            

        <div class="flip-card-back">
            <div class="flip-card-second">
            <img src="${item.src}">
            
                </div>

            </div>
        </div>
        </div>
    `)

})

const onClickCard = () => {

    // lat card len
    $('.flip-card-inner').click(function() {
        if (!isStart) {
            return
        }
        // check neu dang mo 2 card thi dung lai
        if (ids.length === 2) {
            return
        }
        // check neu click voi chinh no -> stop
        if (this.classList['value'].indexOf('flip-card-event') !== -1) {
            return
        }


        $(this).addClass('flip-card-event')
            // lay ra id cua card\\
        let id = this.dataset.id

        if (!ids.length) {
            // click dau tien
            ids.push({
                id: id,
                domHtml: this
            })
            clicknum++;
            $('#clicks').text('')
            $('#clicks').append(clicknum)
            console.log('clicknum :>> ', clicknum);
        } else {
            ids.push({
                id: id,
                domHtml: this
            })
            clicknum++;
            $('#clicks').text('')
            $('#clicks').append(clicknum)
            console.log('clicknum :>> ', clicknum);
            // click anh thu 2
            if (id === ids[0].id) {
                // 2 anh giong nhau  -> an chung di
                setTimeout(() => {
                    $(this).hide()
                    $(ids[0].domHtml).hide()
                    ids = []
                    counterCard++
                    if (counterCard === arr.length) {
                        isStart = false
                        timer = 60
                        clearInterval(counterTime)
                        alert('you win!!!')
                    }
                }, 1000);
            } else {
                // up 2 anh do lai
                setTimeout(() => {
                    $(this).removeClass('flip-card-event')
                    $(ids[0].domHtml).removeClass('flip-card-event')
                    ids = []
                }, 500);
            }
        }
    })
}

onClickCard()

const replay = $('#btn')
replay.click(() => {
    window.location.reload();
})

$('#play-game').click(() => {
    isStart = true

    // dong thoi chay thoi gian o day
    $('#timer').append(timer)
    counterTime = setInterval(() => {
        timer--
        $('#timer').text(timer)

        if (!timer) {
            isStart = false
            timer = 60
            clearInterval(counterTime)
            alert('you lose')
        }
    }, 1000);
})