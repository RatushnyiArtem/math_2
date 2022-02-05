// let a = Math.sqrt(4)
// alert(a)
//  SWITCH-CASE
// if else
// let lang = prompt('На каком языке ты хочешь просматривать контент?')
// if (lang == 'русский'){
//     alert('Вы выбрали язык "Русский", добро пожаловать')
// } else if (lang == 'английский'){
//     alert('You choose language "England" welcome')
// }  else if (lang == 'французский'){
//     alert('Vous choisissez la langue "France" bienvenue')
// } else{
//     alert('Такого языка я не знаю :(')
// }


// switch case
// let lang = prompt('На каком языке ты хочешь просматривать контент?')

// switch (переменная) {
//     case значение1: 
//         инструкция1
//         break;
//     case значение2:
//         инструкция2
//         break;
//     case значение3:
//         инструкция3
//         break;
//     default:
//         инструкция
//         break;
// }



// let selector = document.getElementById('select_1')
// let option = document.getElementById('paragraph')
// selector.addEventListener('change',function(){
//     let a = selector.value
//     if(a == 'one_home'){
//         option.innerHTML = 'Home alone'
//     } else if(a == 'spiderman'){
//         option.innerHTML = `<div class="box">
//                             <img src="./img/uydoe5MFXvLyRb6cB3eLUYtAgYbOQyxHvGGhJooD.jpg" alt="">
//                             <h1>Spider Man</h1>
//                             </div>`
//     } else if(a == 'venom'){
//         option.innerHTML = 'Tom Hardy is main actor of Venom'
//         option.style.color = 'red'
//     } else{
//         option.innerHTML = ''
//     }
// })


// CASE 1
// let a = +prompt('Введите целое число в диапазоне от 1 - 7')
// switch(a){
//     case 1:
//         alert('Понедельник')
//         break;
//     case 2:
//         alert('Вторник')
//         break;
//     case 3:
//         alert('Среда')
//         break;
//     case 4:
//         alert('Четверг')
//         break;
//     case 5:
//         alert('Пятница')
//         break;
//     case 6:
//         alert('Суббота')
//         break;
//     case 7:
//         alert('Воскресенье')
//         break;
//     default:
//         alert('Я же просил от 1-7, не прикалывайся')
//         break;
        
// }

// CASE 2
// let a = +prompt('Напиши свою оценку по 5-ти бальной системе')
// switch(a) {
//     case 1:
//         alert('Плохо')
//         break;
//     case 2:
//         alert('Неудовлетворительно')
//         break;
//     case 3:
//         alert('Удовлетворительно')
//         break;
//     case 4:
//         alert('Хорошо')
//         break;
//     case 5:
//         alert('Отлично')
//         break;
//     default:
//         alert('Ошибка :(')
//         break;
// }
// CASE 3
// let a = +prompt('Введите номер месяца, а я выведу тебе этот месяц')
// switch(a) {
//     case 1:
//     case 2:
//     case 12:
//         alert('Зима, ох, а холодно то как!')
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Весна, всё цветет и пахнет')
//         break;
//     case 6:
//     case 7:
//     case 8: 
//         alert('Лето, урааа!')
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Осень, нееет, снова в школу')
//         break;
//     default:
//         alert('Ошибка :(')
//         break;

// }
// CASE 4
// let a = +prompt('Введите номер месяца, а я выведу тебе количество дней')
// switch (a) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         alert("В этом месяце по 31 день");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         alert("В этом месяце по 30 дней");
//         break;
//     case 2:
//         alert("Прикольно, а тут у нас уже 28 дней.");
//         break;
//     default:
//         alert('Ошибка :(')
//         break;
// }
// CASE 5
// let a = +prompt('Введите первое число')
// let b = +prompt('Введите второе число, которое не равно 0')
// let n = +prompt('Введите действие 1--> сложение, 2--> вычитание, 3--> умножение, 4--> деление')
// switch(n){
//     case 1:
//         alert(a+b)
//         break;
//     case 2:
//         alert(a-b)
//         break;
//     case 3:
//         alert(a*b)
//         break;
//     case 4:
//         alert(a/b)
//         break;
//     default:
//         alert('Ошибка :(')
//         break;
// }
// CASE 6
// let a = +prompt('Введите единицу длины 1--> децеметр, 2--> километр, 3--> метр, 4--> миллиметр, 5--> сантиметр')
// let b = +prompt('Введите число')
// switch(a) {
//     case 1:
//         alert(b/10)
//         break;
//     case 2:
//         alert(b*1000)
//         break;
//     case 3:
//         alert(b)
//         break;
//     case 4:
//         alert(b/1000)
//         break
//     case 5:
//         alert(b/100)
//         break
//     default:
//         alert('Ошибка :(')
//         break
// }

