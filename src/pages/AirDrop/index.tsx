import './styles.scss';

import * as EmailValidator from 'email-validator';

import React, { useEffect, useState } from 'react'
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../../layout/MainLayout';
import fire from '../../shared/services/fire';

export default function AirDrop() {

  const [ authUser , setAuthUser ] = useState<any | null>(null);
  const [ emailInput , setEmailInput ] = useState<any | null>('');
  const [ emailSent, setEmailSent ] = useState<any | null>(false);

  useEffect(() => {
    if (!authUser) {
      fire.auth().signInAnonymously().then((res) => {
        //
      }).catch ((err) => {
        console.log("firebase error", err);
      });
    }
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
        fire.firestore().collection("emails").doc(user.uid).get().then((doc) => {
          if (doc?.data() && doc?.data()?.email) {
            setEmailSent(true);
          } else {
            //
          }
        });
      } else {
        //
      }
    });
  });

  const onSendEmail = ({ emailInput, authUser }) => {
    if (EmailValidator.validate(emailInput) && authUser) {
      fire.firestore().collection('emails').doc(authUser.uid).set({
        email: emailInput
      }).then(() => {
        setEmailInput('');
        ToastsStore.success(`Your email has been submitted. We'll be in touch to collect your address.`);
      }).catch(() => {
        setEmailInput('');
        ToastsStore.success('Something went wrong, please try again.');
      });
    } else {
      //
    }
  }

  const goToSite = (str) => {
    window.open(str, "_blank");
  }

  return (
    <Layout hasSnow={true}>
      <div className="container">
      <div className="airdrop-page">
          <h1>Join the movement. <span>Get <b>free tokens.</b></span></h1>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h5>As a gift to the world this holiday season, a world-wide airdrop of Zero coins starts December 25th, 2020 to those who register and participate by:</h5>

              <p className="closed-msg">The Zero Airdrop signup is now closed. Thanks for participating, we will be in touch with our followers to distribute tokens shortly!</p>
              {/* !emailSent &&
                <div className="content-box mt-6">
                  <h6>Dropping us your email:</h6>
                  <input className="input" type="email" placeholder="email@example.com" value={emailInput}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.shiftKey === false && emailInput) {
                      onSendEmail({ emailInput, authUser })
                    }
                  }}
                  onChange={(event) => setEmailInput(event.target.value)} />
                  <button className="button is-primary" onClick={() => onSendEmail({ emailInput, authUser })}>Send</button>
                </div>
              }

              { emailSent &&
                <p className="confirmation">
                  <FontAwesomeIcon icon="check" size="sm" />
                  <span> Your email has been sent, we will reach out to collect your address when the airdrop is ready!</span>
                </p>
              */}
              {/*
              <div className="content-box mt-6">
                <h6>Following / joining us on these platforms:</h6>
                <ul>
                  <li className="" onClick={() => goToSite('https://twitter.com/officialzerodex')}>
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </li>
                  <li className="" onClick={() => goToSite('https://t.me/ZeroExchangeCommunity')}>
                    <FontAwesomeIcon icon={['fab', 'telegram']} />
                  </li>
                </ul>
              </div>
            */}
            </div>
          </div>
        </div>
      </div>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} lightBackground />
    </Layout >
  )
}
