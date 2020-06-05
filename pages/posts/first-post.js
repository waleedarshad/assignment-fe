import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Router from "next/router";
import hydra from '../../services/hydra'
import { useRouter } from 'next/router'

export default class FirstPost extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    fetch("/api/login").then((response) => {


      response.json().then((data) => {
        // console.log(data);
        // Router.push('/')

        //***************User athenticated successfully let see ********************
        const params = new URLSearchParams(window.location.search)
        let challenge = params.get('login_challenge')
        console.log("-==--challenge=",challenge);
        hydra.getLoginRequest(challenge)
          // This will be called if the HTTP request was successful
          .then(function (response) {
            // If hydra was already able to authenticate the user, skip will be true and we do not need to re-authenticate
            // the user.
            if (response.skip) {
              // You can apply logic here, for example update the number of times the user logged in.
              // ...

              // Now it's time to grant the login request. You could also deny the request if something went terribly wrong
              // (e.g. your arch-enemy logging in...)
              return hydra.acceptLoginRequest(challenge, {
                  // All we need to do is to confirm that we indeed want to log in the user.
                  subject: response.subject,
                })
                .then(function (response) {
                  // All we need to do now is to redirect the user back to hydra!
                  res.redirect(response.redirect_to);
                });
            }

            // If authentication can't be skipped we MUST show the login UI.
            res.render("login", {
              csrfToken: req.csrfToken(),
              challenge: challenge,
            });
          })
          // This will handle any error that happens when making HTTP calls to hydra
          .catch(function (error) {
            console.log("0-00-0-0§",error);
            // next(error);
          });
      });
    });
  };

  render() {
    
    return (
      <Layout>
        <Head>
          <title>Signup</title>
        </Head>
        <div class="container">
          <div class="row">
            <h1>Signup here</h1>
          </div>

          <div class="row">
            <form onSubmit={this.handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }
}
