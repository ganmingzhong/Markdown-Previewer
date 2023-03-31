class MarkdownPreviewer extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      count: 1,
      text: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event)
  {
    this.setState({
      text: marked.parse(event.target.value) });

  }

  render()
  {
    return /*#__PURE__*/(
      React.createElement("div", { class: "container-fluid d-flex justify-content-center align-items-center", onChange: this.handleChange, value: this.state.text }, /*#__PURE__*/
      React.createElement("div", { class: "row gx-5" }, /*#__PURE__*/
      React.createElement("div", { class: "col-xs-6 px-4" }, /*#__PURE__*/
      React.createElement("h3", { class: "title" }, "Editor ", /*#__PURE__*/React.createElement("i", { class: "far fa-edit icon" })), /*#__PURE__*/

      React.createElement("textarea", { id: "editor" }), /*#__PURE__*/


      React.createElement("script", { src: "https://cdn.jsdelivr.net/npm/marked/marked.min.js" })), /*#__PURE__*/


      React.createElement("div", { class: "col-xs-6 px-4" }, /*#__PURE__*/
      React.createElement("h3", { class: "title" }, "Previewer ", /*#__PURE__*/React.createElement("i", { class: "fas fa-eye icon" })), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.state.text } })))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById("app"));