let arr = [];
let RadioNum = -1;


function HideEverything(){
    document.getElementById("Add").style.display = "none";
    document.getElementById("EditNextStep").style.display = "none";
    document.getElementById("output").style.display = 'none';
    document.getElementById("delete").style.display = 'none';
    document.getElementById('edit').style.display = 'none';
    document.getElementById('search').style.display = 'none';
    document.getElementById('sort').style.display = 'none';
    document.getElementById('filtration').style.display = 'none';
}

function StatIn() {
    let str;
    str = 'Текущее количество записей: ' + arr.length;
    document.getElementById('StatIn').innerHTML = str;
}

function ShowAdd() {
    HideEverything();
    document.getElementById('name').value = 'Введите Имя';
    document.getElementById('num').value = 0;
    document.getElementById('date').value = '';
    document.getElementById('pay').selectedIndex = 0;
    document.getElementById('cost').value = 0;
    document.getElementById('number_room').value = 0;
    document.getElementById('room').selectedIndex = 0;
    document.getElementById('booking').selectedIndex = 0;
    document.getElementById("Add").style.display = "";
}


function CheckStrIn(name, typeP, roomT, book){
    return name !== 'Введите Имя' && name !== '' && typeP !== 'default' && roomT !== 'default' && book !== 'default' ? 1 : -1;
}

function CheckDateIn(date){
    return date !== '' ? 1 : -1;
}
function SubmitIn(a) {
    let obj={};
    switch (a) {
        case 1: {
            obj.num = document.getElementById('num').value;
            obj.date = document.getElementById('date').value;
            obj.name = document.getElementById('name').value;
            obj.typepay = document.getElementById('pay').value;
            obj.cost = document.getElementById("cost").value;
            obj.roomtype = document.getElementById("room").value;
            obj.roomnum = document.getElementById("number_room").value;
            obj.booking = document.getElementById("booking").value;
            break;
        }
        case 2:{
            obj.num = document.getElementById('numEdit').value;
            obj.date = document.getElementById('dateEdit').value;
            obj.name = document.getElementById('nameEdit').value;
            obj.typepay = document.getElementById('payEdit').value;
            obj.cost = document.getElementById("costEdit").value;
            obj.roomtype = document.getElementById("roomEdit").value;
            obj.roomnum = document.getElementById("number_roomEdit").value;
            obj.booking = document.getElementById("bookingEdit").value;
            break;
        }
    }
    let CheckStr = CheckStrIn(obj.name, obj.typepay, obj.roomtype, obj.booking);
    let CheckDate = CheckDateIn(obj.date);
    if ((CheckStr + CheckDate) === 2) {
        alert("Данные приняты!");
        document.getElementById("Add").style.display = "none";
        document.getElementById("EditNextStep").style.display = "none";
        if(a === 1) arr.push(obj);
        else arr.splice(RadioNum, 1, obj);
        StatIn();
    } else if ((CheckStr + CheckDate) !== 2) {
        alert('Не все данные заполнены!');
    }
}

function HideIn() {
    document.getElementById('Add').style.display = 'none';
}

function ShowOut(){
    HideEverything();
    if(arr.length === 0) return alert('Нет введенных данных!');
    document.getElementById("output").style.display = "";
    let str = '<table border="1">\n' +
        '      <tr>\n' +
        '      <th>№</th>' +
        '           <th>Номер в отеле</th>\n' +
        '           <th>Дата брони</th>\n' +
        '           <th>Фамилия, имя, отчество постояльца</th>\n' +
        '           <th>Способ оплаты</th>\n' +
        '           <th>Цена номера</th>\n' +
        '           <th>Тип номера</th>\n' +
        '           <th>Количество комнат</th>\n' +
        '           <th>Тип бронирования</th>\n' +
        '       </tr>\n';
    for (let i = 0; i < arr.length; i++) {
        str += '<tr>';
        str += '<td>' + (i + 1) +'</td>';
        str += '<td>' + arr[i].num + '</td>';
        str += '<td>' + arr[i].date + '</td>';
        str += '<td>' + arr[i].name + '</td>';
        str += '<td>' + arr[i].typepay + '</td>';
        str += '<td>' + arr[i].cost + '</td>';
        str += '<td>' + arr[i].roomtype + '</td>';
        str += '<td>' + arr[i].roomnum + '</td>';
        str += '<td>' + arr[i].booking + '</td>';
        str += '</tr>';
    }
    str +='</table>';
    document.getElementById("TableOutput").innerHTML = str;
}

