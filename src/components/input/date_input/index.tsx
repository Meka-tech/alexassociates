import React, { useRef, useState } from "react";
import { LuCalendar } from "react-icons/lu";
import styled from "styled-components";
import Typography from "../../typography";
import { TextSize, TextWeight } from "../../typography/enums";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "./style.css";
import DateConvert from "../../../utils/dateConvert";

interface IProps {
  placeholder?: string;
  selectDate?: (date: Date | null) => void;
}
const DateInput = ({ placeholder = "Select date", selectDate }: IProps) => {
  const [date, setDate] = useState<Date | null>();
  const datePickerRef = useRef<any>(null);

  const handleButtonClick = () => {
    datePickerRef.current?.setOpen(true);
  };

  return (
    <Container>
      <InputContainer>
        <DatePicker
          ref={datePickerRef}
          selected={date}
          onChange={(date) => {
            setDate(date);
            if (selectDate) {
              selectDate(date);
            }
          }}
          startDate={new Date()}
        />
      </InputContainer>
      <Body onClick={handleButtonClick}>
        <LuCalendar size={20} />
        <Typography
          ml="0.8"
          size={TextSize.sm}
          color="#E4E4E4"
          lh="2"
          weight={TextWeight.semibold}
        >
          {date ? DateConvert(date) : placeholder}
        </Typography>
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
  z-index: 3;
  background-color: rgba(0, 15, 34, 1);
`;

const InputContainer = styled.div`
  position: absolute;
  cursor: pointer;
  /* width: 100%; */
  font-size: 1.4rem;
  top: 50%;
  left: 50%;
  opacity: 1;
  transform: translate(-50%, -50%);
`;
