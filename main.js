let title =document.querySelector('.title');
let turn ='x';
let  squares=[];
function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winnner(); // استدعاء دالة التحقق من الفائز
}
function winnner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
        end(1, 2, 3);
    } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '') {
        end(4, 5, 6);
    } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '') {
        end(7, 8, 9);
    }
    else if (squares[1] != '' && squares[2] != '' && squares[3] != '' && 
             squares[4] != '' && squares[5] != '' && squares[6] != '' && 
             squares[7] != '' && squares[8] != '' && squares[9] != '') {
        title.innerHTML = 'Draw! Restarting...';
        setTimeout(function() { location.reload() }, 2000);
    }
    // وتستمر باقي الشروط للأعمدة والأقطار بنفس النمط
}
function end(num1, num2, num3) {
    title.innerHTML = `${squares[1]} winner`; // يتم تعديل الرقم بناءً على الفائز
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    setInterval(function() { title.innerHTML += '.' }, 1000);
    setTimeout(function() { location.reload() }, 4000);
}
