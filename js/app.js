/**
 * ДВИЖОК ШАБЛОНА БЬЮТИ-СФЕРЫ
 */
let currentSalon = null;
let selectedServices = new Set();
let currentTab = 'ALL';

function initApp() {
    // Получаем текущий салон из GET-параметра ?salon=...
    currentSalon = getActiveSalon();
    const landingApp = document.getElementById('landingApp');

    // ТРЕБОВАНИЕ: При открытии без GET-параметра отображается абсолютно ПУСТАЯ страница
    if (!currentSalon) {
        if (landingApp) landingApp.remove();
        document.body.innerHTML = '';
        document.title = '';
        return;
    }

    // Если салон передан в GET-параметре — показываем лендинг
    if (landingApp) landingApp.style.display = 'block';

    // 1. Обновляем заголовки страницы
    document.title = `${currentSalon.name} — ${currentSalon.tagline} (${currentSalon.city})`;
    
    // 2. Шапка: Монограмма, название студии, телефон
    const monogramEl = document.getElementById('brandMonogram');
    if (monogramEl) {
        monogramEl.innerText = currentSalon.monogramLetter || currentSalon.name[0];
    }
    document.getElementById('brandNameText').innerText = currentSalon.name;
    document.getElementById('brandSuffixText').innerText = currentSalon.brandSuffix;
    document.getElementById('brandCityText').innerText = currentSalon.city;
    
    const phoneNumEl = document.getElementById('navPhoneNum');
    if (phoneNumEl) {
        phoneNumEl.innerText = currentSalon.phoneDisplay;
    }
    const phoneLinkEl = document.getElementById('navPhoneLink');
    if (phoneLinkEl) {
        phoneLinkEl.href = `tel:${currentSalon.phoneRaw}`;
    }
    
    const mobilePhone = document.getElementById('mobileNavPhoneLink');
    if (mobilePhone) {
        mobilePhone.innerText = `📞 ${currentSalon.phoneDisplay}`;
        mobilePhone.href = `tel:${currentSalon.phoneRaw}`;
    }

    // 3. Первый экран
    document.getElementById('heroLabel').innerText = `${currentSalon.name} • ${currentSalon.tagline}`;
    document.getElementById('heroHeading').innerHTML = currentSalon.heroTitle;
    document.getElementById('heroLead').innerText = currentSalon.heroLead || currentSalon.heroDescription;
    
    const highlightsContainer = document.getElementById('heroHighlights');
    if (highlightsContainer && currentSalon.heroHighlights) {
        highlightsContainer.innerHTML = currentSalon.heroHighlights.map(h => `
            <div class="highlight-item">
                <span class="highlight-dot">✦</span>
                <span>${h}</span>
            </div>
        `).join('');
    }
    
    document.getElementById('trustRating').innerText = `${currentSalon.yandexRating} из 5.0`;
    document.getElementById('trustReviews').innerText = `${currentSalon.yandexReviewsCount} отзывов на Яндекс Картах`;

    const heroImg = document.getElementById('heroMainImg');
    if (heroImg && currentSalon.images && currentSalon.images.hero) {
        heroImg.src = currentSalon.images.hero;
    }

    // 4. Плавающая карточка локации
    document.getElementById('floatCardLocation').innerText = `${currentSalon.city}, ${currentSalon.address}`;

    // 5. Интерактивный конструктор визита
    document.getElementById('receiptSalonTitle').innerText = `${currentSalon.name} Ritual`;
    renderPlannerServices('ALL');
    updateReceipt();

    // 6. Галерея пространства
    renderGallery();

    // 7. Отзывы из Яндекс Карт
    renderReviews();

    // 8. Контакты и точная карта
    document.getElementById('contactAddressVal').innerText = `${currentSalon.city}, ${currentSalon.address}`;
    document.getElementById('contactPhoneVal').innerText = currentSalon.phoneDisplay;
    document.getElementById('contactPhoneVal').href = `tel:${currentSalon.phoneRaw}`;
    document.getElementById('contactHoursVal').innerText = currentSalon.workHours;
    
    document.getElementById('footerWaBtn').href = currentSalon.whatsappUrl;
    document.getElementById('footerYmBtn').href = currentSalon.yandexMapsUrl;
    document.getElementById('mobileWaBtn').href = currentSalon.whatsappUrl;

    // Встраивание карты с точной красной меткой на здание
    const mapIframe = document.getElementById('yandexMapIframe');
    if (mapIframe && currentSalon.coords) {
        const coordsClean = currentSalon.coords.trim();
        const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${coordsClean}&z=16&pt=${coordsClean},pm2rdm`;
        mapIframe.src = mapUrl;
    }

    // 9. Подвал
    document.getElementById('footerBrandName').innerText = `${currentSalon.name}`;
    document.getElementById('footerTagline').innerText = currentSalon.heroDescription;
    document.getElementById('footerCityLine').innerText = `${currentSalon.city}, ${currentSalon.address}`;
    document.getElementById('footerPhoneLine').innerText = currentSalon.phoneDisplay;
    document.getElementById('footerPhoneLine').href = `tel:${currentSalon.phoneRaw}`;
    document.getElementById('copyrightName').innerText = currentSalon.name;
    const footerBottomAddr = document.getElementById('footerBottomAddress');
    if (footerBottomAddr) {
        footerBottomAddr.innerText = `${currentSalon.city} • ${currentSalon.address}`;
    }
}

/**
 * РЕНДЕР УСЛУГ В КОНСТРУКТОРЕ
 */
function renderPlannerServices(category) {
    const container = document.getElementById('servicesPickerList');
    if (!container || !currentSalon.services) return;

    let filtered = currentSalon.services;
    if (category !== 'ALL') {
        filtered = currentSalon.services.filter(s => s.cat === category);
    }

    container.innerHTML = filtered.map(s => {
        const isChecked = selectedServices.has(s.id);
        return `
            <div class="service-select-item ${isChecked ? 'selected' : ''}" onclick="toggleService('${s.id}')">
                <div class="service-info">
                    <div class="name">${s.name}</div>
                    <div class="duration">⏱ ${s.duration} минут</div>
                </div>
                <div class="service-price-block">
                    <div class="price">${s.price.toLocaleString('ru-RU')} ₽</div>
                    <div class="custom-check"></div>
                </div>
            </div>
        `;
    }).join('');
}

function switchPlannerTab(cat) {
    currentTab = cat;
    const tabs = document.querySelectorAll('.planner-tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick').includes(`'${cat}'`)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    renderPlannerServices(cat);
}

function toggleService(id) {
    if (selectedServices.has(id)) {
        selectedServices.delete(id);
    } else {
        selectedServices.add(id);
    }
    renderPlannerServices(currentTab);
    updateReceipt();
}

function updateReceipt() {
    const listEl = document.getElementById('receiptItemsList');
    if (!listEl) return;

    if (selectedServices.size === 0) {
        listEl.innerHTML = `<div class="receipt-empty-msg">Кликните на интересующие процедуры слева, чтобы сформировать программу визита со скидкой 10%</div>`;
        document.getElementById('totalDurationText').innerText = '0 мин';
        document.getElementById('subtotalPriceText').innerText = '0 ₽';
        document.getElementById('discountText').innerText = '-0 ₽';
        document.getElementById('finalPriceText').innerText = '0 ₽';
        return;
    }

    let subtotal = 0;
    let totalMinutes = 0;
    let itemsHtml = '';

    const selectedList = currentSalon.services.filter(s => selectedServices.has(s.id));
    selectedList.forEach(s => {
        subtotal += s.price;
        totalMinutes += s.duration;
        itemsHtml += `
            <div class="receipt-item-row">
                <span class="item-name">${s.name}</span>
                <span class="item-price">${s.price.toLocaleString('ru-RU')} ₽</span>
            </div>
        `;
    });

    listEl.innerHTML = itemsHtml;

    // Скидка 10% на первый визит
    const discount = Math.round(subtotal * 0.10);
    const finalPrice = subtotal - discount;

    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    let timeStr = '';
    if (hours > 0) timeStr += `${hours} ч `;
    if (mins > 0 || hours === 0) timeStr += `${mins} мин`;

    document.getElementById('totalDurationText').innerText = timeStr;
    document.getElementById('subtotalPriceText').innerText = `${subtotal.toLocaleString('ru-RU')} ₽`;
    document.getElementById('discountText').innerText = `-${discount.toLocaleString('ru-RU')} ₽`;
    document.getElementById('finalPriceText').innerText = `${finalPrice.toLocaleString('ru-RU')} ₽`;
}

function sendBooking(channel) {
    if (selectedServices.size === 0) {
        alert('Пожалуйста, выберите хотя бы одну процедуру для бронирования.');
        return;
    }

    const selectedList = currentSalon.services.filter(s => selectedServices.has(s.id));
    let text = `Здравствуйте! Хочу записаться в салон «${currentSalon.name}» (${currentSalon.address}):\n\n`;
    
    let subtotal = 0;
    let totalMinutes = 0;
    selectedList.forEach((s, idx) => {
        text += `${idx + 1}. ${s.name} (${s.price} ₽)\n`;
        subtotal += s.price;
        totalMinutes += s.duration;
    });

    const discount = Math.round(subtotal * 0.10);
    const finalPrice = subtotal - discount;

    text += `\nРасчетное время: ~${totalMinutes} мин.`;
    text += `\nИтого со скидкой 10%: ${finalPrice} ₽.`;
    text += `\nПодскажите, какие есть свободные окошки на этой неделе?`;

    const encoded = encodeURIComponent(text);

    if (channel === 'WA') {
        const phone = currentSalon.extraPhone ? currentSalon.extraPhone.replace(/\D/g, '') : currentSalon.phoneRaw.replace(/\D/g, '');
        window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
    } else {
        window.open(`${currentSalon.telegramUrl}?text=${encoded}`, '_blank');
    }
}

/**
 * РЕНДЕР ГАЛЕРЕИ
 */
function renderGallery() {
    const container = document.getElementById('galleryGridContainer');
    if (!container || !currentSalon.images || !currentSalon.images.gallery) return;

    container.innerHTML = currentSalon.images.gallery.map(item => `
        <div class="gallery-item ${item.span || ''}">
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <span class="gallery-overlay-badge">${item.title}</span>
        </div>
    `).join('');
}

/**
 * РЕНДЕР ОТЗЫВОВ ИЗ ЯНДЕКС КАРТ
 */
function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container || !currentSalon.reviews) return;

    container.innerHTML = currentSalon.reviews.map(r => `
        <div class="review-quote-card">
            <div class="review-top">
                <div class="review-stars">★★★★★</div>
                <span class="review-badge-verified">Проверенный отзыв</span>
            </div>
            <p class="review-text">«${r.text}»</p>
            <div class="review-author">
                <strong>${r.author}</strong>
                <span>Клиент салона «${currentSalon.name}»</span>
            </div>
        </div>
    `).join('');
}

/**
 * МОБИЛЬНАЯ НАВИГАЦИЯ
 */
function toggleMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileNavDrawer');
    if (btn && drawer) {
        btn.classList.toggle('open');
        drawer.classList.toggle('open');
    }
}

function closeMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileNavDrawer');
    if (btn && drawer) {
        btn.classList.remove('open');
        drawer.classList.remove('open');
    }
}

// Запуск инициализации при загрузке документа
document.addEventListener('DOMContentLoaded', initApp);