function HideOut() {
    document.getElementById("output").style.display = 'none';
}

function ShowDelete() {
    HideEverything();
    if(arr.length === 0) return alert('Нет введенных данных!');
    let str = '<table border="1">\n' +
        '      <tr>\n' +
        '      <th>#</th>'+
        '      <th>№</th>' +
        '           <th>Номер в отеле</th>\n' +
        '           <th>Дата брони</th>\n' +
        '           <th>Фамилия, имя, отчество постояльца</th>\n' +
        '           <th>Способ оплаты</th>\n' +
        '           <th>Цена номера</th>\n' +
        '           <th>Тип номера</th>\n' +
        '           <th>Количество комнат</th>\n' +
        '           <th>Тип бронирования</th>\n' +
        '       </tr>\n';
    for(let i = 0; i < arr.length; i++){
        str += '<tr>';
        str += '<td>' + '<input type="checkbox" id="check' + i + '"></td>';
        str += '<td>' + (i + 1) +'</td>';
        str += '<td>' + arr[i].num + '</td>';
        str += '<td>' + arr[i].date + '</td>';
        str += '<td>' + arr[i].name + '</td>';
        str += '<td>' + arr[i].typepay + '</td>';
        str += '<td>' + arr[i].cost + '</td>';
        str += '<td>' + arr[i].roomtype + '</td>';
        str += '<td>' + arr[i].roomnum + '</td>';
        str += '<td>' + arr[i].booking + '</td>';
        str += '</tr>';
    }
    str += '</table>';
    document.getElementById('delete').style.display = '';
    document.getElementById("DeleteOutput").innerHTML = str;
}
function ConfirmDelete() {
    for(let i = arr.length - 1; i >= 0; i--) {
        let CheckBox = document.getElementById('check' + i);
        if (CheckBox.checked) {
            arr.splice(i, 1);
        }
    }
    document.getElementById("delete").style.display = 'none';
    StatIn();
}
function HideDelete() {
    document.getElementById("delete").style.display = 'none';
}
function ShowEdit(){
    HideEverything();
    if(arr.length === 0) return alert('Нет введенных данных!');
    let str = '<table border="1">\n' +
        '      <tr>\n' +
        '      <th>#</th>'+
        '      <th>№</th>' +
        '           <th>Номер в отеле</th>\n' +
        '           <th>Дата брони</th>\n' +
        '           <th>Фамилия, имя, отчество постояльца</th>\n' +
        '           <th>Способ оплаты</th>\n' +
        '           <th>Цена номера</th>\n' +
        '           <th>Тип номера</th>\n' +
        '           <th>Количество комнат</th>\n' +
        '           <th>Тип бронирования</th>\n' +
        '       </tr>\n';
    for(let i = 0; i < arr.length; i++){
        str += '<tr>';
        str += '<td>' + '<input type="radio" id="radio' + i + '"></td>';
        str += '<td>' + (i + 1) +'</td>';
        str += '<td>' + arr[i].num + '</td>';
        str += '<td>' + arr[i].date + '</td>';
        str += '<td>' + arr[i].name + '</td>';
        str += '<td>' + arr[i].typepay + '</td>';
        str += '<td>' + arr[i].cost + '</td>';
        str += '<td>' + arr[i].roomtype + '</td>';
        str += '<td>' + arr[i].roomnum + '</td>';
        str += '<td>' + arr[i].booking + '</td>';
        str += '</tr>';
    }
    str += '</table>';
    document.getElementById('edit').style.display = '';
    document.getElementById("EditOutput").innerHTML = str;
}
function EditNextStep() {
    for(let i = arr.length - 1; i >= 0; i--) {
        let RadioBox = document.getElementById('radio' + i);
        if (RadioBox.checked) {
            RadioNum = i;
        }
    }
    if(RadioNum === -1) return alert('Нет выбранного поля для редактирования!');
    document.getElementById('edit').style.display = 'none';
    document.getElementById('EditNextStep').style.display = '';
    let str = '<table border="1">\n' +
        '      <tr>\n' +
        '      <th>№</th>' +
        '           <th>Номер в отеле</th>\n' +
        '           <th>Дата брони</th>\n' +
        '           <th>Фамилия, имя, отчество постояльца</th>\n' +
        '           <th>Способ оплаты</th>\n' +
        '           <th>Цена номера</th>\n' +
        '           <th>Тип номера</th>\n' +
        '           <th>Количество комнат</th>\n' +
        '           <th>Тип бронирования</th>\n' +
        '       </tr>\n';
        str += '<tr>';
        str += '<td>' + (RadioNum + 1) +'</td>';
        str += '<td> <input type="number" min="1" max="500"  value="' +  arr[RadioNum].num + '" id="numEdit"></td>';
        str += '<td> <input type="date" value="' + arr[RadioNum].date + '" id="dateEdit"></td>';
        str += '<td><input type="text" size="30" id="nameEdit" value="' + arr[RadioNum].name + '"> </td>';
        str += '<td> <select name="type pay" size="1" id="payEdit" value="' + arr[RadioNum].typepay + '">'+
            '            <option value="Карта">Карта</option>\n' +
            '            <option value="Наличные">Наличные</option>\n' +
            '            <option value="GooglePay">GooglePay</option>\n' +
            '            <option value="ApplePay">ApplePay</option>\n' +
            '            <option value="SPay">SPay</option>'+
            '</select> </td>';
        str += '<td><input type="number" min="1" max="1000" value="' + arr[RadioNum].cost + '" id="costEdit"> </td>';
        str += '<td><select name="room type" size="1" id="roomEdit" value="' + arr[RadioNum].roomtype + '">'+
            '            <option value="Эконом">Эконом</option>' +
            '            <option value="Президент">Президент</option>' +
            '            <option value="Люкс">Люкс</option>\n' +
            '            <option value="De lux">De lux</option>\n' +
            '            <option value="Двухуровневый номер">Двухуровневый номер</option>'+
            '</select></td>';
        str += '<td><input type="number" min="1" max="3" value="' + arr[RadioNum].roomnum + '" id="number_roomEdit"></td>';
        str += '<td><select name="booking type" size="1" id="bookingEdit" value="' + arr[RadioNum].booking + '">'+
            '            <option value="Предоплата">Предоплата</option>\n' +
            '            <option value="Выставление счёта">Выставление счёта</option>\n' +
            '            <option value="Под гарантию кредитных карт">Под гарантию кредитных карт</option>\n' +
            '            <option value="За счёт компании">За счёт компании</option>\n' +
            '            <option value="Ваучер">Ваучером</option>'+
            '</select></td>';
        str += '</tr>';
    str +='</table>';
    document.getElementById("EditNextStepTable").innerHTML = str;
}
function HideEdit() {
    document.getElementById('edit').style.display = 'none';
    document.getElementById('EditNextStep').style.display = 'none';
}

