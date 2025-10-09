---
title: راهنمای شروع سریع آبیاری هوشمند با وب‌کشت
description: در این راهنمای جامع، گام به گام با راه‌اندازی و اولین استفاده از سامانه مدیریت هوشمند آبیاری وب‌کشت آشنا شوید و کار خود را شروع کنید.
---
<script>
// ایجاد overlay برای نمایش تمام صفحه
document.addEventListener('DOMContentLoaded', function() {
    // ایجاد المان overlay
    const overlay = document.createElement('div');
    overlay.className = 'image-fullscreen-overlay';
    overlay.innerHTML = '<div class="fullscreen-close-btn">✕</div>';
    document.body.appendChild(overlay);

    // انتخاب تمام تصاویر داخل image-container
    const images = document.querySelectorAll('.image-container img');
    
    images.forEach(img => {
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // ایجاد کپی از تصویر برای نمایش
            const clonedImg = this.cloneNode(true);
            clonedImg.style.cursor = 'zoom-out';
            
            // پاک کردن محتوای قبلی overlay
            const existingImg = overlay.querySelector('img');
            if (existingImg) {
                existingImg.remove();
            }
            
            // اضافه کردن تصویر جدید
            overlay.appendChild(clonedImg);
            overlay.classList.add('active');
            
            // غیرفعال کردن اسکرول
            document.body.style.overflow = 'hidden';
        });
    });
    
    // بستن overlay با کلیک روی پس‌زمینه یا دکمه بستن
    overlay.addEventListener('click', function() {
        closeFullscreen();
    });
    
    // بستن با کلید ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeFullscreen();
        }
    });
    
    function closeFullscreen() {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // حذف تصویر پس از انیمیشن
        setTimeout(() => {
            const img = overlay.querySelector('img:not(.fullscreen-close-btn)');
            if (img) img.remove();
        }, 300);
    }
});
</script>

<div class="container">

    <div class="header">
            <h1>🌱 راهنمای شروع سریع سامانه مدیریت آبیاری وب‌کشت 💧</h1>
            <p>راهنمای کامل کار با سامانه هوشمند مدیریت آبیاری وب‌کشت - از ثبت‌نام تا مدیریت هوشمند آبیاری</p>
    </div>

<div class="content">

            <p style="margin-bottom: 25px; text-align: justify; line-height: 1.8; font-size: 1.1em;">
                به سامانه هوشمند مدیریت آبیاری وب‌کشت خوش آمدید. این راهنما شما را در فرآیند ثبت‌نام، ایجاد پروژه و تعریف پارامترهای اساسی یاری می‌کند.
            </p>

</div>

<!-- بخش اول: ثبت‌نام و ورود -->
 
