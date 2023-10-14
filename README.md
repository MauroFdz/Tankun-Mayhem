# TANKUN MAYHEM

## GAME DESIGN DOCUMENT

 
## MIEMBROS DE EQUIPO
### ●	Mauricio Fernández Rojas
○	Correo Académico: m.fernandezr.2020@alumnos.urjc.es

○	Cuenta GitHub: MauroFdz

○	Correo GitHub: Mauricio.fdez.27@gmail.com

### ●	Gonzalo de la Torre Ruiz
○	Correo Académico: g.delatorre.2020@alumnos.urjc.es

○	Cuenta GitHub: Gonzalo-de-la-Torre

○	Correo GitHub: g.delatorre.2020@alumnos.urjc.es

### ●	Yago Ortiz García
○	Correo Académico: y.ortiz.2020@alumnos.urjc.es

○	Cuenta GitHub: Kaynt-manage

○	Correo GitHub: y.ortiz.2020@alumnos.urjc.es

### ●	Daniel Bermejo Valverde

○	Correo Académico: d.bermejo.2020@alumnos.urjc.es

○	Cuenta GitHub: DanielBermejoValverde

○	Correo GitHub: daniel4bermejo@gmail.com
 

# ÍNDICE
## Resumen
### Metas de diseño  						p10.
### Mecánicas de juego  					p11.
### Mundo de juego  						p12.
### Interfaz  								p14.
### Arte 									p16
### Audio  									p18.
### Anexo  									p19.
 
# RESUMEN
## Concepto de juego
Tankun Mayhem es un juego de tanques 1 v 1 en el que se llevarán a cabo partidas breves de 2 minutos. El objetivo principal es impactar al oponente para acumular puntos. En el mapa, encontrarás power-ups y diversos elementos que facilitarán tanto la defensa como el ataque. En el videojuego se incluyen diferentes personajes con habilidades y estadísticas específicas encaminadas a crear interacciónes únicas y dinámicas.

## 1.1 Introducción
"Tankun Mayhem" es un videojuego cargado de emoción y acción que actualmente se encuentra en proceso de desarrollo. Nuestro propósito es presentar una visión exhaustiva y detallada de este juego, y al mismo tiempo, ofrecer una guía completa que servirá como brújula durante todas las etapas de su creación.

"Tankun Mayhem" es una experiencia única en la que los jugadores asumen el control de valientes tanques dirigidos por héroes y heroínas, sumergiéndose en intensos combates dentro de una arena de batalla. Cada personaje dispone de habilidades especiales que deberán ser hábilmente utilizadas para enfrentar a otros competidores y adaptarse a los cambiantes desafíos presentados por el entorno de juego.

Con un enfoque en mecánicas sencillas y una narrativa accesible, este juego está diseñado para ser intuitivo y fácil de comprender, garantizando la máxima comodidad y diversión para los jugadores. La dinámica constante y las partidas rápidas mantendrán a los participantes completamente inmersos en el juego, donde cada segundo cuenta en la búsqueda de la victoria.

La versatilidad de "Tankun Mayhem" brilla con su capacidad de ser disfrutado tanto en modo cooperativo como competitivo, fomentando la interacción entre jugadores y ofreciendo una alta rejugabilidad. Además, su estilo visual, inspirado en el anime y con toques de cómics occidentales, atraerá a una amplia audiencia.

En resumen, "Tankun Mayhem" es una emocionante propuesta que combina acción, estrategia y diversión en un paquete de juego completo. A través de este documento, exploraremos más a fondo las mecánicas de juego, el diseño de personajes, la interfaz, el arte y todos los elementos que darán vida a esta experiencia única.

## Características principales

