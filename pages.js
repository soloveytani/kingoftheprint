function filtration() {
    var format = document.getElementById('paper-format').value;
    var quality = document.getElementById('paper-quality').value;

    var a3 = document.getElementById('a3');
    var a4 = document.getElementById('a4');

    a3.style.display = 'block';
    a4.style.display = 'block';

    if (format === 'a3') a4.style.display ='none';
    if (format === 'a4') a3.style.display ='none';
    
    var a3130 = document.getElementById('a3-130');
    var a3150 = document.getElementById('a3-150');
    var a4130 = document.getElementById('a4-130');
    var a4150 = document.getElementById('a4-150');

    a3130.style.display = 'table';
    a3150.style.display = 'table';
    a4130.style.display = 'table';
    a4150.style.display = 'table';

    if (quality === '130') {
        a3150.style.display ='none';
        a4150.style.display ='none';
    }

    if (quality === '150') {
        a3130.style.display ='none';
        a4130.style.display ='none';
    }

    console.log(quality, format);
}