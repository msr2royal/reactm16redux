import React from "react";
import { connect } from "react-redux";
import { IncAction } from "./actions";
import { DecAction } from "./actions";

function App({ local_variable, IncAction, DecAction }) {
  return (
    <div>
      <center>
        <h1>{local_variable}</h1><br/>
        <button onClick={()=>IncAction(5)} className="btn btn-primary">Increment</button>&nbsp;
        <button onClick={DecAction} className="btn btn-success">Decrement</button>
      </center>
    </div>
  );
}

const mapStateToProps=(state)=>({
  local_variable :state
})

export default connect(mapStateToProps,{IncAction, DecAction})(App);
