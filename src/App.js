import React from 'react';

class Essayform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', title: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlepass = this.handlepass.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handlepass(event) {
    this.setState({title: event.target.value});
  }
  handleSubmit(event){
    alert('Name: '+ this.state.value  + '  password: '+ this.state.title)

    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({value: "", title: ""});
  }
  handleClose() {
    this.setState({open: false});
  }
  handleOpen(){
    this.setState({open: true});
  }
  render() {
    return <>
      <form className='header' onSubmit={this.handleSubmit}>
        <div className='inner_header'>
          <div className='labels'>
            <label for='inp' className='label' > Name: </label>
            <input value={this.state.value} onChange={this.handleChange} id='inp' className='inp1'/>
          </div>
          <div className='labels'>
            <label for='inp2'> Password: </label>
            <input type="text" value={this.state.title} onChange={this.handlepass} id='inp2' />
          </div>
        <input type="submit" value="Submit" />
        </div>
      </form>
      </>
  }
}

export default Essayform;