export default function footerLogic() {
  return {
    links: [
      { label: "Inicio", href: "/" },
      { label: "Biografía", href: "/biografia" },
      { label: "Conciertos", href: "/conciertos" },
      { label: "Discografía", href: "/discografia" },
      { label: "Galería", href: "/galeria" },
    ],
    contact: {
      email: "contacto@gayola.com",
    },
    location: {
      city: "Aspe",
      region: "Alicante",
    },
  };
}
