import React from "react";
import styled from "@emotion/styled";

export interface ICard {
	title: string;
	subtitle: string;
	image: string;
}

const Container = styled("div")`
	display: flex;

	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Details = styled("div")`
	display: flex;
	flex-direction: column;
`;

const Icon = styled("img")`
	height: 56px;
	width: 56px;
	margin-right: 10px;
`;

const Next = styled("img")`
	height: 14px;
	width: 7px;
	margin-right: 10px;
`;

const Title = styled("div")`
	font-size: 18x;
	font-weight: 700;
	line-height: 20.7px;
	color: #240d57;
`;

const Subtitle = styled("div")`
	font-size: 18x;
	line-height: 20.7px;
	color: #4f4f4f;
`;

const Card: React.FC<ICard> = (props) => {
	return (
		<Container>
			<div style={{ display: "flex", alignItems: "center" }}>
				<Icon src={props.image} alt={props.image} />
				<Details>
					<Title>{props.title}</Title>
					<Subtitle>
						<strong>{props.subtitle}</strong>
					</Subtitle>
				</Details>
			</div>
			<Next src="/static/Chevron.png" alt="next" />
		</Container>
	);
};

export default Card;
