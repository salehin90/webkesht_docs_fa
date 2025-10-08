   <div class="container">
        <div class="header">
            <h1>🌱 راهنمای تعیین پارامترهای پوشش گیاهی برای آبیاری هوشمند 💧</h1>
            <p> به راهنمای تعیین پارامترهای پوشش گیاهی سامانه <strong> وب‌کشت </strong>خوش آمدید.  </p>
        </div>

        <div class="content">
            <p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;"> آبیاری بهینه و جلوگیری از هدر رفت آب، مستلزم درک دقیق میزان نیاز آبی گیاهان شما است. سه پارامتر اصلی که الگوریتم‌های آبیاری ما برای محاسبه میزان آب مصرفی واقعی گیاه (Evapotranspiration) به آن نیاز دارند، عبارت‌اند از: <strong>فاکتور گونه</strong>، <strong>ضریب تراکم</strong> و <strong>عمق ریشه</strong>.
            </p>
<p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;"> برای اینکه نرم‌افزار بتواند محاسبات را به صورت دقیق انجام دهد، شما باید پوشش گیاهی را بر اساس <strong>زیرواحدهای آبیاری </strong> (هر محوطه‌ای که توسط <strong>یک شیر مجزا</strong> آبیاری می‌شود) گروه‌بندی کنید و پارامترهای بالا را برای هر گروه تعریف نمایید. </p>


<p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;"> 
<strong>چگونه این لیست را تهیه کنیم؟
 </strong>
</p>
<p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;"> 
قانون اصلی و کلیدی در تعریف پوشش گیاهی در نرم‌افزار، این است که:
 <strong>لیست پوشش‌های گیاهی بر اساس نیاز آبی و مدیریت مشترک زیرواحدهای آبیاری (شیرهای مجزا) تعیین می‌شود.</strong></p>

 <p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;"> 
در واقع، شما برای هر <strong>زیرواحد آبیاری</strong>، مشخص می‌کنید که چه نوع پوششی دارد. اگر چند زیرواحد (چندین شیر) پوشش گیاهی <strong>مشترک</strong> یا <strong>مشابهی</strong> از نظر نیاز آبی داشته باشند، کافی است آن پوشش را <strong>یک بار</strong> در نرم‌افزار تعریف کنید.
</p>
<p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;"> <strong> مثال: </strong> </p>


 <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th> سناریو </th>
                                        <th>زیرواحدهای آبیاری (شیرهای مجزا)</th>
                                        <th>نوع پوشش گیاهی در زیرواحد</th>
                                        <th> نحوه ی تعریف در لیست پوشش گیاهی</th>
                                        <th>منطق تصمیم گیری</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>مثال ۱: فضای سبز</strong></td>
                                        <td>زیرواحد ۱: چمن (بارانی) </br>
                                            زیرواحد ۲: گل‌های فصلی (قطره‌ای)</br>
                                            زیرواحد ۳: درختان (زیرسطحی) </td>
                                        <td>چمن، گل‌های فصلی، درختان</td>
                                        <td>۳ نوع پوشش:</br>
                                            چمن</br>
                                            گل</br>
                                            درخت</td>
                                        <td>هر زیرواحد پوشش و نیاز آبی کاملاً متفاوتی دارد و باید پارامترهای اختصاصی خود را تعریف کنند. </td>     
                                    </tr>
                                    <tr>
                                        <td><strong>مثال ۲: باغ میوه بزرگ</strong></td>
                                        <td>۱۰ زیرواحد مجزا (تمام باغ)</td>
                                        <td>درختان میوه ترکیبی (سیب، آلو، زردآلو)</td>
                                        <td>۱ نوع پوشش: </br>
                                            درختان میوه ترکیبی</td>
                                        <td>با وجود ۱۰ شیر مجزا، چون پوشش در تمامی زیرواحدها مشابه است و نیاز آبی یکسانی دارد، تعریف یک نوع پوشش کفایت می‌کند. </td> 
                                    </tr>   
                                </tbody>
                            </table>

                            
                        </div>
