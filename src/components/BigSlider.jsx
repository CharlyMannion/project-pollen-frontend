
import React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const MIN = 0;
const MAX = 50;

class BigSlider extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          values={this.props.donation}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
                this.setState({ values });
                this.props.onChange(values);
            }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "70%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.props.donation,
                    colors: ["white", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "25px",
                width: "25px",
                borderRadius: "20px",
                backgroundColor: "#a5a4a4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outline: "none"
              }}
            >
            </div>
          )}
        />
      </div>
    );
  }
}

export default BigSlider
