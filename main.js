/* مشروع منصة توثيق قصص الصمود - جامعة الأقصى
   هذا الملف مسؤول عن عرض البيانات ديناميكياً والتفاعل مع المستخدم
*/

$(document).ready(function () {

    /// ابحثي عن الجزء الذي يحتوي على الصور وغيريه ليكون هكذا:
const storiesData = [
    {
        title: "إرادة المزارع",
        text: "قصة مزارع استصلح أرضه...",
        image: "story1.jpg" // احذفي assets/images/ واتركي اسم الصورة فقط
    },
    {
        title: "قصة صمود 2",
        text: "وصف القصة...",
        image: "story2.jpg"
    },
    {
        title: "قصة صمود 3",
        text: "وصف القصة...",
        image: "story3.jpg"
    }
];

    // 2. استخدام Loop لعرض البيانات ديناميكياً (Data-driven Rendering) 
    const storiesContainer = $('#stories-list');

    storiesData.forEach(story => {
        const cardHtml = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${story.image}" class="card-img-top" alt="${story.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-end">
                        <h5 class="card-title text-primary">${story.title}</h5>
                        <p class="card-text text-muted">${story.description}</p>
                        <button class="btn btn-outline-primary btn-sm show-details">اقرأ التفاصيل</button>
                    </div>
                </div>
            </div>
        `;
        storiesContainer.append(cardHtml); // إضافة البطاقة داخل قسم القصص 
    });

    // 3. إضافة تفاعلات jQuery (تأثير Fade و Slide) [cite: 163]
    $(document).on('click', '.show-details', function () {
        // تغيير محتوى الزر عند الضغط (DOM Manipulation) 
        $(this).text("تمت القراءة").addClass("btn-success").removeClass("btn-outline-primary");
        alert("سيتم عرض تفاصيل القصة كاملة في نافذة منبثقة قريباً!"); 
    });

    // 4. التحقق من نموذج الاتصال (Event Submit) 
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        alert("شكراً لك! تم استلام قصة الصمود بنجاح.");
        $(this).trigger("reset"); // مسح البيانات بعد الإرسال
    });
});