<div class="main-section" >
    <div class="section-header" onclick="toggleSection(this)"  >
                    <span> 👤 راهنمای ثبت‌نام و ورود به حساب کاربری</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify;">
                            برای استفاده از امکانات سامانه، ابتدا باید یک حساب کاربری ایجاد کنید.
                        </p>
                        <!-- زیربخش عضویت -->
                        <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>📝 عضویت در سامانه</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
                                    <div class="method-steps">
                                        <h4>📋 مراحل انجام:</h4>
                                        <div class="step-timeline">
                                            <div class="timeline-item">
                                                <strong>مرحله 1:</strong>
                                                 ابتدا به وب‌سایت <strong>وب‌کشت</strong> به آدرس 
												<a href="https://webkesht.com" target="_blank"><span class="message-code"> https://webkesht.com </span class="message-code"></a>
												مراجعه کنید.
                                            </div>
                                            <div class="timeline-item">
                                                <strong>مرحله 2:</strong> در صفحه اصلی، روی دکمه <strong>«ورود به سامانه»</strong> کلیک کنید.
												<div class="image-container">
                                                <img src="images/01.home.JPG"  alt="تصویر ورود به سامانه">
                                            </div>
                                            </div>
                                            <div class="timeline-item">
                                                <strong>مرحله 3:</strong> در صفحه ورود، گزینه <strong>«ثبت‌نام»</strong> را انتخاب نمایید.
												<div class="image-container">
                                                <img src="images/02.signin.JPG" alt="تصویر صفحه ثبت‌نام">
                                            </div>
                                            </div>
											<div class="timeline-item">
                                                <strong>مرحله 4:</strong> فرم عضویت را با اطلاعات زیر تکمیل کنید:
                                                <ul style="margin-top: 10px;">
												  <li><strong>ایمیل:</strong> یک آدرس ایمیل معتبر و منحصر به فرد وارد کنید. این ایمیل به عنوان نام کاربری شما استفاده خواهد شد.</li>
                                                    <li> <strong>رمز عبور:</strong> یک رمز عبور قوی با حداقل ۶ کاراکتر (شامل حروف بزرگ و کوچک انگلیسی، اعداد و نمادها) انتخاب کنید.</li>
												</ul>
                                            </div>
											<div class="timeline-item">
                                                <strong>مرحله 5:</strong> پس از تکمیل فرم، روی دکمه <strong>«ثبت‌نام»</strong> کلیک کنید.
												<div class="image-container">
                                                 <img src="images/03.signinForm.JPG" alt="تصویر دکمه ثبت‌نام">
                                            </div>
                                            </div>
                                            <div class="timeline-item">
                                                <strong>مرحله 6: </strong> پیغام <span class="message-code">Registration accepted. Please check your email for further instructions</span> به معنای موفقیت‌آمیز بودن این مرحله است. اکنون به صندوق ورودی ایمیل خود مراجعه کنید.
												<div class="image-container">
                                                 <img src="images/04.signinRegNote.JPG" alt="پیغام تأیید">
                                            </div>
                                            </div>
											<div class="timeline-item">
                                                <strong>مرحله 7:</strong> در ایمیل ارسال شده از طرف وب‌کشت، روی لینک <strong><span class="message-code">confirm your registration</span></strong> کلیک کنید تا حساب کاربری شما فعال شود.
                                            <div class="image-container">
                                                 <img src="images/05.Email.JPG" alt="ایمیل تأیید">
                                            </div>
											</div>
											<div class="timeline-item">
                                                <strong>مرحله 8:</strong> پس از تأیید، شما به صفحه ورود بازگردانده می‌شوید و پیغام <span class="message-code">Your registration has been confirmed</span> نمایش داده می‌شود. ثبت‌نام شما با موفقیت به پایان رسیده است.
												<div class="image-container">
                                                 <img src="images/06.EmailRegNote.JPG" alt="تأیید نهایی">
                                            </div>
                                            </div>
											

                                        </div>
                                    </div>
								</div>
                         </div>            
                               </div>                             

                         <!-- زیربخش ورود -->
                        <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>🔑 ورود به سامانه</span>
                                <span class="sub-icon">−</span>
                            </div>
							<div class="sub-content">
							<div class="sub-body">
                            
							<div class="timeline-item">
                                                <strong>مرحله 1:</strong>در صفحه ورود، ایمیل (نام کاربری) و رمز عبوری که هنگام ثبت‌نام تعیین کرده‌اید را وارد کنید.
                                                </div>
							
							
							<div class="timeline-item">
                                                <strong>مرحله 2:</strong> روی دکمه <strong> ورود </strong> کلیک کنید تا به پنل کاربری خود منتقل شوید.
												<div class="image-container">
                                                <img src="images/07.LoginForm.JPG" alt="صفحه ورود">
                                            </div>
                              </div>
                            <div class="sub-content">
                                <div class="sub-body">
                                    
                                    <div class="note-box">
                                        <strong>📌 نکات مهم پنل کاربری:</strong>
                                        <ul>
                                            <li>برای تغییر تم سامانه به حالت روشن/تاریک، روی آیکون <strong>خورشید/ماه</strong> کلیک کنید.</li>
                                            <li>برای تغییر رمز عبور یا خروج از حساب کاربری، روی <strong>آیکون پروفایل کاربری</strong> کلیک نمایید.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
					</div>
                </div>
				</div>
                </div>

            <div class="separator"></div>

 <!-- بخش دوم: مدیریت پروژه‌ها -->

            <div class="main-section" >
                <div class="section-header" onclick="toggleSection(this)">
                    <span>📁 راهنمای مدیریت پروژه‌ها</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify;">
                             هر پروژه در وب‌کشت می‌تواند معرف یک مزرعه، باغ یا فضای سبز مجزا باشد.
                        </p>
                      <!-- زیربخش ایجاد پروژه -->
					  <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>➕ ایجاد پروژه جدید</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
                                    <div class="method-steps">
                                        <h4>📋 مراحل انجام:</h4>
                                        <div class="step-timeline">
											<div class="timeline-item">
                                                <strong>مرحله 1:</strong>پس از اولین ورود، شما در صفحه "لیست پروژه‌ها" قرار دارید. برای شروع، روی دکمه <strong>«جدید»</strong> کلیک کنید.
												<div class="image-container">
													<img src="images/08.ProjectList.JPG" alt="لیست پروژه‌ها">
													</div>
												</div>
											</div>
											
											<div class="timeline-item">
                                                <strong>مرحله 2:</strong>در فرم باز شده، <strong>نام پروژه</strong> و <strong>توضیحات</strong> مربوط به آن را وارد نمایید.
											</div>
											
											<div class="timeline-item">
                                                <strong>مرحله 3:</strong>روی دکمه <strong>«ذخیره»</strong> کلیک کنید. پروژه جدید شما در "لیست پروژه‌ها" نمایش داده خواهد شد.
												<div class="image-container">
													<img src="images/09.CreateNewProject.JPG" alt="ایجاد پروژه">
													</div>
												</div>
											</div>
                                    </div>
								</div>
                         </div>            
                                 
                       
                 

                        <!-- زیربخش کار با لیست -->
						<div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>📋 کار با لیست پروژه‌ها</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
								<p>جدول لیست پروژه‌ها اطلاعات زیر را نمایش می‌دهد:</p>
                                    <div class="method-steps">
                                        <h4>📋 مراحل انجام:</h4>
                                        <div class="step-timeline">
											<div class="timeline-item">
                                                <strong>شناسه:</strong> کد یکتای پروژه
											</div>
											<div class="timeline-item">
                                                <strong>نام پروژه:</strong> نامی که شما انتخاب کرده‌اید
											</div>
											<div class="timeline-item">
                                                <strong>وضعیت:</strong>فعال یا غیرفعال بودن پروژه
											</div>
											<div class="timeline-item">
                                                <strong>عملیات:</strong>
												<ul style="margin-top: 10px;">
												  <li><strong>نمایش:</strong> ورود به صفحه مدیریت پروژه (نقشه و تنظیمات)</li>
                                                    <li> <strong>حذف:</strong> حذف کامل پروژه</li>
												</ul>
												
												 <div class="image-container">
													<img src="images/10.NewProjectList.JPG" alt="جدول پروژه‌ها">
												</div>
											</div>
											<div class="note-box">
                                        <strong>💡 نکته:</strong> در جداول بزرگ، می‌توانید از نوار <strong>«جستجو...»</strong> برای یافتن سریع آیتم‌ها، تغییر تعداد نمایش در هر صفحه و جابجایی بین صفحات استفاده کنید.
                                        <div class="image-container" style="margin-top: 15px;">
                                            <img src="images/11.ProjectListSearch.JPG" alt="ابزارهای جستجو">
                                        </div>
                                    </div>
											
                                    </div>
								</div>
                            </div>            
                        </div>           
                 </div>       
                 </div>
                 </div>
				<div class="separator"></div>

            <!-- بخش سوم: پارامترهای پایه -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>⚙️ راهنمای تعریف پارامترهای پایه پروژه</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify;">
                            پس از ایجاد پروژه، با کلیک بر روی <strong>«نمایش»</strong> وارد محیط مدیریت آن شوید. در ستون سمت راست، ابزارهایی برای تعریف مشخصات فیزیکی پروژه شما قرار دارد. برای مدیریت بهینه آبیاری، ابتدا باید اطلاعات مربوط به سیستم آبیاری، خاک و پوشش گیاهی را تعریف کنید (با ایجاد پروژه، به صورت پیش فرض اطلاعات پایه‌ای وجود دارد که از آن نیز می‌توانید استفاده کنید).
                        </p>

                        <div class="image-container">
                            <img src="images/12.ProjectHome.JPG" alt="محیط مدیریت پروژه">
                        </div>

                        <!-- زیربخش سیستم‌های آبیاری -->
						<div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>💧 مدیریت سیستم‌های آبیاری (لیست سیستم آبیاری)</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
								<p>در این بخش، انواع سیستم‌های آبیاری مورد استفاده در پروژه خود را تعریف می‌کنید.</p>
								
								<div class="highlight">
                                        <strong>📝 برای افزودن سیستم جدید:</strong> روی <strong>«اضافه کردن سیستم آبیاری جدید»</strong> کلیک کرده و فرم زیر را تکمیل کنید:
                                </div>
								
                                    <div class="method-steps">
                                        <div class="step-timeline">
											<div class="timeline-item">
                                                <strong>نام سیستم آبیاری:</strong>  مثال: قطره‌چکان 8 لیتر بر ساعت، آبپاش PS10A
											</div>
											<div class="timeline-item">
                                                <strong>شدت پخش (m/h):</strong>میزان آبی که سیستم در واحد زمان و سطح پخش می‌کند.
											</div>
											<div class="timeline-item">
                                                <strong>راندمان آبیاری (%):</strong> راندمان آبیاری را بر اساس نوع سیستم آبیاری مشخص کنید.
											</div>
											<div class="timeline-item">
                                                <strong>عملیات:</strong>شما می‌توانید سیستم‌های موجود را <strong>ویرایش</strong>، <strong>حذف</strong> یا <strong>تکرار (کپی)</strong> کنید.
											</div>
											<div class="timeline-item">
                                                <strong>خروجی:</strong> می‌توانید لیستی از سیستم‌های تعریف‌شده را در فرمت <strong>Excel</strong> یا <strong>CSV</strong> دریافت کنید</li>.
											</div>

                            <div class="sub-content">
                                <div class="sub-body">
                                    
                                    <div class="note-box">
                                        <strong>📌 راهنمایی تکمیلی:</strong>
                                        <ul>
                                            <li></strong> برای اطلاعات بیشتر در مورد انواع سیستم های آبیاری، به بخش <strong> راهنمای کاربری > 
                                            <a href="https://webkesht.com/user-guide/Irrigation/" target="_blank"><span> انواع سیستم های آبیاری</span class="message-code"></a>
                                            </strong> در سایت مراجعه کنید.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

											<div class="image-container">
													<img src="images/13.IrrigationList.JPG" alt="مدیریت سیستم‌های آبیاری">
												</div>
                                    </div>
								</div>
                         </div>            
                    </div>           
                 </div>  

 						<!-- زیربخش انواع خاک -->

						<div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>🌍 مدیریت انواع خاک (لیست خاک‌ها)</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
								<p>در این بخش، بافت‌های مختلف خاک موجود در پروژه خود را تعریف می‌کنید.</p>
								<div class="highlight">
                                        <strong>📝 برای افزودن خاک جدید:</strong> روی <strong>«افزودن خاک جدید»</strong> کلیک کرده و موارد زیر را تکمیل کنید:
                                </div>
                                    <div class="method-steps">
                                        <div class="step-timeline">
											<div class="timeline-item">
                                                <strong>نام:</strong> نام بافت خاک. مثال: لومی رسی، شنی
											</div>
											<div class="timeline-item">
                                                <strong>سرعت نفوذ نهایی (m/h):</strong>حداکثر سرعتی که آب می‌تواند در خاک نفوذ کند.
											</div>
											<div class="timeline-item">
                                                <strong>رطوبت نقطه پژمردگی (%): </strong>حداقل رطوبتی که گیاه دیگر قادر به جذب آب نیست.
											</div>
											<div class="timeline-item">
                                                <strong>رطوبت ظرفیت مزرعه (%):</strong> حداکثر رطوبتی که خاک پس از آبیاری و زهکشی در خود نگه می‌دارد.
											</div>
											<div class="timeline-item">
                                                <strong>عملیات: </strong>امکان <strong>ویرایش</strong>، <strong>حذف</strong> و <strong>تکرار</strong> برای هر نوع خاک.
											</div>
												
                                 <div class="sub-content">
                                     <div class="sub-body">
                                    <div class="note-box">
                                        <strong>📌 راهنمایی تکمیلی:</strong>
                                        <ul>
                                            <li></strong>برای اطلاعات بیشتر در مورد مقادیر استاندارد انواع خاک، به بخش<strong>
                                            راهنمای کاربری >
           
                                             <a href="https://webkesht.com/user-guide/Soil/" target="_blank"><span> راهنمای جامع بافت خاک </span class="message-code"></a>
                                             
                                             </strong> مراجعه کنید.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="image-container">
													<img src="images/14.SoilList.JPG" alt="مدیریت سیستم‌های آبیاری">
												</div>
                                    </div>
								</div>
                         </div>            
                    </div>           
                 </div>       

                        <!-- زیربخش پوشش گیاهی -->
						<div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>🌿 مدیریت پوشش گیاهی</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
								<p>در این بخش، انواع گیاهان کاشته‌شده در پروژه خود را تعریف می‌کنید.</p>
								<div class="highlight">
                                        <strong>📝 برای افزودن پوشش گیاهی جدید:</strong> روی <strong>«ایجاد پوشش گیاهی جدید»</strong> کلیک کرده و فرم زیر را تکمیل کنید:
                                </div>
                                    <div class="method-steps">
                                        <div class="step-timeline">
											<div class="timeline-item">
                                                <strong>ضریب گیاهی (Kc):</strong>ضریبی که نیاز آبی گیاه را نسبت به گیاه مرجع مشخص می‌کند.
											</div>
											<div class="timeline-item">
                                                <strong>ضریب تراکم:</strong>ضریبی برای اصلاح نیاز آبی بر اساس تراکم کاشت.
											</div>
											<div class="timeline-item">
                                                <strong>عمق ریشه (cm):</strong> عمق مؤثر ریشه گیاه که در محاسبات آبیاری لحاظ می‌شود.
											</div>
											<div class="timeline-item">
                                                <strong>عملیات:</strong> امکان <strong>ویرایش</strong>، <strong>حذف</strong> و <strong>تکرار</strong> برای هر نوع پوشش گیاهی.</li>
											</div>
									

