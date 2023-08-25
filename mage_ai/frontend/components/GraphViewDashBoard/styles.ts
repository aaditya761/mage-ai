import styled from 'styled-components';
import {
    Paper,
    Button,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    OutlinedInput,
    FormControl,
    ListItemText,
    Checkbox,
    Stack,
    FormControlLabel,
    Link,
} from '@mui/material';
import COLORS from './colors';

export const SCLineContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChartDiv = styled.div`
  height:460px;
  display:flex;
  justify-content:center;
  align-items:center; 
  width:100%;
`;

export const CenterAlign = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CaptureButton = styled(Button)`
  position: absolute;
  right: 0;
`;

export const SliderContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SliderDiv = styled.div`
  width: 90%;
  margin-right: 20px;
`;



export const CaptureDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 24;
`;

export const ModalHeading = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 8px;
  border-bottom: 1px solid gray;
  
`;


export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 12px;
  min-height: 100vh;
`;

export const ChartContainer = styled(Paper)`
  height: 100%;
  margin-bottom: 4rem;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const FormGroupRow = styled(FormGroup)`
  display: flex;
  flex-direction: row !important;
  padding: 2rem 0 0 2rem;
`;

export const MenuName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  color: ${COLORS.cyan};
`;

export const StyledInputLabel = styled(InputLabel)`
  color: #1976d2;
  background-color: #fff;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: #1976d2;
`;

export const StyledSelect = styled(Select)`
  color: #1976d2;
  border: 1px solid rgba(25, 118, 210, 0.5);
`;

export const StyledOutlinedInput = styled(OutlinedInput)`
  color: #1976d2;
`;


export const StyledFormControl = styled(FormControl)`
  color: #1976d2;
`;

export const StyledListItemText = styled(ListItemText)`
  color: #1976d2;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: #1976d2;
`;

export const StackWrapper = styled(Stack)`
  position: absolute;
  z-index: 2;
`;

export const OuterWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  width: 300px;
`;

export const DateSliderButton = styled(Button)`
  height: 40px;
  width: 300px;
`;

export const StyledToggle = styled(FormControlLabel)`
  margin: 0;
`;

export const StyledCTA = styled(Link)`
  margin-left: 8px;
  cursor: pointer;
`;

