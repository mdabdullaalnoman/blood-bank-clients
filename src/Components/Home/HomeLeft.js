import React from 'react';
import { useState } from 'react';
import './HomeLeft.css';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import BrokenImageTwoToneIcon from '@material-ui/icons/BrokenImageTwoTone';
import SettingsApplicationsTwoToneIcon from '@material-ui/icons/SettingsApplicationsTwoTone';

const HomeLeft = () => {
      const [taggle, setTaggle] = useState(1);

      const taggleTabs = (index) => {
            setTaggle(index)
      }

      return (
            <div>
                  <div className="logo text-center">
                        <img src="https://i.imgur.com/HMm1jrj.png" alt="logo" className="w-50" />
                  </div>
                  <div class="sidebar">
                        <a class={taggle === 1 && 'active'} href="/home" onClick={() => taggleTabs(1)} ><HomeTwoToneIcon />Home</a>
                        <a class={taggle === 2 && 'active'} href="/profile" onClick={() => taggleTabs(2)}><AccountCircleTwoToneIcon />Profile</a>
                        <a class={taggle === 3 && 'active'} href="notification" onClick={() => taggleTabs(3)}><NotificationsNoneTwoToneIcon />Notification</a>
                        <a class={taggle === 4 && 'active'} href="donars" onClick={() => taggleTabs(4)}><BrokenImageTwoToneIcon />Donars</a>
                        <a class={taggle === 5 && 'active'} href="customize" onClick={() => taggleTabs(5)}><SettingsApplicationsTwoToneIcon />Customize</a>
                  </div>
                  <div className="home-left-img mt-2 mt-md-5">
                        <img src="https://i.imgur.com/3iAyVGr.jpg" alt="left image" />
                  </div>
            </div>
      );
};

export default HomeLeft;