1.	Mecánicas Sencillas y Accesibles: 
Nuestra prioridad es ofrecer una experiencia de juego fácil de comprender y disfrutar. Las mecánicas se diseñan cuidadosamente para ser intuitivas, permitiendo que los jugadores se sumerjan rápidamente en el mundo del juego sin complicaciones innecesarias.
2.	Dinamismo Constante:  
"Tankun Mayhem" se caracteriza por su dinámica incesante. Los jugadores se encuentran en un entorno donde cada segundo cuenta, lo que requiere decisiones rápidas y estratégicas. Mantenemos la atención del jugador en todo momento, lo que garantiza una experiencia emocionante de principio a fin.
3.	Partidas Breves y Emocionantes: 
Dada la naturaleza intensa del juego, las partidas son cortas pero llenas de emoción. Esto permite a los jugadores disfrutar de la acción en pequeños intervalos de tiempo, sin que la duración de las partidas se convierta en una barrera para la diversión.
4.	Modo Cooperativo y Competitivo:  
"Tankun Mayhem" ofrece la versatilidad de ser disfrutado tanto en modo cooperativo como competitivo. Los jugadores pueden unirse para alcanzar objetivos comunes o competir entre sí para demostrar su destreza. Esto fomenta la interacción social y garantiza que cada partida sea única, lo que aumenta la rejugabilidad del juego.
5.	Escenarios: 
Los combates tienen lugar en una gran variedad de escenarios, cada uno con sus propias características y obstáculos.

## Género
El género de "Tankun Mayhem" se clasifica como Arcade debido a su enfoque en la acción rápida y emocionante, donde los jugadores se enfrentan a desafíos individuales o en equipo. La premisa fundamental del juego es poner a prueba los reflejos y la toma de decisiones instantáneas de los jugadores en un ambiente arcade.

En este juego, las partidas son breves y llenas de adrenalina, con una duración de unos pocos minutos, lo que es típico en los juegos de estilo arcade. Los objetivos son claros y definidos: los jugadores compiten para obtener la puntuación más alta en enfrentamientos individuales o para alcanzar un puntaje superior al de sus oponentes cuando juegan en equipos, una característica común en los juegos de estilo arcade.

En cuanto a la experiencia auditiva, "Tankun Mayhem" se esfuerza por ofrecer sonidos distintivos que permiten a los jugadores identificar quién o qué está llevando a cabo una acción en el juego, una práctica habitual en los juegos arcade. Estos efectos de sonido contribuyen a la inmersión y ayudan a los jugadores a seguir la acción en pantalla de manera similar a los juegos arcade clásicos.

En términos de estilo visual, el juego busca un enfoque más moderno, alejándose de los estilos de pixel art más antiguos que se encuentran en algunos juegos arcade tradicionales. En su lugar, se adopta un estilo de dibujo animado o manga, que añade un toque contemporáneo y atractivo al diseño gráfico del juego, sin perder la esencia arcade.

La elección de la vista cenital (Acción en Vista Cenital) como punto de vista del juego es una decisión estratégica común en los juegos arcade que permite a ambos jugadores tener una visión completa y clara de la ubicación de sus tanques en todo momento, mejorando así la comprensión de la acción en el nivel y agregando un elemento estratégico al juego, una característica apreciada en los juegos arcade.

En resumen, "Tankun Mayhem" ofrece una experiencia de juego arcade que combina acción rápida, competitividad y una estética visual y auditiva distintiva, todo ello respaldado por la perspectiva cenital que mejora la jugabilidad y la inmersión en la acción del juego arcade.

Público Objetivo

Nuestro objetivo principal con "Tankun Mayhem" es proporcionar una experiencia de juego casual y gratuita, ideal para disfrutar con amigos en cualquier momento. La simplicidad y brevedad de las partidas hacen que sea accesible para una amplia audiencia, sin importar la edad.

La edad está enfocada principalmente en un público más joven, ya que son quienes suelen consumir más este tipo de juegos. Sin embargo, el juego también utiliza elementos nostálgicos para atraer la atención de un público más adulto. El género del juego, con su estilo arcade y acción rápida, puede evocar recuerdos de los juegos clásicos que los jugadores más adultos disfrutaron en el pasado. Esto añade una capa adicional de atractivo, permitiendo que jugadores de diferentes edades encuentren algo emocionante en el juego.
Además, el estilo artístico ha sido cuidadosamente seleccionado para atraer a aquellos que son entusiastas del género anime y contenido de naturaleza similar. En resumen, "Tankun Mayhem" ofrece una experiencia de juego casual y diversa que puede ser disfrutada por jugadores jóvenes y adultos, y que combina la accesibilidad con un atractivo nostálgico.
Experiencia de juego 

