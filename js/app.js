const _0x1ba78f = _0x4dbe;
(function(_0x45d71b, _0x514037) {
    const _0xc224df = _0x4dbe,
        _0x31a15b = _0x45d71b();
    while (!![]) {
        try {
            const _0x2f02fc = parseInt(_0xc224df(0x19b)) / 0x1 + parseInt(_0xc224df(0x17c)) / 0x2 + -parseInt(_0xc224df(0x178)) / 0x3 * (parseInt(_0xc224df(0x1a3)) / 0x4) + parseInt(_0xc224df(0x184)) / 0x5 * (parseInt(_0xc224df(0x164)) / 0x6) + -parseInt(_0xc224df(0x19d)) / 0x7 + -parseInt(_0xc224df(0x171)) / 0x8 + -parseInt(_0xc224df(0x15b)) / 0x9;
            if (_0x2f02fc === _0x514037) break;
            else _0x31a15b['push'](_0x31a15b['shift']());
        } catch (_0x3b4099) {
            _0x31a15b['push'](_0x31a15b['shift']());
        }
    }
}(_0x5539, 0x1a13b));
const btn = document[_0x1ba78f(0x159)](_0x1ba78f(0x191)),
    nav = document[_0x1ba78f(0x159)](_0x1ba78f(0x18e));
let heroSlika = document[_0x1ba78f(0x199)](_0x1ba78f(0x19f)),
    paragrafText = document[_0x1ba78f(0x199)](_0x1ba78f(0x17f)),
    headerText = document[_0x1ba78f(0x199)](_0x1ba78f(0x17e)),
    currentSlider = 0x0,
    headerSlider = 0x0,
    verticalSlider = 0x1,
    mybutton = document[_0x1ba78f(0x159)]('topButton');
window['onscroll'] = function() {
    scrollFunction();
};
const scrollFunction = () => {
        const _0x52e54c = _0x1ba78f;
        if (document[_0x52e54c(0x194)]['scrollTop'] > 0x14 || document[_0x52e54c(0x166)][_0x52e54c(0x182)] > 0x14) mybutton[_0x52e54c(0x1a5)]['display'] = _0x52e54c(0x174);
        else mybutton[_0x52e54c(0x1a5)][_0x52e54c(0x185)] = _0x52e54c(0x189);
    },
    scrollToTop = () => {
        const _0x526371 = _0x1ba78f;
        document[_0x526371(0x194)][_0x526371(0x182)] = 0x0, document[_0x526371(0x166)][_0x526371(0x182)] = 0x0, vSlider(0x1);
    },
    sliderContent = [{
        'headerText': 'Join\x20Our\x20Community,\x20Become\x20A\x20Part\x20Of\x20Family.',
        'paragrafText': _0x1ba78f(0x163),
        'slika': _0x1ba78f(0x19c),
        'altSlike': _0x1ba78f(0x19a)
    }, {
        'headerText': 'Your\x20Adventure\x20starts\x20here,\x20enjoy\x20with\x20us.',
        'paragrafText': 'Naš\x20server\x20je\x20Hard\x20Roleplay,\x20to\x20znači\x20da\x20naši\x20likovi\x20imaju\x20svoju\x20pozadinsku\x20priču,\x20svoje\x20mane\x20i\x20vrline,\x20osobnosti\x20i\x20glume\x20stvarne\x20osjećaje\x20u\x20igri\x20u\x20smislu\x20da\x20se\x20bore\x20za\x20svoje\x20živote,\x20preživljavaju\x20i\x20napreduju\x20u\x20raznim\x20aspektima\x20života.',
        'slika': _0x1ba78f(0x179),
        'altSlike': _0x1ba78f(0x19a)
    }, {
        'headerText': _0x1ba78f(0x168),
        'paragrafText': _0x1ba78f(0x1a9),
        'slika': 'gta-5.png',
        'altSlike': _0x1ba78f(0x19a)
    }, {
        'headerText': 'A\x20place\x20where\x20the\x20fun\x20never\x20ends.',
        'paragrafText': _0x1ba78f(0x172),
        'slika': _0x1ba78f(0x16b),
        'altSlike': _0x1ba78f(0x19a)
    }, {
        'headerText': _0x1ba78f(0x176),
        'paragrafText': _0x1ba78f(0x192),
        'slika': _0x1ba78f(0x170),
        'altSlike': _0x1ba78f(0x19a)
    }],
    featureSliderContent = [{
        'naslov': _0x1ba78f(0x186),
        'deskripcija': '▪\x20VRHUNSKI\x20DIZAJN\x20SA\x20CLIENT\x20SIDE\x20ANTICHEATOM',
        'opis': _0x1ba78f(0x177),
        'slika': _0x1ba78f(0x169),
        'altSlike': _0x1ba78f(0x195)
    }, {
        'naslov': _0x1ba78f(0x181),
        'deskripcija': _0x1ba78f(0x196),
        'opis': '<i\x20class=\x22fas\x20fa-user-edit\x22></i>\x20Kontrolišite\x20Vašeg\x20in\x20game\x20karaktera\x20i\x20pratite\x20in\x20game\x20novosti\x20putem\x20UCP-a.\x20<br>Naš\x20UCP\x20Vam\x20nudi\x20dosta\x20funkcija\x20koje\x20bi\x20Vam\x20mogle\x20pomoći\x20pri\x20igri\x20na\x20samom\x20serveru..',
        'slika': _0x1ba78f(0x180),
        'altSlike': _0x1ba78f(0x1a4)
    }, {
        'naslov': 'Web\x20Shop',
        'deskripcija': _0x1ba78f(0x17b),
        'opis': '<i\x20class=\x22fas\x20fa-shopping-cart\x22></i>\x20Putem\x20našeg\x20Web\x20Shopa\x20možete\x20obaviti\x20kupovinu\x20raznih\x20in\x20game\x20pogodnosti,\x20bilo\x20da\x20je\x20to\x20VIP,\x20Priority\x20za\x20Queue\x20ili\x20neko\x20vozilo.<br>\x20Sve\x20to\x20možete\x20obaviti\x20veoma\x20brzo\x20putem\x20našeg\x20shopa..',
        'slika': _0x1ba78f(0x183),
        'altSlike': 'Furniture\x20in\x20house\x20in\x20GTA\x205\x20roleplay\x20nteam'
    }];
