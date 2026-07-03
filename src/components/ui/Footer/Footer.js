export default function footerLogic() {
  return {
    quickLinks: [
      { label: "Inicio", href: "/" },
      { label: "Biografía", href: "/biografia" },
      { label: "Conciertos", href: "/conciertos" },
      { label: "Discografía", href: "/discografia" },
      { label: "Galería", href: "/galeria" },
    ],
    contact: {
      email: "contacto@gayola.com",
      phone: "+34 XXX XXX XXX",
    },
  };
}