// CASE 7
// let a = +prompt('Введите единицу длины 1--> килограмм, 2--> миллиграмм, 3--> грамм, 4--> тонна, 5--> центнер')
// let b = +prompt('Введите число')
// switch(a) {
//     case 1:
//         alert(b)
//         break;
//     case 2:
//         alert(b/1000000)
//         break;
//     case 3:
//         alert(b/1000)
//         break;
//     case 4:
//         alert(b*1000)
//         break
//     case 5:
//         alert(b*100)
//         break
//     default:
//         alert('Ошибка :(')
//         break
// }
// CASE 8
// let m = +prompt('Введи месяц в диапазоне от 1 - 12')
// let d = +prompt('Введи день')
// switch (m) {
//     case 1:
//         if (d<=31) {
//             d--
//             alert('Вчера было ' + d + ' января')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 3:
//         if (d<=31) {
//             d--
//             alert('Вчера было ' + d + ' марта')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 5:
//         if (d<=31) {
//             d--
//             alert('Вчера было ' + d + ' мая')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 7:
//         if (d<=31) {
//             d--
//             alert('Вчера было ' + d + ' июль')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 8:
//         if (d<=31) {
//             d--
//             alert('Вчера было ' + d + ' август')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 10:
//         if (d<=31) {
//             d--
//             alert('Вчера было ' + d + ' октября')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 12:
//         if (d<=31) {
//             d--
//             alert('Вчера было ' + d + ' декабря')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 2:
//         if (d<=28) {
//             d--
//             alert('Вчера было ' + d + ' февраля')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 4:
//         if (d<=30) {
//             d--
//             alert('Вчера было ' + d + ' апрель')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 6:
//         if (d<=30) {
//             d--
//             alert('Вчера было ' + d + ' июнь')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 9:
//         if (d<=30) {
//             d--
//             alert('Вчера было ' + d + 'сенятбря')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 11:
//         if (d<=30) {
//             d--
//             alert('Вчера было ' + d + 'ноября')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     default:
//         alert('Просил же от 1 - 12')
//         break
// }
// CASE 9
// let m = +prompt('Введи месяц в диапазоне от 1 - 12')
// let d = +prompt('Введи день')
// switch (m) {
//     case 1:
//         if (d<=31) {
//             d++
//             alert('Завтра будет ' + d + ' января')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 3:
//         if (d<=31) {
//             d++
//             alert('Завтра будет ' + d + ' марта')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 5:
//         if (d<=31) {
//             d++
//             alert('Завтра будет ' + d + ' мая')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 7:
//         if (d<=31) {
//             d++
//             alert('Завтра будет ' + d + ' июль')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 8:
//         if (d<=31) {
//             d++
//             alert('Завтра будет ' + d + ' август')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 10:
//         if (d<=31) {
//             d++
//             alert('Завтра будет ' + d + ' октября')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 12:
//         if (d<=31) {
//             d++
//             alert('Завтра будет ' + d + ' декабря')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 2:
//         if (d<=28) {
//             d++
//             alert('Завтра будет ' + d + ' февраля')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 4:
//         if (d<=30) {
//             d++
//             alert('Завтра будет ' + d + ' апрель')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 6:
//         if (d<=30) {
//             d++
//             alert('Завтра будет ' + d + ' июнь')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 9:
//         if (d<=30) {
//             d++
//             alert('Завтра будет ' + d + 'сенятбря')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     case 11:
//         if (d<=30) {
//             d++
//             alert('Завтра будет ' + d + 'ноября')
//         } else{
//             alert('Введите верное количество дней')
//         }
//         break
//     default:
//         alert('Просил же от 1 - 12')
//         break
// }
// CASE 10
// let n = prompt('Выбери направление "З" - запад, "Ю" - юг, "С" - север, "В" - восток')
// let l = +prompt('Введите действие 0--> продолжать движение, 1--> поворот налево, -1 --> поворот направо')
// switch(n) {
//     case 'З':
//         switch(l) {
//             case 0:
//                 alert('Запад')
//                 break;
//             case 1:
//                 alert('Юг')
//                 break;
//             case -1:
//                 alert('Север')
//         }
//         break
//     case 'Ю':
//         switch(l) {
//             case 0:
//                 alert('Юг')
//                 break;
//             case 1:
//                 alert('Восток')
//                 break;
//             case -1:
//                 alert('Запад')
//                 break
//         }
//         break
//     case 'С':
//         switch(l) {
//             case 0:
//                 alert('Север')
//                 break
//             case 1:
//                 alert('Запад')
//                 break
//             case -1:
//                 alert('Восток')
//                 break
//         }
//         break
//     case 'В':
//         switch(l) {
//             case 0:
//                 alert('Восток')
//                 break
//             case 1:
//                 alert('Север')
//                 break
//             case -1:
//                 alert('Юг')
//                 break
//         }
//         break
            
