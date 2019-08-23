import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import Sidebar from "./components/Sidebar"
import styled from "styled-components"
import { motion, useSpring } from "framer-motion"

const Container = styled(motion.div)`
  background-color: #111518;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0 16px 32px -16px black;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  touch-action: none;
`
const Title = styled(motion.h3)`
  font-family: Caviar Dreams;
  color: #fff;
  user-select: none;
  margin: 64px auto;
`
const Text = styled(motion.p)`
  font-family: Caviar Dreams;
  color: #fff;
  user-select: none;
  margin: 64px auto;
`

const App = () => {
  return (
    <Container>
      <Title>Swipe right     -></Title>

      <Sidebar>
        <Text>Hello there...</Text>
      </Sidebar>
    </Container>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