function Notification() {
    let popup = document.getElementById('Notification'),
        popuptoggle = document.getElementById('btn');
    popup.style.display = 'block';
    popuptoggle.onclick = function(){
        return popup.style.display = 'none';
    };
    window.onclick = function(event){
        if(event.target == popup){
            return popup.style.display = 'none';
        }
    };
    setTimeout(function () {
        popup.style.display = 'none';
    }, 10000);
}

function Search() {
    HideEverything();
    if (arr.length === 0) return Notification();
    document.getElementById('SearchResult').style.display = 'none';
    document.getElementById('search').style.display = '';
    let SearchStr = document.getElementById('SearchName').value;
    let Matches = -1;
    let SearchResult = '<table border="1">\n' +
        '      <tr>\n' +
        '      <th>№</th>' +
        '           <th>Номер в отеле</th>\n' +
        '           <th>Дата брони</th>\n' +
        '           <th>Фамилия, имя, отчество постояльца</th>\n' +
        '           <th>Способ оплаты</th>\n' +
        '           <th>Цена номера</th>\n' +
        '           <th>Тип номера</th>\n' +
        '           <th>Количество комнат</th>\n' +
        '           <th>Тип бронирования</th>\n' +
        '       </tr>\n';
    for (let i = 0; i < arr.length; i++) {
        if (SearchStr === arr[i].name) {
            SearchResult += '<td>' + (i + 1) + '</td>';
            SearchResult += '<td>' + arr[i].num + '</td>';
            SearchResult += '<td>' + arr[i].date + '</td>';
            SearchResult += '<td>' + arr[i].name + '</td>';
            SearchResult += '<td>' + arr[i].typepay + '</td>';
            SearchResult += '<td>' + arr[i].cost + '</td>';
            SearchResult += '<td>' + arr[i].roomtype + '</td>';
            SearchResult += '<td>' + arr[i].roomnum + '</td>';
            SearchResult += '<td>' + arr[i].booking + '</td>';
            SearchResult += '</tr>';
            Matches++;
        }
    }
    SearchResult += '</table>';
    document.getElementById('SearchResult').style.display = '';
    if (Matches > -1) {
        document.getElementById('SearchResult').innerHTML = SearchResult;
        return alert('Найдено совпадений: ' + (Matches + 1));
    }else{
        SearchResult = 'Ничего не найдено!';
        document.getElementById('SearchResult').innerHTML = SearchResult;
    }
}
function HideSearch() {
    document.getElementById('search').style.display = 'none';
    let inputs = document.getElementById('SearchName');
    inputs.value = 'Введите имя';
}
function Sort() {
    HideEverything();
    if (arr.length === 0) return alert('Нет введенных данных!');
    ShowOut();
    document.getElementById('sort').style.display = '';
}
function ConfirmSort() {
    let SortConfig = document.getElementById('SortConfig');
    let Pos = SortConfig.selectedIndex;
    if(Pos === 0) return alert('Не выбран метод сортировки');
    if(Pos === 1) arr.sort(SortProcess);
    if(Pos === 2) arr.sort(SortProcess).reverse();
    ShowOut();
}
function SortProcess(a, b) {
    if(a.num > b.num){
        return 1;
    }
    if(a.num < b.num){
        return -1;
    }
}
function HideSort() {
    document.getElementById('sort').style.display = 'none';
    document.getElementById('output').style.display = 'none';
}
function Filtration() {
    HideEverything();
    if (arr.length === 0) return alert('Нет введенных данных!');
    document.getElementById('filtration').style.display = '';
}
function FiltrationProgress() {
    let FiltrationValue = document.getElementById('FiltrationValue').value;
    let Matches = -1;
    let str = '<table border="1">\n' +
        '      <tr>\n' +
        '      <th>№</th>' +
        '           <th>Номер в отеле</th>\n' +
        '           <th>Дата брони</th>\n' +
        '           <th>Фамилия, имя, отчество постояльца</th>\n' +
        '           <th>Способ оплаты</th>\n' +
        '           <th>Цена номера</th>\n' +
        '           <th>Тип номера</th>\n' +
        '           <th>Количество комнат</th>\n' +
        '           <th>Тип бронирования</th>\n' +
        '       </tr>\n';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name.indexOf(FiltrationValue) !== -1){
            str += '<tr>';
            str += '<td>' + (i + 1) +'</td>';
            str += '<td>' + arr[i].num + '</td>';
            str += '<td>' + arr[i].date + '</td>';
            str += '<td>' + arr[i].name + '</td>';
            str += '<td>' + arr[i].typepay + '</td>';
            str += '<td>' + arr[i].cost + '</td>';
            str += '<td>' + arr[i].roomtype + '</td>';
            str += '<td>' + arr[i].roomnum + '</td>';
            str += '<td>' + arr[i].booking + '</td>';
            str += '</tr>';
            Matches++;
        }
    }
    str += '</table>';
    if(Matches > -1){
        document.getElementById('FiltrationOut').style.display = '';
        document.getElementById('FiltrationOut').innerHTML = str;
        return alert('Совпадений найдено: ' +(Matches + 1));
    }else{
        return alert('Совпадений не найдено');
    }
}
function HideFiltration() {
    document.getElementById('filtration').style.display = 'none';
    document.getElementById('FiltrationValue').value = 'Поле для ввода маски';
}