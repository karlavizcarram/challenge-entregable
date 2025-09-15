# README.md
# Sorteo Amigo Secreto 🎁

Este proyecto es una aplicación web sencilla para realizar sorteos de "amigo secreto". Permite ingresar nombres, agregarlos a una lista, sortear aleatoriamente un ganador y limpiar la lista.

**Este proyecto fue creado para el curso One Next Education de Alura Latam.**

## Estructura del proyecto

```
challenge-entregable/
├── app.js
├── index.html
├── style.css
└── assets/
    ├── agregar-usuario.png
    ├── amigo-secreto.png
    ├── borrar.png
    ├── deco-create.svg
    └── play_circle_outline.png
```

## Archivos principales

- [`index.html`](index.html): Estructura HTML de la aplicación.
- [`style.css`](style.css): Estilos y diseño responsivo.
- [`app.js`](app.js): Lógica para agregar amigos, sortear y limpiar la lista.
- [`assets/`](assets): Imágenes y recursos gráficos.

## Cómo clonar y usar este proyecto

1. Abre la terminal en tu computadora.
2. Clona el repositorio con el siguiente comando (reemplaza la URL por la de tu repositorio en GitHub):

   ```bash
   git clone https://github.com/karlavizcarram/challenge-entregable
   ```

3. Ingresa a la carpeta del proyecto:

   ```bash
   cd challenge-entregable
   ```

4. Abre el archivo `index.html` en tu navegador para comenzar a usar la aplicación.

5. Ingresa los nombres de los participantes y haz clic en "Añadir".
6. Cuando tengas al menos 3 nombres, haz clic en "Sortear amigo" para elegir un ganador al azar.
7. Usa "Limpiar lista" para reiniciar el sorteo.

## Funcionalidades

- Agregar nombres a la lista.
- Mostrar la lista actualizada.
- Sortear un nombre aleatorio (mínimo 3 participantes).
- Limpiar la lista y el resultado.