<div class="sub-content">

                                     <div class="sub-body">
                                    <div class="note-box">
                                        <strong>📌 راهنمایی تکمیلی:</strong>
                                        <ul>
                                            <li></strong>  برای اطلاعات بیشتر در مورد پوشش گیاهی و انتخاب ضرایب، به <strong>
                                            راهنمای کاربری >
           
                                             <a href="https://webkesht.com/user-guide/Vegetation/" target="_blank"><span> پوشش گیاهی </span class="message-code"></a>
                                             
                                             </strong> مراجعه کنید.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

											<div class="image-container">
                                        <img src="images/15.Vegetationlist.JPG" alt="مدیریت پوشش گیاهی">
                                    </div>
                                    </div>
								</div>
                         </div>            
                    </div>           
                 </div> 
				 
				 
                    </div>
                </div>
            </div>

            <div class="separator"></div>

 <!-- بخش چهارم: تعریف واحدهای مدیریتی -->

            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>🗺️ راهنمای تعریف واحدهای مدیریتی بر روی نقشه</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify;">
                            پس از تعریف پارامترهای پایه، نوبت به ترسیم محدوده‌های مدیریتی بر روی نقشه ماهواره‌ای می‌رسد.
                        </p>

<!--  زیربخش ایجاد زیرواحد -->

                        <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>🔷 ایجاد زیرواحد جدید (محدوده شیر برقی)</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
								<p style="margin-bottom: 15px;">زیرواحد یک محدوده جغرافیایی (پلیگون) است که توسط یک شیر برقی یا یک واحد مدیریتی مستقل آبیاری می‌شود.</p>
								
                                    <div class="method-steps">
                                        <h4>📋 مراحل انجام:</h4>
                                        <div class="step-timeline">
                                            <div class="timeline-item">
                                                <strong>مرحله 1:</strong>روی دکمه <strong>«زیر واحد جدید»</strong> کلیک کنید. نشانگر موس برای ترسیم آماده می‌شود.
                                            <div class="image-container">
                                                <img src="images/16.NewSubunit.JPG" alt="دکمه زیرواحد جدید">
                                            </div>
                                            </div>
                                            <div class="timeline-item">
                                                <strong>مرحله 2:</strong>با کلیک‌های متوالی روی نقشه، محدوده مورد نظر خود را رسم کنید. برای بستن محدوده، روی نقطه شروع کلیک کنید.
                                            </div>
                                            <div class="timeline-item">
                                                <strong>مرحله 3:</strong>پس از رسم پلیگون، فرم اطلاعات زیرواحد باز می‌شود. آن را تکمیل کنید:
												<ul style="margin-top: 10px;">
												<li><strong>نام زیر واحد:</strong> یک نام مشخص (مثال: قطعه زعفران شمالی، چمن پارک).</li>
                                                <li><strong>نوع پوشش گیاهی، سیستم آبیاری، نوع خاک:</strong> از لیست‌هایی که در مرحله قبل تعریف کرده‌اید، گزینه مناسب برای این محدوده را انتخاب کنید.</li>
                                                <li><strong>ضریب خرده اقلیم:</strong> برای تنظیم دقیق‌تر نیاز آبی بر اساس شرایط خاص (مانند شیب، سایه‌انداز و ...).</li>
												</ul>
                                                <div class="image-container">
                                                <img src="images/17.AddNewSubunit.JPG" alt="فرم زیرواحد">
												</div>
                                            </div>
											<div class="timeline-item">
                                                <strong>مرحله 4:</strong>روی <strong>«ذخیره»</strong> کلیک کنید.
												
                                            </div>
											
											
									<div class="note-box">
                                    <h4>⚙️ مدیریت زیرواحد:</h4>
										<div class="method-steps">	
											
												<div class="step-timeline">
												<p style="margin-top: 10px;">با کلیک بر روی زیرواحد رسم‌شده روی نقشه، پنجره‌ای با گزینه‌های زیر باز می‌شود:</p>
												<ul style="margin-top: 10px;">
												<li><strong>اطلاعات پایه:</strong> نمایش محاسبات اولیه مانند <strong>دور آبیاری</strong>، <strong>مدت زمان آبیاری</strong> و <strong>دبی</strong>.</li>
												<li><strong>ویرایش:</strong> تغییر اطلاعات اولیه زیرواحد.</li>
												<li><strong>ویرایش سطح:</strong> اصلاح محدوده جغرافیایی پلیگون رسم‌شده.</li>
												<li><strong>مدیریت آبیاری:</strong> تنظیمات پیشرفته نوع برنامه‌ریزی آبیاری.</li>
												<li><strong>گزارشات:</strong> مشاهده تاریخچه آبیاری‌ها.</li>
												<li><strong>حذف:</strong> حذف کامل زیرواحد.</li>
												</ul>
												</div>
										</div>
										<div class="image-container" style="margin-top: 15px;">
                                            <img src="images/18.SubunitManagement.JPG" alt="مدیریت زیرواحد">
                                        </div>
									</div>
                                    </div>
								</div>
                         </div

