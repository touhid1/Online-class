let textColor = ['dark','dark','dark','dark','dark','dark','dark','dark','dark','dark','dark','dark','dark','dark','dark','dark',];

 const shuffle = (color) => {
     for (let i = 0; i < color.length; i++) {
         const j = Math.round(Math.random() * i);
         [color[i], color[j]] = [color[j], color[i]];
     }
 }
 shuffle(textColor);

 export default textColor;