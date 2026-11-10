# ThinkBoard 📝

اپلیکیشن یادداشت‌برداری با React و TypeScript (مینی‌پروژه بوت‌کمپ فرانت‌اند کوئرا).

🔗 **نسخه زنده:** (لینک Vercel)

## امکانات

- نمایش، ساخت، ویرایش و حذف یادداشت
- مشاهده جزئیات یادداشت
- جستجو در عنوان و توضیحات
- مرتب‌سازی (جدیدترین، قدیمی‌ترین، عنوان)
- Skeleton Loading، Empty State، Toast
- تأیید قبل از حذف
- تم عسلی روشن و تیره
- طراحی Responsive

## تکنولوژی‌ها

React, TypeScript, Vite, Tailwind CSS 4, DaisyUI 5, TanStack Query, Axios, react-hot-toast, lucide-react

## معماری

کامپوننت ← hook (React Query) ← تابع API ← axios

    src/
    ├── api/         # axios و توابع API
    ├── hooks/       # React Query و hookهای کمکی
    ├── types/       # تایپ‌ها
    ├── components/  # کامپوننت‌های UI
    └── pages/       # صفحه اصلی

## اجرای پروژه

    git clone https://github.com/Sajjad-008/think-board.git
    cd think-board
    npm install
    npm run dev

## مجوز آیکن

(Sajjad-008)
