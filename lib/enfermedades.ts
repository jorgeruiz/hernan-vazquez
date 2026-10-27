export interface Enfermedad {
  slug: string
  nombre: string
  titleTag: string
  metaDescription: string
  h1: string
  respuestaCorta: string
  secciones: {
    pregunta: string
    contenido: string
  }[]
  faqs: {
    pregunta: string
    respuesta: string
  }[]
  ctaTexto: string
  condicionesRelacionadas: string[]
}

export const enfermedades: Enfermedad[] = [
  {
    slug: "artritis-reumatoide",
    nombre: "Artritis reumatoide",
    titleTag: "Artritis Reumatoide en Monterrey | Dr. Hernán Vázquez González",
    metaDescription:
      "Especialista en artritis reumatoide en Monterrey. Diagnóstico temprano, tratamiento personalizado y seguimiento continuo. Reumatólogo certificado. Tel. 81 8317 8342.",
    h1: "Artritis reumatoide: síntomas, diagnóstico y tratamiento en Monterrey",
    respuestaCorta:
      "La artritis reumatoide es una enfermedad autoinmune que inflama las articulaciones, especialmente de manos y pies. Afecta más a mujeres entre 30 y 60 años. El diagnóstico temprano por un reumatólogo permite controlar la inflamación, prevenir daño articular y mantener la calidad de vida.",
    secciones: [
      {
        pregunta: "¿Cuáles son los síntomas de la artritis reumatoide?",
        contenido:
          "Los síntomas más frecuentes incluyen dolor e inflamación en las articulaciones de las manos, muñecas y pies, especialmente de forma simétrica (ambos lados del cuerpo). La rigidez matutina que dura más de 30 minutos es un signo característico.\n\nOtros síntomas incluyen:\n\n- Fatiga persistente\n- Articulaciones calientes al tacto\n- Pérdida de fuerza en las manos\n- Nódulos bajo la piel (nódulos reumatoides)\n- Pérdida de apetito y peso involuntaria",
      },
      {
        pregunta: "¿Cómo se diagnostica la artritis reumatoide?",
        contenido:
          "El diagnóstico combina la evaluación clínica con estudios de laboratorio e imagen. El reumatólogo valora los síntomas, la distribución de las articulaciones afectadas y la duración de la rigidez.\n\nLos estudios más utilizados son:\n\n- Factor reumatoide (FR)\n- Anticuerpos anti-CCP (anti-péptido cíclico citrulinado)\n- Velocidad de sedimentación (VSG) y proteína C reactiva (PCR)\n- Radiografías de manos y pies\n- Ultrasonido articular\n\nLos criterios de clasificación ACR/EULAR permiten al reumatólogo establecer el diagnóstico de forma temprana, idealmente antes de que ocurra daño articular irreversible.",
      },
      {
        pregunta: "¿Qué tratamientos existen para la artritis reumatoide?",
        contenido:
          "El tratamiento busca controlar la inflamación, aliviar el dolor y prevenir el daño articular progresivo. El reumatólogo diseña un plan personalizado según la actividad de la enfermedad y las condiciones de cada paciente.\n\nLas opciones terapéuticas incluyen:\n\n- Fármacos antirreumáticos modificadores de la enfermedad (FARMEs), como metotrexato\n- Terapias biológicas y moléculas pequeñas dirigidas\n- Antiinflamatorios y analgésicos para control sintomático\n- Rehabilitación y terapia ocupacional\n\nEl seguimiento regular permite ajustar el tratamiento según la respuesta y minimizar efectos secundarios.",
      },
      {
        pregunta: "¿La artritis reumatoide tiene cura?",
        contenido:
          "Actualmente no existe una cura definitiva, pero los tratamientos disponibles permiten lograr la remisión en muchos pacientes, es decir, la ausencia de síntomas y de inflamación activa. El diagnóstico temprano y el tratamiento oportuno son los factores más importantes para alcanzar este objetivo.\n\nEl seguimiento continuo con un reumatólogo es fundamental para mantener la enfermedad controlada a largo plazo.",
      },
    ],
    faqs: [
      {
        pregunta: "¿A qué edad aparece la artritis reumatoide?",
        respuesta:
          "Puede presentarse a cualquier edad, pero es más frecuente entre los 30 y 60 años. También existe artritis reumatoide juvenil, que afecta a menores de 16 años.",
      },
      {
        pregunta: "¿La artritis reumatoide es hereditaria?",
        respuesta:
          "Existe predisposición genética, pero no se hereda directamente. Tener un familiar con artritis reumatoide aumenta el riesgo, aunque la mayoría de las personas con predisposición nunca desarrollan la enfermedad.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre artritis reumatoide y artrosis?",
        respuesta:
          "La artritis reumatoide es una enfermedad autoinmune con inflamación activa; la artrosis es un desgaste mecánico del cartílago. Tienen causas, síntomas y tratamientos distintos. El reumatólogo es quien puede distinguirlas con certeza.",
      },
      {
        pregunta: "¿Cuándo debo ir al reumatólogo por dolor en las articulaciones?",
        respuesta:
          "Consulte a un reumatólogo si presenta dolor articular persistente por más de dos semanas, rigidez matutina mayor a 30 minutos, inflamación visible en alguna articulación, o si tiene antecedentes familiares de enfermedades autoinmunes.",
      },
    ],
    ctaTexto:
      "Si tiene rigidez matutina de más de 30 minutos o dolor articular persistente, agende una valoración con el Dr. Vázquez González.",
    condicionesRelacionadas: ["lupus", "fibromialgia", "artrosis"],
  },
  {
    slug: "lupus",
    nombre: "Lupus eritematoso sistémico",
    titleTag: "Lupus Eritematoso Sistémico en Monterrey | Dr. Hernán Vázquez González",
    metaDescription:
      "Diagnóstico y tratamiento de lupus en Monterrey. Reumatólogo certificado con experiencia en enfermedades autoinmunes. Atención integral. Tel. 81 8317 8342.",
    h1: "Lupus eritematoso sistémico: síntomas, diagnóstico y tratamiento en Monterrey",
    respuestaCorta:
      "El lupus eritematoso sistémico (LES) es una enfermedad autoinmune crónica que puede afectar articulaciones, piel, riñones y otros órganos. Es más frecuente en mujeres jóvenes. El manejo por un reumatólogo es esencial para controlar los brotes, proteger los órganos y mejorar la calidad de vida.",
    secciones: [
      {
        pregunta: "¿Cuáles son los síntomas del lupus?",
        contenido:
          "El lupus puede manifestarse de formas muy diversas. Los síntomas más comunes incluyen:\n\n- Dolor e inflamación articular\n- Eritema en forma de mariposa en mejillas y nariz\n- Fatiga intensa y persistente\n- Fiebre sin causa aparente\n- Caída del cabello\n- Sensibilidad al sol (fotosensibilidad)\n- Úlceras orales recurrentes\n- Inflamación de riñones (nefritis lúpica)\n\nLos síntomas suelen presentarse en brotes alternados con periodos de mejoría.",
      },
      {
        pregunta: "¿Cómo se diagnostica el lupus?",
        contenido:
          "El diagnóstico del lupus requiere la evaluación integral por un reumatólogo, ya que sus síntomas pueden simular otras enfermedades.\n\nLos estudios más utilizados incluyen:\n\n- Anticuerpos antinucleares (ANA)\n- Anticuerpos anti-DNA de doble cadena (anti-dsDNA)\n- Complemento sérico (C3, C4)\n- Biometría hemática y examen general de orina\n- Biopsia renal cuando hay sospecha de nefritis lúpica\n\nLos criterios de clasificación EULAR/ACR 2019 ayudan a establecer el diagnóstico con mayor precisión.",
      },
      {
        pregunta: "¿Qué tratamientos existen para el lupus?",
        contenido:
          "El tratamiento del lupus se personaliza según los órganos afectados y la actividad de la enfermedad.\n\nLas opciones incluyen:\n\n- Hidroxicloroquina (tratamiento base para todos los pacientes con lupus)\n- Corticoesteroides para controlar brotes agudos\n- Inmunosupresores (micofenolato, azatioprina, ciclofosfamida)\n- Terapias biológicas (belimumab, anifrolumab)\n- Protección solar estricta y medidas de estilo de vida\n\nEl seguimiento regular permite prevenir complicaciones y ajustar el tratamiento oportunamente.",
      },
    ],
    faqs: [
      {
        pregunta: "¿El lupus es contagioso?",
        respuesta:
          "No. El lupus es una enfermedad autoinmune, no infecciosa. No se transmite de persona a persona.",
      },
      {
        pregunta: "¿Puedo embarazarme si tengo lupus?",
        respuesta:
          "Sí, pero el embarazo debe planearse con el reumatólogo cuando la enfermedad esté controlada, idealmente con al menos seis meses sin actividad. Algunos medicamentos deben ajustarse antes de la concepción.",
      },
      {
        pregunta: "¿El lupus tiene cura?",
        respuesta:
          "Actualmente no tiene cura, pero con el tratamiento adecuado la mayoría de los pacientes logran controlar la enfermedad y llevar una vida plena. El seguimiento constante con reumatología es clave.",
      },
      {
        pregunta: "¿Por qué afecta más a mujeres?",
        respuesta:
          "Se estima que 9 de cada 10 personas con lupus son mujeres, probablemente por la influencia de las hormonas femeninas (estrógenos) en la regulación del sistema inmunológico.",
      },
    ],
    ctaTexto:
      "Si presenta eritema facial, caída de cabello y dolor articular, consulte con un reumatólogo para descartar lupus.",
    condicionesRelacionadas: ["artritis-reumatoide", "fibromialgia"],
  },
  {
    slug: "fibromialgia",
    nombre: "Fibromialgia",
    titleTag: "Fibromialgia en Monterrey | Dr. Hernán Vázquez González",
    metaDescription:
      "Diagnóstico y tratamiento de fibromialgia en Monterrey. Abordaje integral del dolor crónico por reumatólogo certificado. Tel. 81 8317 8342.",
    h1: "Fibromialgia: síntomas, diagnóstico y tratamiento en Monterrey",
    respuestaCorta:
      "La fibromialgia es un síndrome de dolor crónico generalizado acompañado de fatiga, alteraciones del sueño y dificultad de concentración. Afecta predominantemente a mujeres. El reumatólogo es el especialista indicado para confirmar el diagnóstico, descartar otras causas y establecer un plan de manejo integral.",
    secciones: [
      {
        pregunta: "¿Cuáles son los síntomas de la fibromialgia?",
        contenido:
          "Los síntomas principales de la fibromialgia incluyen:\n\n- Dolor generalizado en músculos y articulaciones que persiste por más de tres meses\n- Fatiga que no mejora con el descanso\n- Sueño no reparador\n- Dificultad para concentrarse (\"niebla mental\")\n- Dolores de cabeza frecuentes\n- Sensibilidad aumentada al tacto, la temperatura y los ruidos\n- Síntomas digestivos (colon irritable)\n- Ansiedad y estado de ánimo bajo\n\nLos síntomas fluctúan y pueden empeorar con el estrés, los cambios de clima o la falta de sueño.",
      },
      {
        pregunta: "¿Cómo se diagnostica la fibromialgia?",
        contenido:
          "No existe un estudio de laboratorio o imagen que confirme la fibromialgia. El diagnóstico es clínico: el reumatólogo evalúa los síntomas, los puntos dolorosos y descarta otras enfermedades que pueden presentarse de forma similar.\n\nSe utilizan los criterios del American College of Rheumatology (ACR), que consideran:\n\n- Dolor generalizado en al menos 4 de 5 regiones corporales\n- Duración mayor a tres meses\n- Índice de dolor generalizado y escala de gravedad de síntomas\n\nEs importante descartar hipotiroidismo, anemia, lupus y otras causas de dolor y fatiga.",
      },
      {
        pregunta: "¿Qué tratamientos existen para la fibromialgia?",
        contenido:
          "El manejo de la fibromialgia requiere un enfoque integral que combine tratamiento farmacológico y no farmacológico.\n\n- Medicamentos: pregabalina, duloxetina, amitriptilina (según el perfil de cada paciente)\n- Ejercicio aeróbico regular (el pilar no farmacológico más importante)\n- Higiene del sueño y manejo del estrés\n- Terapia cognitivo-conductual\n- Educación sobre la enfermedad\n\nEl reumatólogo coordina el tratamiento y lo ajusta según la evolución de los síntomas.",
      },
    ],
    faqs: [
      {
        pregunta: "¿La fibromialgia es una enfermedad real?",
        respuesta:
          "Sí. La fibromialgia es una condición médica reconocida por la Organización Mundial de la Salud. Se relaciona con una alteración en el procesamiento del dolor en el sistema nervioso central.",
      },
      {
        pregunta: "¿La fibromialgia tiene cura?",
        respuesta:
          "No tiene cura definitiva, pero el tratamiento integral permite reducir significativamente los síntomas y mejorar la calidad de vida. Muchos pacientes logran un buen control con el manejo adecuado.",
      },
      {
        pregunta: "¿A qué médico debo ir si creo que tengo fibromialgia?",
        respuesta:
          "El reumatólogo es el especialista más indicado para diagnosticar y tratar la fibromialgia. Es importante acudir con un médico que conozca la enfermedad para recibir un diagnóstico certero y evitar estudios innecesarios.",
      },
      {
        pregunta: "¿El ejercicio empeora la fibromialgia?",
        respuesta:
          "Al contrario: el ejercicio aeróbico moderado y regular es uno de los tratamientos más efectivos. Se recomienda iniciar de forma gradual, con actividades de bajo impacto como caminar, nadar o andar en bicicleta.",
      },
    ],
    ctaTexto:
      "Si tiene dolor en todo el cuerpo, cansancio constante y problemas de sueño, agende una valoración reumatológica.",
    condicionesRelacionadas: ["artritis-reumatoide", "lupus"],
  },
  {
    slug: "gota",
    nombre: "Gota",
    titleTag: "Gota en Monterrey | Dr. Hernán Vázquez González",
    metaDescription:
      "Tratamiento de gota en Monterrey. Manejo de crisis agudas y prevención de ataques recurrentes. Reumatólogo certificado. Tel. 81 8317 8342.",
    h1: "Gota: síntomas, diagnóstico y tratamiento en Monterrey",
    respuestaCorta:
      "La gota es una artritis inflamatoria causada por el depósito de cristales de ácido úrico en las articulaciones. Produce ataques de dolor intenso, generalmente en el dedo gordo del pie. El reumatólogo puede tratar la crisis aguda y establecer un plan para prevenir nuevos ataques y complicaciones.",
    secciones: [
      {
        pregunta: "¿Cuáles son los síntomas de la gota?",
        contenido:
          "El síntoma más característico es un ataque de dolor intenso, generalmente nocturno, en una sola articulación. El dedo gordo del pie (podagra) es la localización más frecuente.\n\nOtros síntomas incluyen:\n\n- Inflamación y enrojecimiento intenso de la articulación\n- Calor local y sensibilidad extrema al tacto\n- Ataques recurrentes que pueden afectar rodillas, tobillos o muñecas\n- Tofos (nódulos de ácido úrico bajo la piel) en casos crónicos\n- Cálculos renales de ácido úrico",
      },
      {
        pregunta: "¿Cómo se diagnostica la gota?",
        contenido:
          "El diagnóstico se basa en la historia clínica, los niveles de ácido úrico y, cuando es posible, la identificación de cristales en el líquido articular.\n\n- Ácido úrico sérico (puede ser normal durante una crisis)\n- Análisis de líquido sinovial con microscopio de luz polarizada\n- Ultrasonido articular (signo del doble contorno)\n- Radiografías en fases avanzadas\n\nEs importante que un reumatólogo confirme el diagnóstico, ya que otras condiciones pueden simular un ataque de gota.",
      },
      {
        pregunta: "¿Qué tratamientos existen para la gota?",
        contenido:
          "El tratamiento tiene dos objetivos: resolver el ataque agudo y prevenir futuros episodios.\n\n**Crisis aguda:**\n- Antiinflamatorios no esteroideos (AINEs)\n- Colchicina\n- Corticoesteroides (orales o inyectados)\n\n**Prevención a largo plazo:**\n- Fármacos hipouricemiantes (alopurinol, febuxostat)\n- Modificaciones dietéticas (reducir purinas, alcohol, bebidas azucaradas)\n- Hidratación adecuada\n- Meta: mantener ácido úrico por debajo de 6 mg/dL\n\nEl seguimiento con reumatología permite ajustar las dosis y monitorear los niveles de ácido úrico.",
      },
    ],
    faqs: [
      {
        pregunta: "¿El ácido úrico alto siempre causa gota?",
        respuesta:
          "No. La hiperuricemia (ácido úrico elevado) es necesaria pero no suficiente. Muchas personas tienen ácido úrico alto sin desarrollar gota. El diagnóstico requiere la presencia de síntomas articulares.",
      },
      {
        pregunta: "¿Qué alimentos debo evitar si tengo gota?",
        respuesta:
          "Se recomienda limitar carnes rojas, vísceras, mariscos, cerveza y bebidas con fructosa. La dieta ayuda pero generalmente no es suficiente para controlar la gota sin medicamento; su reumatólogo le indicará el plan completo.",
      },
      {
        pregunta: "¿La gota solo afecta al dedo gordo del pie?",
        respuesta:
          "No. Aunque el dedo gordo es la articulación más común, la gota puede afectar rodillas, tobillos, muñecas y otras articulaciones. En fases avanzadas puede ser poliarticular.",
      },
      {
        pregunta: "¿La gota se cura?",
        respuesta:
          "La gota se puede controlar de forma muy efectiva con tratamiento adecuado. Mantener el ácido úrico en niveles meta permite disolver los cristales acumulados y prevenir nuevos ataques.",
      },
    ],
    ctaTexto:
      "Si tiene ataques recurrentes de dolor articular intenso o ácido úrico elevado, consulte con un reumatólogo.",
    condicionesRelacionadas: ["artritis-reumatoide", "artrosis"],
  },
  {
    slug: "osteoporosis",
    nombre: "Osteoporosis",
    titleTag: "Osteoporosis en Monterrey | Dr. Hernán Vázquez González",
    metaDescription:
      "Diagnóstico y tratamiento de osteoporosis en Monterrey. Densitometría, prevención de fracturas y manejo integral. Reumatólogo certificado. Tel. 81 8317 8342.",
    h1: "Osteoporosis: diagnóstico, prevención y tratamiento en Monterrey",
    respuestaCorta:
      "La osteoporosis es una enfermedad silenciosa que debilita los huesos y aumenta el riesgo de fracturas, especialmente en columna, cadera y muñeca. Es más frecuente en mujeres postmenopáusicas. El reumatólogo puede evaluar el riesgo, diagnosticar con densitometría y establecer un tratamiento para fortalecer los huesos.",
    secciones: [
      {
        pregunta: "¿Cuáles son los síntomas de la osteoporosis?",
        contenido:
          "La osteoporosis generalmente no produce síntomas hasta que ocurre una fractura. Por eso se le conoce como la \"enfermedad silenciosa\".\n\nSeñales que pueden indicar osteoporosis:\n\n- Fractura por un traumatismo menor (fractura por fragilidad)\n- Disminución de estatura progresiva\n- Encorvamiento de la espalda (cifosis)\n- Dolor de espalda por fracturas vertebrales compresivas\n\nLa detección temprana mediante densitometría es fundamental para prevenir la primera fractura.",
      },
      {
        pregunta: "¿Cómo se diagnostica la osteoporosis?",
        contenido:
          "El estudio de referencia es la densitometría ósea (DXA), que mide la densidad mineral de los huesos en columna lumbar y cadera.\n\nEl reumatólogo también evalúa:\n\n- Factores de riesgo (menopausia temprana, uso de corticoesteroides, antecedente familiar)\n- Estudios de laboratorio: calcio, vitamina D, función tiroidea, función renal\n- Herramienta FRAX para estimar el riesgo de fractura a 10 años\n- Radiografías de columna si hay sospecha de fracturas vertebrales",
      },
      {
        pregunta: "¿Qué tratamientos existen para la osteoporosis?",
        contenido:
          "El tratamiento busca reducir el riesgo de fractura y depende de la gravedad de la osteoporosis y el perfil del paciente.\n\n- Suplementación de calcio y vitamina D como base\n- Bisfosfonatos (alendronato, risedronato, ácido zoledrónico)\n- Denosumab (anticuerpo monoclonal)\n- Terapias anabólicas (teriparatida, romosozumab) para osteoporosis severa\n- Ejercicio con carga y equilibrio para prevenir caídas\n- Prevención de caídas en el hogar\n\nEl seguimiento con densitometría permite evaluar la respuesta al tratamiento.",
      },
    ],
    faqs: [
      {
        pregunta: "¿A qué edad debo hacerme una densitometría?",
        respuesta:
          "Se recomienda a todas las mujeres a partir de los 65 años y a los hombres a partir de los 70. En personas con factores de riesgo (menopausia temprana, uso de corticoesteroides, fracturas previas), se puede indicar antes.",
      },
      {
        pregunta: "¿La osteoporosis solo afecta a mujeres?",
        respuesta:
          "No. Aunque es más frecuente en mujeres postmenopáusicas, los hombres también pueden desarrollar osteoporosis, especialmente después de los 70 años o con factores de riesgo.",
      },
      {
        pregunta: "¿Se puede revertir la osteoporosis?",
        respuesta:
          "Con tratamiento adecuado se puede aumentar la densidad ósea y reducir significativamente el riesgo de fractura. Los tratamientos anabólicos pueden incluso formar hueso nuevo en casos severos.",
      },
      {
        pregunta: "¿Un reumatólogo trata osteoporosis?",
        respuesta:
          "Sí. El reumatólogo es uno de los especialistas con mayor experiencia en el diagnóstico y tratamiento de osteoporosis, especialmente cuando se asocia a otras enfermedades reumáticas o al uso de corticoesteroides.",
      },
    ],
    ctaTexto:
      "Si tiene factores de riesgo o ha sufrido una fractura por un golpe menor, solicite una valoración reumatológica.",
    condicionesRelacionadas: ["artritis-reumatoide", "artrosis"],
  },
  {
    slug: "espondilitis-anquilosante",
    nombre: "Espondilitis anquilosante",
    titleTag: "Espondilitis Anquilosante en Monterrey | Dr. Hernán Vázquez González",
    metaDescription:
      "Especialista en espondilitis anquilosante en Monterrey. Diagnóstico temprano y tratamiento con biológicos. Reumatólogo certificado. Tel. 81 8317 8342.",
    h1: "Espondilitis anquilosante: síntomas, diagnóstico y tratamiento en Monterrey",
    respuestaCorta:
      "La espondilitis anquilosante es una enfermedad inflamatoria crónica que afecta principalmente la columna vertebral y las articulaciones sacroilíacas. Inicia con dolor lumbar en adultos jóvenes, típicamente antes de los 40 años. El diagnóstico temprano por un reumatólogo permite iniciar tratamiento para controlar el dolor y prevenir la rigidez de la columna.",
    secciones: [
      {
        pregunta: "¿Cuáles son los síntomas de la espondilitis anquilosante?",
        contenido:
          "El síntoma principal es el dolor lumbar inflamatorio, que se distingue del dolor mecánico por sus características:\n\n- Inicio gradual antes de los 40 años\n- Dolor que empeora con el reposo y mejora con el movimiento\n- Rigidez matutina de más de 30 minutos\n- Dolor nocturno que despierta en la segunda mitad de la noche\n\nOtras manifestaciones:\n\n- Dolor en glúteos (articulaciones sacroilíacas)\n- Inflamación de tendones (entesitis), especialmente el talón de Aquiles\n- Inflamación ocular (uveítis anterior)\n- Fatiga",
      },
      {
        pregunta: "¿Cómo se diagnostica la espondilitis anquilosante?",
        contenido:
          "El diagnóstico combina la evaluación clínica con estudios de imagen.\n\n- Resonancia magnética de articulaciones sacroilíacas (detecta inflamación temprana)\n- Radiografías de pelvis (cambios tardíos: sacroilitis, sindesmofitos)\n- HLA-B27 (marcador genético presente en la mayoría de los pacientes)\n- Reactantes de fase aguda (PCR, VSG)\n\nEl retraso diagnóstico promedio es de varios años, por lo que es importante consultar con un reumatólogo ante dolor lumbar inflamatorio persistente en personas jóvenes.",
      },
      {
        pregunta: "¿Qué tratamientos existen para la espondilitis anquilosante?",
        contenido:
          "El tratamiento tiene como objetivos controlar el dolor, mantener la movilidad de la columna y prevenir complicaciones.\n\n- Antiinflamatorios no esteroideos (AINEs) como primera línea\n- Terapias biológicas (anti-TNF, anti-IL17) cuando los AINEs no son suficientes\n- Ejercicio y fisioterapia (fundamental para mantener la postura y la movilidad)\n- Sulfasalazina para artritis periférica asociada\n\nEl ejercicio regular, especialmente la natación y los ejercicios de extensión de columna, es un pilar del tratamiento igual de importante que la medicación.",
      },
    ],
    faqs: [
      {
        pregunta: "¿La espondilitis anquilosante es lo mismo que dolor de espalda?",
        respuesta:
          "No. El dolor lumbar inflamatorio de la espondilitis se diferencia del dolor mecánico en que mejora con el ejercicio, empeora con el reposo, aparece antes de los 40 años y se acompaña de rigidez matutina prolongada.",
      },
      {
        pregunta: "¿Qué es el HLA-B27?",
        respuesta:
          "Es un marcador genético presente en la mayoría de los pacientes con espondilitis anquilosante. Sin embargo, tener el HLA-B27 positivo no significa que se tenga o se vaya a desarrollar la enfermedad.",
      },
      {
        pregunta: "¿Se puede hacer deporte con espondilitis anquilosante?",
        respuesta:
          "Sí, y es altamente recomendable. El ejercicio regular es parte fundamental del tratamiento. Se recomiendan deportes de bajo impacto como natación, yoga, pilates y caminata. El reumatólogo puede orientar sobre las actividades más apropiadas.",
      },
    ],
    ctaTexto:
      "Si tiene dolor lumbar persistente que mejora con ejercicio y empeora con reposo, consulte con un reumatólogo.",
    condicionesRelacionadas: ["artritis-reumatoide", "fibromialgia"],
  },
  {
    slug: "artrosis",
    nombre: "Artrosis (osteoartritis)",
    titleTag: "Artrosis en Monterrey | Dr. Hernán Vázquez González",
    metaDescription:
      "Diagnóstico y tratamiento de artrosis (osteoartritis) en Monterrey. Manejo del dolor articular y prevención de progresión. Reumatólogo certificado. Tel. 81 8317 8342.",
    h1: "Artrosis (osteoartritis): síntomas, diagnóstico y tratamiento en Monterrey",
    respuestaCorta:
      "La artrosis u osteoartritis es la enfermedad articular más frecuente. Produce desgaste progresivo del cartílago, causando dolor y limitación de movimiento, principalmente en rodillas, caderas y manos. El reumatólogo puede confirmar el diagnóstico, descartar otras causas de dolor articular y diseñar un plan de manejo personalizado.",
    secciones: [
      {
        pregunta: "¿Cuáles son los síntomas de la artrosis?",
        contenido:
          "Los síntomas se desarrollan gradualmente y afectan las articulaciones que soportan peso o las que se usan con frecuencia.\n\n- Dolor articular que empeora con la actividad y mejora con el reposo\n- Rigidez de corta duración al iniciar el movimiento (menos de 30 minutos)\n- Crepitación (sensación de crujido) al mover la articulación\n- Limitación progresiva del rango de movimiento\n- Deformidad articular en fases avanzadas\n- Inflamación ocasional\n\nLas articulaciones más afectadas son rodillas (gonartrosis), caderas (coxartrosis), manos y columna.",
      },
      {
        pregunta: "¿Cómo se diagnostica la artrosis?",
        contenido:
          "El diagnóstico se establece con la evaluación clínica y estudios de imagen.\n\n- Radiografías: muestran disminución del espacio articular, osteofitos y esclerosis subcondral\n- El reumatólogo diferencia la artrosis de otras causas de dolor articular (artritis reumatoide, gota, etc.)\n- Estudios de laboratorio para descartar artritis inflamatoria\n- Ultrasonido articular cuando hay duda diagnóstica\n\nEs importante distinguir la artrosis de enfermedades inflamatorias, ya que el tratamiento es diferente.",
      },
      {
        pregunta: "¿Qué tratamientos existen para la artrosis?",
        contenido:
          "El tratamiento busca controlar el dolor, mantener la función articular y retrasar la progresión.\n\n- Control de peso (factor modificable más importante en artrosis de rodilla)\n- Ejercicio terapéutico y fortalecimiento muscular\n- Analgésicos y antiinflamatorios según necesidad\n- Infiltraciones articulares (corticoesteroides, ácido hialurónico)\n- Terapia física y rehabilitación\n- Referencia a cirugía ortopédica en casos avanzados que no responden al manejo conservador\n\nEl reumatólogo coordina el tratamiento integral y determina cuándo es necesario el manejo quirúrgico.",
      },
    ],
    faqs: [
      {
        pregunta: "¿Cuál es la diferencia entre artrosis y artritis?",
        respuesta:
          "La artrosis es un desgaste del cartílago; la artritis es una inflamación activa de la articulación (que puede ser autoinmune, infecciosa o metabólica). Tienen causas y tratamientos distintos. Un reumatólogo puede distinguirlas con certeza.",
      },
      {
        pregunta: "¿La artrosis tiene cura?",
        respuesta:
          "No existe cura, pero el manejo adecuado permite controlar los síntomas, mantener la movilidad y retrasar la progresión. El control de peso y el ejercicio son tan importantes como los medicamentos.",
      },
      {
        pregunta: "¿Debo dejar de hacer ejercicio si tengo artrosis?",
        respuesta:
          "No. El ejercicio de bajo impacto fortalece los músculos que protegen las articulaciones y reduce el dolor. Se recomiendan caminata, bicicleta estática, natación y ejercicios de fortalecimiento guiados.",
      },
      {
        pregunta: "¿A qué edad aparece la artrosis?",
        respuesta:
          "Es más frecuente después de los 50 años, pero puede aparecer antes en personas con sobrepeso, antecedente de lesiones articulares o predisposición familiar.",
      },
    ],
    ctaTexto:
      "Si tiene dolor crónico en rodillas, caderas o manos que limita sus actividades, agende una valoración reumatológica.",
    condicionesRelacionadas: ["artritis-reumatoide", "osteoporosis", "gota"],
  },
]

export function getEnfermedadBySlug(slug: string): Enfermedad | undefined {
  return enfermedades.find((e) => e.slug === slug)
}

export function getAllSlugs(): string[] {
  return enfermedades.map((e) => e.slug)
}
