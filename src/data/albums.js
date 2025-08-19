// Update: replace deprecated { as: 'url' } with { query: '?url', import: 'default' }

const sortByPath = (obj) =>
  Object.keys(obj)
    .sort()
    .map((k) => obj[k]);

// film klasöründe poster/posters içerenleri hariç tut
const _filmAll = Object.entries(
  import.meta.glob("../assets/film/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
    eager: true,
    query: "?url",
    import: "default",
  })
);
const film = _filmAll
  .filter(([p]) => !/\bposters\b/i.test(p) && !/poster/i.test(p))
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([, url]) => url);

// Diğer albümler — literal globs + url query
const _aysila = import.meta.glob(
  "../assets/aysila/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);
const _dans = import.meta.glob("../assets/dans/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
});
const _konser = import.meta.glob(
  "../assets/konser/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);
const _mine = import.meta.glob("../assets/mine/*.{jpg,jpeg,png,JPG,JPEG,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
});
const _tiyatro = import.meta.glob(
  "../assets/tiyatro/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export const albums = {
  aysila: sortByPath(_aysila),
  dans: sortByPath(_dans),
  film, // posters/* ve *poster* filtreli
  konser: sortByPath(_konser),
  mine: sortByPath(_mine),
  tiyatro: sortByPath(_tiyatro),
};

export const albumOrder = [
  "aysila",
  "dans",
  "film",
  "konser",
  "mine",
  "tiyatro",
];
