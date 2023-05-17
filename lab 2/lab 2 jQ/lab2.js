$('button').click(function () {
    $.ajax({
        url: 'json.js',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            let createdtable = $(`
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Grade</td>
                </tr>
            </table>
            `)
            for (let obj of data) {
                let createdrecords = $(`
                    <tr>
                        <td>${obj.ID}</td>
                        <td>${obj.studentName}</td>
                        <td>${obj.grade}</td>
                    </tr>
                `)
                createdtable.append(createdrecords)
            }
            $('div').append(createdtable)
        },
        error: function () {
            console.error();
        }
    })
})