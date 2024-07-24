import React, { useRef, useState } from "react";
import { LuCalendar } from "react-icons/lu";
import styled from "styled-components";
import Typography from "../../typography";
import { TextSize, TextWeight } from "../../typography/enums";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

interface IProps {
  placeholder?: string;
}
const DateInput = ({ placeholder = "Select dates" }: IProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const datePickerRef = useRef<any>(null);

  const handleButtonClick = () => {
    datePickerRef.current?.setOpen(true);
  };
  return (
    <Container>
      <Body onClick={handleButtonClick}>
        <LuCalendar size={20} />
        <Typography
          ml="0.8"
          size={TextSize.sm}
          color="#E4E4E4"
          lh="2"
          weight={TextWeight.semibold}
        >
          {placeholder}
        </Typography>
        <InputContainer>
          <DatePicker
            ref={datePickerRef}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </InputContainer>
      </Body>
    </Container>
  );
};

export default DateInput;

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Body = styled.div`
  position: relative;
  cursor: pointer;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 1px 2px 0px #1018280d;
  border-radius: 0.8rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const InputContainer = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
`;
