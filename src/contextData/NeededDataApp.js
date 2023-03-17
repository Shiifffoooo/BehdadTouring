import { createContext, useState } from "react";

export const contextNeededDatas = createContext();

const NeededDatasAppProvider = ({ children }) => {
  const [region, setRegion] = useState([
    {
      _id: "zzRWZf",
      location: "تهران",
      images: [
        "images/pexels-kasra-askari-12877823.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-kasra-askari-12877823.jpg",
        "images/bus-traveling.jpg",
        "images/train.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه ریلی", "train"],
      ],
      href: "tehran",
      price: { fly: 240_000, bus: 540_000, train: 687_900 },
      duration: "1 روز 3 شب",
      travelPlan: [
        "بعدش جوجه کباب میزنیم",
        "چای آتیشی",
        "جای خفن اول",
        "پیست رالی",
        "یه شب با شادی",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی فاطمه",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی فاطمه",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی فاطمه",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "q8qrNQ",
      location: "اصفهان",
      images: [
        "images/pexels-luis-dalvan-1770809.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه ریلی", "train"],
      ],
      href: "isfahan",
      price: { fly: 240_000, bus: 540_000, train: 687_900 },
      duration: "4 روز 3 شب",
      travelPlan: [
        "جای خفن اول",
        "چای آتیشی",
        "پیست رالی",
        "یه شب با شادی",
        "سقوط آزاد",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 1,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "فاطمه",
          score: 1,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 3,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی فاطمه",
          score: 3,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی فاطمه",
          score: 3,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "CSstR5",
      location: "مشهد",
      images: [
        "images/bus-traveling.jpg",
        "images/pexels-luis-dalvan-1770809.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-kasra-askari-12877823.jpg",
        "images/train.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه ریلی", "train"],
      ],
      href: "mashhad",
      price: { fly: 240_000, bus: 540_000, train: 687_900 },
      duration: "9 روز 3 شب",
      travelPlan: [
        "جای خفن اول",
        "بعدش جوجه کباب میزنیم",
        "چای آتیشی",
        "قواصی با کوسه",
        "پیست رالی",
        "یه شب با شادی",
        "سقوط آزاد",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 1,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 1,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی فاطمه",
          score: 1,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "Suv3I4",
      location: "یزد",
      images: [
        "images/pexels-chris-leboutillier-929385.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/bus-traveling.jpg",
        "images/train.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["راه ریلی", "train"],
      ],
      href: "yazd",
      price: { fly: 240_000, train: 687_900 },
      duration: "2 روز 3 شب",
      travelPlan: [
        "جای خفن اول",
        "بعدش جوجه کباب میزنیم",
        "چای آتیشی",
        "قواصی با کوسه",
        "حرم مطحر(ع)",
        "یه شب با شادی",
        "سقوط آزاد",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 1,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 2,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 1,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
      ],
    },
    {
      _id: "8V3hUd",
      location: "تبریز",
      images: [
        "images/pexels-luis-del-río-15286.jpg",
        "images/pexels-luis-dalvan-1770809.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه ریلی", "train"],
      ],
      href: "tabriz",
      price: { fly: 240_000, bus: 540_000, train: 687_900 },
      duration: "4 روز 1 شب",
      travelPlan: [
        "چای آتیشی",
        "جای خفن اول",
        "بعدش جوجه کباب میزنیم",
        "پیست رالی",
        "سقوط آزاد",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 1,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "9gRG0v",
      location: "کرمانشاه",
      images: [
        "images/train.jpg",
        "images/pexels-luis-dalvan-1770809.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-kasra-askari-12877823.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
      ],
      href: "kermanshah",
      price: { fly: 240_000, bus: 540_000 },
      duration: "6 روز 6 شب",
      travelPlan: [
        "یه شب با شادی",
        "جای خفن اول",
        "بعدش جوجه کباب میزنیم",
        "چای آتیشی",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 5,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 5,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "M3bi6w",
      location: "کیش",
      images: [
        "images/pexels-kasra-askari-12877823.jpg",
        "images/pexels-luis-dalvan-1770809.jpg",
        "images/bus-traveling.jpg",
        "images/train.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه دریایی", "ship"],
      ],
      href: "kish",
      price: { fly: 240_000, bus: 540_000, ship: 1_200_000 },
      duration: "2 روز 6 شب",
      travelPlan: [
        "جای خفن اول",
        "بعدش جوجه کباب میزنیم",
        "چای آتیشی",
        "قواصی با کوسه",
        "پیست رالی",
        "یه شب با شادی",
        "سقوط آزاد",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 2,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 2,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 2,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 2,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 2,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 2,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 2,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 2,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "aI6oEA",
      location: "قشم",
      images: [
        "images/ship-travel.jpg",
        "images/pexels-luis-dalvan-1770809.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-kasra-askari-12877823.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه دریایی", "ship"],
      ],
      href: "gheshm",
      price: { fly: 240_000, bus: 540_000, ship: 1_200_000 },
      duration: "2 روز 6 شب",
      travelPlan: ["یه شب با شادی", "سقوط آزاد"],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 4,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "بهداد",
          score: 2,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "فاطمه",
          score: 0,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "9QK6z4",
      location: "رشت",
      images: [
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-kasra-askari-12877823.jpg",
        "images/bus-traveling.jpg",
        "images/pexels-luis-dalvan-1770809.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه دریایی", "ship"],
      ],
      href: "rasht",
      price: { fly: 240_000, bus: 540_000, ship: 1_200_000 },
      duration: "5 روز 6 شب",
      travelPlan: ["جای خفن اول", "سقوط آزاد"],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 0,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 3,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "ot2Vv7",
      location: "کرمان",
      images: [
        "images/pexels-denniz-futalan-13119080.jpg",
        "images/pexels-kasra-askari-12877823.jpg",
        "images/bus-traveling.jpg",
        "images/train.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["راه هوایی", "fly"],
        ["با اتوبوس", "bus"],
        ["راه ریلی", "train"],
      ],
      href: "kerman",
      price: { fly: 240_000, bus: 540_000, train: 687_900 },
      duration: "3 روز 1 شب",
      travelPlan: [
        "جای خفن اول",
        "بعدش جوجه کباب میزنیم",
        "چای آتیشی",
        "قواصی با کوسه",
        "پیست رالی",
        "یه شب با شادی",
        "سقوط آزاد",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 3,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 1,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "feeoWE",
      location: "قزوین",
      images: [
        "images/pexels-luis-dalvan-1770809.jpg",
        "images/bus-traveling.jpg",
        "images/train.jpg",
        "images/ship-travel.jpg",
      ],
      howToGo: [
        ["با اتوبوس", "bus"],
        ["راه ریلی", "train"],
      ],
      href: "ghazvin",
      price: { bus: 540_000, train: 687_900 },
      duration: "8 روز 1 شب",
      travelPlan: [
        "چای آتیشی",
        "قواصی با کوسه",
        "پیست رالی",
        "یه شب با شادی",
        "سقوط آزاد",
      ],
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 2,
          comment:
            "ما رفتیم با پسر عموم خیلی خوش گذشت و خلاصه آره و اینا خیلی بودیم",
        },
        {
          name: "اونیکی فاطمه",
          score: 0,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
  ]);
  const [products, setProducts] = useState([
    {
      _id: "zFgWZf",
      name: "کوله پشتی",
      images: [
        "images/back-pack.jpg",
        "images/back-pack--backSide.jpg",
        "images/back-pack-inside.jpg",
        "images/back-pack--inside.jpg",
      ],
      href: "back-pack",
      price: 325_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی فاطمه",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "فاطمه",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "UFg2dE",
      name: "دوربین ورزشی",
      images: ["images/sport-camera.jpg", "images/camera.jpg"],
      href: "sport-camera",
      price: 585_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "بهداد",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی بیتا",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "غلام",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "QsV9dz",
      name: "قطب نما",
      images: ["images/compass.jpg"],
      href: "compass",
      price: 305_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "اساعیل",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی بیتا",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "پدرام",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "Po23Az",
      name: "چادر مسافرتی",
      images: ["images/chador.jpg"],
      href: "chador",
      price: 1_199_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "اساعیل",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی بیتا",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "پدرام",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "L1sXbm",
      name: "چاقوی سویسی",
      images: ["images/swiss-army-knife.jpg"],
      href: "swiss-army-knife",
      price: 749_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "عمو جانی",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "دایی شاپور",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "Wr4js",
      name: "کیسه خواب",
      images: ["images/sleeping-bag.jpg"],
      href: "sleeping-bag",
      price: 999_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "بیخانمان",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "دایی شاپور",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "Ik23zC",
      name: "چراغ قوه",
      images: ["images/lighter.jpg", "images/camera.jpg"],
      href: "lighter",
      price: 84_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "بیخانمان",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "بیخانمان",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "بیخانمان",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "دایی شاپور",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
    {
      _id: "Ui13zC",
      name: "طناب",
      images: ["images/rope.jpg"],
      href: "rope",
      price: 140_000,
      description:
        "پایتخت فرهنگی جهان اسلام با جاذبه های تاریخی متنوع، در طول سال خصوصا عید نوروز پذیرای میهمانان داخلی و خارجی زیادی است.",
      comments: [
        {
          name: "رامبد جوان",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "دایی شاپور",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "اونیکی کچله",
          score: 5,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
        {
          name: "دایی شاپور",
          score: 4,
          comment: "عه عه  عه این چی بود دیگه  هیشکی نره ها پولتونو چیپس بخرین",
        },
      ],
    },
  ]);
  const [users, setUsers] = useState([
    { id: "23jhsdD", name: "behdad", pass: "12345678" },
    { id: "D3zAxq", name: "ali", pass: "12345678" },
  ]);
  return (
    <contextNeededDatas.Provider
      value={{
        region,
        products,
        users
      }}
    >
      {children}
    </contextNeededDatas.Provider>
  );
};

export default NeededDatasAppProvider;
