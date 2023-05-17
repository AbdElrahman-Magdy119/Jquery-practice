
// task1
//$('#first').text('hellow abdo');


//task2
//$('div').css('background-color', 'red');


// task3,4
// $(':input:eq(1)').click(function() {
//     $('div').hide(2000);})


// $(':input:eq(0)').click(function() {
//     $('div').show(2000);})


// $(':input:eq(2)').click(function() {
//     $('div').toggle(2000);})


// task5
// $('input').click(function() {
//     $('div').text('hellow abdo'); 
// }
// )


// task6

$('button:eq(0)').css('background-color', 'rgb(131, 179, 131)');
$('button:eq(1)').css('background-color', 'red');
$('button:eq(2)').css('background-color', 'orange');
$('button:eq(3)').css('background-color', 'blue');

$('input').css('color','red')



$('button:eq(0)').click( function() {
    var x =parseInt($('#t1').val()); 
    var y =parseInt($('#t2').val());
    $('#result').text(x+y);
})
$('button:eq(1)').click( function() {
    var x =parseInt($('#t1').val()); 
    var y =parseInt($('#t2').val());
    $('#result').text(x-y);
})
$('button:eq(2)').click( function() {
    var x =parseInt($('#t1').val()); 
    var y =parseInt($('#t2').val());
    $('#result').text(x*y);
})
$('button:eq(3)').click( function() {
    var x =parseInt($('#t1').val()); 
    var y =parseInt($('#t2').val());
    $('#result').text(x/y);
})


$('button:last').click(function (){
    $('img').attr('src','10.jpeg');
    alert($('input:last').attr('checked'))
})

