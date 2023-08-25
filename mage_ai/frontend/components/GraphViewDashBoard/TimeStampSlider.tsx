import React, { useState } from 'react';
import PropTypes from 'prop-types';

// mui components
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { StackWrapper, OuterWrapper, DateSliderButton } from './styles';
import ClickAwayListener from '@mui/base/ClickAwayListener';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-DE').replace(/\//g, '-');
}

function TimestampSlider({ timestamp, setTimestamp, disabled }) {
  const [showDateRange, setShowDateRange] = useState(false);

  const getButtonText = () => {
    if (timestamp[0].startDate && timestamp[0].endDate) {
      return `${formatDate(timestamp?.[0]?.startDate)} - ${formatDate(timestamp?.[0]?.endDate)}`;
    } else {
      return 'From - To ';
    }
  };

  const handleDateChange = () => {
    setShowDateRange(!showDateRange);
  };

  const handleClick = () => {
    setShowDateRange(false);
  };

  const onDatePickerChange = (item) => {
    setTimestamp([item.selection]);
  };

  return (
    <ClickAwayListener onClickAway={handleClick}>
      <OuterWrapper>
        <StackWrapper>
          <DateSliderButton
            disabled={disabled}
            onClick={handleDateChange}
            size="large"
            variant="outlined"
          >
            {getButtonText()}
          </DateSliderButton>
          {showDateRange && (
            <DateRange
              editableDateInputs={false}
              moveRangeOnFirstSelection={false}
              onChange={(item) => onDatePickerChange(item)}
              ranges={timestamp}
            />
          )}
        </StackWrapper>
      </OuterWrapper>
    </ClickAwayListener>
  );
}

TimestampSlider.propTypes = {
  timestamp: PropTypes.array,
  setTimestamp: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default TimestampSlider;
