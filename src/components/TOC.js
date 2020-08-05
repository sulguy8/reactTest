import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){  // 렌더이전에 실행되는 함수
      console.log('===>TOC ShouldComponent'
      , newProps.data     // 바뀐후 데이터. 바뀐값을 알 수 있구나
      , this.props.data)  // 바뀐이전 데이터. 바뀌기 이전 값을 알 수 있구나
                          // 이렇기 데이터를 비교해야 되기 때문에 원본을 바꾸지않는 concat을 쓰는거임.
      if(this.props.data === newProps.data){
        return false; // 만약 false면 render()를 호출시키지 않음.
      }
      return true;
    }
    render() {
        console.log('===>TOC render')
        var lists = [];
        var data = this.props.data
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={ data[i].id }>
              <a 
                href={ "/content/" + data[i].id }
                data-id={ data[i].id } 
                onClick={function(e){
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
              >{ data[i].title }</a>
            </li>);
            i++;
        }
        return(
        <nav>
          <ul>
            { lists }
          </ul>
        </nav>      
      )
    }
  }

  export default TOC;