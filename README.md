# Weather App

[Visitar proyecto en producción](https://weatherapp.brunodiaz.es)

Aplicación React de consulta del clima hecha para la prueba tecnica nº1.

Se conecta con la Api de [openweathermap.org](https://openweathermap.or) para dar la información meteorologica de 3 cuidades preestablecidas.

## Funcionalidades

* Al seleccionar una de las ciudades se mostrará el clima actual: con el icono correspondiente, la descripción y la temperatura; y a continuación la siguiente información complementaria: temperatura máxima y minima, sensación térmica, velocidad y dirección del viento y humedad.

* También se mostrará un listado de previsiones para los próximos 5 dias en intervalos de 3 horas que mostrará la fecha y hora de esa previsión (configuradas para mostrarse en un formato de lectura rapida), el icono, la descripción y la temperatura. Esta se muestra como un listado lateral que se puede deslizar tanto con la barra de desplazamiento como arrastrandola en modo tactil.

* Selección de idioma mediante el componente ubicado de forma fija en la esquina superior derecha. El idioma predeterminado será el inglés y toda la aplicación esta traducida.

* En la barra lateral se encuentra también el formulario de contacto oculto, que se mostrará cuando el usuario haga click en el botón "Contact us".
Este formulario tendrá por defecto el botón "Send" deshabilitado hasta rellenar todos los campos.
Una vez se envíe, primero se comprobara que el correo y el teléfono sean correctos (si no lo son se mostrará una alerta), si es así se mostrará una consulta al usuario preguntando si toda la información esta correcta, si se confirma se mostrará una alerta indicando que el propietario de la aplicación se pondra en contacto lo antes posible.

## Extras

* Aplicación responsiva: cuando el tamaño de pantalla sea demasiado estrecho pasará a versión movil donde la barra lateral quedará oculta tras un botón "hamburguesa" dinamico que cambiara a "X" cuando esta este abierta. Y tambien se cerrará automaticamente al pulsar una de las ciudades. Además el formulario de contacto volverá a ocultarse cuando se cierre la barra.
Y todos los componentes se adaptarán para ajustarse de manera estetica al tamaño de pantalla y/o ventana.

* Modo oscuro y claro sincronizado con la configuración del dispositivo que abra la aplicación. *(Con archivo CSS dedicado a las variables de color, para poder ajustar la apariencia de ambos modos en desarrollo de forma sencilla)*

* Todas las interacciones y actualizacion de información en pantalla estan animadas para una experiencia mas agradable.

* El titulo y favicon de la aplicación son dinamicos, de manera que muestran el clima actual de la ciudad seleccionada.

* Aplicación en producción y bajo un subdominio propio.

*Hecho con ♥ por [BrunoDiaz.es](https://www.brunodiaz.es)*




