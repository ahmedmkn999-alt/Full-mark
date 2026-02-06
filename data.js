// ملف البيانات - data.js
const ALL_DATA = [
    // 1. اللغة العربية
    {
        name: "اللغة العربية",
        img: "https://i.postimg.cc/L6xvnk5X/mn-awl-mn-tklm-allght-alʿrbyt.jpg",
        teachers: [
            { 
                name: "أ. محمد صلاح", 
                img: "https://i.postimg.cc/ZRJy8gDR/FB-IMG-1770382315133.jpg", 
                videos: [] // هضيفلك الفيديوهات هنا لما تبعتها
            },
            { 
                name: "أ. رضا الفاروق", 
                img: "https://i.postimg.cc/c4Pg965p/1723904748-y-CL9UA.png", 
                videos: [] 
            }
        ]
    },
    // 2. اللغة الإنجليزية
    {
        name: "اللغة الإنجليزية",
        img: "https://i.postimg.cc/TwvBCjry/characteristics-of-a-prestigious-language-school-1-1020x642-1.jpg",
        teachers: [
            { name: "عبقري لغة", img: "https://i.postimg.cc/85CzPV0d/mr-tarek-hero-section-f2bf4f0e2cf0c8b0d728.png", videos: [] },
            { name: "شريف المصري", img: "https://i.postimg.cc/4nRGtCBW/loginbg.png", videos: [] },
            { name: "مي مجدي", img: "https://i.postimg.cc/DzS7tcJs/FB-IMG-1770382635144.jpg", videos: [] },
            { name: "انجلشاوي", img: "https://i.postimg.cc/X7q1K1Td/splashs1.png", videos: [] }
        ]
    },
    // 3. الفيزياء
    {
        name: "الفيزياء",
        img: "https://i.postimg.cc/Z5RBj2mp/904.jpg",
        teachers: [
            { name: "محمد عبد المعبود", img: "https://i.postimg.cc/fRTXpkcm/FB_IMG_1770383335913.jpg", videos: [] },
            { name: "مستر كيرلس", img: "https://i.postimg.cc/qR0pD6nd/FB-IMG-1770383231786.jpg", videos: [] },
            { name: "محمود مجدي", img: "https://i.postimg.cc/wjGVkDCy/Magdy_Image_ab6042b951be2cb6297e.png", videos: [] },
            { name: "حسام خليل", img: "https://i.postimg.cc/pL6ZBKwm/c3_21a0b369.png", videos: [] }
        ]
    },
    // 4. الكيمياء
    {
        name: "الكيمياء",
        img: "https://i.postimg.cc/Njz4xR3j/4a228f61e5d6843a9ddd56e6cc39ef6d.jpg",
        teachers: [
            { name: "خالد صقر", img: "https://i.postimg.cc/hGQ0Zfn9/teacher_Bflsmq_Qf.webp", videos: [] },
            { name: "أ. محمد عبدالجواد", img: "https://i.postimg.cc/rpR9ZKTR/c78ffbf64a791da67752132a9aaf7c8f127fc4f4.jpg", videos: [] },
            { name: "عبدالله حبشي", img: "https://i.postimg.cc/MGfY3vwV/hero_light.webp", videos: [] },
            { name: "عمرو الصيفي", img: "https://i.postimg.cc/5tQmK6Jm/FB_IMG_1770384007129.jpg", videos: [] },
            { name: "جون جهبذ", img: "https://i.postimg.cc/3w0Zfdh9/gahbaz_hero_section_main_character_308fc2da8ff8bae443d4.webp", videos: [] }
        ]
    },
    // 5. الأحياء
    {
        name: "الأحياء",
        img: "https://i.postimg.cc/cJjdZkVx/FB_IMG_1770384472698.jpg",
        teachers: [
            { name: "د.أحمد الجوهري", img: "https://i.postimg.cc/XJC4vcbq/89549ee43b7a31c4f350f0d32a116fbd02313c37.png", videos: [] },
            { name: "محمد أيمن", img: "https://i.postimg.cc/856NCBS7/profile_433b1d2b5e7bfd30bed5.png", videos: [] },
            { name: "أحمد رضوان", img: "https://i.postimg.cc/fbFMZq6L/FB_IMG_1770384659581.jpg", videos: [] },
            { name: "جيو ماجد", img: "https://i.postimg.cc/pd7PxcgR/FB_IMG_1770384621215.jpg", videos: [] },
            { name: "سامح أحمد", img: "https://i.postimg.cc/g05Gdtf2/FB-IMG-1770384584699.jpg", videos: [] }
        ]
    },
    // 6. الرياضيات
    {
        name: "الرياضيات",
        img: "https://i.postimg.cc/yN0LYkGR/m-dah-alryadyat-alzamyt-fy-brytanya-ll-khd-balaqtsad-qdma.jpg",
        teachers: [
            { name: "م.احمد عصام", img: "https://i.postimg.cc/fyRCK5RJ/essam_dark.png", videos: [] },
            { name: "م. لطفي زهران", img: "https://i.postimg.cc/sXywB3Fh/Lotfy_a940b4e08c6abf7a6821.png", videos: [] }
        ]
    },
    // 7. الجغرافيا
    {
        name: "الجغرافيا",
        img: "https://files.coursatk.online/images/subjects/geography.png",
        teachers: [
            { name: "جمعة السيد", img: "https://files.coursatk.online/images/content/2b233a89685a724df18a65c7b2ba6a3263f2932b3e8a.jpg", videos: [] },
            { name: "أحمد زهران", img: "https://files.coursatk.online/images/questions/5eab71b642c6672b9182be0d1dd887beb3c8d2b98cf2.jpg", videos: [] }
        ]
    },
    // 8. اللغات الثانية (دي اللي شغالة حالياً)
    {
        name: "اللغات الثانية",
        img: "https://cdn-icons-png.flaticon.com/512/3898/3898082.png",
        teachers: [
            { 
                name: "فرنساوي (مسيو انس)", 
                img: "https://i.postimg.cc/NjRcy2s0/a75e136b-7909-485f-95e8-862fddd2c0bc.png", 
                videos: [{title:"الجزء 1", link:"3PC1fxpp-Xk"}] 
            },
            { 
                name: "ألماني (هير ياسين)", 
                img: "https://i.postimg.cc/bw1hGSyS/52023310-702.jpg", 
                videos: [{title:"التأسيس", link:"JOLc4Jc9yFU"}] 
            },
            { 
                name: "إيطالي (سنيور مدحت)", 
                img: "https://i.postimg.cc/0NQ1VWGy/hqdefault.jpg", 
                videos: [{title:"المنهج كامل", link:"T6hpZH5AMnk"}] 
            },
            { 
                name: "إسباني (سنيور ماجد)", 
                img: "https://i.postimg.cc/L8jpqg95/250px-Flag-of-Spain-svg.png", 
                videos: [{title:"شرح كامل", link:"K9ZOydc1cqs"}] 
            }
        ]
    }
];
