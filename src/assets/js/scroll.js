(function () {
  const MyScrollBar = document.createElement('div');
  MyScrollBar.innerHTML = `
         <style>
              ::-webkit-scrollbar {
                  background-color: #fff;
                  width: 4px;
                  overflow: visible;
              }
              ::-webkit-scrollbar-thumb {
                  background-color: #0c2135;
                  border-radius: 0;
              }
              ::-webkit-scrollbar-button {
                  background-color: #2474b5;
                  width:0px;
                  height:0px;
              }
              ::-webkit-scrollbar-corner {
                  background-color: black;
              }
          </style>
       `;
  document.body.appendChild(MyScrollBar);
})(document);
