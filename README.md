# Tankun Mayhem

## Miembros de Equipo:

Gonzalo de la Torre Ruiz
Correo Académico: g.delatorre.2020@alumnos.urjc.es
Cuenta GitHub: Gonzalo-de-la-Torre
Correo GitHub:g.delatorre.2020@alumnos.urjc.es

Yago Ortiz García
Correo Académico: y.ortiz.2020@alumnos.urjc.es
Cuenta GitHub: Kaynt-manage
Correo Github: y.ortiz.2020@alumnos.urjc.es

Daniel Bermejo Valverde
Correo Académico: d.bermejo.2020@alumnos.urjc.es
Cuenta GitHub: DanielBermejoValverde
Correo GitHub: daniel4bermejo@gmail.com

Mauricio Fernández Rojas
Correo Académico: m.fernandezr.2020@alumnos.urjc.es
Cuenta GitHub: MauroFdz
Correo GitHub:Mauricio.fdez.27@gmail.com

### Documento de diseño

19/10/2022

### Índice
1.	Introducción 
1.1	Concepto del juego 
1.2	Características principales
1.3	Género
1.4	Propósito y público objetivo
1.5	Jugabilidad
1.6	Estilo visual
1.7	Alcance
2.	Mecánicas de juego
2.1	Jugabilidad
2.2	Flujo de juego
2.3	Personajes
2.4	 Movimientos y físicas
3.	Interfaz
4.	Arte
4.1	Arte 2D
4.2	Audio

### 1.	Introducción.

Este es el documento de diseño de “Tankun Mayhem”. Este escrito tiene como objetivo principal plasmar los elementos que debe incluir “Tankun Mayhem” y servir de carta de presentación.

## 1.1	Concepto del juego

“Tankun Mayhem” es un videojuego en el que controlamos a un pequeño tanque dirigido por un héroe o heroína que ha de enfrentarse en combate contra otras fuerzas similares a él o ella, para asegurar la supremacía total. Para esto deberá emplear sus características y habilidades especiales, a su vez que reaccionar a las del enemigo y cambios en el mapa.

## 1.2	Características principales

El juego se basa en los siguientes pilares:

Mecánicas sencillas: No será difícil de comprender las mecánicas básicas del juego ni su narrativa principal. Se busca que sea intuitivo y sencillo, a su vez dar la mayor ayuda posible al jugador en términos de calidad de vida y comprensión del gameplay.

Dinamismo: Se busca un sistema de juego donde se estén tomando decisiones de manera constante, que mantenga activo al jugador al cien por cien de su capacidad en lo que dure la partida. Dado que la “vida” será reducida, cada segundo será importante.

Partidas rápidas: Dado el dinamismo y la intensidad del juego, y por lo tanto la necesidad de mantener una atención constante, las partidas serán breves. De esta manera no se agotará al jugador mientras que se le suministra entretenimiento en pequeños pero intensos periodos.

Cooperativo y Competitivo: El juego brillará en su capacidad de ser jugado por varios jugadores al mismo tiempo, de manera cooperativa y competitiva. Al el enfoque estar centrado en la interacción entre jugadores hace que el factor humano sea elevado, aumentando grandemente la reusabilidad

## 1.3	Géneros:

Acción en vista “cenital”: Se controlará directamente un único personaje o tanque de manera activa, con una vista cenital del nivel completo, permitiendo ver todo lo que ocurre en este.

Arcade: El sistema de juego imita a aquellos de la época de los 90 y comienzo de los 2000, compartiendo propiedades similares a los juegos de máquinas recreativas y algunos de la PlayStation. Se busca el dinamismo, partidas cortas y entretenidas, con un sistema de puntuación y mecánicas sencillas.

## 1.4	Propósito y público objetivo:

El propósito principal de “Tankun Mayhem” es brindar una alternativa casual y divertida free to play para pasar un rato divertido con amigos. Se busca que sea fácil y rápido de jugar, sin muchos requerimientos, para poder disfrutar de este en cualquier ocasión o rato libre.
En cuanto a público objetivo se pretender alcanzar un grupo amplio y diverso, sin importar la edad. Dada la brevedad de partidas permite que personas con una agenda complicada también puedan disfrutar de este.

Además, dado su estilo artístico, se buscará captar la atención de aquellos que disfruten del género anime o contenidos similares.

## 1.5	Jugabilidad

Cada nivel de ““Tankun Mayhem”” es un campo de batalla, con temáticas distintas, pero con elementos similares aunque desplegados de maneras diferentes. De esta manera se busca aumentar el dinamismo entre jugadores humanos al cambiar las piezas en el tablero, sin necesidad de aumentar la complejidad.

Movilidad: El movimiento general será realizado a partir de los controles w, a, s y d. Que permitirán un movimiento en el plano. Se podrá mover en los ejes x e y al mismo tiempo. Los héroes podrán tener habilidades que permitan alterar o proporcionar nuevas formas de desplazarse.

Ataque: El método principal de ataque será disparar proyectiles. Estos rebotarán hasta dos veces o hasta que entren en contacto con un jugador enemigo o tile destructible. Al entrar en contacto con un jugador enemigo estos le restarán una vida, y si al jugador no le quedan vidas, será destruido.

