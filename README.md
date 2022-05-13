## React.js Schwarzmüller's course⚛️

### Module 11 - module project

My try before studying the module.

### Purposes:
    -trying to create analogical design,
    -trying to implement all functionalities
    -taking responsiveness topic seriously

### 🤷‍♀questions:
1. czy podział na komponenty nie jest zbyt szczegółowy (zob. Header)?
2. I'm not sure if inc/dec controls of amount input are created in a proper way. I'm also still confused about an idea of passing setSomeState function through props to a child component.

### 🪔things I learned:
1. `transparencies + bg-image` Opacity jest dziedziczone i nie wystarczy zmienić go na dziecku. najprostszym rozwiązaniem zlania elementu z tłem jest użycie przezroczystości kolorów. W przypadku bg-image, którego oryginalną kolorystykę chcemy zlać z tłem w celu uzyskania ww. efektu musimy użyć element::after. (zob. Shop.module.css/.box)
2. `backdrop-filter: blur()` to get nice looking blur effect

### 🐱‍🏍various:
1. `basket button` why basket button is a div type? because it contains `<i>, <span> and <p>`
2. `min-propeties` I used to overuse fixed properties like width. Many times it's better to use min/max-properties to preserve proper behaviour of element with different content.
3. First time of using useContext. In this case for storing basket's data.

### orders:
1. `imports` react, interfaces/types, context, components, variables, styles

### for future projects:
1. more professional git approach,
2. when creating start testing on crucial points