---
title: "إنشاء موقع Hugo يدعم العربية"
date: 2024-01-25T16:45:00Z
categories: ["تطوير الويب", "hugo"]
tags: ["hugo", "عربي", "rtl", "static site"]
author: "المؤلف"
featured_image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
---

# كيفية إنشاء موقع Hugo يدعم اللغة العربية

Hugo هو مولد مواقع ثابتة سريع ومرن، ولكن إعداده لدعم اللغة العربية يتطلب بعض الاعتبارات الخاصة.

## التحديات في دعم العربية

### 1. اتجاه النص (RTL)
العربية تُكتب من اليمين إلى اليسار، مما يتطلب تعديلات في CSS.

### 2. الخطوط
نحتاج إلى خطوط تدعم العربية بشكل جيد.

### 3. التخطيط (Layout)
القوائم والعناصر تحتاج إلى إعادة ترتيب لتناسب اتجاه النص.

## الحلول العملية

### إعداد اللغة في config.toml

```toml
languageCode = "ar"
defaultContentLanguage = "ar"
title = "موقعي باللغة العربية"

[params]
  description = "وصف الموقع باللغة العربية"
```

### CSS للدعم العربي

```css
body {
    direction: rtl;
    text-align: right;
    font-family: 'Arial Unicode MS', sans-serif;
}

/* تعديل القوائم */
.nav ul {
    justify-content: flex-end;
}

/* تعديل الأزرار */
.btn {
    text-align: center;
}
```

### HTML Templates

```html
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <!-- باقي العناصر -->
</head>
```

## نصائح مهمة

1. **اختبر على متصفحات مختلفة**: بعض المتصفحات تعامل RTL بشكل مختلف
2. **استخدم Flexbox بحذر**: قد تحتاج إلى `flex-direction: row-reverse`
3. **انتبه للأيقونات**: قد تحتاج إلى عكسها أفقياً
4. **اختبر التواريخ**: تأكد من عرض التواريخ بالشكل الصحيح

## الخطوط المناسبة

- **للويب**: Arial Unicode MS, Tahoma
- **للطباعة**: Traditional Arabic, Simplified Arabic
- **الحديثة**: Noto Sans Arabic, Cairo

## أدوات مفيدة

1. **RTL Tester**: لاختبار التصميم
2. **Arabic Lorem Ipsum**: لنص تجريبي
3. **Font Squirrel**: لتحويل الخطوط

## خلاصة

إنشاء موقع Hugo يدعم العربية ليس صعباً، لكنه يتطلب التخطيط المسبق والانتباه للتفاصيل. مع الإعدادات الصحيحة، يمكنك الحصول على موقع جميل ومتجاوب يدعم العربية بشكل مثالي.

النتيجة النهائية ستكون موقعاً سريعاً وأنيقاً يقدم تجربة ممتازة للقراء العرب.