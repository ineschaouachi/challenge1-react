import React, {Component} from 'react'
import styled from "styled-components"
export default class Welcome extends Component {
    render (){
        return (
        <WelcomeWrapper>
          <h1>Welcome to our shop<br /></h1>
        </WelcomeWrapper>
        )
    }

}
const WelcomeWrapper = styled.div`
text-align: center;
display: flex;`;