import React, { useEffect,  } from "react";

const Test = () => {
  const AddShipmentWeightDimension = () => {
    const shipmentIdRef = useRef(null);

    useEffect(() => {
      shipmentIdRef.current?.focus();
    }, []);

    return (
      <div>
        <input type="text" ref={shipmentIdRef} />
      </div>
    );
  };

  return <div>Test</div>;
};

export default Test;
