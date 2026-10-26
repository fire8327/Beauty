/**
 * СТАНДАРТНАЯ СТИЛИЗОВАННАЯ ГАЛЕРЕЯ ДЛЯ ВСЕХ СТУДИЙ
 * 
 * Универсальный набор из 5 стилизованных мягких 3D-иллюстраций (терракота, кашемир, теплое дерево).
 * Гарантирует безупречный, стильный вид галереи для любой студии без серых фасадов и уличных панорам.
 */
const STANDARD_STUDIO_GALLERY = [
    { src: "assets/illustrations/gallery_nails.jpg", title: "Студия ногтевого сервиса", span: "big-span" },
    { src: "assets/illustrations/gallery_hair.jpg", title: "Зал парикмахерского искусства" },
    { src: "assets/illustrations/gallery_cosmetics.jpg", title: "Премиум уходы и космецевтика" },
    { src: "assets/illustrations/gallery_lounge.jpg", title: "Лаунж-зона и ресепшн" },
    { src: "assets/illustrations/gallery_spa.jpg", title: "Пространство заботы и комфорта" }
];

/**
 * БАЗА ДАННЫХ САЛОНОВ КРАСОТЫ (ГОРОД КАНАШ)
 * 
 * Каждая студия персонализирована:
 * - Уникальный slug для GET-параметра (?salon=...)
 * - Реальное наименование, адрес и точные координаты Яндекс Карт
 * - Настоящий рейтинг и подтвержденные отзывы клиентов
 * - Контакты (телефон, WhatsApp, Telegram, VK)
 * - Персонализированный прайс-лист для интерактивного конструктора визита
 */
