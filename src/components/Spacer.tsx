import React from "react";
import { css } from "@emotion/react";

export interface ISpacer {
	height: string;
}

const Spacer: React.FC<ISpacer> = (props) => {
	return (
		<div
			style={{
				minHeight: props.height,
				maxHeight: props.height,
				height: props.height,
			}}
		/>
	);
};

export default Spacer;