</div>
</div>
</div>
<!-- زیربخش افزودن دستگاه -->

                        <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>📡 افزودن دستگاه جدید (کنترلر IoT)</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
								<p style="margin-bottom: 15px;">دستگاه، یک تابلو کنترل است که فرمان‌های آبیاری را از سامانه دریافت و به شیرهای برقی ارسال می‌کند.</p>
									
                                    <div class="method-steps">
                                        <h4>📋 مراحل انجام:</h4>
                                        <div class="step-timeline">
                                            <div class="timeline-item">
                                                <strong>مرحله 1:</strong>روی دکمه <strong>«دستگاه جدید»</strong> کلیک کنید.
                                            <div class="image-container">
                                    <img src="images/16.NewSubunit.JPG" alt="دستگاه IoT">
                                    </div>
                                            </div>
                                            <div class="timeline-item">
                                                <strong>مرحله 2:</strong>روی نقشه، محلی که دستگاه در آن نصب شده است را با یک کلیک مشخص کنید.
                                            </div>
                                            <div class="timeline-item">
                                                <strong>مرحله 3:</strong>فرم اطلاعات دستگاه را تکمیل کنید:
												<ul style="margin-top: 10px;">
												<li><strong>نوع دستگاه:</strong> مدل دستگاه کنترلر خود را از لیست انتخاب کنید.</li>
                                                <li><strong>شناسه گیت‌وی IoT، شناسه دستگاه IoT، رمز مالکیت:</strong> این اطلاعات توسط تأمین‌کننده دستگاه در اختیار شما قرار می‌گیرد.</li>
												</ul>
                                                <div class="image-container">
                                                <img src="images/19.AddController.JPG" alt="فرم دستگاه">
                                            </div>
                                            </div>
											<div class="timeline-item">
                                                <strong>مرحله 4:</strong>روی <strong>«ذخیره»</strong> کلیک کنید.
                                            
                                            </div>
											
											
											<div class="note-box">
											<div class="method-steps">	
											<h4>⚙️ مدیریت دستگاه:</h4>
												<div class="step-timeline">
												<p style="margin-top: 10px;">با کلیک روی آیکون دستگاه روی نقشه، پنجره‌ای با گزینه‌های زیر باز می‌شود:</p>
												<ul style="margin-top: 10px;">
												<li><strong>حذف:</strong> حذف دستگاه از پروژه</li>
												<li><strong>مدیریت اتصالات:</strong> این بخش بسیار مهم برای اتصال زیرواحدها به دستگاه است.</li>
												</ul>
												</div>
											</div>
											<div class="image-container" style="margin-top: 15px;">
                                            <img src="images/20.EditController.JPG" alt="مدیریت زیرواحد">
											</div>
											</div>
										</div>
									</div>
								</div>            
							</div>  		
						</div>