Diferentes Elementos: Las arenas de batallas estarán constituidas de tiles. Algunas de estas tiles tendrán propiedades específicas. Por ejemplo existirán bloques indestructibles, que servirán para estructurar el escenario además de permitir rebotes complejos de los proyectiles. También existirán tiles destructibles que añadirán un elemento de estrategia. Además existirán tiles con diferentes elementos como ocultar el tanque o reducir la velocidad de movimiento.

Putos fuertes y débiles: Existirán diferentes héroes que tendrán estadísticas diferentes y habilidades únicas que cambiarán como es jugado. Permitiendo diferentes estrategias y estilos de juego, especialmente cuando se juega en equipos.

Habilidades: Cada héroe tendrá una habilidad única. Desde aumentar sus estadísticas base, lanzar un área de efecto, ralentizar al resto de jugadores enemigos hasta aumentar su potencia de fuego.

## 1.6	Estilo visual

“Tankun Mayhem” tendrá un estilo sencillo, donde las formas y elementos de la escena sean fáciles de entender rápidamente. Presentará un estilo caricaturesco, muy inspirado en el estilo anime, sumando elementos, como efectos especiales, de los cómics.

## 1.7	Alcance

El objetivo principal es desarrollar un sistema de juego que funcione bien en un entorno multijugador. Además es posible expandir el número de personajes, escenarios power ups etc, según vayan surgiendo nuevas necesidades o posibilidades.

### 2.      Mecánicas de juego

## 2.1      Jugabilidad y Flujo de juego

El concepto principal de la jugabilidad viene centrado en conseguir la mayor cantidad de puntos posibles cada ronda de partida. Esto a su vez, conlleva buscar que el oponente consiga la menor cantidad de puntos posibles, a la vez que ganar puntos derrotándolos. 

Esto conllevará que el juego consista en una arena de batalla, donde los jugadores tendrán que alternar entre jugar a la defensiva, jugar a ganar puntos, jugar a denegar objetivos o cazar a enemigos para aumentar la puntuación.

Se jugarán 3 batallas por partida de 1 minuto cada una, recompensando con una pequeña cantidad de puntos al ganador de cada una. El objetivo de cada batalla es acumular la mayor puntuación posible por cualquier método.

El jugador tendrá un “Héroe tanque” que tendrá sus propias estadísticas, aunque todos compartirán las mismas funciones básicas. Todos se moverán con w,a,s,d en cualquier dirección, y apuntarán con el ratón. Dispararán un proyectil que rebotará en paredes y tiles.

A su vez en el escenario existirán diferentes elementos que provocarán diferentes situaciones, forzando a los jugadores a reaccionar a las posibilidades de manera distinta, de forma que tomen decisiones dependiendo de su situación actual y personaje escogido. A su vez existirán elementos que cambien sus propiedades, permitiéndoles optar por diferentes estilos de juego.

## 2.2 Personajes

Los personajes del videojuego serán los héroes que el jugador podrá escoger. Cada uno con un estilo específico, y habilidades propias de su tanque. Se espera tener un mínimo de tres personajes distintos. Con estadísticas base distintas, que compensen y contrasten con sus habilidades.

Personaje 1: Bell: Su habilidad especial es potenciar todas sus estadísticas base temporalmente, además de conseguir un rebote de disparo adicional, un proyectil activo más y aumentada velocidad de proyectiles.

 Personaje 2: SharkLila: Su habilidad especial le permite ralentizar la velocidad de movimiento de los enemigos temporalmente, además de reducir el número de rebotes de proyectiles enemigos.
 
 Personaje 3: BigShot: Su habilidad especial le permite disparar tres proyectiles a la vez.
 

## 2.3 Movimiento y físicas

Como planteado previamente el jugador podrá desplazarse en un plano bidimensional teniendo en cuenta los tiles por los que esté formado el campo de batalla.
Los proyectiles disparados podrán tener diferentes propiedades, pero compartirán que rebotarán mínimo una vez al entrar en contacto con paredes. Power ups y habilidades de héroe pueden hacer cambiar esto. El número de proyectiles en el aire por héroe será limitado a un número, que también será posible de modificar.

## 2.4 Power ups y point pop ups

Diferentes elementos existirán que proporcionen ventajas en el campo de batalla. Existirán paquetes de escudo que añadirán un golpe más antes de ser destruido, paquetes de puntuación extra, o mejoras temporales de velocidad, rebotes, velocidad de proyectil o proyectiles en el aire.

## 3. Interfaz

*La estructura de interfaces probablemente verá cambios dependiendo de los requerimientos necesarios que surjan en el proceso de desarrollo.

## 3.1 Menú principal

En el menú principal se podrá acceder a las opciones de selección de perfil, menú de ajustes y selección de nivel.

## 3.2 Selección de perfil

Se espera que el usuario tenga su propio perfil, donde pueda realizar un seguimiento de su puntuación y otras estadísticas.

## 3.3 Selección de nivel

En esta sección se espera que el jugador pueda seleccionar el nivel y jugadores con los que se desarrollará la partida.

