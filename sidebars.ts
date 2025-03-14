import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "introduccion",
    {
      type: "category",
      label: "Módulos",
      items: [
        "Modulos/dashboard",
        {
          type: "category",
          label: "Catálogos",
          link: {
            type: "generated-index",
            title: "Catálogos",
            description:
              "Los catálogos son listas de valores que se utilizan en Entregalo para estandarizar la información y facilitar la selección de valores en los diferentes formularios.",
          },
          items: [
            "Modulos/Catalogos/terceros",
            "Modulos/Catalogos/vehiculos",
            "Modulos/Catalogos/rutas",
          ],
        },
        {
          type: "category",
          label: "Logística",
          link: {
            type: "generated-index",
            title: "Logística",
            description:
              "El módulo de Logística es el corazón de Entregalo, donde se gestionan las actividades principales relacionadas con el transporte de carga. Este módulo se divide en dos componentes esenciales: Remesas y Viajes/Manifiestos.",
          },
          items: [
            "Modulos/Operaciones/Remesas",
            "Modulos/Operaciones/Viajes-Manifiestos",
            // 'Modulos/Operaciones/Cumplir-Remesas',
            // 'Modulos/Operaciones/Cumplir-Manifiestos',
          ],
        },
        {
          type: "category",
          label: "Generación de Documentos",
          link: {
            type: "generated-index",
            title: "Generación de Documentos",
            description: "Test",
          },
          items: ["Modulos/GeneracionDocumentos/Factura"],
        },
        {
          type: "category",
          label: "Reportes",
          link: {
            type: "generated-index",
            title: "Reportes",
            description: "test",
          },
          items: ["Modulos/Reportes/General"],
        },
        {
          type: "category",
          label: "Parámetros",
          link: {
            type: "generated-index",
            title: "Parámetros",
            description: "test",
          },
          items: [
            "Modulos/Parametros/Tributos",
            "Modulos/Parametros/Descuentos",
            "Modulos/Parametros/ValoresBase",
            "Modulos/Parametros/Documentos",
            "Modulos/Parametros/Conceptos",
            "Modulos/Parametros/Anticipos",
            "Modulos/Parametros/Cuotas",
            "Modulos/Parametros/ModalidadesDePago",
          ],
        },
        {
          type: "category",
          label: "Configuraciones",
          link: {
            type: "generated-index",
            title: "Configuraciones",
            description: "test",
          },
          items: [
            "Modulos/Configuraciones/Usuarios",
            "Modulos/Configuraciones/Empresa",
            "Modulos/Configuraciones/RNDC",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
