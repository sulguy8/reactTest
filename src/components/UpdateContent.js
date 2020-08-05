import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props){ // constructor를 추가한이유?
                      // props는 readonly이기 때문에 update와 같이 props를 가변적인 상황을 만드려면 constructor가 필요하다.
                      // 아래 input의 value처럼 사용하면 됨.
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value}) // e.target.name! 꼭써보기. 따로 스트링으로 안가져와도(title, desc구분) 알아서 박힘
  }
  render() {
    console.log(this.props.data)
    return (
      <article>
        <h2>Update</h2>
        <form action="/create_process" method="post"
          onSubmit={function(e){
            e.preventDefault();
            console.log(e.target);
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc   
            );
            alert("Hello!")
          }.bind(this)}
        > 
          <input 
            type="hidden"
            name="id"
            value={this.state.id}>
          </input>
          <p>
            <input 
              type="text" 
              name="title" 
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
              >
            </input>
          </p>
          <p>
            <textarea 
              onChange={this.inputFormHandler}
              name="desc" 
              placeholder="description" 
              value={this.state.desc}>  
            </textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    )
  }
}

export default UpdateContent;