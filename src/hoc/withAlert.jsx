import React from "react";

export const withAlert = (InnerComponent) => {
    class WrapperComponent extends React.Component {
        render() {
            return <InnerComponent {...this.props} propsTambahan="Halo saya props HOC" />;
        }
    }
    return WrapperComponent;
};
