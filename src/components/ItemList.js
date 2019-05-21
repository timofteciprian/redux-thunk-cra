import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ItemRow from "./ItemRow";

const ItemList = ({
  loadOperation: { isInProgress, error, isCompleted },
  items
}) => {
  if (error && !isCompleted) {
    return <p>Sorry! there was an error loading the items: {error}</p>;
  }

  if (isInProgress) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <ItemRow key={index} item={item} />
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  items: state.items.list,
  loadOperation: state.items.operations.load
});

export default connect(
  mapStateToProps,
  null
)(ItemList);
