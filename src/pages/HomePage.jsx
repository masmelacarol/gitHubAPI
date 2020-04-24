import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  updateInputValue,
  dataUser,
  getAllRepos,
  validateInputs,
  errorUserGit,
} from "../redux/actions/usersRepoActions";

// 
import Loader from "../components/Loader";
import NotFound from "./NotFound";
import ContactForm from "../components/ContactForm";

const HomePage = (props) => {
  const handleClick = async (event) => {
    event.preventDefault();
    if (!Object.keys(props.errorsInput).length) {
      await props.errorUserGit();
      await props.dataUser(props.form.userGit);
      await props.getAllRepos(props.form.userGit);
      console.log(props);
      if (props.dataUser) {
        props.history.push(`/${props.form.userGit}`);
      }
    } else {
      return <p>helou</p>;
    }
  };
  useEffect(() => {
    
  }, [props])
  const handleChange = (event) => {
    props.validateInputs();
    props.updateInputValue(event);
  };

  if (props.loading) return <Loader></Loader>;
  if (props.error) return <NotFound></NotFound>;
  return (
    <React.Fragment>
      <ContactForm
        onSubmit={handleClick}
        onClick={handleClick}
        onChange={handleChange}
      ></ContactForm>
      {props.errorExists && <p class="warning">{props.errorExists}</p>}
    </React.Fragment>
  );
};

const mapStateToProps = ({ usersReducer }) => usersReducer;
const mapDispatchToProps = {
  updateInputValue,
  dataUser,
  getAllRepos,
  validateInputs,
  errorUserGit,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