<!-- زیربخش اتصال زیرواحد -->

                        <div class="sub-section">
                            <div class="sub-header" onclick="toggleSubSection(this)">
                                <span>🔗 اتصال زیرواحد به دستگاه</span>
                                <span class="sub-icon">−</span>
                            </div>
                            <div class="sub-content">
                                <div class="sub-body">
                                    <ol class="step-list">
                                        <li>در پنجره مدیریت دستگاه، روی <strong>«مدیریت اتصالات»</strong> کلیک کنید.</li>

                                        <li><strong>«ایجاد خروجی جدید»</strong> را انتخاب کنید.</li>

                                        <li>زیرواحد مورد نظر را روی نقشه انتخاب کنید.</li>

                                        <li>پس از اضافه شدن زیرواحد به لیست خروجی‌ها، یک خط‌چین ارتباط بین دستگاه و زیرواحد روی نقشه نمایش داده می‌شود.</li>

                                        <li>این فرآیند را برای تمام زیرواحدها تکرار کنید.</li>
                                    </ol>
                                    <div class="image-container" style="margin-top: 15px;">
                                            <img src="images/21.EditSubunit-Controller.JPG" alt="مدیریت زیرواحد">
                                        </div>
                                    <div class="highlight">
                                        <strong>✅ نکته:</strong> پس از اتصال موفق، خط‌چین ارتباطی بین دستگاه و زیرواحد قابل مشاهده است.
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

   </div>    

