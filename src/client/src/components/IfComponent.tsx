import React from 'react';

interface IfComponentProps {
  component?: JSX.Element;
  conditional: boolean;
}

const IfComponent = (props: IfComponentProps) => {
  const component = props.component ? props.component : (<div>No Component Provided</div>);
  return props.conditional ? (<div>{component}</div>) : null;
};

export default IfComponent;
