import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const StyledCard = ({
  bordered = 'false',
  borderRadius = 'small',
  label,
  ...props
}) => {
  if (bordered) {
    if (borderRadius == 'large') {
      return (
        <StyledCard label={label}>
          <StyledAntdCardLargeRadius {...props} />
        </StyledCard>
      );
    } else {
      return (
        <StyledCard label={label}>
          <StyledAntdCardSmallRadius {...props} />
        </StyledCard>
      );
    }
  } else {
    return (
      <StyledCard label={label}>
        <StyledBorderBottom>
          <StyledNoBorderAntdCard {...props}></StyledNoBorderAntdCard>
        </StyledBorderBottom>
      </StyledCard>
    );
  }
};


const StyledBorderBottom = styled.div`
  border-bottom: 1px solid gray;
`;

const StyledNoBorderAntdCard = styled(Card)`
  && {
    border: 0px;
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdCardLargeRadius = styled(Card)`
  && {
    border-radius: ${props => props.theme.largeRadius};
    :focus {
      box-shadow: none;
    }
  }
`;

const StyledAntdCardSmallRadius = styled(Card)`
  && {
    border-radius: ${props => props.theme.smallRadius};
    :focus {
      box-shadow: none;
    }
  }
`;

StyledCard.propTypes = {
  onChange: PropTypes.func.isRequired,
  bordered: PropTypes.bool,
  value: PropTypes.any.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
  borderRadius: PropTypes.oneOf(['large', 'small']),
};

export default StyledCard;
