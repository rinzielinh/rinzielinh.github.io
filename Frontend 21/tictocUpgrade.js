let wincase = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
]


// sắp xếp thoe thứ tự tăng dần -> bên nào sắp xếp được 1 trong những kết quả trong mảng thì thắng
let turn = "X"
let arrX = []
let arrO = []
let gameOver = false
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8]

$('.item').click(function() {
    if (gameOver) {
        return
    }

    if (turn === 'X') {
        let value = this.dataset.value
            // check xem trong arrX co gia tri do hay chua
        let check_exist = arrO.indexOf(value)
        if (check_exist !== -1 && arrO.length) {
            return
        }
        $(this).text(turn)
        turn = 'O'

        // lấy value để push vào arrX
        arrX.push(value)

        if (arrX.length >= 3) {
            console.log('arrX :>> ', arrX);
            let checker = (arr, target) => target.every(v => arr.includes(v));
            for (var i = 0; i < wincase.length; i++) {
                if (checker(arrX, wincase[i])) {
                    setTimeout(() => {
                        alert('You won!')
                        return
                    }, 1000);
                    gameOver = true
                    return
                }
            }
        }
        let index = values.indexOf(Number(value))
        values.splice(index, 1)
        let index_random = Math.floor(Math.random() * (values.length - 1))
        setTimeout(() => {
            $(".item")[values[index_random]].click();
        }, 1000);


    } else {
        let value = this.dataset.value
            // check xem trong arrX co gia tri do hay chua
        let check_exist = arrX.indexOf(value)
        if (check_exist !== -1 && arrX.length) {
            return
        }
        // lấy value để push vào arrO
        $(this).text(turn)
        turn = "X"
        arrO.push(value)
        if (arrO.length >= 3) {
            console.log('arrO :>> ', arrO);
            let checker = (arr, target) => target.every(v => arr.includes(v));
            for (var i = 0; i < wincase.length; i++) {
                if (checker(arrO, wincase[i])) {
                    setTimeout(() => {
                        alert('Computer won!')
                        return
                    }, 1000);
                    gameOver = true
                    return
                }
            }
        }
        let index = values.indexOf(Number(value))
        values.splice(index, 1)

    }
    if (((arrX.length === 5 && arrO.length === 4) || (arrX.length === 4 && arrO.length === 5)) && !gameOver) {
        setTimeout(() => {
            alert("It's a draw")
        }, 1000);

    }

})

const replay = $('#btn-restart')
replay.click(() => {
    window.location.reload();
})

// trigger jQuery & Java Script
// Math.random