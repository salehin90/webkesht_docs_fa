
---
title: راهنمای جامع معرفی سیستم های آبیاری به وب‌کشت
description:  معرفی سیستم های آبیاری و پارامترهای اساسی جهت معرفی به سامانه آبیاری هوشمند وب کشت
---
<div class="container">
        <div class="header">
            <h1> راهنمای تعیین سیستم‌های آبیاری برای مدیریت هوشمند آبیاری 💧</h1>
        </div>

        <div class="content">
            <p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;">
                برای تنظیم زمان و میزان دقیق آبیاری توسط سامانه، ضروری است که اطلاعات فنی سیستم‌های آبیاری مورد استفاده در فضای سبز، باغ یا مزرعه‌ی خود را تعریف کنید.
            </p>

                هدف این بخش این است که شما سیستم‌های متفاوتی را که آب را به گیاهان می‌رسانند (مانند بارانی، قطره‌ای، یا زیرسطحی)، همراه با دو پارامتر کلیدی تعریف کنید: <strong>راندمان</strong> و <strong>شدت پخش</strong>.

            <!-- بخش 1: راندمان سیستم آبیاری -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>⚙️ راندمان سیستم آبیاری (Efficiency)</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">💧 راندمان چیست؟</h4>
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            راندمان نشان می‌دهد که چه درصدی از آب توزیع شده توسط سیستم، <strong>عملاً در ناحیه ریشه گیاه ذخیره می‌شود</strong> و هدر نمی‌رود (به دلیل تبخیر، بادبردگی، یا نشت).
                        </p>

                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">⚡ اهمیت راندمان</h4>
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            در محاسبات از این عدد برای <strong>جبران هدررفت آب</strong> استفاده می‌شود. هر چه راندمان سیستم بالاتر باشد، میزان هدررفت آب کمتر و بهره‌وری آبیاری بیشتر خواهد بود.
                        </p>

                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">📊 محدوده راندمان برای سیستم‌های مختلف آبیاری</h4>

                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>نوع سیستم آبیاری</th>
                                        <th>راندمان (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>آبیاری قطره‌ای</strong></td>
                                        <td>85-95 (معمولاً 90)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>آبیاری بارانی</strong></td>
                                        <td>70-85 (معمولاً 75)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>آبیاری غرقابی/جویچه‌ای</strong></td>
                                        <td>50-70 (معمولاً 60)</td>
                                    </tr>
                                    <tr>
                                        <td><strong>آبیاری زیرسطحی</strong></td>
                                        <td>90-95</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="note-box">
                            <strong>📌 نکته:</strong> در صورت وجود، از مقادیر اندازه‌گیری شده یا توصیه‌شده توسط سازنده یا طراح سیستم استفاده کنید.
                        </div>
                    </div>
                </div>
            </div>

            <div class="separator"></div>

            <!-- بخش 2: شدت پخش -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>💦 شدت پخش گسیلنده‌ها (Application Rate)</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">🔍 شدت پخش چیست؟</h4>
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            شدت پخش، <strong>سرعتی</strong> است که آب توسط سیستم به خاک تحویل داده می‌شود. این پارامتر بر حسب <strong>میلی‌متر در ساعت (mm/hr)</strong> بیان می‌شود.
                        </p>

                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">⚡ اهمیت شدت پخش</h4>
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            این عدد تعیین می‌کند که آب با چه سرعتی به زمین می‌رسد و مستقیماً بر <strong>مدت زمان آبیاری</strong> اثر می‌گذارد. نرم‌افزار از این پارامتر برای محاسبه دقیق اینکه شیر باید چند دقیقه باز بماند تا مقدار آب مورد نیاز تأمین شود، استفاده می‌کند.
                        </p>

                        <!-- زیربخش 1: آبیاری بارانی -->
                        <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>🌧️ نحوه محاسبه برای آبیاری بارانی</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
                                    <p style="margin-bottom: 18px; text-align: justify; line-height: 1.8;">
                                        برای محاسبه شدت پخش در سیستم‌های بارانی، از فرمول زیر استفاده کنید:
                                    </p>

                                    <div class="formula-box">

                                        📊 شدت پخش $=$ حجم کل آب خروجی $(l/h)$ $\div$ سطح تحت پوشش $(m^2)$
                                    </div>

<p style="margin-bottom: 18px; text-align: justify; line-height: 1.8;">برای محاسبه ساده، معمولاً خروجی تمام نازل‌ها را در یک زیرواحد جمع و بر کل مساحت آن زیرواحد تقسیم کنید.</p>

                                    <h4 style="margin: 20px 0 12px 0; color: #2c3e50;">💡 مثال عملی:</h4>
                                    <p style="text-align: justify; margin-bottom: 18px; line-height: 1.8;">
                                        اگر مجموع خروجی نازل‌ها <strong>400 لیتر در ساعت</strong> و مساحت زیرواحد <strong>100 متر مربع</strong> باشد:
                                    </p>

                                    <div class="formula-ex">
                                        شدت پخش $=$ $400$ $\div$ $100$ $=$ $4$ میلی‌متر بر ساعت
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- زیربخش 2: آبیاری قطره‌ای -->
                        <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>💧 نحوه محاسبه برای آبیاری قطره‌ای</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
                                    <p style="margin-bottom: 18px; text-align: justify; line-height: 1.8;">
                                        برای محاسبه شدت پخش تقریبی در سیستم‌های قطره‌ای:
                                    </p>

                                    <div class="formula-box">
                                        📊 شدت پخش تقریبی $=$ دبی هر قطره‌چکان $(l/h)$ $\div$ سطح اختصاصی به هر قطره‌چکان $(m^2)$
                                    </div>

                                    <h4 style="margin: 20px 0 12px 0; color: #2c3e50;">💡 مثال عملی:</h4>
                                    <p style="text-align: justify; margin-bottom: 10px; line-height: 1.8;">
                                        فرض کنید:
                                    </p>
                                    <ul style="margin: 10px 0 18px 25px; line-height: 1.8;">
                                        <li>دبی قطره‌چکان: <strong>4 لیتر در ساعت</strong></li>
                                        <li>فاصله بین قطره‌چکان‌ها: <strong>1 متر</strong></li>
                                        <li>فاصله بین ردیف‌ها: <strong>1 متر</strong></li>
                                        <li>سطح اختصاصی هر قطره‌چکان: $1 \times 1 = 1$ متر مربع</li>
                                    </ul>

                                    <div class="formula-ex">
                                        شدت پخش $=$ $4$ $\div$ $1$ $=$ $4$ میلی‌متر بر ساعت
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="note-box" style="margin-top: 20px;">
                            <strong>📚 نکته مهم:</strong> اگر کاتالوگ یا دفترچه راهنمای فنی گسیلنده‌های مورد استفاده (مانند آبپاش‌ها یا قطره‌چکان‌ها) در دسترس شماست، می‌توانید شدت پخش تعریف‌شده توسط شرکت سازنده را مستقیماً وارد کنید.
                        </div>
                    </div>
                </div>
            </div>

            <div class="separator"></div>

            <!-- بخش 3: جمع‌بندی -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>✅ جمع‌بندی و راهنمای استفاده</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <div class="highlight">
                            <h4 style="margin: 0 0 15px 0; color: #2c5f2d;">🎯 با تعریف دقیق این دو پارامتر کلیدی، سامانه قادر خواهد بود:</h4>
                            <ul style="margin: 10px 0 0 25px; line-height: 1.9;">
                                <li>میزان دقیق آب مورد نیاز را محاسبه کند</li>
                                <li>مدت زمان آبیاری را به درستی تعیین کند</li>
                                <li>هدررفت آب را به حداقل برساند</li>
                                <li>بهره‌وری آبیاری را بهینه‌سازی کند</li>
                            </ul>
                        </div>

                        <p style="margin-top: 25px; text-align: justify; line-height: 1.8;">
                            توصیه می‌شود برای دستیابی به بهترین نتایج، از اطلاعات فنی دقیق سیستم آبیاری خود استفاده کنید و در صورت امکان با متخصصان آبیاری مشورت نمایید.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>