## 3.4 Selección de héroe

Sub-interfaz que permitirá seleccionar el tanque con el que se jugará

## 3.5 Menú de ajustes

Se espera que el jugador pueda cambiar el volumen de la música y efectos del videojuego. Además de salir al menú principal.

## 3.6 Niveles

Se espera crear tres niveles para comenzar. Cada uno con disposición distinta de los elementos que lo conforman. El jugador tomará control de su héroe y podrá interactuar con otros jugadores y elementos de la escena.

Existirá una interfaz que de información referente a los puntos de cada equipo, tiempos de recarga de habilidad, vida de cada jugador y tiempo restante.
3.7 Fin de nivel.

Pantalla de final de nivel donde se presentará la puntuación final, a su vez de las opciones de continuar a la siguiente batalla o volver al menú principal.

## 4. Arte

## 4.1 Arte 2D

El estilo artístico será enfocado en un estilo  caricaturesco mezclado con estilo anime. Los efectos y detalles serán diseñados para replicar los efectos típicos de comics  de occidente. Se busca la simplicidad, para facilitar comprender la información en la caótica acción. Los personajes y elementos del juego presentarán colores pasteles, que entrarán en contraste con delineado grueso que ayude a diferenciar los elementos de la escena.

## 4.2 Efectos de sonido

Los efectos de sonido serán poco realistas y caricaturescos, el ruido de los disparos y proyectiles será estilizado y breve. De esta manera no se saturará al usuario con sonido o ruido. Cada habilidad tendrá un sonido específico al igual que los powerups para que sirvan como identificador.

# Fase 2
## Pantallas implementadas:

![Pantalla Menu](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Esquema.PNG)

### Pantalla menú

![Pantalla Menu](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/MenuIni.PNG)

Pantalla donde se inicializa el videojuego. Es necesario dar un click para que se pueda interactuar con la  página y comience la música. Existen tres posibles direcciones que el usuario puede tomar, en los botones Jugar, Ayuda y Créditos. El jugador volverá a esta pantalla una vez haya completado una partida.
### Selección de Tanque

![Selector Personaje](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/SelectorPers.PNG)

En esta pestaña se selecciona uno de dos personajes para el jugador 1, el otro personaje será asignado al jugador 2. (En la siguiente entrega se cambiará, añadiendo más personajes y la posibilidad de seleccionar el mismo) Cuando el jugador selecciona un personaje se actualizan las estadísticas. El jugador puede decidir volver al menú inicial o continuar a la partida.

### Créditos

![Creditos](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/creditos.PNG)

Pantalla donde se enseñan los creadores del videojuego y se hace referencia a los elementos de terceros implementados. Permite regresar al menú principal.

### Ayuda

![Ayuda](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Ayuda.PNG)

Se enseñan los controles para jugadores uno y dos en local. Permite regresar al menú principal.
### Partida

![Partida](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Partida.PNG)

Se inicia la partida y los jugadores obtienen control de su tanque. Inicia un reloj que marca lo que queda para terminar la partida. El objetivo de cada jugador es golpear al contrincante para marcar puntos. Las balas rebotan en las paredes. (Se tiene planeado incorporar powerups, paredes destruibles y habilidades específicas para cada tanque en la siguiente entrega). Una vez se acaba el tiempo se decide al jugador por la mayor puntuación.

### Resolución

![Resolucion](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Victoria.PNG)

Pantalla final donde se enseña el ganador o el empate y los puntos para ambos jugadores. Se puede regresar al menú principal con el botón volver o automáticamente después de 15 segundos.

En cuanto a cambios de lo planteado en el gdd se ha decidido cambiar el movimiento del tanque de direccional a uno basado en en rotaciónes. Tambien se ha añadido una pantalla de fin de juego. Los power ups y paredes destruibles se implementarán en iteraciones futuras.

# Fase 3
## Navegación
### Pantallas:
![Pantalla Menu Esquema](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Esquema2.PNG)

### Pantalla menú

![Pantalla Menu Chat](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Pantalla_Principal_2.PNG)

### Selección de Tanque

![Selector Personaje](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/SelectorPers.PNG)


### Créditos

![Creditos](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/creditos.PNG)

### Ayuda

![Ayuda](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Ayuda.PNG)

### Partida

![Partida](https://raw.githubusercontent.com/MauroFdz/Tankun-Mayhem/master/Tankun-Mayhem/ReadMeImages/Partida.PNG)


## Diagrama de clases y API REST:

## Instrucciones precisas para ejecutar la aplicación:

Requisitos:

* Spring Tool Suite de Eclipse

1. Abrir Spring en Eclipse.
2. Seleccionamos File
3. Open Projectyt from Files System
4. Directory
5. Seleccionamos donde se encuentra.
6. Finnish
//Teniendo el archivo/carpeta TankunMayhem[boot] seleccionado
7. Play
8. Run Tankun-Mayhem

URL: Dependiendo del servidor donde se lanza tiene una dirección IP acompañada de un puerto que es el :8090.

A partir de aqui se procede a interactuar directamente con la aplicación.