<div class="separator"></div>

<!-- بخش پنجم: مدیریت هوشمند آبیاری -->

            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>🤖 راهنمای مدیریت هوشمند آبیاری</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify;">

                        پس از تعریف زیرواحدها و اتصال آن‌ها به دستگاه‌ها، می‌توانید نوع برنامه آبیاری را مشخص کنید. این تنظیمات از طریق گزینه <strong>مدیریت آبیاری</strong> در پنجره هر زیرواحد قابل دسترسی است.
                        </p>

                        <div class="sub-content">
                                <div class="sub-body">
                                    <div class="method-steps">
                                        <h4>انواع برنامه‌ریزی آبیاری:</h4>
                                        <div class="step-timeline">
										
										
                                            <div class="timeline-item">
                                                <strong>آبیاری دستی:</strong>
                                                در این حالت، سامانه فقط محاسبات را انجام می‌دهد و مسئولیت باز و بسته کردن شیرها با کاربر است.
												<div class="image-container">
                                                <img src="images/22.ManualIrrigation.JPG" "alt="تنظیمات آبیاری دستی">
												</div>
                                            </div>
											
											<div class="timeline-item">
                                                <strong>آبیاری اتوماتیک:</strong>
												آبیاری بر اساس یک برنامه زمان‌بندی ثابت و از پیش تعریف‌شده انجام می‌شود و سامانه به صورت خودکار فرمان‌ها را ارسال می‌کند.
                                                
                                                <div class="image-container">
                                                <img src="images/23.AutomaticIrrigation.JPG" "alt="تنظیمات آبیاری اتوماتیک">
												</div>
                                            </div>
											
											<div class="timeline-item">
                                                <strong>آبیاری هوشمند (گزینه پیشنهادی):</strong>
												در این حالت، سامانه هر روز بر اساس 
                                                <strong>اطلاعات هواشناسی آنلاین</strong>
                                                 (دما، رطوبت، تبخیر و تعرق) و مشخصات پروژه، نیاز آبی دقیق را محاسبه و برنامه آبیاری را به صورت پویا اجرا می‌کند. همچنین برنامه آبیاری تا ۷ روز آینده نیز پیش‌بینی و قابل مشاهده است.
											<div class="image-container">
                                            <img src="images/24.SmartIrrigation.JPG" "alt="تنظیمات آبیاری هوشمند">
												</div>
                                            </div>
                                        </div>
                                    </div>
								</div>
                         </div>  
                                          

           
                                                            
                        <div class="highlight" style="margin-top: 25px;">
                            با تکمیل این مراحل، پروژه شما برای مدیریت هوشمند آبیاری آماده است و سامانه وب‌کشت به طور خودکار به بهینه‌سازی مصرف آب در مزرعه، باغ یا فضای سبز شما کمک خواهد کرد.
                        </div>
                    </div>
                </div>
            </div>
        </div>