1.	Movilidad: Los jugadores tendrán el control total de sus tanques utilizando las teclas W, A, S y D para moverse en cualquier dirección. En el caso del juego en modo local los controles del segundo jugador serán XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
2.	Ataque: La mecánica principal de ataque se basa en disparar proyectiles que pueden rebotar en las paredes y obstáculos del escenario. Cada impacto exitoso en el enemigo aumentará la puntuación, el jugador con la mayor puntuación ganará la partida. La acción de disparar y esquivar proyectiles en tiempo real añade emoción y desafío al juego.
3.	Elementos de Escenario: Los escenarios están diseñados con una variedad de tipos de tiles, algunos de los cuales son indestructibles y otros pueden ser destruidos. Estos elementos del escenario añaden capas de estrategia al juego, ya que los jugadores deben considerar cómo utilizar el entorno a su favor. Algunos elementos del escenario pueden alterar la velocidad de movimiento de los tanques o la visibilidad, lo que agrega complejidad y sorpresa a las partidas.
4.	Héroes Únicos: Cada héroe en el juego posee estadísticas y habilidades únicas que permiten a los jugadores adoptar diferentes estilos de juego y estrategias. La elección del héroe es fundamental, ya que influirá en la forma en que abordan cada partida y en cómo se enfrentan a sus oponentes.
Estilo Visual
El estilo visual de "Tankun Mayhem" se caracterizará por su simplicidad y distintiva estética "chibi", influenciada por el anime. Los diseños de los personajes presentarán rasgos adorables y caricaturescos que aportarán un encanto especial al juego.
Se incorporarán animaciones que dotarán de dinamismo tanto a los movimientos de los tanques como a las acciones especiales de los héroes, enriqueciendo la experiencia visual y proporcionando vitalidad al juego.
Además, se tiene la intención de dar a los menús del juego un diseño futurista en sus elementos visuales de interfaces y botones. Esta elección estilística contribuirá a crear una atmósfera coherente en todo el juego, ya sea en el campo de batalla o en los menús, ofreciendo a los jugadores una experiencia visualmente atractiva y dinámica.
Cada personaje exhibirá, a su vez, una estética única y distintiva. Algunos personajes destacarán por su estilo futurista, incorporando tanques y personajes con un aspecto moderno y avanzado, mientras que otros adoptarán una estética de tanque de guerra antiguo, evocando una sensación nostálgica y clásica.
Esta diversidad estilística entre los personajes añadirá variedad y profundidad al juego, permitiendo a los jugadores elegir personajes que se adapten a su estilo visual preferido. En resumen, "Tankun Mayhem" ofrecerá una experiencia visualmente rica y diversa que fusionará elementos de anime, estética "chibi" y una temática futurista en una combinación única y emocionante.
Plataforma
El juego será desarrollado en Phaser para la parte local, y se habilitará la comunicación por chat y el juego en línea mediante el uso de ApiRest y Websockets. Para la colaboración en equipo, se empleará Github. Está dirigido a se jugado online en navegadores como Chrome y Microsoft Edge.
Control de transferencia de información.
Para garantizar una experiencia online completa se implementarán funciones dirigidas tanto a la comunicación entre jugadores como al correcto funcionamiento del videojuego online buscando garantizar una experiencia satisfactoria:
●	Sistema de chat para los jugadores del lobby.
●	Sistema de visualización de jugadores conectados al lobby.
●	Sistema de perfiles de jugadores, incluyendo nick y contraseña..
●	Sistema de representación de perfiles de jugadores.
●	Control de puntuación dinámico en la partida y durante la duración del lobby.
●	Capacidad de selección de mapa.
●	Capacidad de selección de personaje.
●	Conservación de datos entre partidas.
●	Actualización del movimiento de los personajes.
●	Actuualización de los disparos de los personajes.
●	Actualización del uso de habilidades de los personajes.
●	Actualización de cambios en el mapa.
●	Actualización de la creación de power ups.
●	Actualización de los efectos de los power ups.
●	Actualización de información relevante como la vida y el tiempo.
●	Capacidad de pausar el videojuego.
●	Representación de la puntuacion final de la partida y lobby actual.
Categoría
Juegos similares:
Tank 1990:
Similar en el empleo de elementos interactuables del mapa, presenta una condición de derrota distinta. Estilo visual distinto con variedad nula de personaje.
 
