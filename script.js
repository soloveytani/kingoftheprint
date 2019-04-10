var benefitsData = [
    {
        title: 'ТИПОГРАФИЯ В ЦЕНТРЕ ГОРОДА',
        text: 'Офис предприятия находится в центре города, в шаговой доступности от остановок общественного транспорта и располагает удобной автомобильной',
        imgUrl: 'http://sku.is/wp-content/uploads/2015/10/Map-Marker.png',
        color: '#3a3a3a'
    },
    {
        title: 'БЕЗУПРЕЧНОЕ КАЧЕСТВО',
        text: 'Многолетний опыт работы и профессиональное мастерство специалистов типографии Кипко позволяет с уверенностью гарантировать отличное качество произведенной продукции',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1024px-White_check.svg.png',
        color: '#dbcf00'
    },
    {
        title: 'КРАТЧАЙШИЕ СРОКИ',
        text: 'Собственное оборудование и клиентоориентированный подход не оставляет не единого шанса для каких быто ни было задержек или срывов сроков исполнения заказов',
        imgUrl: 'https://pngimage.net/wp-content/uploads/2018/06/white-clock-png-1.png',
        color: '#ff188f'
    },
    {
        title: 'БУДЕМ ДРУЗЬЯМИ',
        text: 'Политика предприятия направлена в первую очередь на долговременное сотрудничество, что позволяет в полной мере удовлетворять пожелания клиентов и партнеров. Для постоянных заказчиков существует целый ряд специальных предложений и преференций',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/White_Smile_Lirion.png/600px-White_Smile_Lirion.png',
        color: '#07bbff'
    }
]

var printingServicesData = [
    {
        title: 'Листовки',
        imgUrl: 'http://remarkprint.ru/upload/iblock/6da/6dafddfdc974014dd0d6387e6cf1c898.jpg',
        link: 'pages.html'
    },
    {
        title: 'Визитки',
        imgUrl: 'http://scrollex.ru/wp-content/uploads/2017/04/vizitki-supergeroev-Natasha-Romanova-CHernaya-Vdova-1.jpg',
    },
    {
        title: 'Книги, переплеты',
        imgUrl: 'https://lh3.googleusercontent.com/iUNS-oY91QxM4AchzkC9xC29f4Fo1U3mPialZUIMOpMBRh5Nt5yjKh1Wjuqyj__-EhvU8GCc-YTI1asqd11csMnCTwJCbqKhWZLCJedo7D6ZyZO1cv_mFHCtk10-CcKOurgZZ4Wt',
    },
    {
        title: 'Плакаты и постеры',
        imgUrl: 'http://ultima.cc/static/img/0000/0001/5980/15980384.msnxsktjjh.jpg?1',
    },
    {
        title: 'Билеты, купоны, бирки',
        imgUrl: 'https://egf.ru/wp-content/uploads/2017/04/1M5A7848.jpg',
    },
    {
        title: 'Этикетки, стикеры, наклейки',
        imgUrl: 'http://rusetiketka.ru/wp-content/uploads/2017/01/Etiketki-naklejki-na-zakaz.jpg',
    },
    {
        title: 'Открытки, конверты',
        imgUrl: 'http://tverpechat.ru/images/otkrytki-priglashenija-03.jpg',
    },
    {
        title: 'Календари',
        imgUrl: 'https://copycenter.officemag.ru/upload/iblock/cd9/kalendar_perekidnoj_1.jpg',
    },
    {
        title: 'Блокноты',
        imgUrl: 'https://www.printmarket.ua/modules/pages/pictures/1333x1000/1539009169_2457.jpg',
    }
]

function addBenefits (element) {
    for (var i = 0; i < benefitsData.length; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'typ-benefit-div';

        var newDivImg = document.createElement('div');
        newDivImg.style.backgroundColor = benefitsData[i].color;
        newDivImg.className = 'typ-benefit-div-img';

        var newImage = document.createElement('img');
        newImage.src = benefitsData[i].imgUrl;
        newDivImg.appendChild(newImage);
        newDiv.appendChild(newDivImg);

        var newH = document.createElement('h2');
        newH.innerHTML = benefitsData[i].title;
        newDiv.appendChild(newH);

        var newP = document.createElement('p');
        newP.innerHTML = benefitsData[i].text;
        newDiv.appendChild(newP);

        element.appendChild(newDiv);
    }
}

function addServices (element) {
    for (var i = 0; i < printingServicesData.length; i++) {
        var newDiv = document.createElement('div');
        newDiv.className = 'typ-service-div';

        var newImage = document.createElement('img');
        newImage.src = printingServicesData[i].imgUrl;
        newDiv.appendChild(newImage);

        var newLink = document.createElement('a');
        newLink.innerHTML = printingServicesData[i].title;
        newLink.href = printingServicesData[i].link;
        newDiv.appendChild(newLink);

        element.appendChild(newDiv);
    }
}

var benefitsContainer = document.getElementById('benefits-container');
addBenefits(benefitsContainer);

var servicesContainer = document.getElementById('services-container');
addServices(servicesContainer);

function scrollToSection (id) {
    document.getElementById(id).scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
}

var showScrollTopButton = false;

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 200 && !showScrollTopButton) {
        showScrollTopButton = true;
        document.getElementById('scroll-top-button').style.display = 'block';
    }
    if (scrolled < 200 && showScrollTopButton) {
        showScrollTopButton = false;
        document.getElementById('scroll-top-button').style.display = 'none';
    }
}

console.log(benefitsContainer);