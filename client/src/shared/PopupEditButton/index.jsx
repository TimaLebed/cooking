import React from "react";
import PropTypes from "prop-types";

import { PopupEditWrapper, PopupEdit, ButtonPopupEdit } from "./index.styled";

const PopupEditButton = ({ active, setActive }) => {
  const handelClickCard = (event) => {
    const currentCardId = event.target.offsetParent.offsetParent.offsetParent.id;
    console.log(currentCardId)
    setActive(false);
  }

  const handelClickPopup = (event) => {
    event.stopPropagation();
  };

  const handelClickPopupWrapper = () => {
    setActive(false);
  };

  return (
    <PopupEditWrapper active={active} onClick={handelClickPopupWrapper}>
      <PopupEdit active={active} onClick={handelClickPopup}>
        <ButtonPopupEdit onClick={handelClickCard}>Clone to My CookBooks</ButtonPopupEdit>
      </PopupEdit>
    </PopupEditWrapper>
  );
};

PopupEditButton.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

PopupEditButton.defaultProps = {
  active: false,
  setActive: () => {},
};

export default PopupEditButton;
