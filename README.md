# React-Avanzado

## Styled-components

Los styled-components son una de las nuevas formas de usar CSS en JavaScript moderno. Está basado en los CSS modules, una forma de escribir CSS que se enfoca el que el alcance de los estilos funcione por componente y no se filtren a ningún otro elemento de la página.

Los styled components se basan en crear componentes de carácter estético para hacer código más semántico y evitar los problemas de especificidad que trae el CSS tradicional.

Los styled components le permiten escribir CSS simple en sus componentes sin preocuparte por las colisiones de nombres de clase y haciendo uso del poder de JavaScript para manejar estilos con lógica (basado en props).

Nota: en styled components escribes CSS exacto, así que prácticamente todo lo que puedes hacer en CSS lo puedes hacer en styled components y se escribe igual.

Es bastante sencillo, sólo tenemos que seguir 3 pasos:

1. importar styled components

```js
import styled from 'styled-components';
```

2. crear un componente con estilo basado en algún elemento html

```js
const DivConEstilo = styled.div`
  color: red;
  background: black;
`;
```

3. Utilizar el componente como si fuera cualquier componente de React

```js
const Contenedor = () => {
  return <DivConEstilo>Hola Styled Component</DivConEstilo>;
};
```

## SVGR: de SVG a componente de ReactJS

En esta clase usaremos [maketext.io](https://maketext.io/) para crear nuestro logo y descargarlo en [SVG](https://jakearchibald.github.io/svgomg/). Posteriormente a esto utilizaremos SVGOMG para optimizar nuestro logo y tener una mejor versión para usarla en nuestro proyecto.

Luego para convertir nuestro logo svg en un componente utilizaremos [SVGR](https://react-svgr.com/playground/).
