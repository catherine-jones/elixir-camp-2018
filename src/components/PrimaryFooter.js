import React from "react"
import styled from "styled-components"

const CreditList = styled.ul`
  list-style: none;
`

const PrimaryFooter = ({ className }) => (
  <footer className={className}>
    <CreditList>
      <li>
        Content by Martin Stannard, Garret Heinlen, Jo Cranford &amp; James Sadler
      </li>

      <li>
        Code of conduct by Cath Jones, Suzie Price, Martin Stannard &amp; James Sadler
      </li>

      <li>
        Design by Luke Rollans
      </li>

      <li>
        <a
          href="https://thenounproject.com/search/?q=bus&i=110224"
          target="_blank">
          Bus icons by Hayden Kerrisk, NZ on The Noun Project
        </a>
      </li>

      <li>
        <a
          href="https://thenounproject.com/search/?q=marker&i=1629327"
          target="_blank">
          Marker icon by Dinosoft Labs, PK on The Noun Project
        </a>
      </li>

      <li>
        <a
          href="https://thenounproject.com/search/?q=ticket&i=1614521"
          target="_blank">
          Ticket icon by Three Six Five on The Noun Project
        </a>
      </li>

      <li>
        <a
          href="https://thenounproject.com/search/?q=calendar&i=1834413"
          target="_blank">
          Calendar icon by Tom Ingebretsen, US on The Noun Project
        </a>
      </li>

      <li>
        <a
          href="https://thenounproject.com/search/?q=plane&i=684674"
          target="_blank">
          Plane icon by David, US on The Noun Project
        </a>
      </li>

      <li>
        <a
          href="https://thenounproject.com/search/?q=checkmark&i=1379283"
          target="_blank">
          Checkmark icon by Logan on The Noun Project
        </a>
      </li>
    </CreditList>
  </footer>
)

export default styled(PrimaryFooter)`
  margin-top: 50px;
  padding: 20px 0;
  border-top: solid 2px #f2f2f2;
`