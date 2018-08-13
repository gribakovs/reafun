Reafun is a simple reactive functional framework for development of PWA applications

- Pages are web components
- Shadow DOM is used to run web components
- Web Workers are used to dispach messages and provide updated model
- Web components are rendered only once
- Model update fires re-redering of only changed parts of web component 

Event sourcing model:
- UI events trigger model update commands
- Model change events trigger UI update commands 
