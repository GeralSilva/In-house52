// Funcionalidad específica para la página del equipo

// Datos de los miembros del equipo
const miembrosData = {
    // Coordinación
    coord2: {
        nombre: "Catalina",
        cargo: "Coordinadora Comunicaciones",
        programa: "Coordinación",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXpJm-pi8gZGv_TDhp3Ix8l_j2ELJb1gD8MBxPh-eG4Xwriuq6u7YTXd77nGHoHMqJjNSmiAcVBKoFY6ROD1Zv9aoi2d6H1pL37IWfr2tES4ut-hsmMZC9G3o1-h4M3YzoxRKgCLuZiop7muSOEfzQXSoF4tthZELc6S-73-fyonmry4Ho1Q1GzBWH0rvr/s16000/IMG-20250911-WA0029.jpg",
        descripcion: "Coordinadora general de IN-HOUSE52, responsable de la gestión estratégica y la articulación entre las diferentes áreas del SENA CGMLTI.",
        experiencia: ["Gestión de equipos multidisciplinarios", "Coordinación de proyectos institucionales", "Planificación estratégica"],
        habilidades: ["Liderazgo", "Gestión de proyectos", "Comunicación efectiva", "Planificación estratégica"],
        proyectos: ["Coordinación inHOUSE 52", "Gestión de proyectos institucionales", "Articulación académica"],
        contacto: { email: "comunicaciones9303@sena.edu.co", linkedin: "#", telefono: "+57 300 123 4567" }
    },
    coord1: {
        nombre: "Felipe Isaza",
        cargo: "Coordinador de Proyectos",
        programa: "Coordinación",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnPq_duW-RUL1FM6g8menkyFEBuyPGRuFJjdBLbXdlz3Pe4cOSsTLPs6lMZRY_mrPOEFub_sQBzEwA2UcpRKRMlvPArgW8pkoxXnZK6Tzd_q3bFD6JWtfo5ZdshCbEWOpzUhdXnQynNLxF0CrCIabOjX5j4bCyiP7m92uObjCPF3HA7I3iRmpiKj_hTEGD/s16000/IMG-20250911-WA0032.jpg",
        descripcion: "Coordinador de proyectos especializado en la gestión y seguimiento de iniciativas institucionales del SENA CGMLTI.",
        experiencia: ["Gestión de proyectos", "Seguimiento y control", "Coordinación de equipos"],
        habilidades: ["Gestión de proyectos", "Seguimiento", "Coordinación", "Análisis de resultados"],
        proyectos: ["Seguimiento de proyectos", "Coordinación de equipos", "Gestión de recursos"],
        contacto: { email: "fisaza@sena.edu.co", linkedin: "#", telefono: "+57 300 123 4568" }
    },
    coord3: {
        nombre: "Wilson",
        cargo: "Coordinador Audiovisual",
        programa: "Coordinación",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjn70UMKSuAICsEGM_gSlk0SKVf7Tt-3kh_cuwELyikz5XTRUhgKk-jEbs7wy_NDQ7JqWwZt_iKvwRS7hGJvyVy0ETYfuVBCDNHjePPbYX5IaG7s3hfRmn38TVita4LQsEiIXvIifgy181VLQiUwnsvEJ1zt1QQv_PbnpG1NaefVxshuwTZXA0R9U-hVfb6/s16000/IMG-20250911-WA0033.jpg",
        descripcion: "Coordinador audiovisual encargado de la gestión y supervisión de proyectos audiovisuales en IN-HOUSE52.",
        experiencia: ["Coordinación audiovisual", "Gestión de medios", "Supervisión técnica"],
        habilidades: ["Gestión audiovisual", "Supervisión técnica", "Coordinación de medios", "Control de calidad"],
        proyectos: ["Coordinación audiovisual", "Supervisión de medios", "Gestión de equipos técnicos"],
        contacto: { email: "william@sena.edu.co", linkedin: "#", telefono: "+57 300 123 4569" }
    },
    coord4: {
        nombre: "Daniel",
        cargo: "Coordinador Multimedia",
        programa: "Coordinación",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9sH9vr9uJzX3SDsq8JAazcsZlRh3Ff6ttdRuISLS2l2Xlf3o89oYrsfxwsPwmTr36yAs_6VFqC-A9_tDEJLHCwIRtwtlPur6xP1P3mZmhUqv7RnlbsC2Z-Iy8KfKcLYa7wSoOODW7jYSVpMBHZ95eze1Vd_KFyUUzD-aAIjizuUdOmDXo9YfkojPVjqlD/s16000/IMG-20250911-WA0044.jpg",
        descripcion: "Coordinador multimedia responsable de la gestión y desarrollo de proyectos multimedia en IN-HOUSE52.",
        experiencia: ["Coordinación multimedia", "Gestión de proyectos digitales", "Supervisión creativa"],
        habilidades: ["Gestión multimedia", "Coordinación digital", "Supervisión creativa", "Gestión de contenidos"],
        proyectos: ["Coordinación multimedia", "Proyectos digitales", "Gestión de contenidos"],
        contacto: { email: "daniel@sena.edu.co", linkedin: "#", telefono: "+57 300 123 4570" }
    },
    coord5: {
        nombre: "Olivia",
        cargo: "Coordinadora de Comunicaciones",
        programa: "Coordinación",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJUu_w4JGuj421CPkQAhlk30ErKfh_hEbwwuMao7ukFlrtlUZehHZVDyFKZa6mIyMTe0wVsGTA7mxkugI_XCros-68nBnyhXNj_6EH0d9rTCNQXUUDc_1syz44YRrsFpkAnkwtyHvMSLPIpfeQsAiXOlOQLkVmvnzdTfHq_nNJNADe4qcYKF2nqFZHKdhj/s16000/IMG-20250911-WA0031.jpg",
        descripcion: "Coordinadora de comunicaciones encargada de la estrategia comunicacional y la imagen institucional de IN-HOUSE52.",
        experiencia: ["Comunicación institucional", "Estrategia comunicacional", "Gestión de imagen"],
        habilidades: ["Comunicación estratégica", "Gestión de imagen", "Relaciones públicas", "Marketing institucional"],
        proyectos: ["Estrategia comunicacional", "Gestión de imagen institucional", "Campañas de comunicación"],
        contacto: { email: "Yoma.eggo@hotmail.com", linkedin: "#", telefono: "+57 300 123 4571" }
    },
    
    // Comunicación Comercial
    com1: {
        nombre: "Juana",
        cargo: "Especialista en Comunicación Comercial",
        programa: "Comunicación Comercial",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXN97ee8PMXnRTUOY0oppUcqg2vrq5cS7vxqtBblausUNflQLoo-qLizmT3fu4BBHeffl4zU_Ildn0YxOdrlmjGuDIKTKTufEwgX_sbc-vf4Cz_zdk_HIOj-IbKc_lKniGebe5Xdkxi_iWZrebzOXGf4uniH58I3QcGYL_kyHXDADi48l382ocnZPgWpCT/s16000/Imagen%20de%20WhatsApp%202025-09-11%20a%20las%2011.49.12_0777795d.jpg",
        descripcion: "Especialista en comunicación comercial con enfoque en estrategias de marketing y desarrollo de campañas publicitarias para el SENA CGMLTI.",
        experiencia: ["Comunicación comercial", "Estrategias de marketing", "Desarrollo de campañas"],
        habilidades: ["Marketing", "Comunicación comercial", "Desarrollo de estrategias", "Gestión de campañas"],
        proyectos: ["Campañas comerciales", "Estrategias de marketing", "Comunicación institucional"],
        contacto: { email: "juanaalfonso.1234@gmail.com", linkedin: "#", telefono: "+57 300 123 4569" }
    },
    com2: {
        nombre: "Valentina",
        cargo: "Coordinadora de Marketing",
        programa: "Comunicación Comercial",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDrBeNwGUU82-eKwW4fg2CD4Whyphenhyphen79apWLCC3tAtlwMLwSlPldBHuH4UN61JDb0yfcurLnq9lHcNUloYQ6Dvj9kqWqCqD-F6dg0WwcT4vn5D1jKx7daLucedhTkCs3vpdrNrrRbYc9TBik-Pdq9zW6SbFQTqTermvwXXSAmi8sjs1xU6kt-syFMuUx-exvx/s16000/Imagen%20de%20WhatsApp%202025-09-11%20a%20las%2011.23.19_31d7bcf8.jpg",
        descripcion: "Coordinadora de marketing especializada en el desarrollo de estrategias comerciales y gestión de proyectos de comunicación.",
        experiencia: ["Coordinación de marketing", "Gestión de proyectos", "Estrategias comerciales"],
        habilidades: ["Coordinación", "Marketing estratégico", "Gestión de proyectos", "Análisis de mercado"],
        proyectos: ["Coordinación de marketing", "Desarrollo de estrategias", "Gestión de campañas"],
        contacto: { email: "vvvtina7@gmail.com", linkedin: "#", telefono: "+57 300 123 4570" }
    },
    com3: {
        nombre: "Ana",
        cargo: "Especialista en Comunicación Comercial",
        programa: "Comunicación Comercial",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuU2QF9B6t-zOadF1frkjTUXt_PWeGCTOYLuEzp1KjjHUiRUpRNPvjXB76sUMXK0haOPZNwt5P8rrzUG6CEznRsRpSJMI00uTP6Mj_rRdGKHTXRgWwTIU9exhalKf7JIFqPX62NqBhTIj6QgZmeqhwRrSzZTi-q3IL318uy4TY2KWT8Jkbr56hAopExBWX/s16000/Imagen%20de%20WhatsApp%202025-09-11%20a%20las%2011.37.59_3421e8ab.jpg",
        descripcion: "Especialista en comunicación comercial con enfoque en estrategias de marketing y desarrollo de campañas publicitarias para el SENA CGMLTI.",
        experiencia: ["Formación en comunicación comercial", "Desarrollo de competencias", "Práctica profesional"],
        habilidades: ["Comunicación", "Marketing básico", "Desarrollo de contenido", "Atención al cliente"],
        proyectos: ["Proyectos formativos", "Práctica en comunicación", "Desarrollo de competencias"],
        contacto: { email: "ana.martinez@inhouse.com", linkedin: "#", telefono: "+57 300 123 4571" }
    },
   
    // Medios Audiovisuales
    mul1: {
        nombre: "Angie",
        cargo: "Productora Audiovisual",
        programa: "Medios Audiovisuales",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-GggxdXRnILomJDuLKvc5MsbMii4-q7b2YfjZ6c_4Zg1q1ahNb9zE0SuflHgr1z4cqti1MQ4Y_aeTcppCoDUE79TIQmOWEitFVhuEVJd0anDx5Bu9ROziOueVMDiuMd_UQkPKREmYr4KXWdFesSfoIsN5TaqYNXvH2CSe-hfs2euAWSn9FgKxUwDCST3e/s16000/IMG-20250911-WA0042.jpg",
        descripcion: "Productora audiovisual especializada en creación de contenido multimedia para el SENA CGMLTI.",
        experiencia: ["Producción audiovisual", "Creación de contenido", "Dirección de proyectos"],
        habilidades: ["Producción audiovisual", "Edición de video", "Fotografía", "Dirección creativa"],
        proyectos: ["Videos institucionales", "Campañas audiovisuales", "Contenido multimedia"],
        contacto: { email: "loreeskudero@gmail.com", linkedin: "#", telefono: "+57 300 123 4575" }
    },
    mul2: {
        nombre: "Helen",
        cargo: "Editora de Video",
        programa: "Medios Audiovisuales",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivg8p9THraqjOhqo8Jx7Duv64RzHx2JhVeGJUWoFfBETQsKEnReG9Mi8DfArmvGeemrcyPDKOb4KYqfP8Pd8zUghAE21G-i3-Q8CQ5NLCIK6HhG3Yu0OArah-2Kh86YsjoJHuME3U4XgGFcuP4wtsEvPFOnbIXjxp80714mBJB6Z0W1zu3pkv447HzyDZP/s16000/Imagen%20de%20WhatsApp%202025-09-12%20a%20las%2011.49.22_c8f95914.jpg",
        descripcion: "Editora de video especializada en postproducción y efectos visuales para contenido del SENA CGMLTI.",
        experiencia: ["Edición de video", "Postproducción", "Efectos visuales"],
        habilidades: ["Edición de video", "Motion graphics", "Color correction", "Audio post"],
        proyectos: ["Edición de contenido institucional", "Motion graphics", "Postproducción audiovisual"],
        contacto: { email: "gutierrezmoraleshelen@gmail.com", linkedin: "#", telefono: "+57 300 123 4576" }
    },
    mul3: {
        nombre: "Kenner",
        cargo: "Fotógrafo Digital",
        programa: "Medios Audiovisuales",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIt2ODbxqf9P_NUJUUzj7CHtnb43lFuW6VwNMW-p8iOjYGgfXvXpW1eZU3BI4qsQtTH95VQMQBwpRGHS5H6eLHU8-t8CO6Hcx0NaDbzZtjmlxD188btZVSec1Avu4ekh2_-hb7VG0CoY2ujrX9NUWz3eos59nj3aJJU288HWyI0gkZokMcEf2Eo3SqzIHZ/s16000/IMG-20250911-WA0037.jpg",
        descripcion: "Fotógrafo digital especializado en fotografía institucional y de eventos del SENA CGMLTI.",
        experiencia: ["Fotografía digital", "Fotografía de eventos", "Retoque fotográfico"],
        habilidades: ["Fotografía digital", "Retoque fotográfico", "Iluminación", "Composición visual"],
        proyectos: ["Fotografía institucional", "Cobertura de eventos", "Banco de imágenes"],
        contacto: { email: "klehissmergomez@gmail.com", linkedin: "#", telefono: "+57 300 123 4577" }
    },
    mul4: {
        nombre: "Brayan",
        cargo: "Especialista en Audio",
        programa: "Medios Audiovisuales",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJvsFSEBOzxFr9K3cLoPr5VlrIlwZFStaC__I5jNHj_MmxkJ2YCxVFq-PqAiQplfU03AtefOzjq3AXo6HuFAR0Nn-zSnVtlOytNMW7StStIJ_wWH28OOCzM90_yiO9jxB-QukJo09fDuVbWUUV8RSzJRKMyV1eEyYZ78PBsB42iNKz-k1NdjVWt3Q5ManG/s16000/IMG-20250911-WA0035.jpg",
        descripcion: "Especialista en audio encargado de la producción y postproducción de audio para proyectos del SENA CGMLTI.",
        experiencia: ["Producción de audio", "Postproducción de audio", "Grabación profesional"],
        habilidades: ["Producción de audio", "Mezcla", "Masterización", "Grabación"],
        proyectos: ["Audio para videos institucionales", "Producción de podcasts", "Audio para eventos"],
        contacto: { email: "brianguns@gmail.com", linkedin: "#", telefono: "+57 300 123 4578" }
    },
    mul5: {
        nombre: "Jhon",
        cargo: "Camarógrafo",
        programa: "Medios Audiovisuales",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjZvT0ubmx8xInBi3E6oGEKvBQXS-PO6lG16gJp-8mwnBGjD7nUdR7Xh6yZbRWbUlUPo6VWiUXyh4Yi6kffwRmSq2zYkm8KA4by1KWEkbsxtMC1yjM28vUDfPXgcTlUPWj7AsepowStY-v-ZIJmuIpfx67mmm9689SGzgalOMoi7s_UCBadZ1ipcMKX2kO/s16000/IMG-20250911-WA0036.jpg",
        descripcion: "Camarógrafo especializado en grabación de video para eventos y contenido institucional del SENA CGMLTI.",
        experiencia: ["Grabación de video", "Cobertura de eventos", "Producción audiovisual"],
        habilidades: ["Cámara profesional", "Iluminación", "Composición", "Grabación de eventos"],
        proyectos: ["Grabación de eventos institucionales", "Videos promocionales", "Cobertura audiovisual"],
        contacto: { email: "jhonyacuma@outlook.com", linkedin: "#", telefono: "+57 300 123 4579" }
    },
    mul6: {
        nombre: "Javier",
        cargo: "Diseñador Multimedia",
        programa: "Medios Audiovisuales",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC_NYmaNHtLIgUzZ8dL-10IsWLyCF91U4y5pHvDnQ2jYHH8Kp2kwHaDB76-tt4fBbQp5pCytT-23-5rV7k4YHTM4TNm53t0TpmnP6UBoYR_6pzDqVxbZ-gELgM90IpUi6jar96u2-ZK3xTw_yzK_QQmcNMyBoSt4EC7aub9y35YtSXk46rrhj4huqNOHxo/s16000/IMG-20250911-WA0039.jpg",
        descripcion: "Diseñador multimedia especializado en creación de contenido visual y gráfico para medios audiovisuales del SENA CGMLTI.",
        experiencia: ["Diseño multimedia", "Contenido visual", "Diseño gráfico"],
        habilidades: ["Diseño multimedia", "Animación 2D", "Diseño gráfico", "Ilustración digital"],
        proyectos: ["Diseño para videos", "Contenido visual", "Animaciones 2D"],
        contacto: { email: "javierricardocruzblandon3@gmail.com", linkedin: "#", telefono: "+57 300 123 4580" }
    },
    mul7: {
        nombre: "Camilo",
        cargo: "Técnico Audiovisual",
        programa: "Medios Audiovisuales",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitErYMNgL8ma0wMQEw5PxGRJDBSfWFAe8tUnVRMbZSpgoNaJCzdqaZBNWMbeDU8z6LPZ9GdQv7l1JS4TTzV2E9PI7M233yNJbsGna6lSC_WmifGh10DyWtpLZa-S9b3fglHeasLGBcZ8o14poNkf6f1agAsMECcKK5CQaxRQO_QbG31nLyKQUJtRAeHUKg/s16000/Captura%20de%20pantalla%202025-09-12%20114355.png",
        descripcion: "Técnico audiovisual encargado del soporte técnico y mantenimiento de equipos para proyectos del SENA CGMLTI.",
        experiencia: ["Soporte técnico audiovisual", "Mantenimiento de equipos", "Configuración técnica"],
        habilidades: ["Soporte técnico", "Mantenimiento de equipos", "Configuración", "Troubleshooting"],
        proyectos: ["Soporte técnico para eventos", "Mantenimiento de equipos", "Configuración audiovisual"],
        contacto: { email: "camilo82@msn.com", linkedin: "#", telefono: "+57 300 123 4581" }
    },
    
    // Animación 3D
    com4: {
        nombre: "Nathaly",
        cargo: "Animadora 3D",
        programa: "Diseño y Estrategia",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhY5sI4xzMEZoE_ht6BB3FRpOU2redIIcE8GsZHHNFFnCxQwxtVabrc349cqvPEC0rTl6psjIiwH8o3Eq99uxyJHyLdbK5dgKdFrU7gS7YHD3a8-NuBDAJsZb1vxKXWwusMT771iWwGHUBX1z3ykzRjIg8OllEC5cHTvqaQW-RCv8FCEwobC34ts5Msv-jC/s16000/IMG-20250911-WA0049.jpg",
        descripcion: "Animadora 3D especializada en modelado, texturizado y animación de personajes para proyectos del SENA CGMLTI.",
        experiencia: ["Animación 3D", "Modelado de personajes", "Texturizado digital"],
        habilidades: ["Modelado 3D", "Animación", "Texturizado", "Render"],
        proyectos: ["Animaciones institucionales", "Contenido educativo 3D", "Proyectos audiovisuales"],
        contacto: { email: "nicenatix@gmail.com", linkedin: "#", telefono: "+57 300 123 4580" }
    },
    ani2: {
        nombre: "Nicolas",
        cargo: "Modelador 3D",
        programa: "Diseño y Estrategia",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivwW8YOxT29XBxBbp88LLRwlQc2ZX03XSw9Vh-tP4xGUakOSCUkxAn3p4NmhQ2NhRsX1nxvRynU2y1eOLqudofP0Y-mU2hXB1-ItwLPTK08OQ6p0DMBqSaLgzG8YN_e-eiD04V9Xm5CKhvhUW9zzJtvVSjV_RO06r9C0-PJQ5gwFpqgCyOGSalgskMJSKZ/s16000/IMG-20250911-WA0041.jpg",
        descripcion: "Modelador 3D especializado en creación de assets y entornos virtuales para proyectos de animación del SENA CGMLTI.",
        experiencia: ["Modelado 3D", "Creación de assets", "Entornos virtuales"],
        habilidades: ["Modelado orgánico", "Escultura digital", "Retopología", "UV mapping"],
        proyectos: ["Modelado de personajes", "Entornos 3D", "Assets para animación"],
        contacto: { email: "nicolasup69@gmail.com", linkedin: "#", telefono: "+57 300 123 4581" }
    },
    ani3: {
        nombre: "Clara",
        cargo: "Especialista en VFX",
        programa: "Diseño y Estrategia",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhw_UiL3plsQueEBFE1Si_x8H0xCZ_eBpYQ_k94GHIJBaxcL-u1t56dHqogTXrnLPlKdLk_KIN80cdlQkMJolQVK3m9AShMJJZueuAT17RRYl3BJUoNNX_B1bYJ8px7pNZt4DjAkRG26lyuuFRvmbgoECmgjf4LKBH0pb4JZAKPTwR85aKqU2hDRzu_4_J9/s16000/IMG-20250911-WA0043.jpg",
        descripcion: "Especialista en efectos visuales y postproducción digital para proyectos audiovisuales del SENA CGMLTI.",
        experiencia: ["Efectos visuales", "Postproducción digital", "Composición avanzada"],
        habilidades: ["VFX", "Composición", "Motion graphics", "Color grading"],
        proyectos: ["Efectos para videos institucionales", "Motion graphics", "Postproducción"],
        contacto: { email: "ortegamirandaclaraelvira81@gmail.com", linkedin: "#", telefono: "+57 300 123 4582" }
    },
    ani4: {
        nombre: "Sebastian",
        cargo: "Director de Arte 3D",
        programa: "Diseño y Estrategia",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIxrzvAS69QukShmqbP-rjE33MFbLq1nxX9823dBOUaBJSoX3EitOzVEF9HZzQR5UgXBKPSu-6H4-Qyq44ZX-vQtHTY6CvQtp_6e9qj67aLRBS2kJOFc7CKp0MAcy2KM8LClwGrh_rSuMC76jCwabUIeut-N7jszGDFO1PyAjSuHDd4dNRTo6TBsiG0plt/s16000/IMG-20250911-WA0047.jpg",
        descripcion: "Director de arte especializado en conceptualización visual y dirección artística de proyectos 3D del SENA CGMLTI.",
        experiencia: ["Dirección de arte", "Conceptualización visual", "Dirección artística"],
        habilidades: ["Dirección de arte", "Concept art", "Storyboarding", "Dirección visual"],
        proyectos: ["Dirección visual de campañas", "Concept art", "Desarrollo visual"],
        contacto: { email: "sebastyanbh@gmail.com", linkedin: "#", telefono: "+57 300 123 4583" }
    },
    ani5: {
        nombre: "Duvan",
        cargo: "Técnico en Render",
        programa: "Diseño y Estrategia",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhjgJiEMS_4jOgdavbD2JKu2D4NymZ7u4xfEy-F-VBd0DdpQfXtqgnCXj6CF3P7rP3CinWth6X4uc-wJKQit40FyNTd6uSJtXYlBkLzj8zfgl5HRlvdP36s5tFsyfsi-TYmrHs5Tvto9M6WbJJikl7n3MlptW_r46ahmweKo6rZR9tYF74fnZdJyJcy8dHq/s16000/IMG-20250911-WA0048.jpg",
        descripcion: "Técnico especializado en render y optimización de procesos de producción 3D para proyectos del SENA CGMLTI.",
        experiencia: ["Render técnico", "Optimización de procesos", "Gestión de producción"],
        habilidades: ["Render técnico", "Optimización", "Gestión de recursos", "Soporte técnico"],
        proyectos: ["Optimización de render", "Gestión de producción 3D", "Soporte técnico"],
        contacto: { email: "0duvan.suarez8@gmail.com", linkedin: "#", telefono: "+57 300 123 4584" }
    },
    
    // Desarrollo de Software
    dev1: {
        nombre: "Geraldine",
        cargo: "Desarrolladora de Software",
        programa: "Diseño y Estrategia",
        foto: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEin7wYVoCxJT7_rewxXkwae65N1o3NrXmOoqAS2GtGNUtd6WCS3Ec6-EZWt7UWgQdXOM3h6izu0T6TWKVCsKyskxiL5TlmpiClYFQnzL_9r0KtXHe53r4A2hbiqlliSMgqPj_Qb6OcRyXgHInJZZTu7l0vdTPUoOi5p16zF6hI0lPB_pulKyJuP5R_sGef7/s16000/Imagen%20de%20WhatsApp%202025-09-12%20a%20las%2009.43.02_619ba149.jpg",
        descripcion: "Desarrolladora de software especializada en aplicaciones web y desarrollo de plataformas digitales para el SENA CGMLTI.",
        experiencia: ["Desarrollo web", "Programación", "Gestión de proyectos de software"],
        habilidades: ["Programación", "Desarrollo web", "Bases de datos", "Gestión de proyectos"],
        proyectos: ["Plataformas web CGMLTI", "Aplicaciones institucionales", "Sistemas de gestión"],
        contacto: { email: "geraldine_basto@soy.sena.edu.co", linkedin: "#", telefono: "+57 300 123 4584" }
    }
};

