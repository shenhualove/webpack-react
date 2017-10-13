/**
 * Created by apple on 2017/10/11.
 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/list';

class Content extends React.Component{
    data(){
        /*this.props._handle({
         data:[{
         name:'哈哈',
         val:'11'
         },
         {
         name:'哈哈2',
         val:'11223'
         }]
         })*/
    }

    show(){
        return this.props.list.data.map((val,i)=>{
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
                23jj我大好河山疯狂地方

            </div>
        )
    }
}

/*function mapStateToProps(state){
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
 mapDispatchToProps,
 mapStateToProps
 )(Main);*/

export default Content;