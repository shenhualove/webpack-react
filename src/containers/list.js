/**
 * Created by apple on 2017/9/27.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/list';
import { Link } from 'react-router-dom';

class Main extends React.Component{
    data(){
       this.props._handle({
           data:[{
               name:'哈哈',
               val:'11'
           },
               {
                   name:'哈哈2',
                   val:'11223'
               }]
       })
    }

    show(){
       return this.props.app.data.map((val,i)=>{
            return (
                <span key={i}>
                    {val.name+':'+val.val}
                </span>
            )
        })
    }

    render(){
        return(
            <div>
               <p onClick={()=>this.data()}>获取数据</p>
                {this.show()}
               <Link to="/content">2323</Link>
            </div>
      )
    }
}

function mapStateToProps(state){
    console.log(state)
    return state;
}

function mapDispatchToProps(dispatch){
    return {
        _handle:(options)=>{
            dispatch(actions.handle(options))
        }
    }
}

const List = connect(
         mapStateToProps,
         mapDispatchToProps
)(Main);

export default List;