btn[_0x1ba78f(0x15c)](_0x1ba78f(0x16f), () => {
    const _0x4e6ae5 = _0x1ba78f;
    btn[_0x4e6ae5(0x18f)][_0x4e6ae5(0x15d)](_0x4e6ae5(0x1a7)), nav['classList'][_0x4e6ae5(0x15d)]('flex'), nav['classList'][_0x4e6ae5(0x15d)](_0x4e6ae5(0x162));
});

function _0x5539() {
    const _0x33f274 = ['slika', 'opis', 'remove', 'menu', 'classList', 'naslov', 'menu-btn', 'Naš\x20server\x20ima\x20jasno\x20definisana\x20pravila\x20i\x20zakone\x20grada\x20po\x20kojima\x20se\x20igra\x20igra,\x20tako\x20da\x20ne\x20možete\x20i\x20nećete\x20doživeti\x20izmišljanje\x20pravila\x20i\x20igre\x20u\x20svoju\x20korist\x20jer\x20uvek\x20imate\x20pravo\x20na\x20advokata\x20koji\x20vas\x20štiti\x20od\x20nepravednih\x20postupka.', 'animate__animated', 'body', 'How\x20launcher\x20looks\x20like\x20on\x20NTeam\x20Roleplay\x20GTA\x205\x20server', '▪\x20KONTROLIŠITE\x20VAŠEG\x20KARAKTERA\x20PUTEM\x20UCP-A', '#vslider-', 'deskripcija', 'querySelector', 'Gta\x205\x20character', '123746SeepUH', 'gta-3.png', '189210ZBUxNe', 'innerHTML', '#heroSlika', '#slider-', '#featureTitle', './src/img/features/', '2324BFxVmp', 'Man\x20standing\x20in\x20disco,\x20owning\x20his\x20business\x20GTA\x205\x20roleplay\x20nteam', 'style', '110%', 'open', 'innerHeight', 'Naš\x20tim\x20programera\x20vam\x20omogućava\x20da\x20radite\x20razne\x20stvari\x20kao\x20što\x20su\x20prilagođavanje\x20objekata\x20prema\x20vašim\x20željama,\x20promjena\x20fizičkog\x20izgleda\x20vaših\x20likova,\x20kreiranje\x20prilagođenih\x20skripti,\x20promjena\x20nacina\x20upravljanja\x20automobilima,\x20kreiranje\x20bilborda\x20prema\x20vašim\x20željama\x20unutar\x20igre\x20i\x20još\x20mnogo\x20toga!', 'getElementById', 'alt', '766899wiVxCl', 'addEventListener', 'toggle', 'src', 'headerText', 'marginTop', 'getBoundingClientRect', 'hidden', 'Zaigraj\x20na\x20najunikatnijem\x20GTA\x205\x20roleplay\x20serveru.\x20Klikom\x20na\x20dugme\x20ispod\x20saznaj\x20kako\x20se\x20pridružiti\x20serveru.', '3594DGvDZb', 'scroll', 'documentElement', 'add', 'Feel\x20The\x20True\x20Charms\x20Of\x20Roleplay.', 'launcher.png', 'animate__fadeInUp', 'gta-6.png', '60%', 'altSlike', '150%', 'click', 'gta-7.png', '1231496KLyYjf', 'Naš\x20server\x20je\x20trenutno\x20baziran\x20na\x20prilagođenoj\x20karti\x20Liberty\x20Cityja,\x20odnosno\x20na\x20temu\x20New\x20Yorka,\x20što\x20nas\x20čini\x20drugačijim\x20serverom\x20i\x20posebnim\x20od\x20ostalih,\x20gdje\x20možete\x20doživjeti\x20potpuno\x20drugačiji\x20oblik\x20igre\x20od\x20onoga\x20na\x20koji\x20ste\x20navikli.', './src/img/', 'block', 'pageYOffset', 'Your\x20dreams\x20start\x20here,\x20connect\x20now.', '<i\x20class=\x22fas\x20fa-shield-alt\x22></i>\x20Nakon\x20što\x20prođete\x20našu\x20whitelistu\x20dobiti\x20ćete\x20link\x20za\x20preuzimanje\x20launchera.\x20<br>Launcher\x20čini\x20naš\x20server\x20dodatno\x20zaštićenim\x20od\x20čitera\x20i\x20time\x20Vam\x20pruža\x20ugodniju\x20igru.', '390QJUUVl', 'gta-4.png', 'animationend', '▪\x20BRZA\x20I\x20SIGURNA\x20KUPOVINA\x20IN\x20GAME\x20ITEMA', '327284wNkXxP', 'vactive', '#headerText', '#paragrafText', 'biznis.png', 'User\x20Control\x20Panel', 'scrollTop', 'namjestaj.png', '1345vPKYmu', 'display', 'Custom\x20Launcher', '#featureShort', '.vslider-dots', 'none', 'active'];
    _0x5539 = function() {
        return _0x33f274;
    };
    return _0x5539();
}
const slider = _0x2c0001 => {
        const _0x47f80c = _0x1ba78f;
        headerSlider = _0x2c0001;
        for (let _0x3048ea = 0x0; _0x3048ea < sliderContent['length']; _0x3048ea++) document['querySelector'](_0x47f80c(0x1a0) + _0x3048ea)['classList']['remove'](_0x47f80c(0x18a));
        document[_0x47f80c(0x199)](_0x47f80c(0x1a0) + _0x2c0001)['classList'][_0x47f80c(0x15d)](_0x47f80c(0x18a)), headerText[_0x47f80c(0x19e)] = sliderContent[_0x2c0001][_0x47f80c(0x15f)], paragrafText[_0x47f80c(0x19e)] = sliderContent[_0x2c0001]['paragrafText'], heroSlika[_0x47f80c(0x15e)] = _0x47f80c(0x173) + sliderContent[_0x2c0001]['slika'], heroSlika[_0x47f80c(0x15a)] = '' + sliderContent[_0x2c0001][_0x47f80c(0x16d)], heroSlika['classList'][_0x47f80c(0x167)]('animate__animated', _0x47f80c(0x16a)), paragrafText[_0x47f80c(0x18f)][_0x47f80c(0x167)](_0x47f80c(0x193), _0x47f80c(0x16a)), headerText['classList'][_0x47f80c(0x167)](_0x47f80c(0x193), _0x47f80c(0x16a));
    },
    vSlider = _0x1086a1 => {
        const _0x390f72 = _0x1ba78f,
            _0x346b0a = document[_0x390f72(0x199)](_0x390f72(0x188));
        verticalSlider = _0x1086a1;
        for (let _0x328715 = 0x1; _0x328715 < 0x5; _0x328715++) document[_0x390f72(0x199)](_0x390f72(0x197) + _0x328715)[_0x390f72(0x18f)][_0x390f72(0x18d)]('vactive');
        document['querySelector'](_0x390f72(0x197) + _0x1086a1)[_0x390f72(0x18f)][_0x390f72(0x15d)](_0x390f72(0x17d));
        if (_0x1086a1 === 0x1) _0x346b0a['style'][_0x390f72(0x160)] = '0%';
        if (_0x1086a1 === 0x2) _0x346b0a['style'][_0x390f72(0x160)] = _0x390f72(0x16c);
        if (_0x1086a1 === 0x3) _0x346b0a[_0x390f72(0x1a5)]['marginTop'] = _0x390f72(0x1a6);
        if (_0x1086a1 === 0x4) _0x346b0a[_0x390f72(0x1a5)]['marginTop'] = _0x390f72(0x16e);
    },
    featureSlider = _0x8d103d => {
        const _0x672d6c = _0x1ba78f,
            _0xdb65c4 = document[_0x672d6c(0x199)]('#featureImage'),
            _0x5517e4 = document['querySelector'](_0x672d6c(0x1a1)),
            _0x4af795 = document[_0x672d6c(0x199)](_0x672d6c(0x187)),
            _0x852437 = document[_0x672d6c(0x199)]('#featureDescription');
        if (_0x8d103d === 0x0) {
            if (currentSlider === 0x0) return !![];
            currentSlider--, _0xdb65c4[_0x672d6c(0x15e)] = './src/img/features/' + featureSliderContent[currentSlider][_0x672d6c(0x18b)], _0xdb65c4[_0x672d6c(0x15a)] = '' + featureSliderContent[currentSlider]['altSlike'], _0x5517e4['innerHTML'] = '' + featureSliderContent[currentSlider][_0x672d6c(0x190)], _0x4af795[_0x672d6c(0x19e)] = '' + featureSliderContent[currentSlider][_0x672d6c(0x198)], _0x852437['innerHTML'] = '' + featureSliderContent[currentSlider][_0x672d6c(0x18c)];
        }
        if (_0x8d103d === 0x1) {
            if (currentSlider === 0x2) return !![];
            currentSlider++, _0xdb65c4[_0x672d6c(0x15e)] = _0x672d6c(0x1a2) + featureSliderContent[currentSlider][_0x672d6c(0x18b)], _0xdb65c4[_0x672d6c(0x15a)] = '' + featureSliderContent[currentSlider][_0x672d6c(0x16d)], _0x5517e4[_0x672d6c(0x19e)] = '' + featureSliderContent[currentSlider][_0x672d6c(0x190)], _0x4af795[_0x672d6c(0x19e)] = '' + featureSliderContent[currentSlider]['deskripcija'], _0x852437[_0x672d6c(0x19e)] = '' + featureSliderContent[currentSlider][_0x672d6c(0x18c)];
        }
    };
