import React from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../store/actions/items";

const Header = ({ fetchData }) => (
  <div>
    <button
      onClick={() => {
        fetchData("http://58af0d6b73918a1200362d99.mockapi.io/items");
      }}
    >
      load items
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(itemsFetchData(url))
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