const SALONS_DATABASE = {
    // 1. САЛОН КРАСОТЫ «МАГИЯ» (ул. Машиностроителей, 9)
    magia: {
        id: "magia",
        name: "Магия",
        monogramLetter: "М",
        brandSuffix: "Beauty & Spa",
        tagline: "Салон красоты и эстетической косметологии",
        heroTitle: "Истинная магия ухода, <span class='serif-italic'>раскрывающая вас</span>",
        heroLead: "Пространство персональной эстетики и бережного салонного ухода в Канаше.",
        heroHighlights: [
            "Сложная авторская колористика & умные стрижки",
            "Аппаратный маникюр & атравматичный SMART-педикюр",
            "Эстетическая косметология и глубокие спа-уходы"
        ],
        heroDescription: "Пространство премиального ухода в Канаше на Машиностроителей, 9. 56+ подтвержденных отзывов на Яндекс Картах со средней оценкой 4.7.",
        city: "г. Канаш",
        address: "ул. Машиностроителей, 9",
        coords: "47.478625,55.492067", // Точные координаты дома для метки Яндекс Карт
        phoneDisplay: "+7 (83533) 4-23-63",
        phoneRaw: "+78353342363",
        extraPhone: "+7 (966) 249-40-03",
        workHours: "Пн-Сб: 08:30 — 19:30, Вс: 09:00 — 18:00",
        yandexRating: "4.7",
        yandexReviewsCount: "56",
        yandexMapsUrl: "https://yandex.ru/maps/org/133452322882",
        clientsSiteUrl: "https://magija-ulitsa-mashinostroitelej.clients.site",
        whatsappUrl: "https://wa.me/79662494003",
        telegramUrl: "https://t.me/magia_kanash",
        vkUrl: "https://vk.ru/magia_kanash",
        
        images: {
            hero: "assets/illustrations/gallery_hair.jpg",
            gallery: STANDARD_STUDIO_GALLERY
        },

        services: [
            { id: "m1", cat: "HAIR", name: "Модельная салонная стрижка со спа-уходом и стайлингом", duration: 50, price: 1100 },
            { id: "m2", cat: "HAIR", name: "Сложное трендовое окрашивание (Airtouch / Шатуш)", duration: 180, price: 4200 },
            { id: "m3", cat: "HAIR", name: "Глубокое коллагеновое питание и реконструкция волос", duration: 75, price: 2100 },
            { id: "m4", cat: "HAIR", name: "Тонирование с глянцевым ламинирующим эффектом", duration: 60, price: 1800 },
            { id: "m5", cat: "NAILS", name: "Аппаратный маникюр с выравниванием и гель-лаком", duration: 90, price: 1300 },
            { id: "m6", cat: "NAILS", name: "Атравматичный SMART-педикюр с обработкой стопы", duration: 80, price: 1900 },
            { id: "m7", cat: "FACE", name: "Комплексная ультразвуковая + механическая чистка", duration: 90, price: 2100 },
            { id: "m8", cat: "FACE", name: "Сияющий всесезонный пилинг глубокого увлажнения", duration: 45, price: 2500 },
            { id: "m9", cat: "BODY", name: "Общий релакс-массаж всего тела с аромамаслами", duration: 60, price: 1800 }
        ],

        reviews: [
            {
                author: "Наталья Смирнова",
                stars: 5,
                text: "Самый любимый салон в Канаше! Хожу в «Магию» уже несколько лет. Девочки настоящие профессионалы. Окрашивание всегда на 10 из 10, волосы не портятся. Очень рекомендую!"
            },
            {
                author: "Ольга Иванова",
                stars: 5,
                text: "Прекрасный маникюр! Покрытие держится больше месяца без единого скола. В салоне очень чисто, уютно, инструменты достают из крафт-пакета. Приятные цены для такого сервиса."
            },
            {
                author: "Екатерина Михайлова",
                stars: 5,
                text: "Делала чистку лица и массаж у косметолога. Кожа сияет, поры чистые, никакого раздражения. Мастер дала грамотные советы по домашнему уходу. Обязательно вернусь снова!"
            }
        ]
    },

    // 2. СТУДИЯ КРАСОТЫ «NA'DI» (проспект Ленина, 55)
    nadi: {
        id: "nadi",
        name: "Na’Di",
        monogramLetter: "N",
        brandSuffix: "Studio",
        tagline: "Студия авторского стиля и красоты",
        heroTitle: "Индивидуальный стиль в самом <span class='serif-italic'>центре города</span>",
        heroLead: "Уютное бьюти-пространство на проспекте Ленина, 55 с персонализированным подходом.",
        heroHighlights: [
            "Трендовые техники стрижек и бережное окрашивание",
            "Стойкий чистый маникюр без отслоек",
            "Художественное оформление бровей и ламинирование"
        ],
        heroDescription: "Уютное бьюти-пространство на проспекте Ленина, 55. Персонализированный подход, современные техники стрижек, стойкий маникюр и выразительный взгляд.",
        city: "г. Канаш",
        address: "проспект Ленина, 55",
        coords: "47.510883,55.513581",
        phoneDisplay: "+7 (937) 384-75-47",
        phoneRaw: "+79373847547",
        extraPhone: "",
        workHours: "Ежедневно: 09:00 — 20:00",
        yandexRating: "4.2",
        yandexReviewsCount: "12",
        yandexMapsUrl: "https://yandex.ru/maps/org/135843128939",
        clientsSiteUrl: "https://nadi-prospekt-lenina.clients.site",
        whatsappUrl: "https://wa.me/79373847547",
        telegramUrl: "https://t.me/nadi_kanash",
        vkUrl: "https://vk.ru/nadi_kanash",
        
        images: {
            hero: "assets/illustrations/gallery_lounge.jpg",
            gallery: STANDARD_STUDIO_GALLERY
        },

        services: [
            { id: "n1", cat: "HAIR", name: "Стильная женская стрижка + мытье и стайлинг", duration: 50, price: 900 },
            { id: "n2", cat: "HAIR", name: "Окрашивание волос в 1 тон (премиум краситель)", duration: 120, price: 2400 },
            { id: "n3", cat: "HAIR", name: "Сложное мелирование / Шатуш с тонированием", duration: 180, price: 3800 },
            { id: "n4", cat: "NAILS", name: "Маникюр с однотонным покрытием гель-лак", duration: 80, price: 1200 },
            { id: "n5", cat: "NAILS", name: "Педикюр пальчики + покрытие", duration: 60, price: 1400 },
            { id: "n6", cat: "FACE", name: "Оформление бровей (архитектура + краска)", duration: 40, price: 700 }
        ],

        reviews: [
            {
                author: "Алена В.",
                stars: 5,
                text: "Очень приятное место! Делала стрижку и тонирование, мастер Надежда учла все пожелания, цвет получился шикарный."
            },
            {
                author: "Кристина М.",
                stars: 5,
                text: "Хожу на ноготки только в Na'Di. Всегда быстро, аккуратно и носится идеально без отслоек!"
            }
        ]
    },

    // 3. ПАРИКМАХЕРСКАЯ & САЛОН «МЕЛАНЖ» (ул. 30 лет Победы, 9)
    melanzh: {
        id: "melanzh",
        name: "Меланж",
        monogramLetter: "М",
        brandSuffix: "Hair Studio",
        tagline: "Студия колористики и парикмахерского искусства",
        heroTitle: "Искусство цвета и формы, <span class='serif-italic'>созданное для вас</span>",
        heroLead: "Теплая и доброжелательная парикмахерская студия на 30 лет Победы, 9.",
        heroHighlights: [
            "Сложное мелирование & точный подбор оттенка",
            "Модельные стрижки с легкой домашней укладкой",
            "Бережное восстановление и персональные советы по уходу"
        ],
        heroDescription: "Любимое место жителей Канаша для преображения волос. Высокая оценка 4.5 на Яндекс Картах, заботливые мастера, кофе и сладости во время процедур.",
        city: "г. Канаш",
        address: "ул. 30 лет Победы, 9",
        coords: "47.489716,55.511037",
        phoneDisplay: "+7 (919) 667-67-51",
        phoneRaw: "+79196676751",
        extraPhone: "",
        workHours: "Пн-Пт: 09:00 — 16:00, Сб-Вс: 10:00 — 15:00",
        yandexRating: "4.5",
        yandexReviewsCount: "13",
        yandexMapsUrl: "https://yandex.ru/maps/org/145029390958",
        clientsSiteUrl: "https://melanzh-ulitsa-30-let-pobedy.clients.site",
        whatsappUrl: "https://wa.me/79196676751",
        telegramUrl: "https://t.me/melanzh_kanash",
        vkUrl: "https://vk.ru/melanzh_kanash",

        images: {
            hero: "assets/illustrations/gallery_hair.jpg",
            gallery: STANDARD_STUDIO_GALLERY
        },

        services: [
            { id: "ml1", cat: "HAIR", name: "Модельная женская стрижка + мытье и спа-уход", duration: 50, price: 800 },
            { id: "ml2", cat: "HAIR", name: "Авторское мелирование с мягкой растяжкой цвета", duration: 150, price: 2800 },
            { id: "ml3", cat: "HAIR", name: "Окрашивание волос в 1 тон со стойким блеском", duration: 110, price: 1900 },
            { id: "ml4", cat: "HAIR", name: "Глубокая питательная маска и восстановление волос", duration: 40, price: 900 },
            { id: "ml5", cat: "HAIR", name: "Укладка волос феном и стайлером на брашинг", duration: 45, price: 700 }
        ],

        reviews: [
            {
                author: "Арина Петрова",
                stars: 5,
                text: "Отличная парикмахерская! Мастер доброжелательный, сделала стрижку и окрашивание, дала советы по уходу, посоветовала продукты по типу волос, угостила чаем с конфетками. Ушла красивая и довольная. Побольше таких мастеров! Розалия, спасибо вам большое!"
            },
            {
                author: "Максимова Алевтина",
                stars: 5,
                text: "Огромное спасибо парикмахеру Розе! Делала мелирование — всё прошло отлично: мастер подобрала подходящий оттенок и аккуратно всё сделала. Пока волосы прокрашивались, меня угостили кофе с конфетками — очень приятно!"
            },
            {
                author: "Арина Краснова",
                stars: 5,
                text: "Замечательная парикмахерская 👍 Парикмахер Роза — мастер своего дела на все 100%! И волосы в порядок приведет, и настроение поднимет. Рекомендую всем!"
            }
        ]
    },

    // 4. НОГТЕВАЯ СТУДИЯ & САЛОН ВЗГЛЯДА «ЕРМИЛА» (ул. Разина, 5)
    ermila: {
        id: "ermila",
        name: "Ермила",
        monogramLetter: "Е",
        brandSuffix: "Nails & Brows",
        tagline: "Студия ногтевого сервиса и архитектуры взгляда",
        heroTitle: "Идеальная эстетика ваших <span class='serif-italic'>ногтей и взгляда</span>",
        heroLead: "Специализированная студия маникюра и оформления бровей на улице Разина, 5.",
        heroHighlights: [
            "Аппаратный маникюр со стойкостью 4+ недели без сколов",
            "Архитектура и долговременная укладка бровей",
            "100% медицинская стерилизация инструмента по СанПиН"
        ],
        heroDescription: "Пространство безупречного ногтевого сервиса и бровей. Рейтинг 4.5 на Яндекс Картах, стерильный инструмент и бережный индивидуальный подход.",
        city: "г. Канаш",
        address: "улица Разина, 5",
        coords: "47.499112,55.511582",
        phoneDisplay: "+7 (927) 860-25-25",
        phoneRaw: "+79278602525",
        extraPhone: "",
        workHours: "Ежедневно: 10:00 — 20:00",
        yandexRating: "4.5",
        yandexReviewsCount: "9",
        yandexMapsUrl: "https://yandex.ru/maps/org/203588821831",
        clientsSiteUrl: "https://ermila.clients.site",
        whatsappUrl: "https://wa.me/79278602525",
        telegramUrl: "https://t.me/ermila_nails",
        vkUrl: "https://vk.ru/ermila_kanash",

        images: {
            hero: "assets/illustrations/gallery_nails.jpg",
            gallery: STANDARD_STUDIO_GALLERY
        },

        services: [
            { id: "e1", cat: "NAILS", name: "Чистый комби-маникюр с выравниванием и гель-лаком", duration: 90, price: 1300 },
            { id: "e2", cat: "NAILS", name: "Укрепление тонких и ломких ногтей гелем/акригелем", duration: 30, price: 400 },
            { id: "e3", cat: "NAILS", name: "SMART-педикюр эстетический с обработкой пальчиков", duration: 75, price: 1800 },
            { id: "e4", cat: "FACE", name: "Архитектура бровей с индивидуальным окрашиванием", duration: 40, price: 700 },
            { id: "e5", cat: "FACE", name: "Долговременная укладка бровей + уходовый ботокс", duration: 50, price: 1200 },
            { id: "e6", cat: "FACE", name: "Ламинирование ресниц с глубоким кератиновым питанием", duration: 60, price: 1500 }
        ],

        reviews: [
            {
                author: "Марина Д.",
                stars: 5,
                text: "Ходила к Людмиле на маникюр — и осталась в полном восторге! Всё прошло очень комфортно: мастер сразу предложила варианты, учла пожелания и подсказала, какой оттенок лучше для формы ногтей. Всё стерильно и аккуратно. Спасибо за золотые руки!"
            },
            {
                author: "Мила Юрьевна",
                stars: 5,
                text: "Ходила на брови: оформление + укладка. Мастер помогла с цветом, подобрала так, что выглядит максимально естественно под мой оттенок, не перетемнила. Аккуратно, спокойно, без спешки. Очень понравилось, рекомендую!"
            },
            {
                author: "Виктория К.",
                stars: 5,
                text: "Хожу на маникюр к Людмиле уже несколько месяцев — сервис просто огонь! Мастер всегда предлагает новые покрытия и оттенки. Маникюр держится идеально без сколов минимум 3-4 недели. Однозначно советую!"
            }
        ]
    },

    // 5. СТУДИЯ МАССАЖА & РЕЛАКСА «PARADISE MASSAGE» (Железнодорожная ул., 87)
    paradise: {
        id: "paradise",
        name: "Paradise Massage",
        monogramLetter: "P",
        brandSuffix: "Spa & Relax",
        tagline: "Студия оздоровительного массажа и спа-программ",
        heroTitle: "Истинное расслабление и <span class='serif-italic'>восстановление сил</span>",
        heroLead: "Пространство физического и ментального отдыха на Железнодорожной улице, 87.",
        heroHighlights: [
            "Оздоровительный массаж спины и шейно-воротниковой зоны",
            "Общие восстанавливающие спа-программы всего тела",
            "Антицеллюлитный и моделирующий массаж"
        ],
        heroDescription: "Пространство гармонии, где уходят мышечные зажимы и усталость. Комфортные массажные кабинеты, аромамасла и квалифицированные специалисты.",
        city: "г. Канаш",
        address: "Железнодорожная улица, 87",
        coords: "47.479026,55.512199",
        phoneDisplay: "+7 (937) 399-23-18",
        phoneRaw: "+79373992318",
        extraPhone: "+7 (987) 665-26-20",
        workHours: "Ежедневно: 06:00 — 22:00",
        yandexRating: "4.8",
        yandexReviewsCount: "8",
        yandexMapsUrl: "https://yandex.ru/maps/org/127898515600",
        clientsSiteUrl: "https://paradise-massage-zheleznodorozhnaja-ulitsa.clients.site",
        whatsappUrl: "https://wa.me/79373992318",
        telegramUrl: "https://t.me/paradise_kanash",
        vkUrl: "https://vk.ru/pavekaterina21",

        images: {
            hero: "assets/illustrations/gallery_spa.jpg",
            gallery: STANDARD_STUDIO_GALLERY
        },

        services: [
            { id: "p1", cat: "BODY", name: "Оздоровительный массаж спины и шейной зоны", duration: 45, price: 1200 },
            { id: "p2", cat: "BODY", name: "Общий классический массаж всего тела (релакс)", duration: 60, price: 1800 },
            { id: "p3", cat: "BODY", name: "Глубокий лимфодренажный детокс-массаж", duration: 60, price: 1900 },
            { id: "p4", cat: "BODY", name: "Скульптурный корректирующий массаж проблемных зон", duration: 50, price: 1600 },
            { id: "p5", cat: "BODY", name: "Спа-уход: ароматическое скрабирование + обертывание", duration: 75, price: 2300 }
        ],

        reviews: [
            {
                author: "Евгений",
                stars: 5,
                text: "Массаж очень понравился! Прекрасная расслабляющая атмосфера, приятная музыка, спина после первого сеанса сказала огромное спасибо. Всем рекомендую!"
            },
            {
                author: "Екатерина",
                stars: 5,
                text: "Хожу курсом на массаж всего тела. Отличные руки у специалиста, ушли головные боли и постоянное напряжение в шее. Приятные цены для такого высокого уровня сервиса."
            }
        ]
    },

    // 6. СТУДИЯ КРАСОТЫ МАРИИ КИМ (Московская ул., 12)
    mariakim: {
        id: "mariakim",
        name: "Студия Марии Ким",
        monogramLetter: "К",
        brandSuffix: "Aesthetic Studio",
        tagline: "Студия перманентного макияжа и эстетики",
        heroTitle: "Природная выразительность, <span class='serif-italic'>не требующая макияжа</span>",
        heroLead: "Премиальная студия перманентного макияжа и эстетики на Московской улице, 12.",
        heroHighlights: [
            "Пудровое напыление бровей с естественным градиентом",
            "Акварельная бесконтурная техника перманента губ",
            "Кератиновое ламинирование ресниц с эффектом распахнутого взгляда"
        ],
        heroDescription: "Пространство современной эстетики лица. Высокоточные пигменты премиум-класса, отсутствие отеков и естественный результат на 1.5–2 года.",
        city: "г. Канаш",
        address: "Московская улица, 12",
        coords: "47.492409,55.509212",
        phoneDisplay: "+7 (927) 844-12-12",
        phoneRaw: "+79278441212",
        extraPhone: "",
        workHours: "Ежедневно: 09:00 — 19:00",
        yandexRating: "4.9",
        yandexReviewsCount: "10",
        yandexMapsUrl: "https://yandex.ru/maps/org/241815942466",
        clientsSiteUrl: "https://studija-krasoty-marii-kim.clients.site",
        whatsappUrl: "https://wa.me/79278441212",
        telegramUrl: "https://t.me/mariakim_permanent",
        vkUrl: "https://vk.ru/mkimpermanent",

        images: {
            hero: "assets/illustrations/gallery_cosmetics.jpg",
            gallery: STANDARD_STUDIO_GALLERY
        },

        services: [
            { id: "k1", cat: "FACE", name: "Перманентный макияж бровей (пудровое напыление)", duration: 120, price: 4500 },
            { id: "k2", cat: "FACE", name: "Акварельный перманент губ с эффектом объема", duration: 120, price: 4500 },
            { id: "k3", cat: "FACE", name: "Заполнение межресничного пространства (выразительный взгляд)", duration: 75, price: 3000 },
            { id: "k4", cat: "FACE", name: "Ламинирование + окрашивание ресниц с ботоксом", duration: 60, price: 1600 },
            { id: "k5", cat: "FACE", name: "Художественное моделирование и стойкое окрашивание бровей", duration: 40, price: 800 }
        ],

        reviews: [
            {
                author: "Светлана",
                stars: 5,
                text: "Делала пудровые брови у Марии. Результат превзошел все ожидания! Форма подобрана идеально под черты лица, цвет натуральный. Процедура прошла совершенно безболезненно. Спасибо!"
            },
            {
                author: "Анна С.",
                stars: 5,
                text: "Очень уютная и стильная студия. Делала межресничку и ламинирование ресниц. Взгляд преобразился, утром экономлю 20 минут времени. Рекомендую всем девушкам!"
            }
        ]
    }
};

/**
 * Определение активного салона:
 * Строго из GET-параметра ?salon=...
 * Если параметр отсутствует или салон не найден — возвращает null (отображается пустая страница).
 */
function getActiveSalon() {
    const urlParams = new URLSearchParams(window.location.search);
    const requested = urlParams.get('salon');
    if (requested && SALONS_DATABASE[requested.toLowerCase()]) {
        return SALONS_DATABASE[requested.toLowerCase()];
    }
    // БЕЗ GET-ПАРАМЕТРА — ВОЗВРАЩАЕМ NULL!
    return null;
}
