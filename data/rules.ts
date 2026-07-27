import type { IconKey } from "@/components/icons";

export type CategoryColor = "acid" | "blue" | "green" | "amber" | "purple" | "teal";

export interface RulePointGroup {
  intro?: string;
  points: string[];
}

export interface RuleSectionData {
  number: string;
  slug: string;
  title: string;
  icon: IconKey;
  color: CategoryColor;
  intro?: string;
  groups: RulePointGroup[];
  outro?: string;
  /** Optional two-column layout: allowed vs forbidden */
  columns?: {
    allowedTitle: string;
    allowed: string[];
    forbiddenTitle: string;
    forbidden: string[];
    note?: string;
  };
}

export const rules: RuleSectionData[] = [
  {
    number: "01",
    slug: "respeto-y-convivencia",
    icon: 'users',
    color: 'blue',
    title: "Respeto y convivencia",
    intro:
      "Todos los jugadores deben mantener una conducta respetuosa dentro del servidor.",
    groups: [
      {
        intro: "Queda prohibido:",
        points: [
          "Insultar, acosar, amenazar o intimidar a otros jugadores.",
          "Discriminar por cualquier motivo (raza, nacionalidad, religión, orientación sexual, género, discapacidad, etc.).",
          "Generar conflictos de forma intencional, provocar discusiones o fomentar un ambiente tóxico.",
          "Hostigar de manera reiterada a un jugador, incluso si ocurre fuera del chat público.",
        ],
      },
    ],
    outro:
      "El staff podrá intervenir cuando una conducta afecte la convivencia del servidor.",
  },
  {
    number: "02",
    slug: "anti-afk",
    icon: 'clock',
    color: 'teal',
    title: "Anti-AFK",
    intro:
      "No está permitido utilizar ningún método para simular actividad mientras el jugador se encuentra ausente.",
    groups: [
      {
        intro: "Esto incluye, entre otros:",
        points: [
          "Macros.",
          "Auto movimiento.",
          "Sistemas de redstone diseñados para evitar la detección de AFK.",
          "Mods o clientes que automaticen acciones.",
          "Objetos físicos o software que mantengan teclas o botones presionados.",
        ],
      },
    ],
    outro:
      "Permanecer conectado sin jugar está permitido únicamente si el jugador no utiliza ningún método para evitar ser detectado como AFK.",
  },
  {
    number: "03",
    slug: "multicuentas",
    icon: 'copy',
    color: 'purple',
    title: "Multicuentas",
    intro:
      "Cada jugador podrá utilizar como máximo dos cuentas. Las multicuentas no podrán utilizarse simultáneamente, independientemente del dispositivo o conexión utilizada.",
    groups: [
      {
        intro: "Está prohibido utilizar multicuentas para:",
        points: [
          "Evadir sanciones o restricciones.",
          "Obtener recompensas múltiples.",
          "Reclamar kits, recompensas diarias o beneficios repetidos.",
          "Farmear recursos.",
          "Manipular la economía.",
          "Votar varias veces.",
          "Participar varias veces en eventos.",
          "Transferir beneficios exclusivos entre cuentas.",
          "Obtener cualquier ventaja que un jugador con una sola cuenta no pueda conseguir.",
        ],
      },
    ],
    outro:
      "El uso de una segunda cuenta deberá tener un propósito legítimo y nunca podrá proporcionar una ventaja injusta.",
  },
  {
    number: "04",
    slug: "macros-y-autoclick",
    icon: 'cursor',
    color: 'amber',
    title: "Macros y autoclick",
    intro:
      "Se prohíbe el uso de macros, autoclickers y cualquier software o hardware que automatice acciones del jugador.",
    groups: [
      {
        intro: "Esto incluye:",
        points: [
          "PvP.",
          "Minería.",
          "Farmeo.",
          "Construcción.",
          "Eventos.",
          "Minijuegos.",
          "Cualquier otra actividad del servidor.",
        ],
      },
    ],
    outro:
      "También se consideran ilegales los dispositivos físicos con funciones turbo o repetición automática.",
  },
  {
    number: "05",
    slug: "conductas-de-pvp",
    icon: 'swords',
    color: 'acid',
    title: "Conductas de PvP",
    intro:
      "Quedan prohibidas las prácticas destinadas a obtener asesinatos mediante engaños o abuso de mecánicas.",
    groups: [
      {
        intro: "Entre ellas:",
        points: [
          "TPAKill.",
          "SpawnKill.",
          "TrapKill.",
          "Encerrar jugadores sin posibilidad razonable de escapar.",
          "Aprovechar errores del servidor durante un combate.",
        ],
      },
    ],
    outro: "El PvP deberá desarrollarse de forma justa.",
  },
  {
    number: "06",
    slug: "estafas",
    icon: 'alert',
    color: 'amber',
    title: "Estafas",
    intro:
      "Todos los intercambios realizados fuera de los sistemas oficiales del servidor serán responsabilidad exclusiva de los jugadores.",
    groups: [
      {
        intro: "El staff no devolverá objetos, dinero o recompensas perdidas por:",
        points: [
          "Intercambios manuales.",
          "Préstamos.",
          "Acuerdos verbales.",
          "Promesas de pago.",
          "Negocios realizados fuera del servidor.",
        ],
      },
    ],
    outro: "Se recomienda utilizar únicamente los sistemas oficiales de comercio.",
  },
  {
    number: "07",
    slug: "rmt",
    icon: 'coin',
    color: 'green',
    title: "RMT (Real Money Trading)",
    intro:
      "Queda totalmente prohibido comprar, vender, intercambiar o promocionar cualquier elemento del servidor por dinero real o bienes con valor económico.",
    groups: [
      {
        intro: "Esto incluye:",
        points: [
          "Dinero.",
          "Rangos.",
          "Objetos.",
          "Cuentas.",
          "Servicios.",
          "Monedas virtuales externas.",
          "Criptomonedas.",
          "Gift Cards.",
        ],
      },
    ],
    outro:
      "La participación directa o indirecta en este tipo de transacciones será sancionada.",
  },
  {
    number: "08",
    slug: "mods-y-clientes-permitidos",
    icon: 'monitor',
    color: 'blue',
    title: "Mods y clientes permitidos",
    intro: "Se permiten únicamente modificaciones que no otorguen ventajas injustas.",
    groups: [],
    columns: {
      allowedTitle: "Permitidos",
      allowed: [
        "OptiFine.",
        "Sodium.",
        "Iris.",
        "Shaders.",
        "Minimapas sin radar de entidades.",
        "Litematica sin Easy Place ni funciones automáticas.",
      ],
      forbiddenTitle: "Prohibidos",
      forbidden: [
        "X-Ray.",
        "KillAura.",
        "TriggerBot.",
        "Reach.",
        "Velocity.",
        "NoFall.",
        "FreeCam con ventaja.",
        "AutoTotem.",
        "AutoArmor.",
        "Easy Place.",
        "AutoMine.",
        "Cualquier hack o cliente modificado.",
      ],
    },
    outro:
      "Si un mod automatiza acciones o proporciona información que normalmente el juego no ofrece, podrá considerarse ilegal aunque no aparezca expresamente en esta lista.",
  },
  {
    number: "09",
    slug: "exploits-bugs-y-duplicaciones",
    icon: 'bug',
    color: 'purple',
    title: "Exploits, bugs y duplicaciones",
    intro:
      "Está prohibido utilizar, compartir, enseñar o aprovechar cualquier error del servidor.",
    groups: [
      {
        intro: "Esto incluye:",
        points: [
          "Dupes.",
          "Glitches.",
          "Bugs.",
          "Vulnerabilidades.",
          "Métodos para duplicar objetos.",
          "Formas de obtener ventajas mediante errores.",
        ],
      },
    ],
    outro:
      "Todo bug deberá reportarse al staff tan pronto como sea posible. No reportar un bug mientras se obtiene beneficio de él también constituye una infracción.",
  },
  {
    number: "10",
    slug: "publicidad-y-spam",
    icon: 'megaphone',
    color: 'teal',
    title: "Publicidad y spam",
    groups: [
      {
        intro: "Queda prohibido:",
        points: [
          "Publicitar otros servidores.",
          "Compartir IPs.",
          "Enviar enlaces no autorizados.",
          "Promocionar redes sociales con fines publicitarios.",
          "Hacer spam o flood.",
          "Repetir mensajes de forma excesiva.",
          "Saturar el chat con símbolos, mayúsculas o caracteres repetitivos.",
        ],
      },
    ],
  },
  {
    number: "11",
    slug: "robos-y-grief",
    icon: 'hammer',
    color: 'acid',
    title: "Robos y grief",
    groups: [
      {
        intro: "No está permitido:",
        points: [
          "Robar pertenencias ajenas.",
          "Destruir construcciones.",
          "Modificar terrenos ajenos.",
          "Colocar bloques para perjudicar a otros jugadores.",
          "Utilizar mecánicas para provocar daños indirectos.",
        ],
      },
    ],
    outro: "Todo acceso a propiedades ajenas requiere autorización del propietario.",
  },
  {
    number: "12",
    slug: "eventos",
    icon: 'trophy',
    color: 'amber',
    title: "Eventos",
    intro: "Los eventos deberán jugarse de manera limpia.",
    groups: [
      {
        intro: "Está prohibido:",
        points: [
          "Participar con multicuentas.",
          "Utilizar hacks.",
          "Utilizar macros.",
          "Aprovechar bugs.",
          "Coludirse con otros jugadores para alterar resultados.",
          "Manipular el desarrollo del evento.",
        ],
      },
    ],
    outro:
      "El staff podrá descalificar participantes aunque el comportamiento no esté contemplado expresamente si afecta la integridad del evento.",
  },
  {
    number: "13",
    slug: "economia",
    icon: 'wallet',
    color: 'green',
    title: "Economía",
    intro: "Está prohibido manipular la economía del servidor.",
    groups: [
      {
        intro: "Esto incluye:",
        points: [
          "Uso de bugs.",
          "Uso de multicuentas.",
          "Automatización ilegal.",
          "Duplicación de objetos.",
          "Lavado de dinero entre cuentas.",
          "Inflar o alterar artificialmente los precios mediante prácticas abusivas.",
        ],
      },
    ],
    outro:
      "Cualquier acción destinada a perjudicar la estabilidad económica del servidor podrá ser sancionada.",
  },
  {
    number: "14",
    slug: "construcciones",
    icon: 'building',
    color: 'blue',
    title: "Construcciones",
    groups: [
      {
        intro: "No se permiten construcciones que:",
        points: [
          "Contengan contenido ofensivo.",
          "Tengan temática sexual.",
          "Promuevan odio o discriminación.",
          "Generen lag de forma intencional.",
          "Abusen de entidades, redstone o mecanismos que afecten el rendimiento del servidor.",
        ],
      },
    ],
    outro:
      "El staff podrá solicitar modificaciones o retirar construcciones que perjudiquen la estabilidad del servidor.",
  },
  {
    number: "15",
    slug: "contenido-inapropiado",
    icon: 'shield-alert',
    color: 'acid',
    title: "Contenido inapropiado",
    groups: [
      {
        intro: "Quedan prohibidos:",
        points: ["Skins.", "Nombres.", "Nicknames.", "Mensajes.", "Carteles.", "Libros.", "Construcciones."],
      },
      {
        intro: "Que contengan:",
        points: [
          "Contenido sexual explícito.",
          "Gore.",
          "Racismo.",
          "Xenofobia.",
          "Discriminación.",
          "Apología del odio.",
          "Cualquier contenido inapropiado para la comunidad.",
        ],
      },
    ],
  },
  {
    number: "16",
    slug: "staff-y-autoridad",
    icon: 'gavel',
    color: 'purple',
    title: "Staff y autoridad",
    groups: [
      {
        points: [
          "El staff tiene la responsabilidad de mantener el orden, la seguridad y el correcto funcionamiento del servidor.",
          "Los jugadores deberán respetar las indicaciones del staff durante revisiones, investigaciones y eventos.",
          "Toda sanción deberá fundamentarse en estas normas o en conductas que, aun no estando descritas de forma literal, representen un abuso evidente, otorguen ventajas injustas o perjudiquen gravemente la experiencia de la comunidad.",
          "Las decisiones del staff podrán ser apeladas mediante los canales oficiales, siempre con respeto.",
        ],
      },
    ],
  },
];