// }
// CASE 11
// let n = prompt('Выбери направление "З" - запад, "Ю" - юг, "С" - север, "В" - восток')
// let l = +prompt('Введите первое действие -1--> поворот направо, 1--> поворот налево, 2 --> поворот на 180 градусов')
// let k = +prompt('Введите второе действие -1--> поворот направо, 1--> поворот налево, 2 --> поворот на 180 градусов')
// switch(n) {
//     case 'З':
//         switch(l+k) {
//             case 0:
//             case 4:
//                 alert('Запад')
//                 break
//             case -2:
//             case 2: 
//                 alert('Восток')
//                 break
//             case -1:
//             case 3:
//                 alert('Север')
//                 break
//             case 1:
//                 alert('Юг')
//                 break
//         }
//         break
//     case 'Ю':
//         switch(l+k) {
//             case 0:
//             case 4:
//                 alert('Юг')
//                 break
//             case -2:
//             case 2: 
//                 alert('Север')
//                 break
//             case -1:
//             case 3:
//                 alert('Запад')
//                 break
//             case 1:
//                 alert('Восток')
//                 break
//         }
//         break
//     case 'С':
//         switch(l+k) {
//             case 0:
//             case 4:
//                 alert('Север')
//                 break
//             case -2:
//             case 2: 
//                 alert('Юг')
//                 break
//             case -1:
//             case 3:
//                 alert('Восток')
//                 break
//             case 1:
//                 alert('Запад')
//                 break
//         }
//         break
//     case 'В':
//         switch(l+k) {
//             case 0:
//             case 4:
//                 alert('Восток')
//                 break
//             case -2:
//             case 2: 
//                 alert('Запад')
//                 break
//             case -1:
//             case 3:
//                 alert('Юг')
//                 break
//             case 1:
//                 alert('Север')
//                 break
//         }
//         break
            
// }
// CASE 12
// let a = +prompt('Введите элемент окружности 1 - R; 2 - D; 3 - L; 4 - S')
// let b = +prompt('Введите значение элемента')
// let p = 3.14
// switch(a){
//     case 1:
//         alert('Радиус равен = ' + b + ' Диаметр равен = ' + (2*b) + ' Длина равна =  ' + (2*p*b) + ' Площадь круга равна = ' + (p*(b)**2))
//         break
//     case 2:
//         alert('Радиус равен = ' + b/2 + ' Диаметр равен = ' + b + ' Длина равна =  ' + (2*p*b/2) + ' Площадь круга равна = ' + (p*(b/2)**2))
//         break
//     case 3:
//         alert('Радиус равен = ' + (b/(2*p)) + ' Диаметр равен = ' + (b/p) + ' Длина равна =  ' + b + ' Площадь круга равна = ' + (p*(b/(2*p))**2))
//         break
//     case 4:
//         alert('Радиус равен = ' + ((b/p)**1/2) + ' Диаметр равен = ' + (((b/p)**1/2)*2) + ' Длина равна =  ' + (2*p*(b/p)**1/2) + ' Площадь круга равна = ' + b)
//         break
// }