Wii Tanks:
Implementa un sistema e mecánicas similares a “Tankun Mayhem”, anque no presenta variedad significativa de jugabilidad. Estilo visual distinto.
  

Análisis DAFO:
Debilidades:
●	 Relativamente poca experiencia desarrollando videojuegos en el entorno de Phaser
●	Poca experiencia desarrollando elementos online mediante el uso de API Rest y Websockets
●	Tiempo y trabajo distribuido también a factores externos.
Amenazas:
●	Complicaciónes relevantes al control de tiempo y trabajo.
●	Elevada carga de trabajo externa elevada.
Fortalezas:
●	Experiencia previa del año anterior.
●	Trabajo realizado el año anterior como base.
●	Experiencia de organización y conocimiento de capacidades de trabajo y aptitudes de los miembros del equipo.
Oportunidades:
●	Acceso a fuentes de conocimiento y guia de terceros. (Acceso a libros y contenido relacionado a la materia de acceso público en la biblioteca.)
●	Tutoriales, ejemplos y material complementario para la construcción del videojuego en la plataforma virtual de Phaser.
 
METAS DE DISEÑO
Brevedad y dinamismo: Se busca que el videojuego tenga partidas relativamente cortas cargadas de acción. Se lobrará mediante tiempo de partida cortos y elementos que fuercen a los jugadores a tomar acción y no ser reactivos.
Capacidad de rejugabilidad: Se busca que los jugadores sean recurrentes y puedan tener una experiencia distinta cada partida. Se conseguirá con el factor humano de ser multijugador, distintos mapas, distintos personajes y elementos de aleatoriedad en las partidas.
Poca necesidad de preparación y riesgo: Se busca lograr que los jugadores puedan jugar en cualquier momento sin necesidad de reservar tiempo o la preocupación de que si juegan mal perderán algo. Esto se logrará al no introducir mecánicas de penalización entre partidas y tiempos de juego cortos.




 
MECÁNICAS DE JUEGO
Núcleo de mecánicas de juego
●	Cámara estática para ambos jugadores. 
●	Controles  de movimientos en los ejes vertical y horizontal. 
●	Control de la torreta del tanque cambiando el ángulo de disparo. 
●	Botón para disparar y botón para activar la habilidad especial. 
●	La puntuación se optendrá de dañar al jugador enemigo, destruirlo y adquirir power ups. Se perderá puntuación al ser dañado o morir.
●	No existirá necesidad de cargar o guardar partida.
●	El juego se centra en acumular la mayor cantidad de puntos en los 2 minutos que dura una partida. Los jugadores deben alternar entre jugar a la defensiva, negar power-ups y cazar al jugador enemigo para ganar puntos.
●	El jugador deberá reaccionar  a un oponente humano y planificar para derrotarlo.
Flujo de Juego (estados de juego)
Pantalla de Inicio: El jugador será recibido aquí. Tendrá la opción de acceder a la pantalla de créditos, pantall de ayuda y la pantalla de selección de tanque. Aqui se implementará la selección y creación de perfil.
Pantalla de Créditos: Pantalla destinada a brindar reconocimiento  los autores. Solo se puede regresar a la pantalla de inicio.
Pantalla de Ayuda; Pantalla destinada a brindar indicación visual de los controles empleados por cada jugdador.
Pantalla de selección de Tanque: Aqui los jugadores podrán seleccionar los tanques con los que jugaran, ver sus estadísticas y habilidades. Aqui tambien podrán acceder al chat del lobby. De aquí se podrá volver al Inicio o a la pantalla de selección de mapa.
Pantalla de selección de Mapa: Pantalla no implementada en versión previa, se podrá ver el mapa a jugar y el chat del lobby. Se podrá regresar a la pantalla de selección de tanque y lanzar la partida.
Pantalla de Partida: Pantalla donde ocurrira el juego.
Pantalla de Resolución: Aqui se presentará la conclusión de la partida, dando a conocer el ganador y los puntos totales de la partida y los globales del jugador.








