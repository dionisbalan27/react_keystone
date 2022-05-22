import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMServer from 'react-dom/server';
// import { Provider } from 'react-redux';
// import store from './store';
import {DocumentRenderer} from '@keystone-6/document-renderer';

const abc = ReactDOMServer.renderToStaticMarkup(
  <DocumentRenderer document={[
    {
      "type": "heading",
      "level": 1,
      "children": [
        {
          "text": "Heading 1"
        }
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "children": [
        {
          "text": "Heading 2"
        }
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "children": [
        {
          "text": "Heading 3"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Normal Text"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "bold": true,
          "text": "Bold Text"
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "bold": true,
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Italic Text",
          "italic": true
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "Underline Text",
          "underline": true,
          "strikethrough": true
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "",
          "underline": true,
          "strikethrough": true
        }
      ]
    },
    {
      "type": "ordered-list",
      "children": [
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "yang pertama"
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "yang kedua"
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "yang ketiga"
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "yang keempat"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "unordered-list",
      "children": [
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "first"
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "second"
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "third"
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "children": [
            {
              "type": "list-item-content",
              "children": [
                {
                  "text": "fourth"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "blockquote",
      "children": [
        {
          "type": "paragraph",
          "children": [
            {
              "text": "This is a Quote"
            }
          ]
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": "",
          "italic": true
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": ""
        }
      ]
    },
    {
      "type": "paragraph",
      "children": [
        {
          "text": ""
        }
      ]
    }
  ]}/>
)

console.log(abc)


// ReactDOM.render(
//   <Provider store={store}>
//   <App />
//   </Provider>,
//   document.getElementById('root')
//   );

  // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
