import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
export default (props) => {
  const onChangeHandler = (event) => {
    props.updateUsername(event.target.value);
  };

  const style = {
    maxHeight: '30px'
  };

  return (
      <div>
        <InputGroup>
          <InputGroup.Prepend style={style}>
            <InputGroup.Text>Update username</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl style={style} placeholder={'Update Username'} onChange={onChangeHandler} value={props.username} />
        </InputGroup>
      </div>
  );
}