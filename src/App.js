import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

import GameBoardContainer from "./containers/GameBoardContainer";

const Appplicaton = styled.div`
    min-height: 100vh;
    display: block;
    background: ${props => props.theme.green}
    position: relative
`;

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Appplicaton className="App">
                    <GameBoardContainer />
                </Appplicaton>
            </ThemeProvider>
        );
    }
}

export default App;