// Variables globales
let currentTeamFilter = 'todos';

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeTeam();
    setupTeamEventListeners();
});

function initializeTeam() {
    // Configurar animaciones de entrada para las cartas
    const cartas = document.querySelectorAll('.carta-miembro');
    cartas.forEach((carta, index) => {
        carta.style.animationDelay = `${index * 0.1}s`;
    });
}

function setupTeamEventListeners() {
    // Event listeners para cerrar modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMemberModal();
        }
    });
    
    // Event listener para cerrar modal al hacer click fuera
    const modal = document.getElementById('memberModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeMemberModal();
            }
        });
    }
}

// Función para filtrar equipo por programa
function filterTeam(programa) {
    currentTeamFilter = programa;
    
    // Actualizar botones activos
    const filtros = document.querySelectorAll('.filtro-btn');
    filtros.forEach(btn => btn.classList.remove('active'));
    
    // Encontrar y activar el botón correspondiente
    const activeBtn = Array.from(filtros).find(btn => {
        const btnText = btn.textContent.toLowerCase();
        return (programa === 'todos' && btnText === 'todos') ||
               (programa === 'comunicacion' && btnText.includes('comunicación')) ||
               (programa === 'multimedia' && (btnText.includes('multimedia') || btnText.includes('audiovisuales'))) ||
               (programa === 'animacion' && btnText.includes('animación')) ||
               (programa === 'software' && btnText.includes('software')) ||
               (programa === 'coordinacion' && btnText.includes('coordinación'));
    });
    
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Filtrar miembros
    const miembros = document.querySelectorAll('.carta-miembro');
    
    miembros.forEach(miembro => {
        const miembroPrograma = miembro.dataset.programa;
        
        let shouldShow = programa === 'todos' || miembroPrograma === programa;
        
        if (shouldShow) {
            miembro.classList.remove('hidden');
            miembro.classList.add('filtering-in');
            setTimeout(() => {
                miembro.classList.remove('filtering-in');
            }, 500);
        } else {
            miembro.classList.add('filtering-out');
            setTimeout(() => {
                miembro.classList.add('hidden');
                miembro.classList.remove('filtering-out');
            }, 300);
        }
    });
    
    // Mostrar mensaje si no hay miembros
    checkEmptyTeamResults();
}

