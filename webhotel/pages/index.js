import styled from 'styled-components'
import db from '../db.json';
import Local from '../src/components/Local'
import ToolBar from '../src/components/ToolBar'

/*
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`*/

export default function Home() {
  return (
    <Local backgroundImage={db.bg}>
      <ToolBar>
        <ul>
          <li>Overview</li>
          <li>Font pages</li>
          <li>App pages</li>
          <li>Support</li>
        </ul>

        <ul>
          <li>Components</li>
          <li>Login</li>
        </ul>
      </ToolBar>
    </Local>
  )
}
