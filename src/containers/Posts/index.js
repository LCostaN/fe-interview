import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useStyles } from "./styles";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  CircularProgress,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import Image from "material-ui-image";
import renderHTML from "react-render-html";
import { StyledTableCell } from "../../components/StyledTableCell";
import { StyledTableRow } from "../../components/StyledTableRow";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import Moment from "moment";

import {
  getPostsRequest,
  getPropertiesRequest,
  getUsersRequest,
} from "../redux/actions";

function Posts(props) {
  const classes = useStyles();

  useEffect(() => {
    refresh();
    // eslint-disable-next-line
  }, []);

  const refresh = () => {
    props.requestPosts();
    props.requestUsers();
    props.requestProperties();
  };

  const user = (id) => {
    const { users } = props;
    const user = users.find((e) => e.id === id);
    return (
      <div className="flex-column">
        {user?.name ?? "Unknown"}
        {user && <Image src={user?.profile_picture ?? ""} />}
      </div>
    );
  };

  const property = (id) => {
    const { properties } = props;
    return properties.find((e) => (e.id = id));
  };

  const social = (name) => {
    switch (name) {
      case "twitter":
        return <TwitterIcon fontSize="large" />;
      case "facebook":
        return <FacebookIcon fontSize="large" />;
      case "linkedin":
        return <LinkedInIcon fontSize="large" />;
      case "instagram":
      case "instagram_graph":
        return <InstagramIcon fontSize="large" />;
      default:
        return <ContactSupportIcon fontSize="large" />;
    }
  };

  const strokeBold = (text) => {
    const regexr = /@\w+/;
    return text.replace(regexr, (str) => "<b>" + str.substr(1) + "</b>");
  };

  return (
    <div className="flex-column align-items-center h-100">
      <h1>Latest Posts</h1>
      {props.isWaiting ? (
        <div className="h-100 w-100 justify-content-center align-items-center">
          <CircularProgress />
        </div>
      ) : props.errorMsg ? (
        <Alert className="w-100 justify-content-center mt-4" severity="error">
          <AlertTitle>Something went wrong!</AlertTitle>
          <p>
            Click&nbsp;<strong onClick={() => refresh()}> here </strong>&nbsp;to
            try again.
          </p>
        </Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Property</StyledTableCell>
                <StyledTableCell>User</StyledTableCell>
                <StyledTableCell>Network</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>Content</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(props.posts ?? []).map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {property(row.property_id)?.name ?? "nuKnown"}
                  </StyledTableCell>
                  <StyledTableCell>{user(row.user_id)}</StyledTableCell>
                  <StyledTableCell>
                    {social(row.social_network)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {Moment(row.post_date ?? "").format("dddd ll")}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Image
                      src={row.post_media ?? ""}
                      style={{ minWidth: 60 }}
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    {renderHTML(strokeBold(row?.post_content ?? ""))}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.rootReducer.posts,
  users: state.rootReducer.users,
  properties: state.rootReducer.properties,
  isWaiting:
    state.rootReducer.isWaiting.properties ||
    state.rootReducer.isWaiting.posts ||
    state.rootReducer.isWaiting.users,
  errorMsg: state.rootReducer.errorMsg,
});

const mapDispatchToProps = (dispatch) => ({
  requestPosts: () => dispatch(getPostsRequest()),
  requestUsers: () => dispatch(getUsersRequest()),
  requestProperties: () => dispatch(getPropertiesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