// Función para verificar si hay resultados vacíos
function checkEmptyTeamResults() {
    const miembrosVisibles = document.querySelectorAll('.carta-miembro:not(.hidden)');
    const grid = document.getElementById('equipoGrid');
    
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector('.no-members');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (miembrosVisibles.length === 0) {
        const noMembersMessage = document.createElement('div');
        noMembersMessage.className = 'no-members';
        noMembersMessage.innerHTML = `
            <i class="fas fa-users"></i>
            <h3>No se encontraron miembros</h3>
            <p>No hay miembros que coincidan con el filtro seleccionado.</p>
        `;
        grid.parentNode.appendChild(noMembersMessage);
    }
}

// Función para abrir modal de miembro
function openMemberModal(miembroId) {
    const miembro = miembrosData[miembroId];
    if (!miembro) return;
    
    const modal = document.getElementById('memberModal');
    const modalContent = document.getElementById('memberModalContent');
    
    modalContent.innerHTML = `
        <div class="modal-miembro">
            <div class="miembro-header">
                <img src="${miembro.foto}" alt="${miembro.nombre}" class="miembro-foto">
                <div class="miembro-info">
                    <h2>${miembro.nombre}</h2>
                    <p class="miembro-cargo">${miembro.cargo}</p>
                    <span class="miembro-programa">${miembro.programa}</span>
                    <p class="miembro-descripcion">${miembro.descripcion}</p>
                </div>
            </div>
            
            <div class="miembro-detalles">
                <div class="detalle-seccion">
                    <h4><i class="fas fa-briefcase"></i> Experiencia</h4>
                    <ul>
                        ${miembro.experiencia.map(exp => `<li>${exp}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detalle-seccion">
                    <h4><i class="fas fa-cogs"></i> Habilidades</h4>
                    <ul>
                        ${miembro.habilidades.map(hab => `<li>${hab}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detalle-seccion">
                    <h4><i class="fas fa-project-diagram"></i> Proyectos Destacados</h4>
                    <ul>
                        ${miembro.proyectos.map(proy => `<li>${proy}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="miembro-contacto">
                <h4><i class="fas fa-envelope"></i> Contacto</h4>
                <div class="contacto-links">
                    <a href="mailto:${miembro.contacto.email}" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="${miembro.contacto.linkedin}" title="LinkedIn" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="tel:${miembro.contacto.telefono}" title="Teléfono">
                        <i class="fas fa-phone"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Agregar animación de entrada
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Función para cerrar modal de miembro
function closeMemberModal() {
    const modal = document.getElementById('memberModal');
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Función para buscar miembros
function searchTeamMembers(searchTerm) {
    const miembros = document.querySelectorAll('.carta-miembro');
    const term = searchTerm.toLowerCase();
    
    miembros.forEach(miembro => {
        const nombre = miembro.querySelector('h3').textContent.toLowerCase();
        const cargo = miembro.querySelector('p').textContent.toLowerCase();
        
        if (nombre.includes(term) || cargo.includes(term)) {
            miembro.classList.remove('hidden');
        } else {
            miembro.classList.add('hidden');
        }
    });
    
    checkEmptyTeamResults();
}

// Función para ordenar miembros
function sortTeamMembers(criteria) {
    const grid = document.getElementById('equipoGrid');
    const miembros = Array.from(grid.children);
    
    miembros.sort((a, b) => {
        switch(criteria) {
            case 'nombre-asc':
                const nombreA = a.querySelector('h3').textContent;
                const nombreB = b.querySelector('h3').textContent;
                return nombreA.localeCompare(nombreB);
            case 'nombre-desc':
                const nombreA2 = a.querySelector('h3').textContent;
                const nombreB2 = b.querySelector('h3').textContent;
                return nombreB2.localeCompare(nombreA2);
            case 'programa':
                return a.dataset.programa.localeCompare(b.dataset.programa);
            default:
                return 0;
        }
    });
    
    // Reordenar elementos en el DOM
    miembros.forEach(miembro => {
        grid.appendChild(miembro);
    });
}

// Función para compartir perfil de miembro
function shareMemberProfile(miembroId) {
    const miembro = miembrosData[miembroId];
    if (!miembro) return;
    
    if (navigator.share) {
        navigator.share({
            title: `${miembro.nombre} - ${miembro.cargo}`,
            text: `Conoce a ${miembro.nombre}, ${miembro.cargo} de IN-HOUSE52 SENA CGMLTI`,
            url: window.location.href
        });
    } else {
        // Fallback para navegadores que no soportan Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Enlace copiado al portapapeles', 'success');
        });
    }
}

// Función para generar estadísticas del equipo
function generateTeamStats() {
    const totalMiembros = Object.keys(miembrosData).length;
    const programas = {};
    
    Object.values(miembrosData).forEach(miembro => {
        programas[miembro.programa] = (programas[miembro.programa] || 0) + 1;
    });
    
    return {
        total: totalMiembros,
        programas: programas
    };
}

// Función para exportar información del equipo
function exportTeamInfo(format) {
    const stats = generateTeamStats();
    console.log(`Exportando información del equipo en formato: ${format}`);
    console.log('Estadísticas:', stats);
    // Implementar lógica de exportación según el formato
}

// Función para filtrar por año (para futuras funcionalidades)
function filterByYear(año) {
    console.log(`Filtrando equipo por año: ${año}`);
    // Implementar filtrado por año si se requiere
}

// Función para mostrar notificaciones (reutilizada)
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#39A900';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        case 'warning':
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#000';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// Exportar funciones para uso global
window.EquipoInHouse52 = {
    filterTeam,
    openMemberModal,
    closeMemberModal,
    searchTeamMembers,
    sortTeamMembers,
    shareMemberProfile,
    generateTeamStats,
    exportTeamInfo
};