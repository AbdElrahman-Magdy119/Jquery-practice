 
 $('button:eq(0)').click( function(){
    $('ul').on('click', 'li', function () {
      var data =   $(this)
         $('#x').append(data)
    })
 })

 $('button:eq(1)').click( function(){
       var textdata = $('#text').val()
      // $('ul').parent('#copy').prepend()
      $('#y').append(`<li>${textdata}</li>`)
 })



