import React from "react";
import { connect } from "react-redux";
import { deleteItemThunk } from "./../store/actions/items";

const ItemRow = ({ item: { id, label }, deleteItem, addItem }) => (
  <>
    <li key={id}>{label}</li>
    <button onClick={() => deleteItem(id)}>x</button>
  </>
);



const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItemThunk(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ItemRow);
