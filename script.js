$('document').ready(function () {
    $('#submit').on('click', function () {
        let name = $('#name');
        let roll = $('#roll');
        let marks = $('#marks');
        let nameVal = name.val();
        let rollVal = roll.val();
        let marksVal = marks.val();
        let isValid = true;
        if (rollVal.length === 0 || rollVal < 0) {
            isValid = false;
            alert('Enter valid Roll No.');
        }
        if (nameVal.length === 0) {
            isValid = false;
            alert('Enter valid Name');
        }
        if (marksVal.length === 0 || marksVal < 0 || marksVal > 100) {
            isValid = false;
            alert('Enter valid Marks');
        }

        if (isValid) {
            $('.table').append(`<div class="row">
                Roll No. - <span class="green">${rollVal}</span>, <span class="green">${nameVal}</span> has
                scored <span class="green">${marksVal}</span> Marks.
            </div>`);
        }
        name.val("");
        roll.val("");
        marks.val("");
    });
});