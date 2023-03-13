/* eslint-disable react/no-unknown-property */
import React from 'react';
import Logo from '../assets/Logo.png';

export default function Login() {

  return (
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">
            <div class="card">
              <div class='image is-64x64'>
              </div>

              <div class="card-image">
                <figure class="image">
                  <img src={Logo} alt="Placeholder image"></img>
                </figure>
              </div>

              <div class="card-content">
                <div class="content">
                  <div class="field">
                    <a class="button is-large is-success is-fullwidth" href='https://open.spotify.com/?'>
                      Login
                    </a>
                  </div>


                  <div class="field">
                    <label class="label has-text-centered has-text-white">Forgot Password?</label>
                  </div>

                  <div class="field">
                    <label class="label has-text-centered has-text-white">Sign Up</label>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
