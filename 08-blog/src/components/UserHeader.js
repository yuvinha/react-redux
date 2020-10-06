import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="ui sub teal header" style={{ marginTop: "5px" }}>
        {user.name}
      </div>
    );
  }
}

const mapStateToProps = (stateObj, ownProps) => {
  return { user: stateObj.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
// export default connect(mapStateToProps, { fetchUser })(UserHeader);