setInterval(function() {
    headerSlider === 0x4 ? (headerSlider = 0x0, slider(headerSlider)) : (headerSlider++, slider(headerSlider));
}, 0x1770), heroSlika['addEventListener'](_0x1ba78f(0x17a), () => {
    const _0x553db5 = _0x1ba78f;
    heroSlika['classList']['remove'](_0x553db5(0x193), _0x553db5(0x16a)), paragrafText[_0x553db5(0x18f)][_0x553db5(0x18d)](_0x553db5(0x193), _0x553db5(0x16a)), headerText[_0x553db5(0x18f)]['remove'](_0x553db5(0x193), 'animate__fadeInUp');
});
let oldValue = 0x0,
    newValue = 0x0;
document[_0x1ba78f(0x15c)](_0x1ba78f(0x165), _0x39df9f => {
    const _0x576ac8 = _0x1ba78f;
    newValue = window[_0x576ac8(0x175)];
    if (oldValue < newValue) verticalSlider !== 0x1 && vSlider(verticalSlider--);
    else oldValue > newValue && (verticalSlider !== 0x4 && vSlider(verticalSlider++));
    oldValue = newValue;
});

function _0x4dbe(_0x6415aa, _0x5069bc) {
    const _0x55392f = _0x5539();
    return _0x4dbe = function(_0x4dbe25, _0x573e0c) {
        _0x4dbe25 = _0x4dbe25 - 0x159;
        let _0x452ccd = _0x55392f[_0x4dbe25];
        return _0x452ccd;
    }, _0x4dbe(_0x6415aa, _0x5069bc);
}
const startAnimation = () => {
    const _0x355485 = _0x1ba78f;
    let _0x3df38e = document[_0x355485(0x199)]('.animacijaKaraktera'),
        _0x507d0b = window[_0x355485(0x1a8)],
        _0xeb2507 = _0x3df38e[_0x355485(0x161)]()['top'],
        _0x4c0b5d = 0x96;
    _0xeb2507 < _0x507d0b - _0x4c0b5d ? _0x3df38e[_0x355485(0x18f)][_0x355485(0x167)]('animActive') : _0x3df38e[_0x355485(0x18f)][_0x355485(0x18d)]('animActive');
};
window['addEventListener'](_0x1ba78f(0x165), startAnimation);