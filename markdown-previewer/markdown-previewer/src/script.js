
class MarkdownPreviewer extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      count:1,
      text:"",
    };
    this.handleChange=this.handleChange.bind(this);
  }
  
  handleChange(event)
  {
    this.setState({
      text:marked.parse(event.target.value),
      });
  }
  
  render()
  {
    return(
      <div class='container-fluid d-flex justify-content-center align-items-center' onChange={this.handleChange} value={this.state.text}>
        <div class='row gx-5'>
          <div class="col-xs-6 px-4">
            <h3 class="title">Editor <i class="far fa-edit icon"></i></h3>
            
            <textarea id="editor" >

            </textarea>
            <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
          </div>
        
       <div class="col-xs-6 px-4">
         <h3 class="title">Previewer <i class="fas fa-eye icon"></i></h3>
         <div id="preview" dangerouslySetInnerHTML={{__html:this.state.text}}>
          </div >
        
        </div>
      </div> 
     </div>
    );
  }
}
 
ReactDOM.render(<MarkdownPreviewer/>,document.getElementById("app"));