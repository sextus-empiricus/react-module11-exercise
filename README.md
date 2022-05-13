## React.js Schwarzmüller's course⚛️

### Module 11 - module project

My try before studying the module.

### 🧿Purposes:
    -trying to create analogical design,
    -trying to implement all functionalities
    -taking responsiveness topic seriously

### 🤷‍♀questions:
1. Is Header parting to components to specific?
2. I'm not sure if inc/dec controls of amount input are created in a proper way. I'm also still confused about an idea of passing setSomeState function through props to a child component.

### 🪔things I learned:
1. `transparencies + bg-image` Parent's opacity is always inherit by child. Moreover, it's not enough to change opacity on child, it won't work. In my case I used ::after with bg-image and changed opacity. That way gives my option to change opacity of parent without impact children.
3. `backdrop-filter: blur()` to get nice looking blur effect
4. `min-propeties` I used to overuse fixed properties like width. Many times it's better to use min/max-properties to preserve proper behaviour of element with different content.
5. First time of using useContext. In this case for storing basket's data.

### 💡for future projects:
1. more professional git approach,
2. when creating start testing on crucial points

### DEMO:
https://react-course-project-module11.herokuapp.com/
