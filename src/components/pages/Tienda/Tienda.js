import { ref, onMounted, onUnmounted } from "vue";

export default function tiendaLogic() {
  const productos = [
    {
      nombre: "Camiseta Gayola",
      imagen: "/tienda/camiseta.webp",
      precio: 15,
      descripcion: "Camiseta oficial Gayola, disponible en varias tallas.",
    },
    {
      nombre: "Taza Gayola",
      imagen: "/tienda/taza.webp",
      precio: 10,
      descripcion: "Taza de cerámica con el logo de Gayola.",
    },
    {
      nombre: "Vino Gayola",
      imagen: "/tienda/vino.webp",
      precio: 12,
      descripcion: "Botella de vino edición especial Gayola.",
    },
    {
      nombre: "Disco Gayola",
      imagen: "/tienda/disco.webp",
      precio: 10,
      descripcion: "Último disco de Gayola en formato físico.",
    },
    {
      nombre: "Mochila Gayola",
      imagen: "/tienda/mochila.webp",
      precio: 8,
      descripcion: "Mochila resistente con el logo de Gayola.",
    },
    {
      nombre: "Grinder Gayola",
      imagen: "/tienda/grinder.webp",
      precio: 2,
      descripcion: "Grinder metálico con diseño exclusivo Gayola.",
    },
  ];
  const modalAbierto = ref(false);
  const productoModal = ref({});
  const indexProducto = ref(0);

  function abrirModal(producto) {
    indexProducto.value = productos.indexOf(producto);
    productoModal.value = producto;
    modalAbierto.value = true;
  }
  function cerrarModal() {
    modalAbierto.value = false;
    productoModal.value = {};
  }

  function siguienteProducto() {
    if (indexProducto.value < productos.length - 1) {
      indexProducto.value++;
      productoModal.value = productos[indexProducto.value];
    }
  }

  function productoAnterior() {
    if (indexProducto.value > 0) {
      indexProducto.value--;
      productoModal.value = productos[indexProducto.value];
    }
  }

  let touchStartX = null;
  let touchStartY = null;
  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }
  function handleTouchEnd(e) {
    if (!touchStartX || !touchStartY) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 100) {
      cerrarModal();
    } else if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 100) {
      if (diffX < 0) {
        siguienteProducto();
      } else {
        productoAnterior();
      }
    }

    touchStartX = null;
    touchStartY = null;
  }

  function enviarEmail(producto) {
    const asunto = encodeURIComponent(`Pedido: ${producto.nombre}`);
    const cuerpo = encodeURIComponent(
      `Hola,\n\nEstoy interesado en comprar el producto "${producto.nombre}" (${producto.precio} €).\n\n¿Podéis darme más información?\n\nGracias.`
    );
    window.open(`mailto:contacto@gayola.com?subject=${asunto}&body=${cuerpo}`);
  }

  let handleKeydown = null;

  onMounted(() => {
    handleKeydown = (e) => {
      if (modalAbierto.value && e.key === "Escape") {
        cerrarModal();
      }
    };
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    if (handleKeydown) {
      window.removeEventListener("keydown", handleKeydown);
      handleKeydown = null;
    }
  });

  return {
    productos,
    modalAbierto,
    productoModal,
    indexProducto,
    abrirModal,
    cerrarModal,
    siguienteProducto,
    productoAnterior,
    handleTouchStart,
    handleTouchEnd,
    enviarEmail,
  };
}
