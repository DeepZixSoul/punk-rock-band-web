/**
 * Footer.js - Datos del componente Footer
 */

export default function footerLogic() {
  return {
    quickLinks: [
      { label: "Inicio", href: "/" },
      { label: "Biografía", href: "/biografia" },
      { label: "Conciertos", href: "/conciertos" },
      { label: "Discografía", href: "/discografia" },
      { label: "Galería", href: "/galeria" },
    ],
    support: [
      { label: "Ayuda", href: "/ayuda" },
      { label: "FAQs", href: "/faqs" },
      { label: "Contacto", href: "/contacto" },
    ],
    sponsors: [
      { name: "Vibrato Discos", url: "#" },
      { name: "Rock Fest Spain", url: "#" },
      { name: "Guitarras Premium", url: "#" },
    ],
    contact: {
      email: "info@gayola.band",
      phone: "+34 XXX XXX XXX",
    },
    tittle: [
        {
            name: "Gayola",
        }
    ]
  };
}
