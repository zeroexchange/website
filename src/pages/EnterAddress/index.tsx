import './styles.scss';

import * as EmailValidator from 'email-validator';

import React, { useEffect, useState } from 'react'
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../../layout/MainLayout';
import fire from '../../shared/services/fire';

export default function EnterAddress() {

  const [ authUser , setAuthUser ] = useState<any | null>(null);
  const [ emailInput , setEmailInput ] = useState<any | null>('');
  const [ ethInput , setEthInput ] = useState<any | null>('');
  const [ addressSent, setAddressSent ] = useState<any | null>(false);

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
        fire.firestore().collection("email-eth").doc(user.uid).get().then((doc) => {
          if (doc?.data() && doc?.data()?.email && doc?.data()?.eth) {
            setAddressSent(true);
          } else {
            //
          }
        });
      } else {
        //
      }
    });
  });

  const onSendEmail = ({ emailInput, ethInput, authUser }) => {

    if (EmailValidator.validate(emailInput) && authUser && ethInput.length > 0) {

      fire.firestore().collection('email-eth').doc(authUser.uid).set({
        email: emailInput,
        eth: ethInput
      }).then(() => {
        setEmailInput('');
        setEthInput('');
        ToastsStore.success(`Your ETH address has been recorded, tokens will be coming soon!`);
      }).catch(() => {
        setEmailInput('');
        setEthInput('');
        ToastsStore.success('Something went wrong, please try again.');
      });
    } else {
      ToastsStore.error('Something went wrong, please try again.');
    }
  }

  return (
    <Layout hasSnow={true}>
      <div className="container">
      <div className="airdrop-page">
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <h3>Enter the email you registered with, and your ETH address to receive your Zero Airdrop</h3>
              { !addressSent &&
                <div className="content-box mt-6">
                  <h6>Email:</h6>
                  <input className="input pr-0" type="email" placeholder="email@example.com" value={emailInput}
                  onChange={(event) => setEmailInput(event.target.value)} />
                  <h6 className="mt-5">ETH address:</h6>
                  <input className="input pr-0" type="text" placeholder="0x..." value={ethInput}
                  onChange={(event) => setEthInput(event.target.value)} />
                  <button className="button is-primary eth-button" onClick={() => onSendEmail({ emailInput, ethInput, authUser })}>Submit</button>
                </div>
              }

              { addressSent &&
                <p className="confirmation">
                  <FontAwesomeIcon icon="check" size="sm" />
                  <span> Your email and ETH address have been sent. Tokens coming shortly!</span>
                </p>
              }
            </div>
          </div>
        </div>
      </div>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_RIGHT} lightBackground />
    </Layout >
  )
}
