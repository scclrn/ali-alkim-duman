import posterTiksinti from "../assets/film/posters/tiksinti-poster.jpg";
import posterBirIhtimal from "../assets/film/posters/bir-ihtimal-daha-poster.jpg";

export const films = [
  {
    id: "tiksinti",
    title: "Tiksinti",
    englishTitle: "Repulsion",
    year: 2024,
    poster: posterTiksinti,
    videoId: "lUg68A4LNk4",
    overview: {
      tr: "Geçmişin yüklerinden kurtulmak ve kendisiyle yüzleşmek isteyen İsmet, bir partide çevresinin küçümsemesiyle karşılaşır; bu durum onu daha derin bir umutsuzluğa sürükler. Mücadele sırasında, içindeki iğrenmeyle başa çıkmaya çalışırken hayatındaki insanlarla ve olaylarla yüzleşmek zorunda kalır ve arzuları ile değerleri arasında bir çatışma yaşar. Ancak bu yüzleşmeler ve hastalığı, İsmet’i hem fiziksel hem de duygusal olarak yıkıma sürükler.",
      en: "Seeking to shed the weight of his past and confront himself, İsmet is belittled at a party, which plunges him into deeper despair. As he struggles to cope with the disgust he harbors within, he is forced to face the people and events in his life, torn between his desires and his values. Yet these confrontations—and his illness—drive İsmet toward ruin, both physically and emotionally.",
    },
    credits: [{ role: "Yönetmen", name: "Ali Alkım Duman" }],
    features: [],
  },
  {
    id: "bir-ihtimal-daha",
    title: "Bir İhtimal Daha",
    englishTitle: "One More Possibility",
    year: 2023,
    poster: posterBirIhtimal,
    videoId: "P7LBfxNBd98",
    overview: {
      en: "Unfamiliar with the rules of working life and modern society, Yusuf clashes with his boss, customers, friend and lover. One evening at the café, amid the laughter of patrons, he notices Rüya and believes he has finally grasped something real. He follows her home and discovers she is a sex worker; he insists he did not come for sex. Through the night, their confrontations unravel into pain and tears.",
      tr: "Çalışma hayatının ve modern toplumun kurallarına yabancı olan Yusuf; patronu, müşterileri, arkadaşı ve sevgilisiyle sorunlar yaşar. Bir akşam, kafede eğlenen müşterilerin arasında Rüya dikkatini çeker ve sonunda ‘gerçeği’ yakaladığını düşünür. Rüya’yı takip edip evine gittiğinde onun bir seks işçisi olduğunu anlar; buraya geliş amacının sevişmek olmadığını söyler. Gece boyunca ikisi arasındaki yüzleşmeler acı ve gözyaşıyla son bulur.",
    },
    credits: [{ role: "Yönetmen", name: "Ali Alkım Duman" }],
    features: [],
  },
];

export const getFilmById = (id) => films.find((f) => f.id === id);
