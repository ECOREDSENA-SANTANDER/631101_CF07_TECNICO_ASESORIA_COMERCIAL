<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fortaleciendo la gestión del servicio postventa',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la aplicación de prácticas de seguimiento, atención, fidelización y mejora continua en el servicio postventa.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué acción permite anticipar necesidades del cliente después de la compra?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finalizar el contacto una vez entregado el producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Realizar seguimiento a la experiencia de uso del producto o servicio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Limitar los canales de atención disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Concentrar la gestión únicamente en nuevas ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es una práctica adecuada para gestionar una reclamación en la postventa?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Escuchar la situación, registrar el caso y ofrecer una solución oportuna.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Remitir siempre el caso sin brindar información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar documentar la inconformidad del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Responder únicamente cuando exista una nueva compra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 3,
          texto:
            '¿Para qué sirve registrar las incidencias reportadas por los clientes?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para eliminar el historial de atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reducir los canales de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para identificar recurrencias y oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para reemplazar las políticas de garantía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 4,
          texto:
            '¿Qué resultado puede generar una atención postventa oportuna?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor confianza del cliente en la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Disminución automática de la calidad del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación de todos los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de la comunicación con el cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 5,
          texto:
            '¿Qué información resulta útil para evaluar la satisfacción después de una compra?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La opinión del cliente sobre la atención y el desempeño del producto o servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el número de empleados de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo el costo de producción del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente la información de los proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 6,
          texto:
            '¿Qué debe hacer la empresa cuando identifica una falla recurrente mediante la postventa?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los reportes para evitar modificaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar sus causas y establecer acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Suspender todos los canales de servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el seguimiento de los casos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito de mantener canales de atención postventa accesibles?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar que el cliente comunique solicitudes, dudas o inconformidades.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar que el cliente contacte nuevamente a la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar por completo el proceso de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restringir la información sobre los servicios ofrecidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 8,
          texto:
            '¿Qué práctica contribuye a fortalecer la fidelización del cliente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ofrecer respuestas coherentes y cumplir los compromisos adquiridos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Modificar las condiciones ofrecidas sin informar al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el acompañamiento después de la compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el seguimiento de las solicitudes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 9,
          texto:
            '¿Qué permite medir un indicador de tiempo de respuesta en postventa?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La rapidez con la que se atienden las solicitudes del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de productos fabricados por jornada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor total del producto o servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La duración de una campaña publicitaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es una finalidad de analizar el <em>feedback</em> recibido en la postventa?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reconocer oportunidades para mejorar la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la necesidad de atender reclamaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir la planeación comercial de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar cambios en los procesos de servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 11,
          texto: '¿Qué acción favorece una gestión efectiva de las garantías?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Informar claramente las condiciones y atender las solicitudes según lo establecido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Modificar las condiciones cuando se presenta una reclamación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar comunicar los procedimientos al cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Resolver únicamente los casos de clientes frecuentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 12,
          texto:
            '¿Qué caracteriza una solución efectiva ante una inconformidad del cliente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se ajusta al caso, se comunica con claridad y se gestiona oportunamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se aplaza indefinidamente para evitar costos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se limita a informar que el caso fue recibido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se aplica de igual manera sin analizar la situación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 13,
          texto: '¿Cómo puede la postventa contribuir a la recompra?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generando una experiencia satisfactoria que fortalezca la confianza del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminando el contacto después de entregar el producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restringiendo los servicios de soporte disponibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentando los requisitos para presentar solicitudes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 14,
          texto:
            '¿Qué utilidad tiene clasificar las solicitudes recibidas en postventa?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Priorizar la atención y facilitar el análisis de los tipos de requerimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar el registro de los casos atendidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la información disponible para la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de hacer seguimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 15,
          texto: '¿Qué acción corresponde al seguimiento de un caso postventa?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar si la solución brindada atendió la necesidad del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cerrar el caso inmediatamente después de recibirlo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar los datos relacionados con la solicitud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Suspender la comunicación antes de resolver el requerimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 16,
          texto:
            '¿Por qué es importante cumplir los compromisos establecidos durante la postventa?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque fortalece la credibilidad y la confianza en la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque evita cualquier contacto futuro con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque sustituye la calidad del producto o servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque elimina la necesidad de evaluar la satisfacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 17,
          texto: '¿Qué aporta la mejora continua al servicio postventa?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite ajustar procesos a partir de resultados, incidencias y opiniones de los clientes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mantiene sin cambios los procedimientos, aunque presenten fallas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Impide establecer acciones correctivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reduce la información disponible para tomar decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una señal de una gestión postventa orientada al cliente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Dar respuesta a sus necesidades y mantener comunicación durante la solución del caso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Priorizar únicamente los procedimientos internos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar informar el estado de las solicitudes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cerrar los casos sin confirmar su solución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 19,
          texto:
            '¿Qué beneficio ofrece una base de datos actualizada de clientes en la postventa?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilita el seguimiento de interacciones y la personalización de la atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Elimina la necesidad de proteger la información del cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituye todos los canales de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impide conocer el historial de solicitudes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe verificarse antes de cerrar una solicitud de servicio postventa?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el requerimiento haya sido gestionado y la solución comunicada al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que el cliente realice una nueva compra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que se elimine el registro de la incidencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que finalice el periodo de promoción del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
          mensaje_incorrecto:
            'Se recomienda fortalecer la comprensión de los principios y prácticas de la gestión del servicio postventa y la fidelización de clientes.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la postventa.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente el componente formativo La postventa y realizar otro intento.',
    },
  }),
}
</script>
