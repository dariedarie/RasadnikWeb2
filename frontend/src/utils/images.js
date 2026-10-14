// Optimizovane WebP verzije slika proizvoda:
//   /images/thumbs/<ime>.webp - 480px, za kartice
//   /images/md/<ime>.webp     - 1000px, za glavnu sliku na stranici proizvoda
// Original (/images/<ime>.jpg) ostaje za lightbox i Open Graph.
// Za novu sliku generisati verzije skriptom (vidi README / scripts) - ako verzija ne postoji,
// onError u komponenti pada nazad na original.
const variant = (src, dir) => src.replace(/^\/images\//, `/images/${dir}/`).replace(/\.(jpe?g|png|webp)$/i, '.webp');

export const thumbSrc = (src) => variant(src, 'thumbs');
export const mediumSrc = (src) => variant(src, 'md');

// onError handler: prvo pokusa original, pa logo
export const fallbackTo = (original) => (e) => {
  const img = e.currentTarget;
  if (img.dataset.fallback !== 'original') {
    img.dataset.fallback = 'original';
    img.src = original;
  } else {
    img.onerror = null;
    img.src = '/images/plantDGD2.png';
  }
};
