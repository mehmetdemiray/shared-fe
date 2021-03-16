import React from "react"

import {Header} from './header';
import {SLeft} from './sleft';
import {SRight} from './sright';

export const SiteLayout = ({children}) => {
  return (
    <React.Fragment>
        <div id="layout">
          <Header />
          <div className="layout_content">
            <SLeft />
            <div className="content">{children}</div>
            <SRight />
          </div>
        </div>
    </React.Fragment>
  )
}