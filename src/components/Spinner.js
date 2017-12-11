import styled from 'styled-components';

const spinningAnimation = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Spinner = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #787878;
  position: absolute;
  border-radius: 100%;
  top: 10rem;
  left: 47%;
  visibility: ${(props: PropsType) => props.enabled ? 'visible' : 'hidden'};
  width: 8rem;
  height: 8rem;
  animation: spin 2s linear infinite;
  ${(props: PropsType) => (props.enabled ? spinningAnimation : '')}
`;

Spinner.defaultProps = {
  enabled: false,
};

export default Spinner;