<p style="margin-bottom: 25px; text-align: justify; line-height: 1.8;"> در بخش‌های آتی، راهنمای گام به گام تعیین دقیق فاکتور گونه، ضریب تراکم و عمق ریشه را برای تکمیل این بخش، مشاهده خواهید کرد. </p>



            <!-- بخش 1: فاکتور گونه -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>🌿 فاکتور گونه (Species Factor)</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content ">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            ضریب گونه فارغ از شرایط محیطی و سایر عوامل دیگر با توجه به نوع گونه از نظر میزان نیاز آبی تعیین می‌گردد. این فاکتور نشان می‌دهد گیاه شما نسبت به یک مرجع استاندارد (مانند چمن) چقدر آب بیشتری (یا کمتری) نیاز دارد.
                        </p>

                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">📊 محدوده تغییرات فاکتور گونه:</h4>
                        
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>فاکتور گونه بر اساس نیاز آبی</th>
                                        <th>مقدار فاکتور گونه</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>خیلی کم</strong></td>
                                        <td>کمتر از 0.1</td>
                                    </tr>
                                    <tr>
                                        <td><strong>کم</strong></td>
                                        <td>0.1 - 0.3</td>
                                    </tr>
                                    <tr>
                                        <td><strong>متوسط</strong></td>
                                        <td>0.4 - 0.6</td>
                                    </tr>
                                    <tr>
                                        <td><strong>زیاد</strong></td>
                                        <td>0.7 - 0.9</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="note-box">
                            <strong>📌 نکته:</strong> در جدول مشخصات گونه‌های گیاهی، فاکتور گونه برای چند گونه فضای سبز ارائه شده است. در این جدول <strong>"H"</strong> بیانگر گونه گیاهی پرنیاز، <strong>"M"</strong> بیانگر گونه با نیاز آبی متوسط و <strong>"L"</strong> بیانگر گونه کم‌نیاز است.
                        </div>
                    </div>
                </div>
            </div>

            <div class="separator"></div>

            <!-- بخش 2: ضریب تراکم -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>📐 ضریب تراکم گیاه (Plant Density Factor)</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content ">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            تراکم گیاهان در فضای سبز به علت تفاوت در مرحله بلوغ گیاهان و فاصله بین گونه‌های متنوع گیاهان است. تراکم متوسط شرایطی است که مانند گیاه چمن، سطح تحت کشت تحت پوشش 90 الی 100 درصدی قرار گرفته باشد و با کاهش پوشش از این مقدار، ضریب تراکم می‌تواند تا مقدار 0.5 نیز کاهش پیدا کند.
                        </p>

                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            مقادیر بالاتر از یک برای ضریب تراکم هنگامی مورد کاربرد خواهد بود که بر اثر کشت ترکیبی گیاهان پوششی و سایر گیاهان در کنار یکدیگر، پوشش مضاعف ایجاد شده باشد، مانند کشت درخت و بوته‌ها در بین سطح پوشیده از چمن به صورت لایه‌لایه.
                        </p>

                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">📊محدوده ضریب تراکم برای گیاهان بکار رفته در سطوح فضای سبز:</h4>
                        
                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>نیاز گونه</th>
                                        <th>مقدار ضریب</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>تراکم کم</strong></td>
                                        <td>0.5 - 0.9</td>
                                    </tr>
                                    <tr>
                                        <td><strong>تراکم متوسط</strong></td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td><strong>تراکم بالا</strong></td>
                                        <td>1.1 - 1.3</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

            <div class="separator"></div>

            <!-- بخش 3: عمق ریشه -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>🌳 عمق ریشه (Root Depth)</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content ">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            عمق ریشه تعیین می‌کند که آب باید تا چه عمقی در خاک نفوذ کند تا در دسترس ریشه‌های فعال گیاه قرار گیرد. عمق ریشه به سن گیاه، نوع گیاه (درخت، بوته یا چمن) و شرایط خاک (مانند وجود محدودیت یا عمق سفره آب) بستگی دارد.
                        </p>

                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            در جدول مشخصات گونه‌های گیاهی، عمق ریشه بر اساس نوع سیستم ریشه‌ای گونه‌های گیاهی فضای سبز به صورت توصیفی ارائه شده است.
                        </p>

                        <h4 style="margin: 20px 0 15px 0; color: #2c3e50; font-size: 1.05em;">📏 راهنمای استفاده:</h4>
                        <p style="margin-bottom: 15px; text-align: justify; line-height: 1.8;">
                            عمق ریشه را بر حسب سانتی‌متر برای سیستم خود وارد کنید:
                        </p>

                        <div class="definition-grid">
                            <div class="definition-card">
                                <h3>🌱 کم عمق</h3>
                                <p><strong>محدوده:</strong> 10 - 40 سانتی‌متر</p>
                                <p>مناسب برای گیاهان پوششی و چمن</p>
                            </div>

                            <div class="definition-card">
                                <h3>🌿 متوسط</h3>
                                <p><strong>محدوده:</strong> 40 - 70 سانتی‌متر</p>
                                <p>مناسب برای بوته‌ها و درختچه‌ها</p>
                            </div>

                            <div class="definition-card">
                                <h3>🌳 عمیق</h3>
                                <p><strong>محدوده:</strong> 70 - 150+ سانتی‌متر</p>
                                <p>مناسب برای درختان بزرگ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="separator"></div>

            <!-- بخش 4: جدول مشخصات گونه‌های گیاهی -->
            <div class="main-section">
                <div class="section-header" onclick="toggleSection(this)">
                    <span>📋 جدول مشخصات گونه‌های گیاهی</span>
                    <span class="section-icon">−</span>
                </div>
                <div class="section-content ">
                    <div class="section-body">
                        <p style="margin-bottom: 20px; text-align: justify; line-height: 1.8;">
                            در جدول زیر، اطلاعات کامل نیاز آبی و عمق ریشه برای 64 گونه گیاهی رایج در فضای سبز ارائه شده است:
                        </p>

                        <div class="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ردیف</th>
                                        <th>نام فارسی</th>
                                        <th>نام علمی</th>
                                        <th>نیاز آبی</th>
                                        <th>عمق ریشه (توضیحی)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>آبشار طلایی</td>
                                        <td>Rosa banksiae</td>
                                        <td>M</td>
                                        <td>متوسط تا عمیق؛ ریشه‌ای قوی و گسترده.</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>ابریشم ایرانی</td>
                                        <td>Albizia julibrissin</td>
                                        <td>M</td>
                                        <td>متوسط؛ ریشه‌های گسترده و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>ابریشم مصری</td>
                                        <td>Erythrostemon gilliesii</td>
                                        <td>L</td>
                                        <td>متوسط تا عمیق؛ برای جذب آب در شرایط خشک.</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>اختر برگ سبز و قرمز</td>
                                        <td>Canna indica</td>
                                        <td>M</td>
                                        <td>ریزومی (زیرزمینی)؛ سیستم ریشه‌ای فیبری و کم عمق.</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>ارغوان</td>
                                        <td>Cercis siliquastrum</td>
                                        <td>L</td>
                                        <td>عمیق؛ سیستم ریشه‌ای محکم و مقاوم به خشکی.</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>استاتیس</td>
                                        <td>Limonium sinuatum</td>
                                        <td>M</td>
                                        <td>متوسط؛ ریشه توده‌ای.</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>استیپا</td>
                                        <td>Stipa capansis</td>
                                        <td>L</td>
                                        <td>متوسط تا عمیق؛ ریشه‌های فیبری و مقاوم به خشکی.</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>اگروستیس</td>
                                        <td>Agrostis stolonifera</td>
                                        <td>M</td>
                                        <td>کم عمق (زیر سطحی)؛ سیستم ریشه‌ای متراکم و فیبری (10 تا 30 سانتی‌متری).</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>باران طلایی</td>
                                        <td>Koelruteria paniculata</td>
                                        <td>H</td>
                                        <td>عمیق و پهن؛ برای تثبیت و جذب رطوبت.</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>برگ نقره‌ای</td>
                                        <td>Jacobaea maritima</td>
                                        <td>M</td>
                                        <td>کم عمق؛ ریشه‌های الیافی، مناسب برای پوشش زمین.</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>بلوط همیشه سبز</td>
                                        <td>Quercus ilex</td>
                                        <td>L</td>
                                        <td>عمیق و گسترده؛ برای استقامت و پایداری.</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>بومادران زرد و صورتی و خزنده</td>
                                        <td>Achillea millefolium</td>
                                        <td>M</td>
                                        <td>کم عمق و الیافی؛ گیاه توسط ریزوم‌ها گسترش می‌یابد.</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>پامپاس گراس</td>
                                        <td>Cortaderia selloana</td>
                                        <td>M</td>
                                        <td>عمیق و متراکم؛ سیستم ریشه‌ای قوی و توده‌ای.</td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>پنی‌ستوم</td>
                                        <td>Pennisetum alopecuroides</td>
                                        <td>L</td>
                                        <td>متوسط تا عمیق؛ سیستم ریشه‌ای توسعه یافته و مقاوم به خشکی.</td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>پنی‌ستوم</td>
                                        <td>Pennisetum alopecuroides</td>
                                        <td>L</td>
                                        <td>متوسط تا عمیق؛ سیستم ریشه‌ای توسعه یافته و مقاوم به خشکی.</td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>پیچ امین‌الوله</td>
                                        <td>Lonicera caprifolium</td>
                                        <td>M</td>
                                        <td>متوسط تا عمیق؛ ریشه‌های قوی برای حمایت از صعود.</td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>پیچ اناری</td>
                                        <td>Campsis grandiflora</td>
                                        <td>L-M</td>
                                        <td>عمیق؛ ریشه‌های قوی و گاهی تهاجمی.</td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>پیچ برفی</td>
                                        <td>Fallopia baldschuanica</td>
                                        <td>M</td>
                                        <td>متوسط؛ ریشه توده‌ای و سریع‌الرشد.</td>
                                    </tr>
                                    <tr>
                                        <td>19</td>
                                        <td>پیچ گلیسین</td>
                                        <td>Wisteria sinensis</td>
                                        <td>M</td>
                                        <td>عمیق؛ ریشه قوی و چوبی، نیازمند فضای کافی.</td>
                                    </tr>
                                    <tr>
                                        <td>20</td>
                                        <td>پیراکانتا</td>
                                        <td>Pyracantha coccinea</td>
                                        <td>M</td>
                                        <td>متوسط؛ ریشه‌های فیبری و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>21</td>
                                        <td>توت کاکوزا</td>
                                        <td>Broussonetia papyrifera</td>
                                        <td>M-H</td>
                                        <td>عمیق و گسترده؛ مشابه درختان بزرگ.</td>
                                    </tr>
                                    <tr>
                                        <td>22</td>
                                        <td>توری</td>
                                        <td>Lagerstroemia indica</td>
                                        <td>H</td>
                                        <td>کم عمق؛ بهتر است ریشه‌های بالایی نزدیک سطح خاک باشند.</td>
                                    </tr>
                                    <tr>
                                        <td>23</td>
                                        <td>ژونی‌پروس پیوندی</td>
                                        <td>Juniperus horizentalis</td>
                                        <td>L-M</td>
                                        <td>کم عمق تا متوسط؛ سیستم ریشه‌ای گسترده.</td>
                                    </tr>
                                    <tr>
                                        <td>24</td>
                                        <td>ژونی‌پروس هوریزونتالیس</td>
                                        <td>Juniperus horizentalis</td>
                                        <td>L</td>
                                        <td>کم عمق تا متوسط؛ سیستم ریشه‌ای گسترده.</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>داغداغان</td>
                                        <td>Celtis australis - C.occidentalis</td>
                                        <td>L</td>
                                        <td>عمیق؛ برای جذب آب و استقامت بالا.</td>
                                    </tr>
                                    <tr>
                                        <td>26</td>
                                        <td>داوودی</td>
                                        <td>Chrysanthemum morifolium</td>
                                        <td>M</td>
                                        <td>کم عمق؛ ریشه توده‌ای و الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>27</td>
                                        <td>دراسنا</td>
                                        <td>Dracaena compacta</td>
                                        <td>M</td>
                                        <td>کم عمق و توده‌ای؛ معمولاً به صورت گیاه گلدانی کشت می‌شود.</td>
                                    </tr>
                                    <tr>
                                        <td>28</td>
                                        <td>رزماری</td>
                                        <td>Salvia rosmarinus</td>
                                        <td>L-M</td>
                                        <td>متوسط؛ ریشه قوی و الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>29</td>
                                        <td>زربین (سرو ناز/شیراز)</td>
                                        <td>Cupressus sempervirens</td>
                                        <td>M</td>
                                        <td>عمیق، گسترده و مقاوم به خشکی.</td>
                                    </tr>
                                    <tr>
                                        <td>30</td>
                                        <td>زرشک زینتی</td>
                                        <td>Berberis thunbergii</td>
                                        <td>M</td>
                                        <td>کم عمق تا متوسط؛ ریشه‌های الیافی و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>31</td>
                                        <td>زنبق آلمانی</td>
                                        <td>Iris germanica</td>
                                        <td>M</td>
                                        <td>ریزومی (بسیار سطحی)؛ ریزوم‌ها باید در سطح خاک یا کمی زیر آن کاشته شوند.</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td>زیتون معمولی</td>
                                        <td>Olea europaea</td>
                                        <td>L</td>
                                        <td>عمیق و گسترده؛ برای جذب آب در شرایط خشک مدیترانه‌ای.</td>
                                    </tr>
                                    <tr>
                                        <td>33</td>
                                        <td>سانتولینا</td>
                                        <td>Santolina virens</td>
                                        <td>L-M</td>
                                        <td>کم عمق تا متوسط؛ ریشه‌های الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>34</td>
                                        <td>سنجد</td>
                                        <td>Elaeagnus angustifolia</td>
                                        <td>L-M</td>
                                        <td>عمیق و گسترده؛ مقاوم به خشکی و شوری.</td>
                                    </tr>
                                    <tr>
                                        <td>35</td>
                                        <td>سرو ناز</td>
                                        <td>Cupressus sempervirens</td>
                                        <td>M</td>
                                        <td>عمیق، گسترده و مقاوم به خشکی.</td>
                                    </tr>
                                    <tr>
                                        <td>36</td>
                                        <td>سرو نوش</td>
                                        <td>Thuja orientalis</td>
                                        <td>M</td>
                                        <td>کم عمق تا متوسط؛ ریشه‌های گسترده و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>37</td>
                                        <td>سرو شیراز</td>
                                        <td>Cupressus sempervirens</td>
                                        <td>M</td>
                                        <td>عمیق، گسترده و مقاوم به خشکی.</td>
                                    </tr>
                                    <tr>
                                        <td>38</td>
                                        <td>شمشاد طلایی</td>
                                        <td>Euonymus japonica Aureo Marginata</td>
                                        <td>M-H</td>
                                        <td>متوسط؛ ریشه توده‌ای و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>39</td>
                                        <td>شیر خشت خزنده</td>
                                        <td>Cotoneaster horizentaliss</td>
                                        <td>L</td>
                                        <td>کم عمق؛ ریشه‌های کوچک و الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>40</td>
                                        <td>فرانکنیا</td>
                                        <td>Frankenia thymofolia</td>
                                        <td>M</td>
                                        <td>متوسط؛ ریشه‌های الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>41</td>
                                        <td>کاج بروسیا</td>
                                        <td>Pinus brutia</td>
                                        <td>L</td>
                                        <td>عمیق؛ ریشه‌های محکم برای تثبیت در خاک‌های صخره‌ای.</td>
                                    </tr>
                                    <tr>
                                        <td>42</td>
                                        <td>کاج سیاه</td>
                                        <td>Pinus nigra</td>
                                        <td>L</td>
                                        <td>عمیق؛ ریشه‌های قوی و گسترده.</td>
                                    </tr>
                                    <tr>
                                        <td>43</td>
                                        <td>کاج مشهد</td>
                                        <td>Pinus mugo</td>
                                        <td>L</td>
                                        <td>متوسط تا عمیق؛ ریشه محکم.</td>
                                    </tr>
                                    <tr>
                                        <td>44</td>
                                        <td>کارپوبروتوس</td>
                                        <td>Carpobrotus edulis</td>
                                        <td>L</td>
                                        <td>کم عمق؛ گیاه پوششی، ریشه‌های سطحی و خزنده.</td>
                                    </tr>
                                    <tr>
                                        <td>45</td>
                                        <td>کارکس آبی</td>
                                        <td>Carex humilis</td>
                                        <td>H</td>
                                        <td>کم عمق؛ گیاه علفی با ریشه‌های الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>46</td>
                                        <td>کراسولا قرمز</td>
                                        <td>Crassula ovata</td>
                                        <td>L</td>
                                        <td>بسیار کم عمق؛ ریشه‌های الیافی و کم عمق (ساکولنت).</td>
                                    </tr>
                                    <tr>
                                        <td>47</td>
                                        <td>کف نیوزلندی قهوه‌ای و ابلق</td>
                                        <td>Phormium tenax</td>
                                        <td>L-M</td>
                                        <td>فیبری و نسبتاً کم عمق؛ ریشه توده‌ای و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>48</td>
                                        <td>کف پوش پیلا (یه لیموی پوششی)</td>
                                        <td>Pilea cadierei</td>
                                        <td>M</td>
                                        <td>کم عمق؛ گیاه پوششی.</td>
                                    </tr>
                                    <tr>
                                        <td>49</td>
                                        <td>کوکب کوهی</td>
                                        <td>Rudbeckia hirta</td>
                                        <td>M</td>
                                        <td>ریشه عمودی (Taproot)؛ ریشه اصلی ضخیم و عمیق.</td>
                                    </tr>
                                    <tr>
                                        <td>50</td>
                                        <td>ختمی درختی</td>
                                        <td>Hibiscus syriacus</td>
                                        <td>M</td>
                                        <td>متوسط؛ ریشه توده‌ای و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>51</td>
                                        <td>ختمی گل</td>
                                        <td>Alcea sp</td>
                                        <td>M</td>
                                        <td>ریشه عمودی (Taproot)؛ ریشه اصلی ضخیم و عمیق.</td>
                                    </tr>
                                    <tr>
                                        <td>52</td>
                                        <td>گز شاهی</td>
                                        <td>Tamarix gallica</td>
                                        <td>L</td>
                                        <td>بسیار عمیق (تهاجمی)؛ توانایی ریشه‌زایی به عمق‌های بسیار زیاد (بیش از 4.5 متر).</td>
                                    </tr>
                                    <tr>
                                        <td>53</td>
                                        <td>لاواندولا</td>
                                        <td>Lavandula angustifolia</td>
                                        <td>L-M</td>
                                        <td>ریشه عمودی (Taproot)؛ ریشه اصلی برای استقامت.</td>
                                    </tr>
                                    <tr>
                                        <td>54</td>
                                        <td>لیلکی</td>
                                        <td>Gleditsia caspica</td>
                                        <td>L</td>
                                        <td>عمیق؛ ریشه‌های اصلی برای استقرار.</td>
                                    </tr>
                                    <tr>
                                        <td>55</td>
                                        <td>مارگریت</td>
                                        <td>Argyranthemum frutescens</td>
                                        <td>M</td>
                                        <td>کم عمق؛ ریشه توده‌ای و الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>56</td>
                                        <td>مغربی صورتی خزنده</td>
                                        <td>Oenothera speciosa</td>
                                        <td>M</td>
                                        <td>ریشه عمودی (Taproot)؛ ریشه اصلی و عمیق.</td>
                                    </tr>
                                    <tr>
                                        <td>57</td>
                                        <td>ملیا (زیتون تلخ)</td>
                                        <td>Melia azedarach</td>
                                        <td>L</td>
                                        <td>عمیق و گسترده؛ می‌تواند به زیرساخت‌ها آسیب بزند.</td>
                                    </tr>
                                    <tr>
                                        <td>58</td>
                                        <td>نارون برگ ریز</td>
                                        <td>Ulmus boissieri</td>
                                        <td>M</td>
                                        <td>عمیق با ریشه‌های سطحی بزرگ؛ ریشه‌های سطحی می‌توانند پیاده‌روها را بلند کنند.</td>
                                    </tr>
                                    <tr>
                                        <td>59</td>
                                        <td>نسترن دائم‌گل (سفید و صورتی)</td>
                                        <td>Rosa canina</td>
                                        <td>M</td>
                                        <td>متوسط تا عمیق؛ ریشه‌های قوی و توده‌ای.</td>
                                    </tr>
                                    <tr>
                                        <td>60</td>
                                        <td>نوش طلایی کندرشد</td>
                                        <td>Thuja orientalis</td>
                                        <td>M</td>
                                        <td>کم عمق تا متوسط؛ ریشه‌های گسترده و متراکم.</td>
                                    </tr>
                                    <tr>
                                        <td>61</td>
                                        <td>نیفوفیا</td>
                                        <td>Kniphofia uvaria</td>
                                        <td>M</td>
                                        <td>متوسط؛ ریشه‌های گوشتی و الیافی.</td>
                                    </tr>
                                    <tr>
                                        <td>62</td>
                                        <td>یاس هلندی</td>
                                        <td>Ligustrum texanum-L.luccidum</td>
                                        <td>M-H</td>
                                        <td>متوسط؛ ریشه توده‌ای و قوی.</td>
                                    </tr>
                                    <tr>
                                        <td>63</td>
                                        <td>یاس هلندی</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>64</td>
                                        <td>یوکا</td>
                                        <td>Yucca filamentosa</td>
                                        <td>L</td>
                                        <td>متوسط تا عمیق؛ ریشه‌های گوشتی برای ذخیره آب.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    
                    </div>
                </div>
            </div>

        </div>
    </div>

   