Imagen de referencia obsoleta:
 

Física de Juego
Los jugadores pueden moverse en un plano bidimensional utilizando rotaciones para direccionar sus tanques. Los proyectiles rebotan en las paredes y obstáculos un número limitado de veces que depende del proyectil, y el número de proyectiles en el aire por héroe está limitado.
Controles
Los jugadores tendrán el control total de sus tanques utilizando las teclas W, A, S y D para moverse en cualquier dirección. Tendrá un botón dedicado a disparar y un botón dedicado a activar la habilidad especial, asi como botones para rotar el cañon. En el caso del juego en modo local los controles del segundo jugador serán flechas direccionales de teclado, P y O para rotar el cañon e I para disparar.

 
MUNDO DE JUEGO
Resumen General del Mundo
Mundo caotico miltarizado donde se ven resultados de la guerra y como esta a afectado al ecosistema y ciudades donde tienen lugar las partidas.
Personajes
"Tankun Mayhem" presenta tres personajes únicos:
Bell: Personaje estándar, puede tener más proyectiles en juego que cualquier otro héroe, pero estos solo rebotan 3 veces.
Rebotín: Dispara proyectiles eléctricos que tienen una velocidad aumentada y rebotan hasta 7 veces en las paredes aumentando la velocidad a medida que chocan más veces.
BigShot: Dispara tres proyectiles simultáneamente.
●	Posibilidad de añadir más.

Objetos
El juego incluirá power-ups que proporcionan ventajas temporales, como escudos adicionales, puntuación extra y mejoras en las habilidades del tanque.
Power ups:
·         Velocidad: Sube la velocidad hasta 2 unidades.
·         Rebote: Permite has 2 rebotes extra de la bala.
·         Proyectiles: Permite hasta 1 proyectil extra.

Áreas de Juego
Niveles representados desde la vista cenital, donde el ambiente cambiará de zonas militares a sonas silvestres. Exisitrán puntos donde se crean power ups y paredes que interactuaran de manera distinta con las balas y jugadores.

 
INTERFAZ
Pantallas de Juego
Pantalla de inicio: Existirán 3 botones de acceso a pantallas previas, un chat y botones destinados a la gestión de perfiles.
 
Pantalla de Ayuda: Cuenta con un botón para regresar a la pantalla anterior y una serie de elementos que ayudan a identificar los controles.
 
Pantalla de creditos: Tendrá un botón para volver a la pantalla de inicio y elementos que indican los autores y sus roles.
 

Pantalla de selección de tanque: Se tendrá una barra con los personajes seleccionables disponibles, un elemento visual para indicar sus estadísticas, arte conceptual de personaje y un botón para seleccionar al personaje.
 
Pantalla de selección de mapa: Por desarrollar. Tendrá botones para selecionar el mapa de manera similar a los tanques y un ejemplo visual del mapa.
Pantalla de juego: Contendrá la puntuacion de ambos jugadores, un reloj y las estadísticas de ambos jugadores. Tendrá el mapa y los tanques de los jugadores, asi como las paredes especificas de cada mapa y sus power ups.
Pantalla de Resolución de partida: Se presentará al vencedor, y la puntuación final y global de ambos jugadores.

HUD
*En desarrollo
Se implementan elementos visuales con contraste entre negro, tonos metálicos y verde emisivo para los elementos de la interfaz. Se eliminarán elementos de adorno verdes para evitar confusión. 
Ejemplos de elementos visuales:
   
ARTE
Metas Generales de Arte
El estilo artístico de "Tankun Mayhem" combina elementos caricaturescos con influencias del anime. Los efectos y detalles imitan el estilo de cómics occidentales para facilitar la comprensión de la acción en pantalla.
Personajes
Rebotín:
 
Bell:
 
Items
Paredes:        
Power ups: 






Escenarios:
Ciudad:
    

AUDIO
Los efectos de sonido serán caricaturescos y breves, evitando saturar al jugador con ruidos innecesarios. Cada habilidad y power-up tendrá su propio sonido distintivo.




 

ANEXOS
Diagrama de flujo:
