module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        "@svgr/babel-plugin-add-jsx-attribute",
        {
          "elements": ["svg"],
          "attributes": [
            {
              "name": "fill",
              "value": "{props.fill}",
              "spread": false,
              "literal": true,
              "position": "start"
            }
          ]
        }
      ],
    },
  },
};