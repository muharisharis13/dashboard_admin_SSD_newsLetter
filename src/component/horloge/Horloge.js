import React, { useState, useEffect, useRef } from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import { FaCalendarTimes } from 'react-icons/fa'

const Container = styled.div`

  margin: 0px 0px;
  color: black;
  text-align: center;
  width : 100%;
  height : 127px;
  padding:20px 0px;


`;


const DateAndTimeContainer = styled.div`
  color: black;
  margin : 10px 0 ;
 
`;

const HorlogeTime = styled.h2`
  margin-top: 5px;
  font-size: 26px;
  text-align: left;
  font-weight : bold;
  @media (max-width: 768px){
    font-size:16px !important;
  }
`;

const HorlogeDate = styled.h5`
  font-size: 25px;
  text-align: left;
  @media (max-width: 768px){
    font-size:20px !important;
    font-weight:700;
  }
`;

const CENTIEME_SEC = 1000;
const DATE_FORMAT = 'EEEE, dd MMMM yyyy';
const TIME_FORMAT = 'hh : mm : ss';

function Horloge() {
  const [date, setDate] = useState(format(new Date(), DATE_FORMAT));
  const [time, setTime] = useState(format(new Date(), TIME_FORMAT));
  const horlogeTimer = useRef(null);

  useEffect(() => {
    function ticTac() {
      const now = new Date();

      setDate(format(now, DATE_FORMAT));
      setTime(format(now, TIME_FORMAT));
    }

    horlogeTimer.current = setInterval(() => ticTac(), CENTIEME_SEC);

    return () => {
      clearInterval(horlogeTimer.current);
    };
  }, []);

  return (
    <Container>
      <DateAndTimeContainer>
        <HorlogeDate>
          <span className="horlogeDate">{date}</span>
        </HorlogeDate>
        <HorlogeTime>
          <span className="horlogeTime">{time}</span>
        </HorlogeTime>
      </DateAndTimeContainer>
    </Container>
  )
}

export default Horloge;
