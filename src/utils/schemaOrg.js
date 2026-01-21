export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Gayola",
  "description": "Banda de punk rock desde Alicante, España. SOMOS GAYOLA, PRIMO, NO LOS STONES.",
  "url": "https://gayola.netlify.app",
  "image": "https://gayola.netlify.app/logos/logo.webp",
  "sameAs": [
    "https://www.instagram.com/gayolaseriopunk",
    "https://open.spotify.com/intl-es/artist/2UiHDGxR9uKIOfOTvUcZF9",
    "https://www.facebook.com/Gayolaseriopunk",
    "https://www.youtube.com/@gayolaseriopunk"
  ],
  "location": {
    "@type": "Place",
    "name": "Aspe, Alicante",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressRegion": "Alicante"
    }
  },
  "genre": "Punk Rock",
  "foundingDate": "2017",
  "member": [
    {
      "@type": "Person",
      "name": "Nacho Brökoly",
      "jobTitle": "Voz"
    },
    {
      "@type": "Person",
      "name": "Dani Mestre",
      "jobTitle": "Batería"
    },
    {
      "@type": "Person",
      "name": "Mendonça",
      "jobTitle": "Guitarra Rítmica"
    },
    {
      "@type": "Person",
      "name": "Alex Tupá",
      "jobTitle": "Bajo"
    },
    {
      "@type": "Person",
      "name": "Ian Bangher",
      "jobTitle": "Guitarra Solista"
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://gayola.netlify.app/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Biografía",
      "item": "https://gayola.netlify.app/biografia"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Conciertos",
      "item": "https://gayola.netlify.app/conciertos"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Galería",
      "item": "https://gayola.netlify.app/galeria"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Vídeos",
      "item": "https://gayola.netlify.app/videos"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Discografía",
      "item": "https://gayola.netlify.app/discografia"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Tienda",
      "item": "https://gayola.netlify.app/tienda"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "Contacto",
      "item": "https://gayola.netlify.app/contacto"
    }
  ]
};

export function getMusicEventSchema(titulo, fecha, lugar) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": `Gayola - ${titulo}`,
    "url": "https://gayola.netlify.app/conciertos",
    "startDate": fecha || "2026-01-21",
    "image": "https://gayola.netlify.app/logos/logo.webp",
    "location": {
      "@type": "Place",
      "name": lugar || "España",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ES"
      }
    },
    "performer": {
      "@type": "MusicGroup",
      "name": "Gayola"
    }
  };
}

export function getProductSchema(producto) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": producto.nombre,
    "description": producto.descripcion,
    "image": `https://gayola.netlify.app${producto.imagen}`,
    "price": producto.precio,
    "priceCurrency": "EUR",
    "url": "https://gayola.netlify.app/tienda",
    "brand": {
      "@type": "Brand",
      "name": "Gayola"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://gayola.netlify.app/tienda",
      "priceCurrency": "EUR",
      "price": producto.precio,
      "availability": "https://schema.org/InStock"
    }
  };
}

export function getArticleSchema(noticia, datePublished = "2026-01-21") {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": noticia.titulo,
    "description": noticia.pie,
    "image": noticia.imagen,
    "datePublished": datePublished,
    "author": {
      "@type": "Organization",
      "name": noticia.fuente || "Gayola"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gayola",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gayola.netlify.app/logos/logo.webp"
      }
    },
    "url": noticia.enlace,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "url": noticia.enlace
    }
  };
}
